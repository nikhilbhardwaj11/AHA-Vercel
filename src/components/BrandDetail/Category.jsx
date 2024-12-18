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
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightArrow />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftArrow />
    </div>
  );
}
const Card = ({item, altTxt}) => {
  return (
    <div className=" px-[5px] ">
      <div className=" relative *:rounded-[15px] overflow-hidden flex items-end  ">
        <div className=" relative  h-[366px] max-w-full w-full *:rounded-[15px]">
          <Image
            src={item?.img}
            alt={item.title} 
            className="w-full h-full object-cover  "
            fill
          />
        </div>
        <div className="shadow-[inset_0px_-110px_60px_-10px_rgba(0,0,0,0.6)] border-[#e1e1e1] border-[1px] absolute left-0 bottom-0 h-[100%] w-[100%] block">
            <p className=" absolute left-[10px] bottom-[30px] text-left   pt-[12px] pb-[15px] px-2 text-[20px] leading-6 text-white  font-medium">
              {item?.title}
            </p>
            <button className="   h-[49px]  w-[49px] absolute right-5 bottom-4"  >
              <Image
                src={galleryArrow}
                alt="button" 
                className=" object-cover"
                fill
              /></button>
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
 
 
  const commonSettings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll:3, 
    responsive: [
      {
        breakpoint: 1385,
        settings: {
          slidesToShow: 5, 
        },
      },
    ],
    appendDots: (dots) => {
      setTotalSlides(dots.length);
      return <ul>{dots}</ul>;
    },
    afterChange: (current) => { 
      const a = brandListOptions?.length / totalSlides;
      const calculateIndex = (current + a) / a;
      setCurrentIndex(Math.round(calculateIndex));
    },
  };
  const settings = {
    ...commonSettings,
    dots: true,
    infinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // adaptiveHeight: true,
  }; 
  return ( 
    <div className={`max-w-[1480px] mx-auto my-0 px-1 pb-[40px]  ${!brandListOptions || brandListOptions.length === 0 || brandListOptions.every(item => item === '') ? 'hidden' : ''}`}>

      <CustomSlider>
        <Slider {...settings}> 
         {brandListOptions?.length > 0 && 
            brandListOptions?.map((item, index) => (
              <Card item={item} key={index} />
            ))} 
        </Slider>
        <div className="count font-medium text-[17px] text-blue3"> {currentIndex}/{totalSlides}</div>
      </CustomSlider>
    </div>
  );
};

export default Category;

const CustomSlider = styled.div`
  padding-bottom: 80px;
  position: relative;
  .count {
    position: absolute;
    bottom: 25px;
    right: calc(50% + -474px);
  }

  .slick-next,
  .slick-prev {
    border-radius: 50%;
    background-color: #0b223c;

    > svg {
      > g {
        path {
          fill: #fff;
          fill-opacity: 1;
        }
      }
    }
  }
  .slick-disabled {
    background-color: #ffffff;
    > svg {
      > g {
        path {
          fill: #000000;
          fill-opacity: 1;
        }
      }
    }
  }
  .slick-prev,
  .slick-next {
    top: unset;
    bottom: -85px;
    height: 43px;
    width: 43px;
    &::before {
      display: none;
    }
  }
  .slick-slide {
    img {
      margin: 0 auto;
    }
  }
  .slick-prev {
    left: calc(50% + 390px);
  }

  .slick-next {
    right: calc(50% + -525px);
  }
  .slick-dots {
    display: flex !important;
    max-width: 724px;
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: -43px;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: transparent;
    background-color: #000000;
    border-radius: 30px;
  }
  .slick-dots li {
    height: 4px;
    padding: 0;
    width: auto;
    flex: 1;
    margin: 0;

    button {
      font-size: 0;
      line-height: 0;
      height: 4px;
      width: 100%;
      margin: 0;
      &:before {
        font-size: 6px;
        line-height: 4px;
        height: 4px;
        opacity: 1;
        color: transparent;
        width: 100%;
        background: #d0d0d0;
      }
    }
  }
`;
