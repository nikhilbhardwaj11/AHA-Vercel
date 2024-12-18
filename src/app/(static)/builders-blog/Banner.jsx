"use client";
import React from 'react'; 

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import builderBlog from "@/assets/images/static/builder-blog-banner.webp";

const Banner  = ({ brandName }) => { 

  // if (!DataResponse) {
  //   return <div className='max-w-[1480px] mx-auto my-0 py-14 px-5 lg:py-11  pb-[40px] '>
  //     <h2 class=" text-[21px] leading-[31px] font-bold text-blue2 text-center lg:text-[16px] lg:leading-[22px] lg:mb-[27px]">Data not found.</h2>
  //     </div>;
  // }
  return (
    <div className=" relative mb-[68px]">
      <AspectRatio ratio={1920 / 600}>
        <Image src={builderBlog} alt="banner" fill className="object-cover" />
      </AspectRatio> 
 
      <div className=" absolute left-[12.344vw] bottom-[2.115vw] max-w-[800px] z-[1]  ">
        {/* <span className='w-[280px] h-[120px] h-max-[90px]  inline-block text-left overflow-hidden'>
            <Image src={DataResponse.BannerData.logoImg} alt="banner" className=" object-contain object-left-bottom h-[100%] w-[100%]" />
        </span> */}
        <h2 className="text-[30px] font-semibold leading-[45px] text-white pb-[5px]">
          Parcel F 
          Mission Rock
            {/* {DataResponse.BannerData.subheadingImg ? ( <span className='w-[auto] h-[40px] inline-block overflow-hidden'>
                <Image src={DataResponse.BannerData.subheadingImg} alt="banner"   className="w-full h-full object-contain" />
            </span>):('')} */}
        </h2>
        <p className="text-[15px] font-medium leading-[25px] text-white pb-[16px] z-0 two-line-ellipsis h-[50px]">
          Meticulously Designed for Modern Living – The Next Hub of Urban Sophistication
        </p> 
      </div>
      
      <b className=' shadow-[inset_0px_-200px_250px_30px_rgba(0,0,0,0.7)] absolute w-full h-full top-0 left-0 '> </b>
      </div>
  );
};

export default Banner;
