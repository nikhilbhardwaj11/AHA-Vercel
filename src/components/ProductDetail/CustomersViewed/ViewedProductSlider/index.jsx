import ProductCard from "@/components/productCard/ProductCard";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const ViewedProductSlider = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => {
      setTotalSlides(dots.length);
      return <ul>{dots}</ul>;
    },
    afterChange: (current) => {
      const a = products?.length / totalSlides;
      const calculateIndex = (current + a) / a;
      setCurrentIndex(Math.round(calculateIndex));
    },
  };

  return (
    <CustomSlider className=" 3xl:p-0">
      <Slider {...settings}>
        {products?.length > 0 &&
          products?.map((productList, index) => (
            <div key={index} className="px-2 py-[10px] lg:px-0">
              <ProductCard
                className=" border-2 min-h-[520px] mxl:py-[22px] lg:min-h-[453px]  mxl:min-h-[480px] flex flex-col justify-between rounded-2xl border-gray5 px-[15px] pt-9 pb-[30px]"
                productDetail={productList}
                index={index}
                type="short"
              />
            </div>
          ))}
      </Slider>
      <div className="count font-medium text-[17px] text-blue3">
        {currentIndex}/{totalSlides}
      </div>
    </CustomSlider>
  );
};

export default ViewedProductSlider;

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <RightArrow className="lg:w-[25px] lg:h-[25px]" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <LeftArrow className="lg:w-[25px] lg:h-[25px]" />
    </div>
  );
};

const CustomSlider = styled.div`
  padding-bottom: 99px;
  width: 100%;
  position: relative;
  .count {
    position: absolute;
    bottom: 38px;
    right: 93px;
  }
  .slick-dots {
    display: flex !important;
    max-width: 487px;
    /* max-width: min(66.146vw,1270px); */
    right: 0;
    left: 0;
    margin: 0 auto;
    bottom: -52px;
    /* right: min(8.698vw,167px); */
  }
  .slick-prev,
  .slick-next {
    top: unset;
    bottom: -93px;
    height: 43px;
    width: 43px;
    &::before {
      display: none;
    }
  }
  .slick-prev {
    left: unset;
    right: 148px;
  }

  .slick-next {
    right: 24px;
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
    padding-bottom: 50px;
    .count {
      bottom: 11px;
      right: 36px;
      font-size: 13px;
    }
    .slick-prev {
      right: 74px;
    }
    .slick-dots {
      bottom: -8px;
    }
    .slick-next,
    .slick-prev {
      width: 25px;
      height: 25px;
      bottom: -56px;
    }
    .slick-next {
      right: 0;
    }
  }
  /* @media (max-width:1455px) {
    .slick-dots {
      left: 20px;
      right: UNSET;
      max-width: 87.285vw;
    }
    .slick-next {
      right: 1.375vw;
  }
  .slick-prev {
    right: 6.942vw;
  }
  }
  @media (min-width:1921px) {
    .slick-next {
    right: 237px;
  }
  .slick-prev {
    right: 332px;
  }
  } */
`;
