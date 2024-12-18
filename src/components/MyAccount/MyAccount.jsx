"use client";
import EditIcon from "@/assets/images/edit-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/ui/customInput";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { isValid } from "@/lib/utils";
import {
  useEditProfileMutation,
  useUpdateEmailPasswordMutation,
} from "@/redux/apiSlices/userApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useToast } from "../ui/use-toast";
import { formatPhoneNo } from "@/utils/formatPhoneNo";

const MyAccountInfo = () => {
  const details = useSelector((state) => state.userDetails);
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [updateEmailPassword, { data, isSuccess, isLoading, isError }] =
    useUpdateEmailPasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      if (data?.success) {
        toast({
          title: data?.msg,
        });
      } else {
        toast({
          variant: "destructive",
          title: data?.msg,
        });
      }
    }
    if (isError && data === undefined) {
      toast({
        variant: "destructive",
        title: "Invalid password",
      });
    }
  }, [isSuccess, isError]);

  const onUpdateEmailPassword = (data) => {
    updateEmailPassword(data);
  };

  const { firstName, lastName, email, mobile, id } = details;
  return (
      <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:px-[20px] lg:w-full lg:rounded-none lg:pt-[10px] lg:bg-transparent">
        <div className="flex gap-4 mb-6  items-center">
          <h3 className=" text-blue6 font-semibold text-[24px] leading-[26px]">
            My Account
          </h3>
          <p className=" text-[15px] leading-[16px] font-semibold ">#{id}</p>
        </div>

        <div className="grid gap-[14px] lg:bg-white lg:rounded-[12px] lg:gap-0">
          <div className=" py-6 px-[30px] pb-[50px] rounded-[14px] shadow-inset11 relative lg:rounded-none lg:shadow-none lg:p-5 ">
            <h3 className=" text-blue3 font-semibold text-[20px] leading-[22px] mb-[30px] lg:text-[17px] lg:mb-[17px]">
              Account Information
            </h3>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className=" lg:top-4 absolute top-[28px] right-[36px] inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full lg:h-[40px] lg:w-[40px]">
                  <Image src={EditIcon} alt="edit-icon" className="lg:w-[19px] lg:h-[19px]" />
                </button>
              </DialogTrigger>
              {open && (
                <UserEditPopup userDetails={details} closeModel={setOpen} />
              )}
            </Dialog>
            <div className=" flex gap-x-[76px] gap-y-[20px] lg:gap-[15px] lg:justify-between lg:flex-wrap">
              <div className=" flex gap-1 flex-col">
                <p className="text-gray25 text-[12px] leading-[16px]">Name</p>
                <h4 className="text-[15px] leading-[16px] text-black font-semibold">
                  {firstName} {lastName}
                </h4>
              </div>
              <div className=" flex gap-1 flex-col">
                <p className="text-gray25 text-[12px] leading-[16px]">Email</p>
                <h4 className="text-[15px] leading-[16px] text-black font-semibold">
                  {email}
                </h4>
              </div>
              <div className=" flex gap-1 flex-col">
                <p className="text-gray25 text-[12px] leading-[16px]">Phone</p>
                <h4 className="text-[15px] leading-[16px] text-black font-semibold lg:text-[13px]">
                  {formatPhoneNo(mobile)}
                </h4>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full lg:p-[15px] lg:pt-0">
            <AccordionItem
              value="item-1"
              className=" py-[6px] px-[30px] rounded-[14px] shadow-inset11 relative mb-[14px] lg:px-[20px] "
            >
              <AccordionTrigger className=" text-blue6 text-[18px] leading-[22px] font-semibold lg:text-[15px] lg:leading-[20px] ">
                Change Password
              </AccordionTrigger>
              <AccordionContent>
                <ChangePasswordView
                  onUpdate={onUpdateEmailPassword}
                  isLoading={isLoading}
                />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className=" py-[6px] px-[30px] rounded-[14px] shadow-inset11 relative mb-[14px] lg:px-[20px]"
            >
              <AccordionTrigger className=" text-blue6 text-[18px] leading-[22px] font-semibold lg:text-[15px] lg:leading-[20px]">
                Change Email
              </AccordionTrigger>
              <AccordionContent>
                <ChangeEmailView
                  onUpdate={onUpdateEmailPassword}
                  isLoading={isLoading}
                />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
  );
};

export default MyAccountInfo;

