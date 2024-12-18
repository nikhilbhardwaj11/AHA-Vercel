// "use client";

import BannerImg1 from "@/assets/images/banner-slider1.png";
import BannerImg2 from "@/assets/images/banner-slider2.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import Image from "next/image";
import { useState } from "react";
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

const DashboardBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(4);
  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      setTotalSlides(dots.length);
      return <ul>{dots}</ul>;
    },
    afterChange: (current) => {
      setCurrentIndex(current + 1);
    },
  };
  return (
    <CustomSlider className="">
      <Slider {...settings}>
        <div className="mobile-view">
          <AspectRatio ratio={1920 / 586}>
            <Image
              className=" w-full h-full object-cover"
              src={BannerImg1}
              alt="banner"
            />
          </AspectRatio>
        </div>
        <div className="mobile-view">
          <AspectRatio ratio={1920 / 586}>
            <Image
              src={BannerImg2}
              alt="banner"
              className=" w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="mobile-view">
          <AspectRatio ratio={1920 / 586}>
            <Image
              src={BannerImg1}
              alt="banner"
              className=" w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="mobile-view">
          <AspectRatio ratio={1920 / 586}>
            <Image
              src={BannerImg2}
              alt="banner"
              className=" w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </Slider>
      <div className="count font-medium text-[17px] text-blue3">
        {currentIndex}/{totalSlides}
      </div>
    </CustomSlider>
  );
};

export default DashboardBanner;

const CustomSlider = styled.div`
  padding-bottom: 60px;
  position: relative;
  .count {
    position: absolute;
    right: calc(-671px + 50vw);
    bottom: 16px;
  }
  .slick-dots {
    display: flex !important;
    max-width: 1270px;
    /* max-width: min(66.146vw,1270px); */
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: -35px;
    /* right: min(8.698vw,167px); */
    right: 167px;
  }
  .slick-prev,
  .slick-next {
    top: unset;
    bottom: -74px;
    height: 43px;
    width: 43px;
    &::before {
      display: none;
    }
  }
  .slick-prev {
    left: unset;
    /* right: 332px; */
    right: calc(-634px + 50vw);
  }

  .slick-next {
    /* right: 237px; */
    right: calc(-725px + 50vw);
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

  @media (max-width: 1500px) {
    .count {
      right: 91px;
    }
    .slick-next {
      right: 34px;
    }
    .slick-dots {
      left: 20px;
      right: unset;
      max-width: calc(100% - 215px);
    }
    .slick-prev {
      right: 135px;
    }
  }
  @media (max-width: 1023px) {
    padding: 14px 16px;
    .count {
      display: none;
    }
    .slick-dots {
      display: none !important;
    }
    .slick-prev,
    .slick-next {
      display: none !important;
    }

    .mobile-view {
      border-radius: 10px;
      overflow: hidden;

      > div {
        padding-bottom: 51.520833% !important;
      }
    }
  }
`;
