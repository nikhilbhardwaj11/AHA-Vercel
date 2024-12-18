"use client";
import DummyCardImg from "@/assets/images/dummy-card-img.png";
import NoImage from "@/assets/images/no-image.webp";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import CustomersViewed from "@/components/ProductDetail/CustomersViewed";
import { Ratings } from "@/components/Ratings/Ratings";
import SwapProductSheet from "@/components/SwapProductSheet/SwapProductSheet";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import useAddToCart from "@/hooks/useAddToCart";
import useRenderProductRatings from "@/hooks/useRenderProductRating";
import PlusIcon from "@/icons/PlusIcon";
import AffirmScriptLoader from "@/providers/AffirmScriptLoader";
import { useGetPackageByIdQuery } from "@/redux/apiSlices/packagesApi";
import { useGetViewedProductsQuery } from "@/redux/apiSlices/ProductListsApi";
import { setPackageProducts } from "@/redux/slices/packageSlice";
import { calculatePriceTotal } from "@/utils/calculatePriceTotal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PackageDetailPage = ({ packageId }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isSwap, setIsSwap] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const handleOpenSwap = (index) => {
    setSelectedProductIndex(index);
    setIsSwap(true);
  };
  const { data, isFetching } = useGetPackageByIdQuery({
    packageId,
  });
  const { addToCart, isAddToCartLoading, isAddToCartSuccess } = useAddToCart();

  const {
    productName,
    thumbnail,
    price_details,
    bundleProductList,
    brandId,
    brandName,
  } = data?.data || {};

  useEffect(() => {
    if (!isFetching && bundleProductList?.length > 0) {
      dispatch(setPackageProducts(bundleProductList));
    }
  }, [bundleProductList, isFetching, dispatch]);

  const temporaryPackageProducts = useSelector(
    (state) => state.packageProducts || []
  );

  const {
    totalCrossedPrice,
    totalDisplayPrice,
    totalSavingsAmount,
    totalSavingsPercentage,
  } = calculatePriceTotal(temporaryPackageProducts) || {};

  const {
    displayPrice,
    savingAmount,
    savingPercentage,
    crossedPrice,
    cartPrice,
  } = price_details || {};

  const isPackageEmpty =
    temporaryPackageProducts?.filter((item) => item.id)?.length === 0;

  const processPackageAddToCart = () => {
    let addToCartPayload = [];
    temporaryPackageProducts?.map((product, index) => {
      if (product.id) {
        addToCartPayload?.push({ productId: product.id, quantity: 1 });
      }
    });
    addToCart({ products: addToCartPayload });
  };
  const handleRemoveProduct = ({ currentProductIndex }) => {
    let copyOfArr = [...temporaryPackageProducts];
    copyOfArr?.splice(currentProductIndex, 1, {
      category: copyOfArr[currentProductIndex]?.category,
    });
    dispatch(setPackageProducts(copyOfArr));
    toast({
      title: "Product Removed Successfully",
    });
  };

  const updatePackageProduct = ({
    temporaryPackageProducts,
    currentProductIndex,
  }) => {
    let copyOfArr = [...temporaryPackageProducts];
    let originalProduct = bundleProductList[currentProductIndex];
    copyOfArr?.splice(currentProductIndex, 1, originalProduct);
    dispatch(setPackageProducts(copyOfArr));
    toast({
      title: "Product Added Successfully",
    });
  };

  useRenderProductRatings(temporaryPackageProducts);

  return (
    <div className="bg-gray9">
      <div className=" bg-white">
        <DynamicBreadcrumb />
        <div className=" max-w-[1440px] my-0 mx-auto w-full px-5 lg:bg-mobileBG lg:px-4 ">
          <div className=" flex gap-[65px] mxl:gap-[40px] lg:flex-col lg:gap-[14px]">
            <div className="  flex-1 max-w-[792px] 1300:max-w-[600px] 1070:max-w-[500px] pb-5 sticky top-[214px] lg:relative lg:top-0 lg:max-w-full lg:pb-0">
              <div className=" mb">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild data-side="bottom">
                      <h2 className="text-2xl two-line-dots leading-9 text-black2 mb-2 font-semibold max-w-[668px] lg:text-[19px] lg:leading-[25px]">
                        {productName}
                      </h2>
                    </TooltipTrigger>
                    <TooltipContent
                      data-side="bottom"
                      className="max-w-[300px] bg-grayBg"
                    >
                      <p> {productName}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              {/* <div className=" mb-[10px]">
                <Ratings rating={4} />
              </div> */}
              <div className="flex items-center justify-center lg:rounded-[6px] lg:bg-white lg:py-5">
                <PackageThumbnailImage
                  temporaryPackageProducts={temporaryPackageProducts}
                  updatePackageProduct={updatePackageProduct}
                />
              </div>
            </div>
            <div className="flex-1 max-w-[525px] lg:max-w-full">
              <div className="bundle pb-4">
                <div className=" pb-[35px] border-b border-gray12 mb-7 lg:p-[17px] lg:rounded-[12px] lg:bg-white lg:mb-0">
                  <div className="flex flex-wrap gap-x-[35px] gap-y-[10px] mb-[10px] justify-between">
                    <div className="flex  items-start gap-3 w-[280px] ">
                      <div>
                        <h3 className=" text-[37px] font-semibold text-black2  leading-[44px]">
                          {totalDisplayPrice}
                        </h3>
                        {totalDisplayPrice && (
                          <p className=" text-gray2 text-[11px] font-medium  leading-[16px] mr-1">
                            *See final price in cart
                          </p>
                        )}
                      </div>
                      <div className="pt-[3px]">
                        <h5 className=" text-red2  text-[14px] leading-[20px]">
                          {totalSavingsAmount} {totalSavingsPercentage}
                        </h5>
                        <p className="text-[14px] line-through leading-[20px] font-medium">
                          {totalCrossedPrice}
                        </p>
                      </div>
                    </div>
                    <Button
                      className="bg-red3 w-full max-w-[200px] h-[50px] rounded-10 text-white text-sm	uppercase"
                      onClick={() => processPackageAddToCart()}
                      disabled={isAddToCartLoading || isPackageEmpty}
                    >
                      {isAddToCartLoading ? "Adding To Cart.." : "Add to Cart"}
                    </Button>
                  </div>
                  <div className=" text-gray11 text-xs space-y-3">
                    {totalDisplayPrice && (
                      <AffirmScriptLoader displayPrice={totalDisplayPrice} />
                    )}
                    <div className="flex gap-2 items-center">
                      <DynamicImage
                        src={DummyCardImg}
                        className=" w-11 h-7"
                        alt="card-image"
                      />
                      <div className="leading-[18px] font-medium text-gray11">
                        <p>
                          $179/mo suggested payments with 18-month special
                          financing.{" "}
                          <span className=" whitespace-nowrap font-bold text-blue3">
                            Learn now
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" border border-gray12 my-4 rounded-[15px] lg:grid lg:gap-4">
                  {temporaryPackageProducts &&
                    temporaryPackageProducts?.length > 0 &&
                    temporaryPackageProducts?.map((packageData, index) => {
                      const currentProductIndex = index;
                      const isEmpty = !packageData?.id;
                      const {
                        productName,
                        image,
                        thumbnail,
                        price_details,
                        SKU,
                        subCategoryId,
                        category,
                        isRebateAvailable,
                      } = packageData || {};

                      const { categoryName, id } = category || {};
                      const {
                        displayPrice,
                        savingAmount,
                        savingPercentage,
                        crossedPrice,
                        cartPrice,
                      } = price_details || {};
                      return isEmpty ? (
                        <div
                          onClick={() =>
                            updatePackageProduct({
                              temporaryPackageProducts,
                              currentProductIndex,
                            })
                          }
                          className="flex gap-7 px-[14px] py-[21px] min-h-[180px] border-b border-gray12 cursor-pointer"
                        >
                          <div className="flex rounded-[16px] border border-gray19 border-dashed px-14 py-2 ml-[10%]">
                            <PlusIcon width={50} height={120} color="#575757" />
                          </div>
                          {/* <div className="font-semibold text-gray29 flex items-center">
                              <p>Add {categoryName}</p>
                            </div> */}
                        </div>
                      ) : (
                        <div className=" gap-6 gap-y-0 px-[14px] py-[21px] border-b border-gray12 grid grid-cols-140 lg:bg-white lg:rounded-[12px]">
                          <div className="relative h-[140px]  row-start-1 row-end-3 lg:row-end-2">
                            <DynamicImage
                              src={thumbnail || NoImage.src}
                              // width={400}
                              // height={140}
                              alt="Product Image"
                              fill
                              className=" object-contain h-auto "
                            />
                          </div>
                          <div>
                            <div className="grid grid-cols-2  items-start gap-x-3 sm:grid-cols-1">
                              <div>
                                <h3 className=" text-[24px] font-semibold text-black2  leading-[29px]">
                                  {cartPrice || displayPrice}
                                </h3>
                                <p className=" text-gray2 text-[9px] font-medium  leading-[14px] mr-1">
                                  *See final price in cart
                                </p>
                              </div>
                              <div className="pt-[3px]">
                                <h5 className=" text-red2  text-[13px] leading-[15px]">
                                  {savingAmount} {savingPercentage}
                                </h5>
                                <p className="text-[13px] line-through leading-[15px] font-medium">
                                  {crossedPrice}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2  items-start gap-x-3 sm:grid-cols-1">
                              {/* <Ratings rating={4} /> */}
                              <div
                                id={`category-snippet-${packageData?.id}${index}`}
                                className="product-rating flex"
                              />

                              {isRebateAvailable && (
                                <div>
                                  <div className="inline-flex bg-orange1 py-[3px] px-2 text-white font-medium text-[12px] leading-[14px] rounded-[5px]">
                                    Rebates Available
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="grid grid-cols-2  items-start gap-x-3 sm:grid-cols-1">
                              <div className=" mt-1 text-gray2 font-medium text-[13px]">
                                Model: {SKU}
                              </div>
                              <div className=" mt-1 font-medium text-[12px]">
                                Ships from Manf.
                              </div>
                            </div>
                          </div>
                          <div className="mt-5 col-start-2 col-end-3 lg:col-start-1">
                            <h3 className=" mb-[9px] font-semibold text-[18px] leading-[26px]">
                              {brandName}
                            </h3>
                            <p className="text-[15px] leading-[22px] mb-[14px]">
                              {productName}
                            </p>
                            <div className="grid grid-cols-2 gap-[10px] ff">
                              <Sheet open={isSwap} onOpenChange={setIsSwap}>
                                <SheetTrigger asChild>
                                  <Button
                                    variant="outline"
                                    className=" text-[13px] border-blue2 rounded-[9px]"
                                    onClick={() => handleOpenSwap(index)}
                                  >
                                    Swap
                                  </Button>
                                </SheetTrigger>
                                {isSwap && selectedProductIndex === index && (
                                  <SwapProductSheet
                                    price={displayPrice?.split("$")[1]}
                                    subCategoryId={subCategoryId}
                                    brandId={brandId}
                                    brandName={brandName}
                                    currentProduct={packageData}
                                    currentProductIndex={selectedProductIndex}
                                    temporaryPackageProducts={
                                      temporaryPackageProducts
                                    }
                                    closeSheet={() => setIsSwap(false)}
                                  />
                                )}
                              </Sheet>
                              <Button
                                variant="outline"
                                className=" text-[13px] border-blue2 rounded-[9px]"
                                onClick={() =>
                                  handleRemoveProduct({
                                    currentProductIndex,
                                  })
                                }
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <ViewsProductsWrapper />
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;

const ViewsProductsWrapper = () => {
  const { data } = useGetViewedProductsQuery();
  const { recentlyViewed = [] } = data || {};
  return (
    recentlyViewed.length > 0 && (
      <CustomersViewed heading="Recently Viewed" products={recentlyViewed} />
    )
  );
};

const PackageThumbnailImage = ({
  temporaryPackageProducts,
  updatePackageProduct,
}) => {
  const { toast } = useToast();

  return (
    <div className="relative group">
      <div className="grid grid-cols-2 lg:gap-2">
        {temporaryPackageProducts &&
          temporaryPackageProducts.length > 0 &&
          temporaryPackageProducts?.map((product, index) => {
            const isEmpty = !product?.id;
            const currentProductIndex = index;
            const { productName, image, thumbnail, category } = product || {};

            return isEmpty ? (
              <div
                role="button"
                onClick={() =>
                  updatePackageProduct({
                    temporaryPackageProducts,
                    currentProductIndex,
                  })
                }
                className="flex gap-7 px-4 py-5 min-h-[18rem] border-b border-gray-300 cursor-pointer"
              >
                <div className="flex rounded-lg border border-gray-300 border-dashed px-20 py-2 items-center w-100vw justify-center">
                  <PlusIcon width={70} height={120} color="#575757" />
                </div>
              </div>
            ) : (
              <DynamicImage
                key={index}
                className="mt-5  h-[18rem] w-[24rem] m-auto object-contain rounded-lg p-1"
                src={image || thumbnail || NoImage.src}
                width={400}
                height={338}
                alt={productName || "package"}
              />
            );
          })}
      </div>
    </div>
  );
};
