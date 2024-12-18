import SynchronyImg from "@/assets/images/Synchrony.png";
import { Button } from "@/components/ui/button";
import { formatAmount } from "@/lib/utils";
import Script from "next/script";
import { useAcceptJs } from 'react-acceptjs';
import { useToast } from "@/components/ui/use-toast";
import SynchronyPayment from "@/components/SynchronyPayment";
import { useGetDeliveryRouteDetailsQuery } from "@/redux/apiSlices/deliveryApi";
import {
  useCreateGuestOrderMutation,
  useCreateOrderMutation,
} from "@/redux/apiSlices/orderApis";
import {
  useCreateAuthorizePaymentMutation,
  useCreatePaymentMutation,
} from "@/redux/apiSlices/paymentApi";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import ApplyCoupan from "./ApplyCoupan";
import AuthorizePayment from "../AuthorizePayment";

const authData = {
  apiLoginID: '3XQN8rjQ3hg', // Replace with your API Login ID
  clientKey: '5puWT7rRga62B2J2NJMdTZw35A472CaL5gQbWuec7HeuktfC3RAFY8mcMEAyHQy4', // Replace with your Public Client Key
};


const OrderSummary = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { toast } = useToast();
  const [synchronyFlag, setSynchronyFlag] =  useState(false)

  const { dispatchData, loading, error } = useAcceptJs({ authData });
  const [authorizeTokenValidate, setAuthorizeTokenValidate] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const { id: cartId, cartItems = [] } = useSelector((state) => state.userCart);
  const isCheckout = pathName === "/checkout";

  const cardData = useSelector((state) => state.authorizeDotNetCardDetails);
  //console.log('Card Data:', cardData);

  const [
    createOrder,
    { data: orderRes, isSuccess: isOrderSuccess, isLoading: isOrderLoadding },
  ] = useCreateOrderMutation();

  const [
    createGuestOrder,
    {
      data: guestOrderRes,
      isSuccess: isGuestOrderSuccess,
      isLoading: isGuestOrderLoading,
    },
  ] = useCreateGuestOrderMutation();

  const [createPayment, { data, isSuccess, isLoading: isPaymentLoading }] =
    useCreatePaymentMutation();

    const [generateAuthorizeToken, { data: authorizePaymentData, isSuccess: isAuthorizeSuccess, isError: isAuthorizeError, error: authorizeError }] =
    useCreateAuthorizePaymentMutation();
  
  useEffect(() => {
    if (isAuthorizeSuccess && authorizePaymentData) {
      if (authorizePaymentData?.success) {       
        toast({
          title: authorizePaymentData?.msg || "Payment processed successfully!",
        });
        const { orderId } = (isOrderSuccess ? orderRes?.data : guestOrderRes?.data) || {};
        if (orderId) {
         router.push("/success-order/"+orderId);
        }
      } else {
        toast({
          variant: "destructive",
          title: "Payment failed",
          description: authorizePaymentData?.msg || "An unknown error occurred.",
        });
      }
    }
  
    if (isAuthorizeError && authorizeError) {
      const errorMessage =
        authorizeError?.data?.msg || authorizeError?.message || "An error occurred during payment processing.";
      console.error("Authorize Payment Error:", authorizeError);
  
      toast({
        variant: "destructive",
        title: "Error",
        description: errorMessage,
      });
    }
  }, [isAuthorizeSuccess, isAuthorizeError, authorizePaymentData, authorizeError]);

  const zipCode =
    useSelector((state) => state?.userDetails?.zipCode) || "94545";
  const {
    data: routeDetails,
    isFetching,
    refetch,
  } = useGetDeliveryRouteDetailsQuery(
    {
      zipCode,
    },
    { skip: cartItems?.length === 0 }
  );

  useEffect(() => {
    if (cartItems?.length > 0) {
      refetch();
    }
  }, [cartItems, refetch]);
  const isLoading =
    isFetching || isGuestOrderLoading || isOrderLoadding || isPaymentLoading;

  const isButtonDisabled = ({ isCheckout, isLogin, paymentMethod, email }) => {
    if (!isCheckout && cartItems?.length === 0) return true;
    if (isCheckout && cartItems?.length > 0 && !paymentMethod) return true;
    if(paymentMethod === "authorize" && cardData?.cardNumber?.length <=15) return true;
    if(paymentMethod === "authorize" && cardData?.month?.length <=1) return true;
    if(paymentMethod === "authorize" && cardData?.year?.length <=3) return true;
    if(paymentMethod === "authorize" && cardData?.cardCode?.length <=2) return true;
    return false;
  };

  const { total } = cartItems?.length === 0 ? {} : routeDetails || {};

  const {
    pickUpProducts = [],
    deliverProducts = [],
    deliveryNote = "",
    email,
    address,
    paymentMethod,
  } = useSelector((state) => state.orderDetails || {});

  useEffect(() => {
    if (isSuccess && data?.success && data?.statusCode === 200) {
      const { redirectUrl } = data || {};
      if (redirectUrl) {
        router.push(redirectUrl);
      }
    }
  }, [isSuccess, data, router]);

  useEffect(() => {
    if (isOrderSuccess || isGuestOrderSuccess) {
      const { orderId } =
        (isOrderSuccess ? orderRes?.data : guestOrderRes?.data) || {};
      
      console.log("orderRes?.data ==",orderRes?.data )
      if (orderId) {
        if (paymentMethod === "paypal") {
          createPayment({ orderId });
        } else if (paymentMethod === "authorize") {          
          cardDataAuthorize(orderId)
        } else if (paymentMethod === "affirm") {    
          handleAffirmCheckout(orderId)
        }
      }
    }
  }, [isOrderSuccess, isGuestOrderSuccess]);

  const cardDataAuthorize = async(orderId)=>{
    try {
      const response = await dispatchData({
        cardData: {
          cardNumber: cardData.cardNumber,
          month: cardData.month,
          year: cardData.year,
          cardCode: cardData.cardCode,
        },
      });
    
      if (response?.messages?.resultCode === 'Ok') {
        const token = response?.opaqueData?.dataValue;
    
        const obj = {
          paymentToken: token,
          orderId: orderId,
        };
    
        generateAuthorizeToken(obj);
      } else {
        toast({
          variant: "destructive",
          title: response?.messages?.message?.[0]?.text || "An unexpected error occurred",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: error?.messages?.message?.[0]?.text  || "An unexpected error occurred. Please try again.",
      });
    }
  }

  const handleAffirmCheckout = ({orderId}) => {
    if (!window.affirm) {
      console.error("Affirm is not initialized yet.");
      return;
    }

    console.log(total,"==total?.grandTotal==",Math.round(total?.grandTotal))
    // Configure Affirm checkout
    window.affirm.checkout({
      metadata: { mode: "modal" },
      merchant: {
        public_api_key: process.env.NEXT_PUBLIC_AFFIRM_SCRIPT_API_KEY,
        user_cancel_url: "https://www.yahoo.com",
        user_confirmation_url: "https://www.google.com",
        user_confirmation_url_action: "GET",
      },
      // shipping,
      // billing,
      // items,
      discounts:formatAmount(total?.discount),
      order_id: orderId,
      // currency,
      tax_amount: formatAmount(total?.tax),
      // shipping_amount: shippingAmount,
      total:Math.round(total?.grandTotal),
    });

    // Open Affirm checkout
    window.affirm.checkout.open({
      onFail: (error) => {
        alert("Affirm Checkout Failed: " + error);
      },
      onSuccess: (result) => {
        alert(
          "Affirm checkout successful, checkout token is: " +
            result.checkout_token
        );
      },
    });
  };

  useEffect(() => {
    setAuthorizeTokenValidate(authorizeTokenValidate);
  }, [authorizeTokenValidate]);

  const placeOrder = () => {
    const { taxRateData, ...rest } = total || {};
    const payload = {
      cartId,
      productDetails: [...pickUpProducts, ...deliverProducts],
      deliveryNote,
      paymentMethod,
      OrderSummary: rest,
    };
    if (isLogin) {
      setAuthorizeTokenValidate(true);
      createOrder({
        ...payload,
      });
    } else {
      createGuestOrder({
        ...payload,
        email,
        address,
      });
    }
  };

  const onButtonClick = () => {
    if (isCheckout) {
      placeOrder();
    } else {
      router.push("/checkout");
    }
  };
  
  const onButtonSynchronyClick = ()=>{
    setSynchronyFlag(true)
  }

  return (
    <>
    {isLoading && <Loader />}
    <div className="lg:px-4 lg:w-full sticky top-[94px]">
      <Script
        src="https://cdn1-sandbox.affirm.com/js/v2/affirm.js"
        strategy="lazyOnload"
        onLoad={() => {
          window._affirm_config = {
            public_api_key: process.env.NEXT_PUBLIC_AFFIRM_SCRIPT_API_KEY,
            locale: "en_US",
            country_code: "USA",
          };

          if (window.affirm) {
            window.affirm.ui.refresh();
          }
        }}
      />

      <div className="lg:max-w-full flex-1 max-w-[383px] py-[26px] px-[24px] rounded-[13px] bg-white sticky top-[95px] mb-[18px] ">
        <h3 className=" text-blue3 text-[17px] leading-[25px] font-medium text-center pb-[10px] border-b border-gray18">
          Order Summary
        </h3>
        <div className="border-b border-gray18 pb-[5px] pt-[15px]">
          <div className="text-sm pb-[10px] flex justify-between items-center	">
            <p className=" font-medium">Subtotal</p>
            <p className=" font-semibold">{formatAmount(total?.subtotal)}</p>
          </div>
          <div className="text-sm pb-[10px] flex justify-between items-center	">
            {total?.savings !== 0 && (
              <>
                <p className=" font-medium">Savings</p>
                <p className=" font-semibold text-green1 ">
                  - {formatAmount(total?.savings)}
                </p>
              </>
            )}
          </div>
          {total?.totalDeliveryFee > 0 && (
            <div className="text-sm pb-[10px] flex justify-between items-center	">
              <p className=" font-medium">Delivery Charges</p>
              <p className=" font-semibold">
                {formatAmount(total?.totalDeliveryFee)}
              </p>
            </div>
          )}

          {total?.tax > 0 && (
            <div className="text-sm pb-[10px] flex justify-between items-center	">
              <p className=" font-medium">Tax</p>
              <p className=" font-semibold">{formatAmount(total?.tax)}</p>
            </div>
          )}

          {total?.discount > 0 && (
            <div className="text-sm pb-[10px] flex justify-between items-center	">
              <p className=" font-medium">Discount</p>
              <p className=" font-semibold">{formatAmount(total?.discount)}</p>
            </div>
          )}
        </div>

        {total?.grandTotal > 0 && (
          <div className="text-sm pb-6 pt-4 flex justify-between items-center	">
            <p className=" font-medium">Grand Total</p>
            <p className=" font-semibold">{formatAmount(total?.grandTotal)}</p>
          </div>
        )}
        <ApplyCoupan total={total} cartId={cartId} />

        {synchronyFlag && <SynchronyPayment pageType="checkout"/>}

        <Button
          className="text-[14px] font-semibold text-white bg-red3 h-[40px] rounded-[8px] w-full"
          onClick={onButtonClick}
          disabled={isButtonDisabled({
            isCheckout,
            isLogin,
            paymentMethod,
            email,
          })}
        >
          {isCheckout ? "Place Order" : " Proceed to Checkout"}
        </Button>
        <p className=" text-[14px] font-medium text-blue3 p-2 text-center">
          Or
        </p>
        <Button 
         onClick={onButtonSynchronyClick}
         className=" whitespace-normal text-[14px] font-semibold text-white bg-gray20 h-[76px] flex gap-[17px] items-center rounded-[8px] w-full"
        >
          <Image
            src={SynchronyImg}
            alt="SynchronyImg"
            className="max-w-[76px]"
          />
          Checkout with Synchrony
        </Button>
      </div>
    </div>
    </>
  );
};

export default OrderSummary;
