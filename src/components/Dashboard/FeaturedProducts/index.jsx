"use client";
import ProductCard from "@/components/productCard/ProductCard";
import { Button } from "@/components/ui/button";
import useRenderProductRatings from "@/hooks/useRenderProductRating";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import TopDealIcon from "@/icons/TopDealIcon";
import { useGetProductListsQuery } from "@/redux/apiSlices/ProductListsApi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Loading from "./Loading";

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

export const FeaturedProductsCard = () => {
  const commonSettings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1680,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      // {
      //   breakpoint: 1493,
      //   settings: {
      //     slidesToShow: 4,
      //     // slidesToScroll: 1,
      //   },
      // },
      {
        breakpoint: 1254,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 753,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 518,
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
      const a = productListsData?.length / totalSlides;
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

  const Loadsettings = {
    ...commonSettings,
    dots: false,
    infinite: false,
    nextArrow: false,
    prevArrow: false,
  };

  const { data, isLoading, isSuccess } = useGetProductListsQuery({ limit: 24 });
  const productListsData = data?.data || [];
  const [currentIndex, setCurrentIndex] = useState(1);
  const [totalSlides, setTotalSlides] = useState(1);

  useRenderProductRatings(productListsData)

  

  return (
    <CustomSlider className=" 3xl:p-0">
      {isLoading ? (
        <Slider {...Loadsettings}>
          {[...Array(7)].map((_, index) => (
            <div key={index + 1} className="py-[10px]">
              <Loading />
            </div>
          ))}
        </Slider>
      ) : (
        <>
          <Slider {...settings}>
            {isSuccess &&
              productListsData?.length > 0 &&
              productListsData?.map((productList, index) => (
                <div key={index} className="px-2 py-[10px]">
                  <ProductCard
                    className=" border-2 min-h-[520px] mxl:py-[22px] lg:min-h-[453px]  mxl:min-h-[480px] flex flex-col justify-between rounded-2xl border-gray5 px-[15px] pt-9 pb-[30px]"
                    productDetail={productList}
                    index={index}
                    type="short"
                  />
                </div>
              ))}
          </Slider>
          <div className="count font-medium text-[17px] text-blue3 lg:text-[14px]">
            {currentIndex}/{totalSlides}
          </div>
        </>
      )}
    </CustomSlider>
  );
};

export const TopDealsCard = () => {
  const router = useRouter();

  return (
    <div className="py-[10px] lg:hidden">
      <div className=" w-[290px] border-2 h-[520px] mxl:h-[480px] rounded-2xl border-gray5 pl-9 py-5 pr-4 flex flex-col justify-center items-start xl:pl-5 xl:w-[250px]">
        <TopDealIcon />
        <h3 className=" mt-5 text-4xl	 leading-[47px] pr-[10px] pb-6 mb-6 border-b-2 border-black inline-flex font-semibold">
          Shop <br /> Top Deals
        </h3>
        <p className="text-gray3 text-base mb-6">
          Check out our exclusive selection of this season’s new arrivals, made
          with world’s highest quality
        </p>
        <Button
          onClick={() => router.push(`/products?limit=${24}`)}
          variant="outline"
          className=" border-blue2 rounded-[8px] font-semibold "
        >
          Shop All
        </Button>
      </div>
    </div>
  );
};

const CustomSlider = styled.div`
  padding-bottom: 90px;
  position: relative;
  width: calc(100% - 348px);
  .count {
    position: absolute;
    bottom: 32px;
    left: 838px;
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
    bottom: -88px;
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
    left: 772px;
    right: unset;
  }

  .slick-next {
    right: unset;
    left: 880px;
  }
  .slick-dots {
    display: flex !important;
    max-width: 724px;
    right: unset;
    left: 20px;
    margin: 0 auto;
    bottom: -46px;
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
  @media (max-width: 1400px) {
    width: calc(100% - 282px);
    .slick-prev {
      left: unset;
      right: 9vw;
    }
    .slick-next {
      left: unset;
      right: 1vw;
    }
    .count {
      left: unset;
      right: 5.5vw;
    }
    .slick-dots {
      max-width: 54vw;
      left: 1vw;
      right: 4vw;
      margin: 0;
    }
  }
  @media (max-width: 1140px) {
    .slick-dots {
      max-width: 48vw;
    }
  }
  @media (max-width: 1023px) {
    width: 100%;
    padding-bottom: 70px;
    .slick-dots {
      max-width: 100%;
      left: 0;
      right: 0;
      padding-left: 16px;
      padding-right: 16px;
      bottom: -13px;
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
    .slick-next {
      right: 8px;
    }
    .slick-prev {
      right: 94px;
    }
    .count {
      right: 57px;
      bottom: 14px;
    }
  }
`;
