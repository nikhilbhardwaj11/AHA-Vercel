import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import DynamicImage from "@/components/DynamicImages/DynamicImage";
import { Button } from "@/components/ui/button";
import DeleteIcon from "@/icons/DeleteIcon";
import Link from "next/link";
import SwapProductSheet from "@/components/SwapProductSheet/SwapProductSheet";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useDispatch, useSelector } from "react-redux";
import { setPackageProducts } from "@/redux/slices/packageSlice";
import PlusIcon from "@/icons/PlusIcon";
import NoImage from "@/assets/images/no-image.webp";

const BuyPackageTabs = ({ bundleProductList, brandId, brandName }) => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const [isSwap, setIsSwap] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const handleOpenSwap = (index) => {
    setSelectedProductIndex(index);
    setIsSwap(true);
  };
  const temporaryPackageProducts = useSelector(
    (state) => state.packageProducts || []
  );
  useEffect(() => {
    if (bundleProductList?.length > 0) {
      dispatch(setPackageProducts(bundleProductList));
    }
  }, [bundleProductList, dispatch]);

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

  return (
    temporaryPackageProducts &&
    temporaryPackageProducts.length > 0 && (
      <Tabs
        defaultValue={temporaryPackageProducts[0]?.category?.categoryName}
        className="w-full pl-9 lg:pl-0"
      >
        <div className="overflow-x-auto">
          <TabsList className="p-0 bg-white lg:gap-[30px] h-[42px]">
            {temporaryPackageProducts.map((product, idx) => {
              const { category } = product;
              return (
                <TabsTrigger
                  key={idx}
                  className="rounded-[0] bg-white px-10 text-[20px] leading-[30px] text-black2 font-semibold lg:text-[15px] lg:px-0 lg:leading-[22px]"
                  value={category?.categoryName}
                >
                  {category?.categoryName}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {temporaryPackageProducts.map((product, index) => {
          const {
            category,
            image,
            productName,
            SKU,
            pdpSeoUrl = "",
            topSix,
            price_details,
            subCategoryId,
            thumbnail,
          } = product;
          const {
            displayPrice,
            savingAmount,
            savingPercentage,
            crossedPrice,
            cartPrice,
          } = price_details || {};
          const currentProductIndex = index;
          const isEmpty = !product?.id;
          const categoryName = category?.categoryName;
          return (
            <TabsContent key={index} value={category?.categoryName}>
              {isEmpty ? (
                <div
                  onClick={() => {
                    let copyOfArr = [...temporaryPackageProducts];
                    let originalProduct =
                      bundleProductList[currentProductIndex];
                    copyOfArr?.splice(currentProductIndex, 1, originalProduct);
                    dispatch(setPackageProducts(copyOfArr));
                    toast({
                      title: "Product Added Successfully",
                    });
                  }}
                  className="flex gap-7 px-[14px] py-[21px] min-h-[324px] border-b border-gray12 cursor-pointer"
                >
                  <div className="flex rounded-[16px] border-4 border-gray19 border-dashed px-14 py-2 items-center content-center min-w-[840px]  justify-center  hover:bg-gray1">
                    <PlusIcon width={60} height={100} color="#575757" />
                    {/* <div className="ml-8 text-lg font-semibold text-gray29 flex items-center">
                      <p>Add {categoryName}</p>
                    </div> */}
                  </div>
                </div>
              ) : (
                <div className="pt-4">
                  <div className="flex gap-[30px] mb-5">
                    <Link
                      href={pdpSeoUrl}
                      className="  inline-flex py-[16px] px-[23px] max-w-[136px] w-full items-center justify-center  border border-gray13 rounded-[5px] bg-gray13 cursor-pointer"
                    >
                      <DynamicImage
                        className="w-auto "
                        width={136}
                        height={138}
                        src={thumbnail || NoImage}
                        alt={productName}
                      />
                    </Link>
                    <div className=" flex gap-[30px] items-start mxl:justify-around mxl:flex-1 sm:flex-col sm:gap-[12px]">
                      <div>
                        <Link href={pdpSeoUrl}>
                          <h3 className="text-[20px] leading-[36px] font-semibold text-black mb-[10px] lg:text-[15px] lg:leading-[21px]">
                            {productName}
                          </h3>
                        </Link>
                        <p className=" text-[16px] leading-[16px] font-medium mb-[10px] lg:text-[14px]">
                          Model: {SKU}
                        </p>
                        {/* <div>
              <p className="text-gray11 text-sm font-medium">(4.5) Reviews</p>
            </div> */}
                      </div>
                      <div className="flex flex-col items-end gap-[10px] mb-[10px]  sm:items-end sm:w-full sm:justify-between 500:flex-col ">
                        <button
                          onClick={() =>
                            handleRemoveProduct({
                              currentProductIndex,
                            })
                          }
                          className=" mb-[20px] inline-flex items-center justify-center h-[50px] w-[50px] rounded-full border border-gray7 sm:m-0 "
                        >
                          <DeleteIcon />
                        </button>
                        <div className="flex flex-col items-end gap-[10px] mb-[10px]">
                          {/* <Button
              // className=" h-[40px] border rounded-[10px] bg-transparent hover:bg-inherit  border-blue1 text-sm text-blue1 min-w-[150px]"
              variant="outline"
              className=" border-blue2 rounded-[8px] min-w-[150px]   "
            >
              Quickview
            </Button> */}
                          <Sheet open={isSwap} onOpenChange={setIsSwap}>
                            <SheetTrigger asChild>
                              <Button
                                variant="outline"
                                className=" text-[13px] border-blue2 rounded-[9px]"
                                onClick={() => handleOpenSwap(index)}
                              >
                                Swap Product
                              </Button>
                            </SheetTrigger>
                            {isSwap && selectedProductIndex === index && (
                              <SwapProductSheet
                                price={cartPrice || displayPrice}
                                subCategoryId={subCategoryId}
                                brandId={brandId}
                                brandName={brandName}
                                currentProduct={product}
                                currentProductIndex={selectedProductIndex}
                                temporaryPackageProducts={
                                  temporaryPackageProducts
                                }
                                closeSheet={() => setIsSwap(false)}
                              />
                            )}
                          </Sheet>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {topSix && topSix.length > 0 && (
                      <p className=" text-[16px] leading-[16px] text-gray2 font-medium mb-[24px] lg:text-[20px] lg:leading-[24px] lg:font-semibold lg:mb-5 lg:text-[#0A223C]">
                        Top Specs
                      </p>
                    )}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-4 lg:grid-cols-1">
                      {topSix &&
                        topSix.length > 0 &&
                        topSix?.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className="grid grid-cols-2 text-gray2 gap-x-[30px] gap-y-4 text-[16px] leading-[16px]"
                            >
                              <p className="lg:text-[15px] lg:text-[#0A223C" c>
                                {item?.key || "N/A"}{" "}
                              </p>
                              <p className=" font-semibold">
                                {item?.value || "N/A"}
                              </p>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    )
  );
};

export default BuyPackageTabs;
