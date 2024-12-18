"use client";

import FeedbackIcon from "@/assets/images/feedback-icon.svg";
import CustomInput from "@/components/ui/customInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect } from "react";
import { isValid } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";
import { Controller, useForm } from "react-hook-form";
import { useNewsletterMutation } from "@/redux/apiSlices/authApis";
import FeedBack from "../Feedback";

const Newsletter = ({ message = "No Results Found!" }) => {
  const { toast } = useToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  
  const [
    newsletter,
    { data, isSuccess, isLoading: isNewsletterLoading, isError, error: errMsg },
  ] = useNewsletterMutation();

  const isLoading = isNewsletterLoading;
  useEffect(() => {
    if (isSuccess) {
      if (data?.success) {
        toast({
          title: data?.message,
        });
      }
    }
    if (isError) {
      toast({
        variant: "destructive",
        title: errMsg?.data?.message,
      });
    }
  }, [isSuccess, isError]);

  const onSubmit = async (data) => {
    newsletter(data);
  };

  return (
    <div className="  w-[363px] mxl:w-full  mxl:row-start-2 mxl:col-start-5 mxl:col-end-7">
            <h2 className=" text-[20px] smd:text-[14px] smd:font-medium leading-[34px] font-bold uppercase">
              Sign up now
            </h2>
            <p className=" smd:text-[13px] mb-4 text-[14px] leading-[23px]">
              Stay in the loop, with exclusive offers and product previews.
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid">
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomInput
                          label="Name"
                          isInvalid={isValid("firstName", errors)}
                          errorMessage="Please enter name"
                          {...field}
                        />
                      )}
                    />                  
                  </div>
                  <div className="grid">
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <CustomInput
                          label="Email Address"
                          isInvalid={isValid("email", errors)}
                          errorMessage="Please enter email"
                          {...field}
                        />
                      )}
                    />
                  </div>
            
                  <div className=" flex items-center justify-center mt-[5px] mb-[13px]">
                    <Button
                      type="submit"
                      className=" text-[14px] w-full mzx-w-[300px] bg-blue2 text-white h-[38px] rounded-[8px]"
                      disabled={isLoading}
                    >
                      Sign Up
                    </Button>
                  </div>
                </form>
            {/*<Input
              className=" border-gray15 mb-3 h-[42px] py-[11px] px-[18px] rounded-[6px] text-[13px]"
              type="text"
              placeholder="Name"
            />
            <Input
              className=" border-gray15 mb-3 h-[42px] py-[11px] px-[18px] rounded-[6px] text-[13px]"
              type="email"
              placeholder="Email id"
            /> */}
            {/* <Button className=" smd:mt-3 py-[11px] px-[19px] border border-blue2 hover:bg-inherit text-blue2 mt-14 bg-transparent h-[54px] text-[15px] inline-flex items-center gap-3 rounded-[6px]">
              SignUp
            </Button> */}

            {/* <Button className=" smd:mt-3 py-[11px] px-[19px] border border-blue2 hover:bg-inherit text-blue2 mt-14 bg-transparent h-[54px] text-[15px] inline-flex items-center gap-3 rounded-[6px]">
              <Image src={FeedbackIcon} alt="icon" />
              Feedback
            </Button> */}
            <FeedBack />
          </div>
  );
};

export default Newsletter;
