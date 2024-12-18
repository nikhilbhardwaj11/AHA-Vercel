import TruckIcon from "@/assets/images/truck-icon.svg";
import CustomInput from "@/components/ui/customInput";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlusIcon from "@/icons/PlusIcon";
import { isValid } from "@/lib/utils";
import {
  useCreateAddressMutation,
  useGetAddressQuery,
} from "@/redux/apiSlices/userApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useToast } from "../ui/use-toast";
import CustomSelect from "../ui/customSelect";
import { states } from "@/lib/states";
import useCartDetails from "@/hooks/useCartDetails";
import DeliveryAddressSkeleton from "../Skeletons/DeliveryAddressSkeleton";
import { useUpdateCartMutation } from "@/redux/apiSlices/userCartApi";
import Loader from "../Loader";
import { validationRules } from "@/lib/validationRules";

const DeliveryAddress = ({ nextStep, getCartDetails, getAddressId }) => {
  const [updateCart, { isLoading }] = useUpdateCartMutation();
  const currentAddressId = getAddressId;
  const { data, isFetching } = useGetAddressQuery();

  const addressList = data?.data || [];

  const {
    billingAddresses = [],
    nonDefaultAddresses = [],
    shippingAddresses = [],
  } = addressList || {};

  const combinedAddresses = [
    billingAddresses,
    ...nonDefaultAddresses,
    shippingAddresses,
  ].filter((address) => Object.keys(address).length > 0);

  const uniqueAddressArray = [
    ...new Map(
      combinedAddresses.map((address) => address && [address.id, address])
    ).values(),
  ];

  const onAddressChange = (selectedAddress) => {
    updateCart({ addressId: selectedAddress, products: getCartDetails() });
  };

  return (
    <div className="flex gap-[25px] pl-[25px] mt-[18px]  lg:px-4">
      {isLoading && <Loader />}

      <Image
        src={TruckIcon}
        alt="icon"
        className="mt-[30px] w-[26px] h-[18px] lg:hidden"
      />
      {isFetching && <DeliveryAddressSkeleton />}
      {!isFetching && (
        <div className="flex flex-col gap-4 w-full">
          <div className="lg:flex gap-3 items-center mt-[10px] hidden ">
            <Image src={TruckIcon} alt="icon" className=" w-[26px] h-[18px]" />
            <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold ">
              Delivery Address
            </h4>
          </div>
          {uniqueAddressArray.length > 0
            ? uniqueAddressArray?.map((address, index) => (
                <div
                  key={index}
                  className="py-6 flex-1 pb-[20px] rounded-[13px] px-8 bg-white lg:px-4 lg:py-5"
                >
                  {index === 0 && (
                    <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold mb-3 lg:hidden">
                      Delivery Address
                    </h4>
                  )}

                  <div className="relative">
                    <RadioGroup
                      value={currentAddressId}
                      onValueChange={onAddressChange}
                      className="gap-6"
                    >
                      <div className="flex items-start space-x-2 my-1">
                        <RadioGroupItem
                          value={address.id}
                          id={address.id}
                          className="mt-[8px] absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 shadow-4 rounded-full"
                        />
                      </div>
                    </RadioGroup>
                    <div className="text-15px text-blue3">
                      <p className="font-medium">
                        {address.firstName} {address.lastName}
                      </p>
                      <p>{address.address1}</p>
                      <p>
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                      <p>{address.mobile}</p>
                    </div>
                  </div>
                </div>
              ))
            : "No Address Found Please Add New Address"}
          <AddressFormPopup />
        </div>
      )}
    </div>
  );
};

export default DeliveryAddress;

const AddressFormPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { id: userId } = useSelector((state) => state.userDetails);
  const [createAddress, { data, isSuccess, isLoading }] =
    useCreateAddressMutation();

  useEffect(() => {
    if (isSuccess) {
      const { msg, success } = data || {};

      if (success) {
        toast({
          title: msg,
        });
        setIsOpen(false);
      } else {
        toast({
          variant: "destructive",
          title: msg,
        });
      }
    }
  }, [isSuccess]);

  const onAddressSubmit = (data) => {
    createAddress({
      userId,
      // country: "United States",
      ...data,
    });
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="flex gap-4 px-8 py-2 cursor-pointer">
          <PlusIcon />
          <p className="font-semibold"> Add New Address</p>
        </div>
      </DialogTrigger>
      <DialogContent
        className="max-w-[959px] rounded-[20px] gap-0 "
        classNameBtn=" top-[27px] right-[30px]"
      >
        <DialogHeader className="text-left mb-6">
          <DialogTitle className=" leading-[22px] text-blue6 text-[20px]">
            Add New Address
          </DialogTitle>
        </DialogHeader>
        <AddressForm onSubmit={onAddressSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  );
};

const AddressForm = ({ onSubmit, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    requiredAlphabetOnly,
    alphabetOnlyIfExists,
    phoneNumber,
    address,
    zipCode,
  } = validationRules;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <DialogHeader className="text-left mb-6">
          {/* <DialogTitle className=" leading-[22px] text-blue6 text-[20px]">
            Contact Information
          </DialogTitle> */}
        </DialogHeader>
        <div className="mb-1 text-[15px]">Contact Information</div>

        <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1">
          <Controller
            name="firstName"
            control={control}
            rules={requiredAlphabetOnly("First Name")}
            render={({ field }) => (
              <CustomInput
                labelClassName=" bg-white"
                label="First Name"
                maxLength={25}
                isInvalid={isValid("firstName", errors)}
                errorMessage={errors.firstName?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={requiredAlphabetOnly("Last Name")}
            render={({ field }) => (
              <CustomInput
                label="Last Name"
                labelClassName=" bg-white"
                maxLength={25}
                isInvalid={isValid("lastName", errors)}
                errorMessage={errors.lastName?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="company"
            control={control}
            rules={alphabetOnlyIfExists}
            render={({ field }) => (
              <CustomInput
                labelClassName=" bg-white"
                label="Company"
                isInvalid={isValid("company", errors)}
                errorMessage={errors.company?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            rules={phoneNumber}
            render={({ field }) => (
              <CustomInput
                labelClassName=" bg-white"
                label="Phone Number"
                isInvalid={isValid("mobile", errors)}
                errorMessage={errors.mobile?.message}
                {...field}
              />
            )}
          />
        </div>
        <div className="mb-1">Address</div>
        <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1">
          <Controller
            name="address1"
            control={control}
            rules={address}
            render={({ field }) => (
              <CustomInput
                labelClassName=" bg-white"
                label="Street Address"
                isInvalid={isValid("address1", errors)}
                errorMessage={errors.address1?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            rules={requiredAlphabetOnly("City")}
            render={({ field }) => (
              <CustomInput
                label="City"
                labelClassName=" bg-white"
                isInvalid={isValid("city", errors)}
                errorMessage={errors.city?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="state"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomSelect
                label="State/Province"
                options={states}
                isInvalid={isValid("state", errors)}
                errorMessage="Please enter state/province"
                {...field}
              />
            )}
          />

          <Controller
            name="zipCode"
            control={control}
            rules={zipCode}
            render={({ field }) => (
              <CustomInput
                labelClassName=" bg-white"
                label="Zip/Postal Code"
                isInvalid={isValid("zipCode", errors)}
                errorMessage={errors.zipCode?.message}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button
          className="h-[50px] bg-red3   text-[16px] text-white rounded-[5px] w-full max-w-[227px] "
          type="submit"
          disabled={isLoading}
        >
          Save Address
        </Button>
      </div>
    </form>
  );
};
