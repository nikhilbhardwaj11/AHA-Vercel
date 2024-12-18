"use client";

import CategoryIamge from "@/assets/images/category-image-1.png";
import galleryArrow from "@/assets/images/static/galleryArrow.webp";
 
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";
import { useGetluxuryListsQuery } from "@/redux/apiSlices/luxuryappliancesApi";

import { allBrandList } from "@/components/BrandDetail/arraybrandlist";
import { useState } from "react";


const Card = ({item, altTxt}) => {
  return (
    <div className=" px-[5px] w-full max-w-[228px]  ">
      <div className=" relative *:rounded-[15px]  flex flex-col  h-full  ">
        <div className=" relative  max-w-full w-full *:rounded-[15px] h-[225px] ">
          <Image
            src={item?.img}
            alt={item.title} 
            fill
            className="w-full object-contain h-[246px]   "
          />
        </div>
        <div className="block">
            <p className="   bottom-[30px] p-2 pt-[20px] text-[18px] text-center leading-[25px] font-medium">
              {item?.title}
            </p>
           
          </div>
      </div>
    </div>
  );
};

const Category = ({ brandName }) => { 
  const { data, isSuccess } = useGetluxuryListsQuery({ limit: 10, page : 1 });
  const luxuryListsData = isSuccess && data.data; 
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);
  const DataResponse = allBrandList.find(item => item[brandName])?.[brandName]; 
  const brandListOptions = Array.isArray(DataResponse?.brandOptions) ? DataResponse.brandOptions : [];
  
  return ( 
    <div className={`max-w-[1480px] mx-auto my-0 px-1 pb-[40px]  ${!brandListOptions || brandListOptions.length === 0 || brandListOptions.every(item => item === '') ? 'hidden' : ''}`}>

     
        <div className="flex justify-center gap-5">
        {brandListOptions?.length > 0 && 
            brandListOptions?.map((item, index) => (
              <Card item={item} key={index} />
            ))}</div> 
            <div className="flex items-center justify-center mt-8"><button className="h-[50px] w-full max-w-[200px] bg-[#0C2340] font-semibold rounded-[35px] text-white">
            Shop All
            </button></div>
    </div>
  );
};

export default Category;
