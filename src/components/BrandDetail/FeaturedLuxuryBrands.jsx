"use client";

import DummyCardTopImg from "@/assets/images/featured-luxury-brands-card-image-1.png";
import DummyCardTop1Img from "@/assets/images/featured-luxury-brands-card-image-2.png";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";

import Image from "next/image";
import Slider from "react-slick";
import styled from "styled-components";

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
const Card = () => {
  return (
    <div className=" px-4">
      <div className=" rounded-[15px] pb-[16px] pr-[31px] pl-[24px] relative ">
        <div className=" h-[201px] relative w-full rounded-[24px] overflow-hidden">
          <Image
            src={DummyCardTopImg}
            fill
            className=" object-cover"
            alt="top-img"
          />
        </div>
        <div className="mt-[15px]  mb-[16px] max-w-[170px] relative w-full h-[55px] my-0 mx-auto">
          <Image
            src={DummyCardTop1Img}
            alt="top-img"
            fill
            className=" object-contain"
          />
        </div>
        <div className="pl-[55px] text-[14px] leading-[16px]">
          <p className=" mb-3">A New Generation of Luxury</p>
          <p className=" mb-4">
            Delivering performance, design and precision, we honor the ones who
            are producing it, the ones preparing it, and most of all, the ones
            lucky enough to be enjoying it.
          </p>
          <button className="text-blue3 border border-blue3 py-2 px-[22px] rounded-[50px]">
            Learn More
          </button>
        </div>
        <div className=" white-card" />
        <div className=" blue-card" />
      </div>
    </div>
  );
};
const FeaturedLuxuryBrands = () => {
  const commonSettings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1385,
        settings: {
          slidesToShow: 4,
          // slidesToScroll: 1,
        },
      },
    ],
    // afterChange: (current) => {
    //   setCurrentIndex((current + 4) / 4);
    // },
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
    <div className="  px-5 bg-gray27">
      <div className=" max-w-[1440px] pt-[24px] pb-[58px] rounded-10  mx-auto my-0">
        <div className="flex items-center justify-between px-[10px]">
          <h2 className=" text-[25px] leading-[36px] font-semibold text-blue3">
            Featured Luxury Brands
          </h2>
          <button className="text-blue3 border border-blue3 py-2 px-[22px] rounded-[50px]">
            See All
          </button>
        </div>
        <CustomSlider>
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
          <div className="count font-medium text-[17px] text-blue3">1/4</div>
        </CustomSlider>
      </div>
    </div>
  );
};

export default FeaturedLuxuryBrands;

const CustomSlider = styled.div`
  padding-bottom: 70px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;
  .white-card {
    background-color: white;
    position: absolute;
    top: 37px;
    left: 57px;
    border-radius: 15px;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .blue-card {
    background-color: #414360;
    position: absolute;
    top: 54px;
    left: 57px;
    border-radius: 22px;
    bottom: 54px;
    left: 0;
    right: 90px;
    z-index: -2;
  }
  .count {
    position: absolute;
    bottom: -36px;
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
    bottom: -90px;
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
    bottom: -52px;
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
