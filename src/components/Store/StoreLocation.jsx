import CallIcon from "@/icons/CallBoldIcon";
import MailIcon from "@/icons/MailDotIcon";
import { Button } from "../ui/button";
import DynamicImage from "../DynamicImages/DynamicImage";
import { convertToAMPM } from "@/utils/convertToAMPM";
import NoImage from "@/assets/images/no-image.webp";
import GoogleMapsComponent from "../GoogleMapsComponent/GoogleMapsComponent";
import { formatPhoneNo } from "@/utils/formatPhoneNo";
import { Skeleton } from "../ui/skeleton";

const StoreLocation = ({ storeData, isFetching }) => {
  const {
    address,
    city,
    email,
    storeManagerEmail,
    storeManagerPhone,
    storeManagerName,
    weekdayStartTime,
    weekdayEndTime,
    phone,
    weekendStartTime,
    weekendEndTime,
    latitude,
    longitude,
    state,
    storeName,
    zipCode,
    imageUrl,
    managerImageUrl,
  } = storeData || {};

  const coordinatesArray = [
    {
      lat: Number(latitude),
      lng: Number(longitude),
    },
  ];
  return (
    <div className=" grid flex-1 lg:w-full">
      <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:px-[20px]">
        <div>
          <h2 className=" text-blue3 font-bold text-[26px] mb-[5px] leading-[28px]  lg:text-[15px] lg:leading-[22px]">
            {storeName}
          </h2>
          <p className=" text-blue3 font-bold text-[15px] mb-[18px] leading-[26px] lg:text-[12px] lg:leading-[16px]">
            Airport Home Appliance
          </p>
        </div>
        <div className=" flex gap-[30px] shadow-11 rounded-[14px] px-[30px] pt-[23px] pb-[30px] border border-peach2 bg-white 1105:flex-col 990:shadow-none 990:p-0 990:border-0">
          <div className="flex-1">

            <div className="flex gap-[24px] mb-[50px] 1105:mb-6">
              {/* {isFetching ?<Skeleton className=" w-[105px] h-[131px] bg-gray1" />:
              <DynamicImage
                className="w-[105px] h-[131px] rounded-[20px] object-contain"
                src={managerImageUrl || NoImage.src}
                width={100}
                height={130}
                alt="Store Manager Image"
              />} */}
              <div>
                <p className=" text-[12px] font-medium leading-[16px] text-gray6 mb-[2px]">
                  Store Manager
                </p>
                <h3 className=" text-[18px] font-semibold leading-[22px] text-black mb-[15px]">
                  {storeManagerName}
                </h3>
                <div className="flex gap-[8px] mb-[11px] items-center">
                  <span className=" shadow-2 inline-flex w-[33px] h-[33px] items-center justify-center rounded-full">
                    <MailIcon />
                  </span>
                  <p className="text-[13px] font-semibold leading-[22px]">
                    {storeManagerEmail}
                  </p>
                </div>
                <div className="flex gap-[8px]  items-center">
                  <span className=" shadow-2 inline-flex w-[33px] h-[33px] items-center justify-center rounded-full">
                    <CallIcon />
                  </span>
                  <p className="text-[13px] font-semibold leading-[22px]">
                    {formatPhoneNo(storeManagerPhone)}
                  </p>
                </div>
              </div>
            </div>
            <div className=" mb-[26px]">
              <p className="text-[12px] leading-[16px] font-medium text-gray6 mb-1">
                Location
              </p>
              <p className=" text-[15px] leading-[22px]">
                {address} {city} {state} {zipCode}
              </p>
            </div>
            <div className=" mb-[26px]">
              <p className="text-[12px] leading-[16px] font-medium text-gray6 mb-1">
                Open Hours
              </p>
              <p className=" text-[15px] leading-[22px] ">
                Monday - Friday - {convertToAMPM(weekdayStartTime)} to{" "}
                {convertToAMPM(weekdayEndTime)}
              </p>
              <p className=" text-[15px] leading-[22px]">
                Saturday & Sunday - {convertToAMPM(weekendStartTime)} to{" "}
                {convertToAMPM(weekendEndTime)}
              </p>
            </div>
            <div className=" mb-[24px]">
              <div>
                <p className="text-[12px] leading-[16px] font-medium text-gray6 mb-1">
                  Phone
                </p>
                <p className=" text-[15px] leading-[22px] ">
                  {formatPhoneNo(phone)}
                </p>
              </div>
            </div>
            <div className=" flex gap-4 flex-wrap">
              <Button className=" text-[12px] leading-[14px] py-[9px] px-[13px] h-[34px] border border-blue2 bg-transparent text-blue2 rounded-[4px] hover:bg-inherit	">
              Get directions
              </Button>
              <Button className="text-[12px] leading-[14px] py-[9px] px-[13px] h-[34px] border border-blue2 bg-transparent text-blue2 rounded-[4px] hover:bg-inherit	">
                <a href={"tel:+"+phone}>
                Call Store
                </a>
              </Button>
              {/* <Button className="text-[12px] leading-[14px] py-[9px] px-[13px] h-[34px] border border-blue2 bg-transparent text-blue2 rounded-[4px] hover:bg-inherit	">
                View Event
              </Button> */}
            </div>
          </div>
          <div className="flex-1">
          <div >
          {isFetching ? <Skeleton className="h-[288px] w-[455px] min-h-[288px] bg-gray1" /> :
            <DynamicImage
              className="w-full max-w-[455px] h-auto mb-[25px] rounded-[10px]"
              src={imageUrl || NoImage.src}
              width={450}
              height={200}
              alt="Store Image"
            />
            }
            {/* <p className="text-[15px] leading-[22px] font-semibold mb-3">
              Get Direction
            </p> */}
            <GoogleMapsComponent
              coordinatesArray={coordinatesArray}
              className="h-[400px] max-w-[455px]"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocation;
