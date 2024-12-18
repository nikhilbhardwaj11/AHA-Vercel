import BrandImg1 from "@/assets/images/dummy-landing-card-brand-img1.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const BannerCard = ({ src, heading, subHeading }) => {
  return (
    <div className=" lg:justify-center rounded-10 py-p10  px-4 flex gap-[10px] bg-white leading-[10px] border border-[#D9D9D980] ">
      <div className=" lg:max-w-[140px] w-full relative">
        <AspectRatio ratio={238 / 185}>
          <Image src={src} className="object-cover h-full " alt="image" />
        </AspectRatio>
      </div>
      <div className="flex flex-col justify-center items-start gap-1 ">
        <h3 className="text-xl md:text-[12px] md:leading-[16px]	font-semibold	leading-[26px] mxl:text-[16px] mxl:leading-[20px]">
          {heading}
        </h3>
        <p className=" md:text-[11px] text-red1 leading-[26px]  text-[15px] mb-[6px] font-bold mxl:text-[13px] mxl:leading-[20px] mxl:mb-[4px]	">
          {subHeading}
        </p>
        <button className=" md:text-[10px]  bg-blue2 text-white min-h-[42px] px-[20px] text-[12px] leading-[18px] font-semibold rounded-[8px] mxl:min-h-[30px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};
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
const BundleCard = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(2);
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => {
      setTotalSlides(dots.length);
      return <ul>{dots}</ul>;
    },
    afterChange: (current) => {
      if(current > 2){
        setCurrentIndex(2);
        return;
      }
      setCurrentIndex(current + 1);
    },
    responsive: [
      {
        breakpoint: 878,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 622,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <BundleSlider>
      <div className="pb-[80px] relative pt-11 max-w-[1480px] lg:pt-0 lg:pb-[70px] my-0 mx-auto">
        <Slider {...settings}>
          <div className="px-4 ">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>
          <div className="px-4">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>
          <div className="px-4">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>
          <div className="px-4">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>{" "}
          <div className="px-4">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>{" "}
          <div className="px-4">
            <BannerCard
              src={BrandImg1}
              heading="LG French Door Refrigerator"
              subHeading="Save up to $2000"
            />
          </div>
        </Slider>
        <div className="count font-medium text-[17px] text-blue3">
          {currentIndex}/{totalSlides}
        </div>
      </div>
    </BundleSlider>
  );
};
export default BundleCard;

const BundleSlider = styled.div`
  position: relative;
  .count {
    position: absolute;
    bottom: 34px;
    right: 74px;
  }
  .slick-dots {
    display: flex !important;
    max-width: 487px;
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
    right: 116px;
    /* right: calc(-634px + 50vw); */
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
  .slick-next {
    right: 15px;
    /* right: calc(-725px + 50vw); */
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
  @media (max-width: 1023px) {
    .count {
      bottom: 12px;
      right: 69px;
    }
    .slick-dots {
      max-width: 100%;
      padding-left: 16px;
      padding-right: 16px;
      bottom: -17px;
      right: 0;
    }
    .slick-prev,
    .slick-next {
      top: unset;
      bottom: -80px;
      height: 35px;
      width: 35px;
      svg {
        width: 35px;
        height: 35px;
      }
    }
  }
`;
