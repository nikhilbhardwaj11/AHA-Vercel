"use client";
import DeliveryIcon from "@/assets/images/delivery-icon.svg";
import PaymentIcon from "@/assets/images/payment-icon.svg";
import StoreIcon from "@/assets/images/store-icon.svg";
import useCartDetails from "@/hooks/useCartDetails";
import useStepper from "@/hooks/useStepper";
import { setOrderDetails } from "@/redux/slices/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import ApplianceDelivery from "./ApplianceDelivery";
import CurrentActiveStep from "./CurrentActiveStep";
import DeliveryAddress from "./DeliveryAddress";
import GuestDetails from "./GuestDetails";
import PaymentMethods from "./PaymentMethod";
import StepsPlaceholder from "./stepsPlaceholder";
import StorePickup from "./storePickup";
import { useEffect } from "react";

const OrderCheckout = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  const { getCartDetails, getAddressId } = useCartDetails();
  const cartList = getCartDetails();
  const onOrderDetailsChange = (data) => dispatch(setOrderDetails(data));
  const { nextStep, address, paymentMethod } = useSelector(
    (state) => state.orderDetails || {}
  );

  useEffect(() => {
    return () => {
      dispatch(setOrderDetails({}));
    };
  }, []);

  const deliverProducts = cartList.filter((product) => !product.isPickup);
  const pickUpProducts = cartList.filter((product) => product.isPickup);

  return (
    <div className="flex-1 text-blue3 lg:w-full lg:mb-4">
      <CurrentActiveStep title="Checkout" isActive="payment" />
      {isLogin ? (
        <DeliveryAddress
          getCartDetails={getCartDetails}
          getAddressId={getAddressId}
        />
      ) : (
        <GuestDetails onChange={onOrderDetailsChange} />
      )}

      {deliverProducts.length > 0 &&
        ((isLogin ? !getAddressId : !address) ? (
          <StepsPlaceholder image={DeliveryIcon} label="Appliance Delivery" />
        ) : (
          <ApplianceDelivery
            products={deliverProducts}
            onChange={(data) =>
              onOrderDetailsChange({
                ...data,
                nextStep: pickUpProducts.length > 0 ? "pickup" : "payment",
              })
            }
          />
        ))}

      {pickUpProducts.length > 0 &&
        ((
          deliverProducts.length === 0
            ? isLogin
              ? !getAddressId
              : !address
            : nextStep !== "pickup" && nextStep !== "payment"
        ) ? (
          <StepsPlaceholder image={StoreIcon} label="Store Pickup" />
        ) : (
          <StorePickup
            products={pickUpProducts}
            onChange={(data) =>
              onOrderDetailsChange({ ...data, nextStep: "payment" })
            }
          />
        ))}

      {nextStep !== "payment" ? (
        <StepsPlaceholder image={PaymentIcon} label=" Payment Method" />
      ) : (
        <PaymentMethods
          onChange={onOrderDetailsChange}
          paymentMethod={paymentMethod || ""}
        />
      )}
    </div>
  );
};

export default OrderCheckout;