const UserEditPopup = ({ userDetails, closeModel }) => {
  const { toast } = useToast();
  const [editProfile, { data, isLoading, isSuccess }] =
    useEditProfileMutation();
  useEffect(() => {
    if (isSuccess) {
      const { msg, success } = data;
      if (success) {
        toast({
          title: msg,
        });
        closeModel(false);
      } else {
        toast({
          variant: "destructive",
          title: msg,
        });
      }
    }
  }, [isSuccess]);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userDetails) {
      reset(userDetails);
    }
  }, [userDetails]);

  const onSubmit = (data) => {
    console.log(data);
    editProfile(data);
  };
  return (
    <DialogContent
      className="max-w-[959px] rounded-[20px] gap-0 lg:w-[90%] "
      classNameBtn=" top-[27px] right-[30px]"
    >
      <DialogHeader className="text-left mb-6">
        <DialogTitle className=" leading-[22px] text-blue6 text-[20px]">
          Edit Account Information
        </DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1">
            <Controller
              name="firstName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  labelClassName=" bg-white"
                  label="First Name"
                  isInvalid={isValid("firstName", errors)}
                  errorMessage="Please enter first name"
                  {...field}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  label="Last Name"
                  labelClassName=" bg-white"
                  isInvalid={isValid("lastName", errors)}
                  errorMessage="Please enter last name"
                  {...field}
                />
              )}
            />
            <CustomInput
              label="Language"
              labelClassName=" bg-white"
              value="English"
              disabled
            />
            <Controller
              name="mobile"
              control={control}
              rules={{
                  required: true,
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter a valid 10-digit US phone number",
                  },
                }}
              render={({ field }) => (
                <CustomInput
                  labelClassName=" bg-white"
                  label="Phone Number"
                  isInvalid={isValid("mobile", errors)}
                  errorMessage="Please enter a valid 10-digit US phone number"
                  disabled
                  {...field}
                />
              )}
            />
          </div>
          <div className="flex  space-x-2 mb-3">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-gray29 leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Allow remote shipping assistance
            </label>
          </div>
          <div className="flex  space-x-2">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm text-gray29 leading-[20px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              By providing the phone number above, you consent to receive
              automated text messages from Airport Home Appliance&apos;s about
              your order and delivery. Messages and data rates may apply. Number
              of messages depends on order details. See Airport Home
              Appliance&apos;s <u>Terms and Conditions</u> and{" "}
              <u>Privacy Policy.</u>
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button
            className="max-w-[188px] h-[60px] bg-red3 rounded-[5px] my-0 mx-auto px-9 lg:h-[45px]"
            type="submit"
          >
            Save changes
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};

const ChangePasswordView = ({ onUpdate, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    const { confirmNewPassword, ...rest } = data;
    onUpdate(rest);
  };
  return (
    <form className="max-w-[440px]" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomInput
            type="password"
            labelClassName=" bg-white"
            label="Current Password"
            isInvalid={isValid("password", errors)}
            errorMessage="Please enter current password"
            {...field}
          />
        )}
      />
      <Controller
        name="newPassword"
        control={control}
        rules={{
          required: "Please enter new password",
          validate: (value) =>
            value !== getValues("password") ||
            "new password is not same as old password",
        }}
        render={({ field }) => (
          <CustomInput
            type="password"
            labelClassName=" bg-white"
            label="Enter New  Password"
            isInvalid={isValid("newPassword", errors)}
            errorMessage={errors?.newPassword?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="confirmNewPassword"
        control={control}
        rules={{
          required: "Please enter confirm new password",
          validate: (value) =>
            value === getValues("newPassword") || "Passwords do not match",
        }}
        render={({ field }) => (
          <CustomInput
            type="password"
            labelClassName=" bg-white"
            label="Confirm New  Password"
            isInvalid={isValid("confirmNewPassword", errors)}
            errorMessage={errors?.confirmNewPassword?.message}
            {...field}
          />
        )}
      />

      <Button
        className="max-w-[188px] h-[60px] bg-red3 rounded-[5px] mb-0 mt-[8px] mx-auto px-9 lg:h-[45px]"
        type="submit"
        disabled={isLoading}
      >
        Save Details
      </Button>
    </form>
  );
};

const ChangeEmailView = ({ onUpdate, isLoading }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className="max-w-[440px]" onSubmit={handleSubmit(onUpdate)}>
      <Controller
        name="newEmail"
        control={control}
        rules={{
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Please enter  a valid new email",
          },
        }}
        render={({ field }) => (
          <CustomInput
            type="text"
            labelClassName=" bg-white"
            label=" New Email"
            isInvalid={isValid("newEmail", errors)}
            errorMessage="Please enter  a valid new email"
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <CustomInput
            type="password"
            labelClassName=" bg-white"
            label=" Password"
            isInvalid={isValid("password", errors)}
            errorMessage="Please enter  password"
            {...field}
          />
        )}
      />

      <Button
        className="max-w-[188px] h-[60px] bg-red3 rounded-[5px] mb-0 mt-[8px] mx-auto px-9 lg:h-[45px]"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Saving" : "Save"} Details
      </Button>
    </form>
  );
};
