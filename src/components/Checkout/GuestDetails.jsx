import EditIcon from "@/assets/images/edit-icon.svg";
import TruckIcon from "@/assets/images/truck-icon.svg";
import CustomInput from "@/components/ui/customInput";
import { states } from "@/lib/states";
import { isValid } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import CustomSelect from "../ui/customSelect";
import { useState } from "react";
import { validationRules } from "@/lib/validationRules";

const GuestDetails = ({ onChange }) => {
  const { address, email } = useSelector((state) => state.orderDetails || {});
  const [editable, setEditable] = useState(false);

  const {
    firstName,
    lastName,
    address1,
    city,
    state,
    zipCode,
    country,
    mobile,
  } = address || {};

  const onSubmit = (data) => {
    onChange({ address: data });
    editable && setEditable(false);
  };

  return (
    <>
      <div className="hidden lg:flex gap-3 px-4">
        <Image src={TruckIcon} alt="icon" className=" mt-1 w-[26px] h-[18px]" />
        <div>
          <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold">
            Email
          </h4>
          <p>
            Already have an account?{" "}
            <Link href={"/login"} className="font-semibold underline">
              Login here
            </Link>
          </p>
        </div>
      </div>

      <div className="flex gap-[25px] pl-[25px] mt-[18px] lg:px-4">
        <Image
          src={TruckIcon}
          alt="icon"
          className="mt-[30px] w-[26px] h-[18px] lg:hidden"
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="py-6 flex-1 pb-[20px] rounded-[13px] px-8 bg-white lg:px-4 lg:py-5">
            <div className="lg:hidden">
              <div className="mb-4">
                <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold">
                  Email
                </h4>
                <p>
                  Already have an account?{" "}
                  <Link href={"/login"} className="font-semibold underline">
                    Login here
                  </Link>
                </p>
              </div>
            </div>
            <CustomInput
              value={email || ""}
              labelClassName=" bg-white"
              label="Email"
              onChange={(e) => onChange({ email: e.target.value })}
            />
            <h4 className="text-blue3 text-[17px] leading-[25px] font-semibold mb-3">
              Shipping Address
            </h4>
            <div className="mb-1 text-[15px]">Contact Information</div>

            {address && !editable ? (
              <div className=" py-6 px-[30px] rounded-[14px] shadow-inset11 relative  lg:bg-white lg:shadow-none">
                <div>
                  <div className="flex justify-between">
                    <div className=" flex gap-[13px] flex-col">
                      <div>
                        <p>
                          {firstName} {lastName}
                        </p>
                        <p>{address1}</p>
                        <p className=" inline-flex gap-9">
                          <span className="min-w-[305px]">
                            {city}, {state}, {zipCode}, {country}
                          </span>
                          <span>{mobile}</span>
                        </p>
                      </div>
                    </div>
                    <button
                      className="  inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full"
                      onClick={() => setEditable(true)}
                    >
                      <Image src={EditIcon} alt="edit-icon" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <AddressForm onSubmit={onSubmit} address={address} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestDetails;

const AddressForm = ({ onSubmit, address: defaultAddress = {} }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { ...defaultAddress } });
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
          //   onClick={nextStep}
          className="h-[50px] bg-red3   text-[16px] text-white rounded-[5px] w-full max-w-[227px] "
          type="submit"
        >
          Save Address
        </Button>
      </div>
    </form>
  );
};
