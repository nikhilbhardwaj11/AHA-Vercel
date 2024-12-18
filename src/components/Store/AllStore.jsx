"use client";
import LocationIconImg from "@/assets/images/location-icon-img.png";
import MapImage from "@/assets/images/map-image.png";
import CallIcon from "@/icons/CallBoldIcon";
import ClockIcon from "@/icons/ClockIcon";
import LocationIcon from "@/icons/LocationIcon";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { convertToAMPM } from "@/utils/convertToAMPM";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent";
import { formatPhoneNo } from "@/utils/formatPhoneNo";
import { memo } from "react";
const AllStore = ({ storeListsData }) => {
  const router = useRouter();
  const coordinatesArray = storeListsData?.map((store) => ({
    lat: Number(store.latitude),
    lng: Number(store.longitude),
  }));

  return (
    <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:px-[20px] lg:w-full">
      <div>
        <h2 className=" text-blue3 font-bold text-[26px] mb-[5px] leading-[28px]  lg:text-[15px] lg:leading-[22px]">
          All Stores
        </h2>
        <p className=" text-blue3 font-bold text-[15px] mb-[18px] leading-[26px] lg:text-[12px] lg:leading-[16px]">
          Airport Home Appliance
        </p>
      </div>
      <div className="mb-[26px] h-[326px] rounded-[7px]">
        <GoogleMapsComponent
          coordinatesArray={coordinatesArray}
          className="h-full overflow-hidden rounded-[7px]"
        />
      </div>
      <div className=" grid grid-cols-308 gap-[20px] lg:grid-cols-2 md:grid-cols-1">
        {storeListsData?.length > 0 &&
          storeListsData.map((item) => (
            <div
              key={item.id}
              className="rounded-[14px] p-[20px] border border-peach2 bg-white cursor-pointer"              
            >
              <div onClick={() => router.push(`store/${item?.id}`)}>
                <div className="flex justify-between items-center mb-3">
                  <h3 className=" text-blue6 font-bold text-[18px] leading-[22px]">
                    {item?.storeName}
                  </h3>
                  <Image
                    className="w-[46px] h-[46px]"
                    src={LocationIconImg}
                    alt="icon"
                  />
                </div>
                <div className="flex  gap-[7px] mb-[15px]">
                  <LocationIcon />
                  <p className=" text-[14px] leading-[18px]">
                    {item?.address} {item?.city}, {item?.state} {item?.zipCode}
                  </p>
                </div>
              </div>
              <div className="flex  gap-[7px] mb-[15px]">
                <ClockIcon />
                <div>
                  <h4 className=" font-bold text-[15px] leading-[18px] mb-1 ">
                    Open Hours
                  </h4>

                  <p className="text-[14px]">
                    {`Mon - Fri - ${
                      convertToAMPM(item?.weekdayStartTime) || ""
                    } to ${convertToAMPM(item?.weekdayEndTime) || ""}`}
                  </p>
                  <p className="text-[14px]">
                    {`Sat & Sun - ${
                      convertToAMPM(item?.weekendStartTime) || ""
                    } to ${convertToAMPM(item?.weekendEndTime) || ""}`}
                  </p>
                </div>
              </div>
              <div className="flex  gap-[7px] mb-[15px]">
                <CallIcon />
                <div>
                  <h4 className=" font-bold text-[15px] leading-[18px] mb-1 ">
                    Phone
                  </h4>
                  <p className="text-[14px]">
                    {formatPhoneNo(item?.storeManagerPhone)}
                  </p>
                </div>
              </div>
              <div className=" flex gap-4 sm:grid   sm:grid-cols-2 xsm:grid-cols-1">
                <Button className=" text-[12px] leading-[14px] py-[9px] px-[13px] h-[34px] border border-blue2 bg-transparent text-blue2 rounded-[4px] hover:bg-inherit	">
                <a
                  href={"tel:+"+item?.storeManagerPhone}
                  // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                  aria-label={"call +"+item?.storeManagerPhone}
                >
                  Contact Store
                 </a>
                </Button>
                <Button className="text-[12px] leading-[14px] py-[9px] px-[13px] h-[34px] border border-blue2 bg-transparent text-blue2 rounded-[4px] hover:bg-inherit" 
                 onClick={() => router.push(`store/${item?.id}`)}>
                  Store Info
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo(AllStore);
