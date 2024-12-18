import SeeItInStore from "@/components/ProductDetail/SeeItInStore";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GreenCheckIcon from "@/icons/GreenCheckIcon";
import { cn } from "@/lib/utils";
import { useGetDeliveryRouteDetailsQuery } from "@/redux/apiSlices/deliveryApi";
import { useGetStoreDistanceQuery } from "@/redux/apiSlices/storeApi";
import { convertToPST } from "@/utils/convertToPST";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PickupDeliverySkeleton from "../Skeletons/PickupDeliverySkeleton";
import { Input } from "../ui/input";

const ZipCodeHandler = ({
  disableDelivering = false,
  onDeliveryTypeChange = () => {},
  productId = null,
  productImages,
  productName,
  productSKU,
  deliveryType = "delivery",
  seeInStore,
}) => {
  const initialZipCode =
    useSelector((state) => state?.userLocation?.zipCode) || "94545";
  const latNlong = useSelector((state) => state?.userLocation?.latlng);
  const [zipCode, setZipCode] = useState(initialZipCode);
  const [queryZipcode, setQueryZipcode] = useState(initialZipCode);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOption, setSelectedOption] = useState(deliveryType);

  const { data, isFetching } = useGetDeliveryRouteDetailsQuery(
    { zipCode: queryZipcode, productId },
    { skip: !productId }
  );
  const { data: distance } = useGetStoreDistanceQuery({
    zipCode: queryZipcode,
    ...latNlong,
  });
  const { warehouseDistance, closestStore } = distance?.data || {};
  const deliveryData = data?.data[0] || {};

  useEffect(() => {
    if (initialZipCode) {
      setZipCode(initialZipCode);
    }
  }, [initialZipCode, latNlong]);

  useEffect(() => {
    const payload = { isPickup: selectedOption !== "delivery" };
    onDeliveryTypeChange(payload);
  }, []); 
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    const payload = { isPickup: option !== "delivery" }; // Determine payload dynamically
    onDeliveryTypeChange(payload);
  };

  const handleZipCodeChange = () => {
    setQueryZipcode(zipCode);
    setIsEditing(false);
  };

  const renderCheckIcon = () => (
    <GreenCheckIcon className="absolute right-[-0.4px] top-[-0.5px]" />
  );

  return (
    <>
      {/* Pickup Nearby */}
      <div className="relative max-w-[222px] w-full min-w-[200px] lg:min-w-[auto] lg:max-w-full">
        <div
          onClick={() => handleOptionClick("pickup")}
          className={cn(
            `cursor-pointer p-5 pt-[20px] pb-[15px] border-2 rounded-10 lg:p-3 min-h-[105px]`,
            selectedOption === "pickup" ? "border-green1" : "border-gray7"
          )}
        >
          <h3 className="font-medium text-[18px] leading-[27px] lg:text-[14px] lg:leading-[21px]">
            Pickup Nearby
          </h3>
          <p className="text-[14px] leading-[18px] mb-[3px]  lg:text-[12px] lg:leading-[18px] lg:font-medium">
            Today
          </p>
          {warehouseDistance?.distanceMiles && (
            <p className="text-[14px] text-green1 font-semibold leading-[21px]  lg:text-[12px] lg:leading-[18px]">
              In-Stock {warehouseDistance?.distanceMiles} mi away
            </p>
          )}
        </div>
        {selectedOption === "pickup" && renderCheckIcon()}
        <p className="text-[15px] leading-[20px] text-blue3 mt-2">
          Available For Pickup At Hayward Warehouse
        </p>
      </div>

      {/* Delivery */}
      <div className="relative max-w-[222px] w-full min-w-[200px] lg:min-w-[auto] lg:max-w-full">
        <div
          onClick={() => handleOptionClick("delivery")}
          className={cn(
            `cursor-pointer p-5 pt-[20px] pb-[15px] border-2 rounded-10 lg:p-3 min-h-[105px]`,
            selectedOption === "delivery" ? "border-green1" : "border-gray7"
          )}
        >
          <h3 className="font-medium text-[18px] leading-[27px] lg:text-[14px] lg:leading-[21px]">
            Delivery
          </h3>
          {isFetching && <PickupDeliverySkeleton />}
          {!isFetching && (
            <div className="text-[14px] leading-[18px] mb-[3px] h-9">
              {deliveryData?.deliveryMessage}
              <p className="text-[14px] leading-[18px] mb-[3px] h-4">
                {deliveryData?.deliveryDate
                  ? convertToPST(deliveryData.deliveryDate)
                  : ""}
              </p>
            </div>
          )}
        </div>
        {selectedOption === "delivery" && renderCheckIcon()}
        {!disableDelivering && (
          <div className="flex items-center text-[15px] leading-[23px] mt-2">
            {isEditing ? (
              <>
                <Input
                  type="text"
                  value={zipCode}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d{0,5}$/.test(value)) {
                      setZipCode(value);
                    }
                  }}
                  className="rounded-[10px] px-2 py-1 w-[100px]"
                />
                <button
                  onClick={handleZipCodeChange}
                  className="bg-gray3 text-white text-sm ml-2 rounded px-2 py-1"
                >
                  Change
                </button>
              </>
            ) : (
              <div
                className="flex px-1 cursor-pointer"
                onClick={() => setIsEditing(true)}
              >
                Estimate for {zipCode}
                <span className="text-gray3 ml-2">Edit</span>
              </div>
            )}
          </div>
        )}
      </div>
      {/*See In Store*/}
      {seeInStore && (
        <div className="pt-[16px] pb-[14px] pl-[38px] lg:px-[16px] lg:text-[12px] lg:leading-[18px] lg:py-[11px] w-full border-t">
          <Sheet>
            <SheetTrigger asChild>
              <p className=" text-[15px] leading-[23px]">
                See it in-store:
                <button className=" pl-1 text-blue5 font-semibold border-0 bg-transparent p-0">
                  {closestStore?.storeName} ({closestStore?.distanceMiles} miles
                  away)
                </button>
              </p>
            </SheetTrigger>
            <SheetContent className=" max-w-[500px] p-0 rounded-20">
              <SeeItInStore
                productId={productId}
                productImages={productImages}
                productName={productName}
                productSKU={productSKU}
              />
            </SheetContent>
          </Sheet>
        </div>
      )}
    </>
  );
};

export default ZipCodeHandler;
