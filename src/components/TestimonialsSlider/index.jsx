"use client";
import React from "react";
import Slider from "react-slick";
import Pic1 from "@/assets/images/static/feedback-1.png";
import Pic2 from "@/assets/images/static/feedback-2.png";
import Pic3 from "@/assets/images/static/feedback-3.png";
import Linkedin from "@/assets/images/static/linkedin.png"
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Quote from "@/assets/images/static/quote.png"
import styled from "styled-components";
import LeftArrow from "@/icons/SliderLeftArrow";
import RightArrow from "@/icons/SliderRightArrow";

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
    <div className=" relative p-[22px]">
     <div className=" absolute left-[2px] top-0 z-[1] border-2 border-gray-500 rounded-20 overflow-hidden mob:left-0 mob:right-0 mob:my-0 mob:mx-auto mob:max-w-[224px]">
     <div className=" flex-1 bg-muted relative  w-[302px] h-[422px] max-w-[302px] slg:max-w-[220px] slg:w-[220px] slg:h-[290px]">
        <Image
          src={Pic1}
          alt="Photo by Drew Beamer"
          fill
          className="rounded-md object-cover  "
        />
      </div>
     </div>
      <div className="flex-1 flex items-center py-1  ">
        <div className="relative pl-[348px] flex items-center w-full py-4 pr-[50px] min-h-[374px] shadow-brandCard rounded-10 bg-white slg:pl-[240px]  mob:p-4 mob:pt-[240px]">
           <div className=" relative max-w-[700px]">
           <Image src={Quote} alt="Quote" width={34} height={37} className=" absolute -left-[46px] top-[0] 900:relative 900:left-0   "/>
            <p className=" four-line-dot text-[20px] leading-[32px] mb-[34px]">&quot;Airport Home Appliance has offered me the opportunity for personal and professional growth. They are a tight-knit family community that always sets you up for success.&quot;</p>
            <h3 className=" font-bold text-[20px] mb-2">Danna Castaneda</h3>
            <p className="mb-3">4 Years Experience</p>
            <p className="mb-[34px]">Logistics Supervisor</p>
            <button className=" inline-flex gap-4"><Image src={Linkedin} alt="Linkedin" width={24} height={24} />LinkedIn profile</button>
           </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <CustomSlider className="">
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div><div>
          <Card />
        </div><div>
          <Card />
        </div><div>
          <Card />
        </div><div>
          <Card />
        </div><div>
          <Card />
        </div><div>
          <Card />
        </div>
      </Slider>
    </CustomSlider>
  );
};

export default Testimonial;

const CustomSlider = styled.div`
  padding-bottom: 60px;
  position: relative;
  
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
    right: 120px;
  }

  .slick-next {
    /* right: 237px; */
    right: 20px;
  }
  
`;