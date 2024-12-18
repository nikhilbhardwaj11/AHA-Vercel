import ProtectIcon from "@/assets/images/Protect.png";
import BuildIcon from "@/assets/images/build.svg";
import BuyIcon from "@/assets/images/buy-icon.svg";
import NoImage from "@/assets/images/no-image.webp";
import ProtectionIcon from "@/assets/images/protection-blank-icon.svg";
import TruckIcon from "@/assets/images/truck-icon.svg";
import NoResultFound from "@/components/NoResultFound";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCartDetails from "@/hooks/useCartDetails";
import useRemoveFromCart from "@/hooks/useRemoveFromCart";
import { useGetViewedProductsQuery } from "@/redux/apiSlices/ProductListsApi";
import { useUpdateCartMutation } from "@/redux/apiSlices/userCartApi";
import { formatCurrency } from "@/utils/formatCurrency";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";
import Link from "next/link";
import { useEffect } from "react";
import { StockBadge } from "../Badges/Badges";
import DynamicImage from "../DynamicImages/DynamicImage";
import { ConfirmationModal } from "../Modal/ConfirmationModal";
import EditAddOnServices from "../ProductDetail/EditAddOnServices/EditAddOnServices";
import EditWarranty from "../ProductDetail/EditWarranty/EditWarranty";
import ZipCodeHandler from "../ZipcodeHandler/ZipcodeHandler";
import { DefaultPriceUi } from "../pricesUi/PricesUi";
import { useToast } from "../ui/use-toast";
import CurrentActiveStep from "./CurrentActiveStep";
import useRenderProductRatings from "@/hooks/useRenderProductRating";

