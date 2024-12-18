import CallIcon from "@/assets/images/call-icon.svg";
import LocationIcon from "@/icons/LocationIcon";
import TruckIcon from "@/icons/TruckIcon";
import { useGetStoreDistanceQuery } from "@/redux/apiSlices/storeApi";
import { setUserLocation } from "@/redux/slices/locationSlice";
import { convertToAMPM } from "@/utils/convertToAMPM";
import { formatPhoneNo } from "@/utils/formatPhoneNo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import CustomInput from "../ui/customInput";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useToast } from "../ui/use-toast";
import { cn, isValid } from "@/lib/utils";
import { isWeekend, isWithinInterval, parse } from "date-fns";

const ZipCodeSheet = ({ type }) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid: isFormValid },
  } = useForm({ mode: "onChange" });
  const { toast } = useToast();
  const latNlong = useSelector((state) => state?.userLocation?.latlng);
  const [userEnteredZipCode, setUserEnteredZipcode] = useState("");

  const currentZipCode =
    useSelector((state) => state?.userLocation?.zipCode) || "94545";

  useEffect(() => {
    if (currentZipCode) {
      setUserEnteredZipcode(currentZipCode);
    }
  }, [currentZipCode, latNlong]);

  const { data, isSuccess, isFetching } = useGetStoreDistanceQuery(
    {
      zipCode: userEnteredZipCode,
      ...latNlong,
    },
    { skip: !userEnteredZipCode }
  );

  const { allStores } = data?.data || [];
  const filteredAllStores =
    allStores &&
    allStores.length > 0 &&
    allStores?.filter((store) => store.type !== "warehouse");

  const storeName = filteredAllStores?.[0]?.storeName;

  const [isZipSheet, setIsZipSheet] = useState(false);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      return toast({
        title: "Geolocation not supported",
        description: "Your browser does not support geolocation.",
        variant: "destructive",
      });
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Fetch pincode using Google Maps Geocoding API
          const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // Replace with your API key
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          );
          const data = await response.json();

          const pincode =
            data.results[0]?.address_components.find((component) =>
              component.types.includes("postal_code")
            )?.long_name || "Pincode not found";

          dispatch(
            setUserLocation({
              latlng: { lat: latitude, long: longitude },
              zipCode: pincode,
            })
          );
          // Show a success toast with the pincode
          toast({
            title: "Location fetched!",
            description: `Pincode: ${pincode}`,
          });
          setIsZipSheet(false);
        } catch {
          toast({ title: "Error fetching pincode", variant: "destructive" });
          setIsZipSheet(false);
        }
      },
      (err) => {
        toast({
          title: "Failed to fetch location",
          description: err.message,
          variant: "destructive",
        });
      }
    );
  };

  const handleZipCodeUpdate = (data) => {
    setUserEnteredZipcode(data.zipcode);
    dispatch(
      setUserLocation({ latlng: { lat: "", long: "" }, zipCode: data?.zipcode })
    );
    setIsZipSheet(false);
  };

  const handleOnStoreClick = (zipCode) => {
    setUserEnteredZipcode(zipCode);
    dispatch(
      setUserLocation({ latlng: { lat: "", long: "" }, zipCode: zipCode })
    );
    setIsZipSheet(false);
  };

  // Function to check if a store is open based on provided start and end times
  function isStoreOpen(store) {
    const now = new Date();
    const startTime = parse(store.weekdayStartTime, "HH:mm", now);
    const endTime = parse(store.weekdayEndTime, "HH:mm", now);

    // Return true if the current time is within the store's open interval
    return isWithinInterval(now, { start: startTime, end: endTime });
  }

  return (
    <Sheet open={isZipSheet} onOpenChange={setIsZipSheet}>
      <SheetTrigger asChild>
        {type === "store" ? (
          <div className="hover:text-gray-600 lg:hover:text-inherit lg:hover:bg-gray-50  lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3]  lg:w-full cursor-pointer">
            {storeName}
          </div>
        ) : (
          <div className="hover:text-gray-300 lg:hover:text-inherit lg:hover:bg-gray-50 pr-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3]  lg:w-full cursor-pointer">
            <p className="flex items-center gap-1">
              <TruckIcon className=" lg:hidden" /> Delivering to{" "}
              {userEnteredZipCode}
            </p>
          </div>
        )}
      </SheetTrigger>
      <SheetContent className="max-w-[500px] p-0 rounded-20" side={"left"}>
        <SheetTitle className="px-[30px] pt-[25px] pb-[22px] border-b border-gray-300">
          <div className="gap-[10px] items-center inline-flex text-[25px] leading-[37px] font-semibold">
            {type === "store"
              ? "Choose your store"
              : "Update Shipping Location"}
          </div>
        </SheetTitle>

        <div className="px-8 pb-8 h-[100vh] overflow-scroll">
          <div className="flex gap-7 py-5">
            {type === "store" ? (
              <p>Item and delivery options may vary by location</p>
            ) : (
              <p>
                Item availability and shipping options will change based on
                location.
              </p>
            )}
          </div>
          <form onSubmit={handleSubmit(handleZipCodeUpdate)}>
            <div className="flex justify-between items-center w-full h-[50px]">
              <div className="flex-grow">
                <Controller
                  name="zipcode"
                  control={control}
                  rules={{
                    required: "Zip code is required",
                    pattern: {
                      value: /^[0-9]{5}$/,
                      message: "Invalid zip code format",
                    },
                  }}
                  render={({ field }) => (
                    <CustomInput
                      label="Zip Code"
                      className="h-[50px] w-full mb-0 px-2"
                      isInvalid={isValid("zipcode", errors)}
                      errorMessage={errors.zipcode?.message}
                      {...field}
                    />
                  )}
                />
              </div>
              <Button
                type="submit"
                disabled={!isFormValid}
                className={cn(
                  "ml-3 px-5 mb-[1.25rem] rounded-[8px] h-[50px] font-semibold text-[14px] leading-[21px]",
                  isFormValid
                    ? "bg-red3 text-white cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                )}
              >
                Update
              </Button>
            </div>
          </form>

          <div
            className="flex cursor-pointer mb-6 mt-3"
            onClick={() => getCurrentLocation()}
          >
            <LocationIcon color="#CA082E" />
            <p className="px-2 underline underline-offset-2">
              Use My Current Location
            </p>
          </div>

          {type === "store" && (
            <div className="grid gap-[16px]">
              {filteredAllStores &&
                filteredAllStores.length > 0 &&
                filteredAllStores.map((store, index) => (
                  <div
                    key={index}
                    className="border-2 border-blue3 rounded-[14px] px-5 py-4 cursor-pointer"
                    onClick={() => handleOnStoreClick(store?.zipCode)}
                  >
                    {store?.zipCode === userEnteredZipCode ? (
                      <span className="inline-flex mb-2 bg-skyGreen font-medium py-1 border h-[26px] px-2 text-blue3 text-[12px] border-skyDarkGreen rounded-[5px]">
                        Currently shopping
                      </span>
                    ) : (
                      <span className="inline-flex mb-2 bg-skyGreen font-medium py-1 border h-[26px] px-2 text-blue3 text-[12px] border-skyDarkGreen rounded-[5px]">
                        {store?.distanceMiles} Miles
                      </span>
                    )}

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
                      <p
                        className={`text-[13px] ${
                          isStoreOpen(store) ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {isStoreOpen(store) ? "Open Now" : "Closed"}
                      </p>
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
                        <Image
                          src={CallIcon}
                          alt="icon"
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
      </SheetContent>
    </Sheet>
  );
};

export default ZipCodeSheet;
