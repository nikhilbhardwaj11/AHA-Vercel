import CallIcon from "@/assets/images/call-icon.svg";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import PackageSkeleton from "@/components/Skeletons/PackageSkeleton";
import LocationIcon from "@/icons/LocationIcon";

import { useGetStoreDistanceQuery } from "@/redux/apiSlices/storeApi";
import { convertToAMPM } from "@/utils/convertToAMPM";
import { formatPhoneNo } from "@/utils/formatPhoneNo";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";
import Link from "next/link";
import { useSelector } from "react-redux";

const SeeItInStore = ({
  productId,
  productImages,
  productName,
  productSKU,
}) => {
  const currentZipCode =
    useSelector((state) => state?.userDetails?.zipCode) || "94545";

  const { data, isSuccess, isFetching } = useGetStoreDistanceQuery(
    {
      zipCode: currentZipCode,
      productId,
    },
    { skip: !productId }
  );
  const { productStores } = data?.data || {};

  return (
    <div className="text-blue1 py-[20px] px-[20px]">
        <h3 className="mb-7 text-[25px] leading-[37px] font-medium">
          Store Display Availability for:
        </h3>
        <div className="pb-[26px] flex items-start gap-[5px] border-b border-gray1">
          <div className="min-w-[135px] h-[135px] inline-flex items-center justify-center">
            <DynamicImage
              src={getThumbnailUrl(productImages)}
              className="w-[100px] h-auto object-contain"
              width={135}
              height={114}
              alt={productName}
            />
          </div>
          <div>
            <p className="text-[15px] leading-[23px] pr-[30px] pt-[10px] font-semibold text-black2 three-line-dots">
              {productName}
            </p>
            <p className="mt-4 text-gray8 font-medium text-[13px] leading-[20px]">
              Model: {productSKU}
            </p>
          </div>
        </div>
        {isFetching ? (
          <div className="mt-7">
            <PackageSkeleton />
          </div>
        ) : (
          <div className="grid gap-[16px] pr-4 mt-6 max-h-310 overflow-auto">
            {productStores &&
              productStores.length > 0 &&
              productStores.map((store, index) => (
                <div
                  key={index}
                  className="border-2 border-blue3 rounded-[14px] px-5 py-4"
                >
                  <div className="mb-1 flex justify-between items-center">
                    <h3 className="text-blue3 text-[18px] leading-[22px] font-bold">
                      {store?.storeName}
                    </h3>
                    <Link
                      href={`/store/${store?.id}`}
                      className="bg-transparent text-[14px] leading-[21px] p-0 text-gray6 font-semibold underline"
                    >
                      More Info.
                    </Link>
                  </div>

                  <div className="px-2">
                    <p className="text-[13px] leading-[22px]">
                      Mon - Fri - {convertToAMPM(store?.weekdayStartTime)} to{" "}
                      {convertToAMPM(store?.weekdayEndTime)}
                    </p>
                    <p className="mb-3 text-[13px] leading-[22px]">
                      Sat & Sun - {convertToAMPM(store?.weekendStartTime)} to{" "}
                      {convertToAMPM(store?.weekendEndTime)}
                    </p>
                  </div>

                  <div className="flex justify-between items-start mb-[18px]">
                    <div className="flex space-x-2">
                      <LocationIcon className="" color="#0C2340" />
                      <p className="max-w-[260px] text-gray3 text-[14px] leading-[18px]">
                        {store?.address}, {store?.city} {store?.state}{" "}
                        {store?.zipCode}
                      </p>
                    </div>
                    <button
                      className="font-medium text-gray3 bg-transparent border-0 underline cursor-pointer text-[12px] leading-[18px]"
                      onClick={() => {
                        const lat = store?.latitude;
                        const lng = store?.longitude;
                        const googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
                        window.open(googleMapsUrl, "_blank");
                      }}
                    >
                      Directions
                    </button>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="flex">
                      <DynamicImage
                        src={CallIcon}
                        alt="icon"
                        width={20}
                        height={20}
                        className="mr-[7px] w-[20px] h-[20px]"
                      />
                      <p className="max-w-[260px] text-gray3 text-[14px] leading-[18px]">
                        {store?.phone && formatPhoneNo(store?.phone)}
                      </p>
                    </div>
                    <button
                      className="font-medium text-gray3 bg-transparent border-0 underline cursor-pointer text-[12px] leading-[18px]"
                      onClick={() => {
                        window.location.href = `tel:${store?.phone}`;
                      }}
                    >
                      Call
                    </button>
                  </div>
                </div>
              ))}
          </div>
        )}
    </div>
  );
};

export default SeeItInStore;