const Cart = ({ cartItems }) => {
  const { toast } = useToast();
  const { removeFromCart, isRemoveFromCartLoading, isRemoveFromCartSuccess } =
    useRemoveFromCart();
  const { getCountByProductId } = useCartDetails();
  const [updateCart, { isSuccess, data }] = useUpdateCartMutation();

  const handleValueChange = async (productId, quantity) => {
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity,
        },
      ],
    };
    await updateCart(updateCartPayload);
    try {
      if (isSuccess && data?.success) {
        toast({
          title: data?.message || "Cart updated successfully",
        });
      } else {
        toast({
          title: data?.message || "Failed to update cart",
          variant: "error",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred while updating the cart",
        variant: "error",
      });
    }
  };

  const handleConfirm = (removeToCartPayload) => {
    removeFromCart(removeToCartPayload);
  };

  const handleAddOnsClick = async ({
    updatedServices,
    productId,
    quantity,
  }) => {
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity,
          addOnServices: updatedServices,
        },
      ],
    };
    await updateCart(updateCartPayload);
  };

  const { data: recentlyViewedData } = useGetViewedProductsQuery();
  const { customerViewed = [], recentlyViewed = [] } = recentlyViewedData || {};
  useRenderProductRatings(recentlyViewed);

  const handleRecentlyViewed = async (product) => {
    const productId = product?.id;
    const productStatus = product?.status;
    const currentQuantityOfProduct = getCountByProductId({ productId });
    if (
      product &&
      (productStatus === "A" ||
        productStatus === "B" ||
        productStatus === "S") &&
      currentQuantityOfProduct >= 3
    ) {
      toast({
        variant: "destructive",
        title: "Max quantity reached for this product",
      });
      return;
    }
    const updateCartPayload = {
      products: [
        {
          productId: Number(productId),
          quantity: currentQuantityOfProduct + 1,
        },
      ],
    };
    await updateCart(updateCartPayload);
  };

  return (
    <div className="flex-1 lg:w-full">
      <CurrentActiveStep title="Your Shopping Cart" isActive="products" />
      {isSuccess}
      {/* <div className="flex gap-10 items-center my-[15px] pl-[60px]">
        {totalUniqueItems > 0 && (
          <>
            <h3 className="text-[15px] leading-[18px] text-blue3 font-bold">
              {totalUniqueItems} {totalUniqueItems === 1 ? "Item" : "Items"}
            </h3>
            <div className="flex gap-3 text-blue3">
              {cartItems &&
                cartItems.length > 0 &&
                cartItems?.map((item, index) => {
                  const { product, id, cartId, productId, quantity } = item;
                  return (
                    <div
                      key={index}
                      className=" py-4 px-6 rounded-10 bg-white text-[17px] leading-[20px] font-semibold inline-flex gap-6"
                    >
                      <DynamicImage
                        src={product?.thumbnail}
                        width={22}
                        height={44}
                        alt="Product Image"
                        className=" max-h-[42px] h-full w-auto"
                      />

                      <div className="">
                        <p className="text-sm inline-block whitespace-nowrap overflow-auto text-ellipsis">
                          {product?.brand?.brandName}
                        </p>
                        <br />
                        <p className="text-sm inline-block whitespace-nowrap overflow-auto text-ellipsis">
                          {product?.categoryName}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div> */}
      {cartItems && cartItems?.length === 0 && (
        <NoResultFound message="No Items in Cart" />
      )}
      {cartItems &&
        cartItems?.length > 0 &&
        cartItems?.map((item, index) => {
          const {
            product,
            productId,
            quantity,
            isPickup,
            warrantyPriceRanges,
            selectedWarrantyPriceId,
            selectedInstallationServiceId,
            selectedAdditionalServiceId,
            InstallationServices,
            additionalServices,
          } = item;

          const { price_details, isInstallationService, isWarranty } = product;

          const {
            cartPrice,
            crossedPrice,
            displayPrice,
            savingAmount,
            savingPercentage,
          } = price_details;

          const removeToCartPayload = {
            products: [
              {
                productId: Number(productId),
              },
            ],
          };
          const maxQuantity =
            product?.status === "A" ||
            product?.status === "B" ||
            product?.status === "S"
              ? 3
              : 5;
          const { warrantyType, warrantyPrice } = warrantyPriceRanges || {};
          const { categoryId, subCategoryId, seoPdpUrl } = product || {};

          return (
            <div key={index} className="lg:bg-white lg:mb-4">
              <div className="lg:rounded-none lg:px-4  mb-[18px] rounded-[13px] px-[50px] py-[38px] flex gap-[50px] bg-white mlg:gap-[25px] mlg:px-[25px] mlg:py-[20px] lg:gap-[8px] lg:m-0 lg:pb-2">
                <div>
                  <DynamicImage
                    src={product?.thumbnail || NoImage?.src}
                    width={110}
                    height={140}
                    alt="product-image"
                    className=" h-[143px]  w-auto rounded-lg lg:h-[56px] object-contain"
                  />
                </div>
                <div className="w-full flex flex-col justify-between ">
                  <div className="flex justify-between gap-2 lg:gap-[30px]">
                    <Link
                      href={seoPdpUrl}
                      className="text-[17px] leading-[20px] text-blue3 max-w-[314px] w-full font-semibold pt-[10px] lg:pt-0 lg:text-[15px]"
                    >
                      {product?.productName}
                    </Link>
                    <div className="flex mb-7 items-end flex-col lg:mb-2 ">
                      <div className="flex items-center lg:flex-wrap lg:justify-end sm:flex-col">
                        <h3 className=" text-[24px] font-semibold text-blue3  leading-[36px] lg:leading-[27px] lg:text-[17px]">
                          {formatCurrency(cartPrice) ||
                            formatCurrency(displayPrice)}
                        </h3>
                        <p className="ml-2 text-gray2 text-[15px] line-through leading-[22px] lg:text-[13px] lg:leading-[19px] ">
                          {crossedPrice}
                        </p>
                      </div>
                      <div className="sm:text-right">
                        <h5 className=" text-red2  text-[12px] leading-[15px]">
                          {savingAmount} {savingPercentage}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between gap-2 items-center flex-wrap">
                    <h5 className=" text-gray6 text-[15px] leading-[22px] lg:text-[12px] lg:leading-[18px]">
                      Model: {product?.sku}
                    </h5>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-[10px]">
                        <p className=" text-[15px] leading-[22px] text-blue3 lg:text-[12px] lg:leading-[18px]">
                          Qty
                        </p>
                        <Select
                          value={quantity}
                          onValueChange={(selectedQuantity) =>
                            handleValueChange(
                              Number(productId),
                              selectedQuantity
                            )
                          }
                        >
                          <SelectTrigger className="min-w-[50px] gap-[5px] border-gray7 rounded-[6px] h-[30px] text-[14px]">
                            <SelectValue placeholder="&nbsp;" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {[...Array(maxQuantity)].map((_, index) => (
                                <SelectItem key={index} value={index + 1}>
                                  {index + 1}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        {/* <button className="p-0 bg-transparent border-0 ">
                          <DynamicImage
                            src={BookmarkIcon}
                            alt="icon"
                            disableIsBlur
                          />
                        </button>
                        <p className=" pr-[10px] border-r border-gray7 text-gray6 lg:hidden ">
                          Save for later
                        </p> */}
                        <p className=" pr-[10px] border-r border-gray7 text-gray6 hidden lg:inline-flex text-[12px] ">
                          Save
                        </p>
                      </div>
                      <ConfirmationModal
                        message="Are you sure you want to remove this item from the cart?"
                        onConfirm={() => handleConfirm(removeToCartPayload)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Pickup and delivery */}
              <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px] lg:p-0 ">
                <DynamicImage
                  src={TruckIcon}
                  alt="icon"
                  className=" mt-[30px] w-[21px] h-[25px] lg:hidden"
                />
                <div className=" lg:p-4 lg:rounded-none lg:gap-3 lg:flex-col py-6 flex-1 mb-[18px] rounded-[13px] px-8 flex gap-[42px] bg-white  mlg:gap-[25px] ">
                  <div className=" lg:flex gap-[16px]">
                    <DynamicImage
                      src={TruckIcon}
                      alt="icon"
                      className="  w-[21px] h-[25px] hidden lg:flex"
                    />
                    <h4 className=" text-blue3 text-[17px] leading-[25px] font-semibold  w-[138px] lg:text-[16px] lg:leading-[24px]">
                      Pickup/Delivery
                    </h4>
                  </div>

                  <div className=" lg:gap-4 lg:pl-0 lg:border-none pl-[42px] flex-1 border-l border-gray7 gap-[26px] grid grid-cols-192 mlg:pl-[25px]">
                    <ZipCodeHandler
                      disableDelivering={true}
                      deliveryType={isPickup ? "pickup" : "delivery"}
                      onDeliveryTypeChange={(payload) => {
                        updateCart({
                          products: [
                            {
                              quantity,
                              productId,
                              ...payload,
                            },
                          ],
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* Protection Plan */}
              {isWarranty && (
                <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px] lg:p-0  ">
                  <DynamicImage
                    src={ProtectionIcon}
                    alt="icon"
                    className=" mt-[30px] w-[21px] h-[25px] lg:hidden"
                  />

                  <div className="lg:flex-col lg:gap-3 lg:p-4 lg:rounded-none py-6 flex-1 mb-[18px] rounded-[13px] px-8 flex gap-[42px] bg-white  mlg:gap-[25px]">
                    <div className="flex gap-4">
                      <DynamicImage
                        src={ProtectionIcon}
                        alt="icon"
                        className="  w-[21px] h-[25px] lg:inline-flex hidden"
                      />
                      <div>
                        <h4 className=" lg:text-[16px] lg:leading-[24px] text-blue3 text-[17px] leading-[25px] font-semibold w-[138px]">
                          Protection Plan
                        </h4>
                        <p className=" text-[15px] leading-[23px] text-blue5 lg:text-[14px] lg:leading-[21px] hover:underline hover:underline-offset-2 cursor-pointer">
                          Learn More
                        </p>
                      </div>
                    </div>

                    <div className=" lg:rounded-10 lg:border lg:p-4 pl-[42px] flex-1 border-l border-gray7 gap-[26px] flex items-center justify-between mlg:pl-[25px]">
                      <div className="inline-flex gap-[10px] items-center">
                        {warrantyType && (
                          <>
                            <DynamicImage
                              src={ProtectIcon}
                              alt="icon"
                              className="w-[25px]"
                            />
                            <h4 className=" text-blue3">
                              {warrantyType} Year Plan{" "}
                            </h4>
                          </>
                        )}
                        <EditWarranty
                          selectedWarrantyId={selectedWarrantyPriceId}
                          productId={productId}
                          categoryId={categoryId}
                          subCategoryId={subCategoryId}
                          quantity={quantity}
                        />
                      </div>
                      {warrantyPrice && (
                        <h4 className="text-blue3">
                          {formatCurrency(warrantyPrice)}
                        </h4>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {/* Professional Services */}
              {isInstallationService && (
                <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px] lg:p-0">
                  <DynamicImage
                    src={BuildIcon}
                    alt="icon"
                    className=" mt-[30px] w-[22px] h-[22px] lg:hidden"
                  />
                  <div className=" lg:flex-col lg:gap-3 lg:p-4 lg:rounded-none py-6 flex-1 mb-[18px] rounded-[13px] px-8 flex gap-[42px] bg-white  mlg:gap-[25px]">
                    <div className="flex gap-4">
                      <DynamicImage
                        src={BuildIcon}
                        alt="icon"
                        className=" w-[22px] h-[22px] hidden lg:inline-block"
                      />
                      <h4 className=" text-blue3 text-[17px] leading-[25px] font-semibold w-[138px] lg:w-full">
                        Professional Services
                      </h4>
                    </div>
                    <div className=" lg:rounded-10 lg:border lg:p-4  pl-[42px] flex-1 border-l border-gray7 gap-[26px] flex items-center justify-between mlg:pl-[25px]">
                      <div className="flex  space-y-2 my-1 w-full justify-between gap-2">
                        {(selectedInstallationServiceId ||
                          selectedAdditionalServiceId) && (
                          <div>
                            {selectedInstallationServiceId && (
                              <div>
                                Installation Services{" "}
                                {formatCurrency(
                                  InstallationServices?.installationFee
                                )}
                              </div>
                            )}

                            {selectedAdditionalServiceId && (
                              <>
                                <div>
                                  Additional Services{" "}
                                  {formatCurrency(
                                    parseInt(
                                      additionalServices?.haulAwayPrice || 0
                                    ) +
                                      parseInt(
                                        additionalServices?.moveAwayPrice || 0
                                      )
                                  )}
                                </div>
                                <div>
                                  {additionalServices?.haulAway && "Haul away"}{" "}
                                  {additionalServices?.haulAway &&
                                    additionalServices?.moveAway &&
                                    "/"}{" "}
                                  {additionalServices?.moveAway &&
                                    "Move your old appliance"}
                                </div>
                              </>
                            )}
                          </div>
                        )}
                        <EditAddOnServices
                          selectedInstallationServiceId={
                            selectedInstallationServiceId
                          }
                          selectedAdditionalServiceId={
                            selectedAdditionalServiceId
                          }
                          categoryName={product?.categoryName}
                          additionalServicesData={additionalServices}
                          selectedWarrantyId={selectedWarrantyPriceId}
                          productId={productId}
                          categoryId={categoryId}
                          subCategoryId={subCategoryId}
                          quantity={quantity}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Essential Add ons */}
              {/* <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px]">
                <DynamicImage
                  src={EssentialPlusIcon}
                  alt="icon"
                  className=" mt-[30px] w-[22px] h-[22px]"
                />
                <div className=" py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white">
                  <h4 className=" text-blue3 text-[17px] mb-3 leading-[25px] font-semibold ">
                    Essential Add Ons
                  </h4>
                  <div className="grid grid-cols-3 gap-[18px] max-w-[700px] ml-0 mx-auto">
                    <div className="border rounded-20 px-[18px] py-[25px] border-gray7">
                      <div className="w-144px h-[120px] flex items-center justify-center  mb-3">
                        <DynamicImage
                          src={DummyImg2}
                          alt="img"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                          Smart Choice - Stainless-Steel Refrigerator Waterline
                          Kit Required for Hook-Up - Silver
                        </h3>
                        <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                          $132.00 &nbsp;
                          <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                            $200.00
                          </span>
                        </h4>
                        <Button className=" uppercase mt-[24px] h-[38px] text-blue3 bg-transparent hover:bg-inherit text-[12px] border border-blue3 rounded-[10px] w-full">
                          ADDED
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-20 px-[18px] py-[25px] border-gray7 ">
                      <div className="w-144px h-[120px] flex items-center justify-center mb-3">
                        <DynamicImage
                          src={DummyImg3}
                          alt="img"
                          className="w-full  h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                          Smart Choice - Stainless-Steel Refrigerator Waterline
                          Kit Required for Hook-Up - Silver
                        </h3>
                        <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                          $132.00 &nbsp;
                          <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                            $200.00
                          </span>
                        </h4>
                        <Button className=" uppercase font-medium mt-[24px] h-[38px] text-white bg-blue3 hover:bg-inherit text-[12px] border border-blue3 rounded-[10px] w-full">
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                    <div className="border rounded-20 px-[18px] py-[25px] border-gray7 ">
                      <div className="w-144px h-[120px] flex items-center justify-center mb-3">
                        <DynamicImage
                          src={DummyImg1}
                          alt="img"
                          className="w-full  h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                          Smart Choice - Stainless-Steel Refrigerator Waterline
                          Kit Required for Hook-Up - Silver
                        </h3>
                        <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                          $132.00 &nbsp;
                          <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                            $200.00
                          </span>
                        </h4>
                        <Button className=" uppercase font-medium mt-[24px] h-[38px] text-white bg-blue3 hover:bg-inherit text-[12px] border border-blue3 rounded-[10px] w-full">
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          );
        })}
      {/* Recently Viewed */}
      {cartItems && cartItems?.length > 0 && (
        <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px] lg:p-0 ">
          <DynamicImage
            src={BuyIcon}
            alt="icon"
            className=" mt-[30px] w-[22px] h-[22px] lg:hidden"
          />

          <div className=" py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white lg:rounded-none lg:px-4 lg:overflow-auto">
            <h4 className=" text-blue3 text-[17px] mb-3 leading-[25px] font-semibold ">
              Recently Viewed
            </h4>
            <div className=" overflow-auto pb-2 ">
              <div className=" flex  grid-cols-3 gap-[18px] max-w-[700px] ml-0 mx-auto  min-w-[700px]">
                {recentlyViewed &&
                  recentlyViewed.length > 0 &&
                  recentlyViewed?.map((product, index) => {
                    return (
                      <div
                        key={index}
                        className="border rounded-20 px-[18px] py-[25px] border-gray7 min-w-[240px] max-w-[240px] flex flex-col justify-between"
                      >
                        <Link href={product?.pdpSeoUrl}>
                          <div className="w-144px h-[120px] flex items-center justify-center  mb-3">
                            <DynamicImage
                              src={getThumbnailUrl(product?.productImages)}
                              alt="img"
                              className="w-full h-full object-contain"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div>
                            <h3 className="min-h-[36px] font-semibold text-[12px] leading-[18px] mb-2 max-w-[250px] two-line-dots ">
                              {product?.ProductName}
                            </h3>

                            <DefaultPriceUi
                              price_details={product?.price_details}
                            />
                            <div
                              id={`category-snippet-${product?.id}${index}`}
                              className="flex"
                            />
                            <div className="flex text-gray6 justify-between text-[12px] leading-[22px] lg:text-[12px] lg:leading-[18px]">
                              Model: {product?.sku} &nbsp;{" "}
                              <StockBadge isInStock={product?.isInStock} />
                            </div>
                          </div>
                        </Link>
                        <Button
                          onClick={() => handleRecentlyViewed(product)}
                          className=" uppercase font-medium mt-[24px] h-[38px] text-white bg-blue3 hover:bg-inherit text-[12px] border border-blue3 rounded-[10px] w-full hover:text-blue3"
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Frequently Bought Together */}
      {/* {cartItems && cartItems?.length > 0 && (
        <div className="flex gap-[25px] pl-[25px] mlg:gap-[10px] mlg:pl-[10px] lg:p-0 ">
          <DynamicImage
            src={BuyIcon}
            alt="icon"
            className=" mt-[30px] w-[22px] h-[22px] lg:hidden"
          />

          <div className=" py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white lg:rounded-none lg:px-4 lg:overflow-auto">
            <h4 className=" text-blue3 text-[17px] mb-3 leading-[25px] font-semibold ">
              Frequently Bought Together
            </h4>
            <div className=" overflow-auto pb-2 ">
              <div className=" flex  grid-cols-3 gap-[18px] max-w-[700px] ml-0 mx-auto  min-w-[700px]">
                <div className="border rounded-20 px-[18px] py-[25px] border-gray7 min-w-[221px]">
                  <div className="w-144px h-[120px] flex items-center justify-center  mb-3">
                    <DynamicImage
                      src={DummyImg2}
                      alt="img"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                      Smart Choice - Stainless-Steel Refrigerator Waterline Kit
                      Required for Hook-Up - Silver
                    </h3>
                    <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                      $132.00 &nbsp;
                      <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                        $200.00
                      </span>
                    </h4>
                    <Button className=" uppercase mt-[24px] h-[38px] text-blue3 bg-transparent hover:bg-inherit text-[12px] border border-blue3 rounded-[10px] w-full">
                      ADDED
                    </Button>
                  </div>
                </div>
                <div className="border rounded-20 px-[18px] py-[25px] border-gray7 min-w-[221px] ">
                  <div className="w-144px h-[120px] flex items-center justify-center mb-3">
                    <DynamicImage
                      src={DummyImg3}
                      alt="img"
                      className="w-full  h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                      Smart Choice - Stainless-Steel Refrigerator Waterline Kit
                      Required for Hook-Up - Silver
                    </h3>
                    <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                      $132.00 &nbsp;
                      <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                        $200.00
                      </span>
                    </h4>
                    <Button className=" uppercase font-medium mt-[24px] h-[38px] text-white bg-blue3  text-[12px] border border-blue3 rounded-[10px] w-full">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
                <div className="border rounded-20 px-[18px] py-[25px] border-gray7 min-w-[221px]">
                  <div className="w-144px h-[120px] flex items-center justify-center mb-3">
                    <DynamicImage
                      src={DummyImg1}
                      alt="img"
                      className="w-full  h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[10px] leading-[14px] mb-1">
                      Smart Choice - Stainless-Steel Refrigerator Waterline Kit
                      Required for Hook-Up - Silver
                    </h3>
                    <h4 className=" mt-2 text-black text-[17px] leading-[26px] font-bold">
                      $132.00 &nbsp;
                      <span className=" font-semibold text-[11px] leading-[17px] line-through ">
                        $200.00
                      </span>
                    </h4>
                    <Button className=" uppercase font-medium mt-[24px] h-[38px] text-white bg-blue3  text-[12px] border border-blue3 rounded-[10px] w-full">
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Cart;
