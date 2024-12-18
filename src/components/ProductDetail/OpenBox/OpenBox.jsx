import CallIcon from "@/assets/images/call-icon.svg";
import LocationIcon from "@/assets/images/location-icon.svg";
import NoImage from "@/assets/images/no-image.webp";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import { CompareOpenBoxModal } from "@/components/Modal/CompareOpenBoxModal";
import { EmailStoreModal } from "@/components/Modal/EmailStoreModal";
import { OpenBoxImages } from "@/components/Modal/OpenBoxImages";
import { ReserveNowModal } from "@/components/Modal/ReserveNowModal";
import OpenBoxSkeleton from "@/components/Skeletons/OpenBoxSkeleton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useGetOpenBoxQuery } from "@/redux/apiSlices/supportApi";
import { formatCurrency } from "@/utils/formatCurrency";
import { useState } from "react";

const OpenBox = ({ productId, isOpenBox, openBoxPrice, productImage }) => {
  const [openBoxSheet, setOpenBoxSheet] = useState(false);
  const { data, isSuccess, isFetching } = useGetOpenBoxQuery(productId, {
    skip: !openBoxSheet,
  });
  const productName = data?.data?.ProductName;
  const productThumbnail = productImage?.thumbnail || NoImage.src;
  const productModel = data?.data?.SKU;
  const productPrice = data?.data?.salePrice;
  const openBoxData = data?.data?.openBox || [];

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          {isOpenBox && openBoxPrice && (
            <button
              className="text-xs leading-[18px] text-blue2 font-bold"
              onClick={() => setOpenBoxSheet(true)}
            >
              Open-Box:&nbsp;
              <span className=" font-medium text-blue5">
                from {formatCurrency(openBoxPrice)}
              </span>
            </button>
          )}
        </SheetTrigger>
        <SheetContent
          aria-describedby={"OpenBoxSidebar"}
          className=" max-w-[500px] p-0 rounded-20"
        >
          <SheetTitle className="px-[30px] pt-[25px] pb-[22px] border-b border-gray21">
            <h3 className=" gap-[10px] items-center inline-flex text-[25px] leading-[37px] font-medium">
              Open-Box
              <span className="text-[14px] leading-[20px]">
                (Available In-Store Only)
              </span>
            </h3>
          </SheetTitle>
          <SheetDescription className="text-blue1 max-[100vh] overflow-auto">
            {isFetching ? (
              <div className="text-center">
                <OpenBoxSkeleton />
              </div>
            ) : (
              <>
                <div>
                  <div className=" px-[30px] pt-[40px] pb-[20px] flex items-center gap-[5px]">
                    <div className=" min-w-[135px] h-[135px] inline-flex items-center justify-center">
                      {isSuccess && (
                        <DynamicImage
                          src={productThumbnail}
                          className="object-contain"
                          width={120}
                          height={80}
                          alt={productName}
                        />
                      )}
                    </div>
                    <p className=" text-[15px] leading-[23px] pr-[40px] font-semibold text-black2">
                      {productName}
                    </p>
                  </div>
                </div>
                <div className="pt-[16px] px-[35px] max-h-290 overflow-auto grid gap-[24px]">
                  {isSuccess &&
                    openBoxData.length > 0 &&
                    openBoxData?.map((data, index) => {
                      const conditionName = data?.condition?.conditionName;
                      const openBoxPrice = data?.price;

                      const storeAddress = data?.store?.address;
                      const storeCity = data?.store?.city;
                      const storeState = data?.store?.state;
                      const storeZipcode = data?.store?.zipCode;
                      const storePhone = data?.store?.phone;
                      const email = data?.store?.email;
                      const serialNo = data?.serialNo;
                      const openBoxImages = {
                        primary: data?.primaryImageUrl || "",
                        secondary: data?.secondaryImageUrl || "",
                        tertiary: data?.tertiaryImageUrl || "",
                      };
                      return (
                        <div
                          key={index}
                          className="border border-gray1 rounded-[18px] py-[20px] px-[18px] "
                        >
                          <div className="border-b border-gray1 pb-3">
                            <div className="flex justify-between">
                              <div>
                                <h3 className=" text-[20px] leading-[30px] font-semibold text-black">
                                  {conditionName}
                                </h3>
                                <p className=" text-[12px]">
                                  Model: {productModel}-{serialNo}
                                </p>
                              </div>
                              <div className="text-right">
                                <h3 className=" text-[22px] leading-[32px] font-bold ">
                                  {formatCurrency(openBoxPrice)}
                                </h3>
                                <p className=" text-[12px]">
                                  New
                                  <span className=" inline-flex ml-[3px] font-medium text-gray11 line-through">
                                    {formatCurrency(productPrice)}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between">
                              <CompareOpenBoxModal />
                              <OpenBoxImages openBoxImages={openBoxImages} />
                            </div>
                          </div>

                          <div className="pt-[26px]">
                            {storeAddress &&
                              storeCity &&
                              storeState &&
                              storeZipcode && (
                                <>
                                  <div className="flex justify-between items-start mb-[18px] ">
                                    <div className="flex">
                                      <DynamicImage
                                        src={LocationIcon}
                                        alt="icon"
                                        className=" mr-[7px] w-[20px] h-[20px]"
                                      />
                                      <p className=" max-w-[260px] text-gray3 text-[14px] leading-[18px]">
                                        {storeAddress} {storeCity}, {storeState}{" "}
                                        {storeZipcode}
                                      </p>
                                    </div>
                                    <button className=" text-gray3 bg-transparent border-0 underline cursor-pointer text-[12px] leading-[18px]">
                                      Directions
                                    </button>
                                  </div>
                                  <div className="flex justify-between items-start  mb-[18px] ">
                                    <div className="flex">
                                      <DynamicImage
                                        src={CallIcon}
                                        alt="icon"
                                        className=" mr-[7px] w-[20px] h-[20px]"
                                      />
                                      <p className="max-w-[260px] text-gray3 text-[14px] leading-[18px]">
                                        {storePhone}
                                      </p>
                                    </div>
                                    <button className=" text-gray3 bg-transparent border-0 underline cursor-pointer text-[12px] leading-[18px]">
                                      Call Store
                                    </button>
                                  </div>
                                </>
                              )}
                            <div className="flex gap-[26px] items-center mt-2">
                              <ReserveNowModal />
                              <EmailStoreModal />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default OpenBox;
