import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import viewProject1 from "@/assets/images/static/viewProject1.webp";
import viewProject2 from "@/assets/images/static/viewProject2.webp";
import viewProject3 from "@/assets/images/static/viewProject3.webp";
import viewProject4 from "@/assets/images/static/viewProject4.webp";
import viewProject5 from "@/assets/images/static/viewProject5.webp";
import viewProject6 from "@/assets/images/static/viewProject6.webp";
import viewProject7 from "@/assets/images/static/viewProject7.webp";
import viewProject8 from "@/assets/images/static/viewProject8.webp";
import viewProject9 from "@/assets/images/static/viewProject9.webp";
import viewProject10 from "@/assets/images/static/viewProject10.webp";
import viewProject11 from "@/assets/images/static/viewProject11.webp";


// Custom Arrow Component
const CustomArrow = ({ onClick, isLeft }) => (
  <button
    className={`custom-arrow ${isLeft ? "left-arrow" : "right-arrow"}`}
    onClick={onClick}
  >
    {isLeft ? "<" : ">"}
  </button>
);

const reviews = [
  {
    name: "Black Space Design",
    image: viewProject4,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-01.pdf",
  },
  {
    name: "MTM Building Group",
    image: viewProject5,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-02.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject6,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-03.pdf",
  },
  {
    name: "MTM Building Group",
    image: viewProject2,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-04.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject3,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-06.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject7,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-09.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject8,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-08.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject9,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-07.pdf",
  },
  {
    name: "Lusso Design",
    image: viewProject10,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-11.pdf",
  },
  {
    name: "Black Space Design",
    image: viewProject11,
    pdf: "https://cdn.airportappliance.com/media/pdfs/builder-projects/bp-12.pdf?_gl=1*1xp80mr*_gcl_au*NTEyODcwMzAuMTcyNzM1NDM5NA..*_ga*NDQxNzc2MjkyLjE3MjczNTQzOTQ.*_ga_XN7LWN00D8*MTczNDQzMzk4Ny4xMTguMS4xNzM0NDM1NjYxLjU5LjAuMTAwMDA5MjMyMw..",
  },
 
 
  
];

const SlickSlider = () => {
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false, // Disable built-in arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
         
        }
      }
    ]
  };

  return (
    <div className=" max-w-[80%] my-0 mx-auto pb-[50px] slg:max-w-full " >
      <Slider ref={sliderRef} {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-2 ">
            <div className="text-center bg-white rounded-[15px]">
              {/* Wrap the image with an anchor tag */}
              <a href={review.pdf} target="_blank" rel="noopener noreferrer">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="mx-auto"
                  loading="lazy"
                  height="288px"
                  width="441px"
                  style={{ borderRadius: "10px" }}
                />
              </a>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom arrows below the carousel */}
      <div className="arrow-container flex justify-center mt-4">
        <CustomArrow
          isLeft
          onClick={() => sliderRef.current?.slickPrev()} // Trigger previous slide
        />
        <CustomArrow
          onClick={() => sliderRef.current?.slickNext()} // Trigger next slide
        />
      </div>
    </div>
  );
};

export default SlickSlider;