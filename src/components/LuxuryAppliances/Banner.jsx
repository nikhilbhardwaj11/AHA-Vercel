"use client";
import React, { useEffect } from 'react';

import BannerImage from "@/assets/images/luxury-appliances-banner.png";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image"; 


const Banner = () => {
  
  return (
    <div className=" relative mb-[68px] slg:mb-[30px] ">
      <div className='sm:hidden block'>
      <AspectRatio ratio={1920 / 600} >
        <Image src={BannerImage} alt="banner" fill className="object-cover" />
      </AspectRatio> 
      </div>
      <div className='hidden sm:block'>
      <AspectRatio ratio={375 / 200} >
        <Image src={BannerImage} alt="banner" fill className="object-cover" />
      </AspectRatio> 
      </div>
 
      <div className=" absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40 ">
        {/* <AspectRatio ratio={1920 / 600}>
          <Image
            src={OverlayImage}
            alt="banner"
            fill
            className="object-cover"
          />
        </AspectRatio> */}
      </div>
      <div className=" absolute left-[12.344vw] bottom-[4.115vw] max-w-[800px] lg:left-[53px] lg:right-[100px] sm:left-[16px] sm:right-10 sm:bottom-7">
        <h2 className="text-[30px] font-semibold leading-[45px] text-white pb-[5px] lg:text-[24px] lg:leading-[36px]">
          Luxury Appliances
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-white pb-[16px] lg:text-[12px] lg:leading-[20px] two-line-dots-mobile lg:pb-0 lg:mb-[15px]">
          At Airport Home Appliance, we are the premier destination for luxury
          and premium appliances, meticulously sourced from the world&apos;s
          most coveted and sought-after brands. Our distinguished selection is
          thoughtfully curated and enhanced by our dedicated Appliance Experts.
        </p>
        <button className=" rounded-[8px] py-[12px] text-[14px] leading-[18px] px-[20px] bg-blue2 text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
