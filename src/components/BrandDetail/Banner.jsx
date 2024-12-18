"use client";
import React, { useEffect, useState } from 'react'; 
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { isValid } from "@/lib/utils";
import { useToast } from "../ui/use-toast";
import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/customInput";
import { Controller, useForm } from "react-hook-form";
 
import BannerImage from "@/assets/images/luxury-appliances-banner.png";
import mailIconWhite from "@/assets/images/static/mailIconWhite.webp";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { allBrandList } from "@/components/BrandDetail/arraybrandlist";
 
const Banner  = ({ brandName }) => { 

  const [open, setOpen] = useState(false);

  const DataResponse = allBrandList.find(item => item[brandName])?.[brandName];

  if (!DataResponse) {
    return <div className='max-w-[1480px] mx-auto my-0 py-14 px-5 lg:py-11  pb-[40px] '>
      <h2 class=" text-[21px] leading-[31px] font-bold text-blue2 text-center lg:text-[16px] lg:leading-[22px] lg:mb-[27px]">Data not found.</h2>
      </div>;
  }
  return (
    <div className=" relative mb-[68px]">
      <AspectRatio ratio={1920 / 600}>
        <Image src={DataResponse.BannerData.bannerImg} alt="banner" fill className="object-cover" />
      </AspectRatio> 
 
      <div className=" absolute left-[12.344vw] bottom-[2.115vw] max-w-[800px] z-[1]  ">
        <span className='w-[280px] h-[120px] h-max-[90px]  inline-block text-left overflow-hidden'>
            <Image src={DataResponse.BannerData.logoImg} alt="banner" className=" object-contain object-left-bottom h-[100%] w-[100%]" />
        </span>
        <h2 className="text-[30px] font-semibold leading-[45px] text-white pb-[5px]">
            {DataResponse.BannerData.subheading}
            {DataResponse.BannerData.subheadingImg ? ( <span className='w-[auto] h-[40px] inline-block overflow-hidden'>
                <Image src={DataResponse.BannerData.subheadingImg} alt="banner"   className="w-full h-full object-contain" />
            </span>):('')}
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-white pb-[16px] z-0 two-line-ellipsis h-[50px]">
          {DataResponse.BannerData.descriptionTxt}
        </p> 
      </div>
      
      <b className=' shadow-[inset_0px_-200px_250px_30px_rgba(0,0,0,0.7)] absolute w-full h-full top-0 left-0 '> </b>
     

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button className=' absolute text-[17px] leading-[18px] text-left pl-5 text-white right-10 bottom-10 bg-[#0C2340] rounded-sm border-[#CCCCCC] border-[1px] h-[60px] w-[370px]' > Contact a Thermador Specialist
            <span className=' absolute top-[17px] w-[34px] h-[25px] right-5'> <Image src={mailIconWhite} alt="banner" fill className="object-contain relative" /></span> 
          </button>
        </DialogTrigger>
        {open && (
          <ThermadorSpecialist closeModel={setOpen} />
        )}
      </Dialog>
  
      </div>
  );
};

export default Banner;

const ThermadorSpecialist = ({ closeModel }) => {
  const { toast } = useToast();
  // const [editProfile, { data, isLoading, isSuccess }] =
  //   useEditProfileMutation();

  // useEffect(() => {
  //   if (isSuccess) {
  //     const { msg, success } = data;
  //     if (success) {
  //       toast({
  //         title: msg,
  //       });
  //       closeModel(false);
  //     } else {
  //       toast({
  //         variant: "destructive",
  //         title: msg,
  //       });
  //     }
  //   }
  // }, [isSuccess]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);
    editProfile(data);
  };
  return (
    <DialogContent
      className="max-w-[500px] rounded-[20px] gap-0 lg:w-[50%] "
      classNameBtn=" top-[27px] right-[30px]"
    >
      <DialogHeader className="text-left mb-6">
        <DialogTitle className=" leading-[22px] text-blue6 text-[20px]">
          Contact a Thermador Specialist          
        </DialogTitle>
        <p>Please provide your details below, and we will be in touch shortly</p>
      </DialogHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-1">
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
              name="email"
              rules={{
                required: "Please enter email ",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter valid email",
                },
              }}
              control={control}
              render={({ field }) => (
                <CustomInput
                  label="Email"
                  isInvalid={isValid("email", errors)}
                  errorMessage={errors?.email?.message}
                  {...field}
                />
              )}
              />        
            
            <Controller
              name="Phone"
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
                  isInvalid={isValid("Phone", errors)}
                  errorMessage="Please enter a valid 10-digit US phone number"
                  disabled
                  {...field}
                />
              )}
            />

            <Controller
              name="zipCode"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  label="Zip Code"
                  labelClassName=" bg-white"
                  isInvalid={isValid("zipCode", errors)}
                  errorMessage="Please enter zip code"
                  {...field}
                />
              )}
            />

            <Controller
              name="question"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomInput
                  label="Question"
                  labelClassName=" bg-white"
                  isInvalid={isValid("question", errors)}
                  errorMessage="Please enter question"
                  {...field}
                />
              )}
            />            
          </div>
        </div>

        <DialogFooter>
          <Button
            className="max-w-[188px] h-[60px] bg-red3 rounded-[5px] my-0 mx-auto px-9 lg:h-[45px]"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
};
