import DynamicImage from "@/components/DynamicImages/DynamicImage";
import BookmartIocn from "@/icons/BookmarkIcon";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";
import WifiIcon from "@/icons/WifiIcon";
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

function ProductImageSlider({ isWifiEnabled, images = [] }) {
  const settings = {
    customPaging: function (i) {
      if (images[i]) {
        return (
          <a>
            <DynamicImage
              src={images[i]?.thumbnail}
              width={50}
              height={50}
              alt="product-image"
            />
          </a>
        );
      }
      return null;
    },
    lazyLoad: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <SliderWrapper className="slider-container">
      <div className="grid gap-[14px] absolute right-[10px] top-0 lg:top-[13px] lg:right-[13px]">
        {/* <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full shadow-2.86 bg-white">
          <BookmartIocn />
        </div> */}
        {isWifiEnabled && (
          <div className="flex items-center justify-center w-[42px] h-[42px] rounded-full shadow-2.86 bg-white">
            <WifiIcon />
          </div>
        )}
      </div>
      <Slider {...settings}>
        {images.length > 0 &&
          images?.map(({ imageurl, id }) => (
            <div key={id} className="max-w-[513px] relative h-full lg:max-w-full">
              <DynamicImage
                src={imageurl}
                // width={300}
                // height={150}
                className="object-contain"
                fill
                alt="product-image"
              />
            </div>
          ))}
      </Slider>
    </SliderWrapper>
  );
}
export default ProductImageSlider;

const SliderWrapper = styled.div`
  /* max-width: calc(100vw - 510px); */
  padding: 46px 0 100px 0;
  position: relative;
  background-color: #ffffff;
  /* position: sticky;
  top: 206px; */
  /* height: 645px; */
  /* .slick-prev,
  .slick-next {
    display: none !important;
  } */
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
  .slick-list {
    min-height: 480px;
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
    right: 0;
    bottom: -100px;
    top: unset;
    height: 43px;
    width: 43px;
    box-shadow: 0px 2px 4px 0px #00000040;
  }
  .slick-prev {
    left: unset;
    right: 70px;
    bottom: -100px;
    top: unset;
    height: 43px;
    width: 43px;
    box-shadow: 0px 2px 4px 0px #00000040;
  }
  .slick-prev:before,
  .slick-next:before {
    position: absolute;
    display: none;
  }
  .slick-slide {
    /* padding: 0 130px 0 140px; */
    padding: 0 83px 0 196px;
    height: 612px;
    > div {
      height: 100%;
    }
    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
      object-fit: contain;
      max-height: 685px;
    }
  }
  .slick-dots {
    right: unset;
    left: 0;
    display: inline-flex !important;
    flex-direction: column;
    top: 0;
    bottom: 0;
    width: auto;
    gap: 8px;
    justify-content: flex-start;
    padding-right: 19px;
    background-color: #fff;
    max-height: 433px;
    padding-right: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
    overflow: auto;
    img {
      max-height: 100%;
      margin: 0 auto;
      max-height: 74px;
      width: auto;
    }
    li {
      width: 100px;
      height: 90px;
      border: 1.07px solid #eaeaea;
      padding: 7px;
      margin: 0;
      border-radius: 10px;
      min-height: 90px;
      max-height: 90px;
      min-width: 100px;
      max-width: 100px;
      overflow: hidden;
      display: grid;
      place-items: center;
      &.slick-active {
        border-color: #0c2340;
      }
    }
  }
  @media (max-width: 1222px) {
    .slick-slide {
      height: 512px;
    }
  }
  @media (max-width: 1200px) {
    .slick-slide {
      /* padding: 0 130px 0 140px; */
      padding: 0 68px 0 172px;
    }
  }
  @media (max-width: 1023px) {
    border-radius: 6px;
    padding: 22px 0;
    margin-bottom: 88px;
    .slick-slide {
      height: 261px;
      padding: 0 56px;
    }
    .slick-dots {
      flex-direction: row;
      bottom: -106px;
    top: unset;
    width: 100%;
    background-color: transparent;
    li {
      background-color: #ffffff;
      width: 60px;
        height: 60px;
        min-width: 60px;
        min-height: 60px;
        max-width: 60px;
        max-height: 60px;
        border: 1px solid #DADADA;
        border-radius: 6px;
    }
    }
    .slick-list {
      min-height: auto;
    }
    .slick-next, .slick-prev {
      display: none !important;
    }
  }
`;
