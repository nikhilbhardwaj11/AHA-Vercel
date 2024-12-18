"use client";
import EditIcon from "@/assets/images/edit-icon.svg";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/ui/customInput";
import CustomSelect from "@/components/ui/customSelect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import DeleteIcon from "@/icons/DeleteIcon";
import { states } from "@/lib/states";
import { isValid } from "@/lib/utils";
import { validationRules } from "@/lib/validationRules";
import {
  useCreateAddressMutation,
  useDeleteAddressMutation,
  useEditAddressMutation,
  useGetAddressQuery,
} from "@/redux/apiSlices/userApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const MyAccountInfo = () => {
  const { toast } = useToast();
  const { data: addressList, isFetching } = useGetAddressQuery();
  const { data: list } = addressList || [];

  const [deleteAddress, { data, isSuccess }] = useDeleteAddressMutation();
  useEffect(() => {
    if (isSuccess) {
      const { msg, success } = data || {};

      if (success) {
        toast({
          title: msg,
        });
      } else {
        toast({
          variant: "destructive",
          title: msg,
        });
      }
    }
  }, [isSuccess]);

  const onDeleteClick = (id) => deleteAddress({ id });

  const defaultBillingAddress = list?.billingAddresses || null;
  const defaultShippingAddress = list?.shippingAddresses || null;
  const additionalAddress = list?.nonDefaultAddresses || [];

  const renderAddress = (details, index = 1) => {
    const {
      firstName,
      lastName,
      address1,
      city,
      state,
      zipCode,
      country,
      mobile,
    } = details || {};
    return (
      <div key={index}>
        <p>
          {firstName} {lastName}
        </p>
        <p>{address1}</p>
        <p className=" inline-flex gap-9 sm:flex-col sm:flex-wrap sm:gap-3">
          <span className="min-w-[305px] lg:min-w-[200px] sm:min-w-max ">
            {city}, {state}, {zipCode}, {country}
          </span>
          <span>{mobile}</span>
        </p>
      </div>
    );
  };
  return (
    <div className="flex-1 lg:w-full">
      <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:px-[20px] lg:pt-0 lg:bg-transparent ">
        {isFetching && <Loader />}
        <h3 className=" text-blue3 font-semibold text-[20px] leading-[22px] mb-[30px]">
          Address Book
        </h3>
        <div>
          {defaultBillingAddress || defaultShippingAddress ? (
            <div className=" grid gap-y-[38px] ">
              <div className=" py-6 px-[30px] rounded-[14px] shadow-inset11 relative  lg:bg-white lg:shadow-none">
                <div>
                  <h4 className=" text-[20px] leading-[22px] font-semibold mb-[27px] text-[#333E56]">
                    Billing Address
                  </h4>

                  <div className="flex justify-between">
                    <div className=" flex gap-[13px] flex-col">
                      <h4 className="text-[15px] leading-[16px] text-black font-semibold">
                        Default Billing Address
                      </h4>
                      {renderAddress(defaultBillingAddress)}
                    </div>

                    <AddressFormPopup formData={defaultBillingAddress} />
                  </div>
                </div>
              </div>
              <div className=" py-6 px-[30px] rounded-[14px] shadow-inset11 relative  lg:bg-white lg:shadow-none">
                <div>
                  <h4 className=" text-[20px] leading-[22px] font-semibold mb-[27px] text-[#333E56]">
                    Shipping Address
                  </h4>

                  <div className="pt-[38px">
                    <div className="flex justify-between">
                      <div className=" flex gap-[13px] flex-col">
                        <h4 className="text-[15px] leading-[16px] text-black font-semibold">
                          Default Shipping Address
                        </h4>
                        {renderAddress(defaultShippingAddress)}
                      </div>
                      <AddressFormPopup formData={defaultShippingAddress} />
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-6 px-[30px] rounded-[14px] shadow-inset11 relative  lg:bg-white lg:shadow-none">
                <div>
                  <h4 className=" text-[20px] leading-[22px] font-semibold mb-[27px] text-[#333E56]">
                    Additional Address
                  </h4>

                  <div>
                    <div className="flex justify-between ">
                      <div className=" flex gap-[20px] flex-col w-full">
                        {/* <h4 className="text-[15px] leading-[16px] text-black font-semibold">
                          Additional Address
                        </h4> */}
                        {additionalAddress.length > 0 ? (
                          additionalAddress.map((address, index) => (
                            <div
                              className="flex justify-between border-b border-gray22 pb-[20px] sm:flex-col sm:gap-1"
                              key={address.id}
                            >
                              {renderAddress(address, index)}{" "}
                              <div className="flex items-center gap-3 sm:self-end">
                                <AddressFormPopup formData={address} />
                                <button
                                  className=" inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full"
                                  onClick={() => onDeleteClick(address.id)}
                                >
                                  <DeleteIcon />
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-gray20 text-[12px] leading-[16px]">
                            You have no other address entries in your address
                            book.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AddressFormPopup type="new" />
            </div>
          ) : (
            !isFetching && <AddressFormPopup type="fresh" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAccountInfo;

const AddressFormPopup = ({ formData = {}, type = "edit" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { id: userId } = useSelector((state) => state.userDetails);
  const [
    createAddress,
    { data: createRes, isSuccess: isCreateSuccess, isLoading: createLoading },
  ] = useCreateAddressMutation();

  const [
    editAddress,
    { data: editRes, isSuccess: isEditSuccess, isLoading: editLoading },
  ] = useEditAddressMutation();
  const isLoading = createLoading || editLoading;

  useEffect(() => {
    if (isCreateSuccess || isEditSuccess) {
      const { msg, success } = isCreateSuccess ? createRes : editRes || {};

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
  }, [isCreateSuccess, isEditSuccess]);

  const onAddressSubmit = (data, mode) => {
    if (mode === "edit") {
      const {
        address2,
        updatedBy,
        createdBy,
        country,
        // userId,
        isDefault,
        isRemote,
        // isAutomateMesaage,
        createdAt,
        updatedAt,
        ...newData
      } = data;
      editAddress({
        ...newData,
        isShipping: newData.isShipping || false,
        isBilling: newData.isBilling || false,
      });
    } else {
      createAddress({
        userId,
        // country: "United States",
        ...data,
      });
    }
  };
  return (
    <>
      {type !== "fresh" ? (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            {type === "new" ? (
              <Button className="max-w-[188px] h-[60px] rounded-[5px] my-0 mx-auto px-9">
                Add New Address
              </Button>
            ) : (
              <button className=" inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full">
                <Image src={EditIcon} alt="edit-icon" />
              </button>
            )}
          </DialogTrigger>
          <DialogContent
            className="max-w-[959px] rounded-[20px] gap-0 lg:w-[90%] max-h-[90vh] overflow-auto "
            classNameBtn=" top-[27px] right-[30px]"
          >
            <DialogHeader className="text-left mb-6">
              <DialogTitle className=" leading-[22px] text-blue6 text-[20px]">
                {type === "new" ? "Add New Address " : "Edit Address"}
              </DialogTitle>
            </DialogHeader>
            <AddressForm
              onFormSubmit={onAddressSubmit}
              isLoading={isLoading}
              formData={formData}
              type={type}
            />
          </DialogContent>
        </Dialog>
      ) : (
        <AddressForm
          onFormSubmit={onAddressSubmit}
          isLoading={isLoading}
          type="fresh"
        />
      )}
    </>
  );
};

const AddressForm = ({ onFormSubmit, isLoading, type, formData = {} }) => {
  const { firstName, lastName } = useSelector((state) => state.userDetails);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { firstName, lastName, ...formData } });
  const { isBilling, isShipping } = formData;

  const {
    requiredAlphabetOnly,
    alphabetOnlyIfExists,
    phoneNumber,
    address,
    zipCode,
  } = validationRules;

  const onSubmit = (data) => {
    let payloads = { ...data };
    const mode = type === "edit" ? "edit" : "add";
    onFormSubmit(payloads, mode);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <div className="mb-1">Contact Information</div>
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

          <div className="flex  space-x-2">
            <Controller
              name="isAutomateMesaage"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms1"
                  onCheckedChange={(e) => field.onChange(e)}
                  checked={field.value}
                />
              )}
            />
            <label
              htmlFor="terms1"
              className="text-sm text-gray29 leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By providing the phone number above, you consent to receive
              automated text messages from Airport Home Appliance&apos;s about
              your order and delivery. Messages and data rates may apply. Number
              of messages depends on order details. See Airport Home
              Appliance&apos;s{" "}
              <Link
                href="/terms-and-conditions"
                className="underline inline-block"
              >
                {" "}
                Terms & Conditions,
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy-cookie-restriction-mode"
                className="underline inline-block"
              >
                Privacy Policy.
              </Link>
            </label>
          </div>
          {type !== "fresh" && (
            <>
              {" "}
              {!isBilling ? (
                <div className="flex  space-x-2">
                  <Controller
                    name="isBilling"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="billing"
                        onCheckedChange={(e) => field.onChange(e)}
                        checked={field.value}
                      />
                    )}
                  />
                  {/* <Checkbox id="billing" /> */}
                  <label
                    htmlFor="billing"
                    className="text-sm text-gray29 leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Use as my default billing address
                  </label>
                </div>
              ) : (
                <div>
                  <p className=" inline-block my-1  bg-[#d3d3d3] text-[14px] rounded-[4px] py-[1px] px-[6px]">
                    It&apos;s a default billing address.
                  </p>
                </div>
              )}
              {!isShipping ? (
                <div className="flex  space-x-2">
                  <Controller
                    name="isShipping"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="shipping"
                        onCheckedChange={(e) => field.onChange(e)}
                        checked={field.value}
                      />
                    )}
                  />
                  <label
                    htmlFor="shipping"
                    className="text-sm text-gray29 leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Use as my default shipping address
                  </label>
                </div>
              ) : (
                <div>
                  <p className=" inline-block bg-[#d3d3d3] my-1 text-[14px] rounded-[4px] py-[1px] px-[6px]">
                    It&apos;s a default shipping address.
                  </p>
                </div>
              )}
            </>
          )}
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
    </div>
  );
};
