"use client";
import { useEffect, useState } from 'react';
import NextDay from "@/assets/images/static/brands/Beko/BottomCalloutIcons/Next-Day Delivery.png";
import SpecialFinancing from "@/assets/images/static/brands/Beko/BottomCalloutIcons/Special Financing.png";
import StoreLocations from "@/assets/images/static/brands/Beko/BottomCalloutIcons/Store Locations.png";
import FaqIcon from "@/assets/images/FAQ-icon.png";
import ContactIcon from "@/assets/images/contact-us-icon.webp";
import LearningIcon from "@/assets/images/learning-center-icon.webp";
import Image from "next/image";

import Banner from "@/components/BrandDetail/ApplianceBeko/Banner";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import Category from "@/components/BrandDetail/ApplianceBeko/Category"; 
import Banner_1 from "@/assets/images/static/brands/Beko/banner_1.jpg";
import Banner_2 from "@/assets/images/static/brands/Beko/banner_2.jpg";
import Banner_3 from "@/assets/images/static/brands/Beko/banner_3.jpg";

import { allBrandList } from "@/components/BrandDetail/arraybrandlist";

const Card = ({ src, heading, subHeading,className }) => {
  return (
    <div className='py-3 w-full'>
      <div className={`flex gap-[20px] items-center bg-white  min-h-[106px] justify-center  px-9 w-full  ${className}`}>
      <Image src={src} alt="icon"  />
      <div>
        <h3 className="text-[17px] leading-[25px] font-semibold mb-1 text-black">
          {heading}
        </h3>
        <p className=" text-[11px] leading-[16px] font-medium text-gray2">
          {subHeading}
        </p>
      </div>
    </div>
    </div>
  );
};

const ApplianceBeko = () => { 
  const [brandTitle, setBrandTitle] = useState('');

 

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const title = params.get('title').replace(/\s+/g, '_');
      
      setBrandTitle(title || '');
    }
  }, []);

  if (!brandTitle) return <p>Loading...</p>; // Optional: Add a loading state

  const DataResponse = allBrandList.find(item => item[brandTitle])?.[brandTitle]; 
  const collectionListData = Array.isArray(DataResponse?.collectionList) ? DataResponse.collectionList : [];


  return (
    <div>
      <Banner brandName={brandTitle} />
      <Category brandName={brandTitle}/>

      {collectionListData.map((collection, index) => (
        <div
            key={index}
            className="container-fluid max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]"
        >
            {index % 2 === 0 ? (
                // Render first section structure for even indices
                <section className="container max-w-1440 px-7 lg:px-4 w-full">
                   <div
                    className={`flex lg:flex-col items-center flex-row gap-[50px] ${
                      ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle)
                        ? 'bg-gray41 rounded-[5px]'
                        : ''
                    }`}
                  >
                        {/* Text Content */}
                        <div className="lg:w-full max-w-[639px] order-1 lg:order-2">
                            <div className={` w-full lg:w-full ${
                                  ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'ml-12' : ''
                                }`}>
                               <h3 className={`text-[32px] leading-[38px] lg:text-xl font-semibold ${
                                   ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle)? 'text-white' : ''
                                }`}>
                                    {collection?.title}
                                </h3>
                                <p className={` mt-4 lg:text-sm text-gray-800 ${
                                   ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'text-white' : ''
                                }`}>
                                    {collection?.descriptionTxt}
                                </p>
                                <button className={`bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[36px] mt-4 ${
                                   ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'bg-orange2' : ''
                                }`}>
                                    {collection?.btn}
                                </button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="lg:w-full w-[767px] h-[450px] lg:mt-4 order-2 flex lg:ml-0 lg:pt-5">
                            <div className="w-[767px] h-[450px] lg:w-[400px] lg:h-[306px] p-0 rounded-[5px] overflow-hidden">
                                <DynamicImage
                                    src={collection.img}
                                    className="w-full h-full object-cover lg:object-top"
                                    alt="Airport Home Appliance Logo"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            ) : (
                // Render second section structure for odd indices
                <section className="container max-w-1440 px-7 lg:px-4 w-full">                   
                    <div
                      className={`flex md:block items-center flex-row-reverse gap-[50px] ${
                        ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'bg-gray41 rounded-[5px]' : ''
                      }`}
                    >
                        {/* Text Content */}
                        <div className="md:w-full max-w-[639px] order-1 md:order-2  lg:pr-[28px]">
                            <div className="md:max-w-none w-full lg:w-full">
                            <h3 className={`text-[32px] leading-[38px] lg:text-xl font-semibold ${
                                  ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'text-white' : ''
                                }`}>
                                    {collection?.title}
                                </h3>
                                <p className={`mt-4 lg:text-sm text-gray-800 ${
                                   ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle) ? 'text-white' : ''
                                }`}>
                                    {collection?.descriptionTxt}
                                </p>
                                <button className={`bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[36px] mt-4 ${
                                  ['Frigidaire', 'Frigidaire_Pro'].includes(brandTitle)? 'bg-orange2' : ''
                                }`}>
                                    {collection?.btn}
                                </button>
                            </div>
                        </div>

                        {/* Image Content */}
                        <div className="md:w-full w-[767px] h-[450px] md:mt-4 order-2 flex md:ml-0 md:pt-5">
                            <div className="w-[767px] h-[450px] lg:w-[400px] lg:h-[306px] p-0 rounded-[5px] overflow-hidden">
                                <DynamicImage
                                    src={collection.img}
                                    className="w-full h-full object-cover lg:object-top"
                                    alt="Airport Home Appliance Logo"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
))}



{/* 
      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
          <section className="container max-w-1440 px-7 1440:px-4 1440:w-full">
            <div className="flex md:block items-center ">
              <div className="w-[767px] h-[450px] 1280:w-[450px] 1280:h-[373px]  lg:w-[400px] lg:h-[306px]  md:p-0 rounded-[15px] overflow-hidden md:w-full md:h-[300px]">
                  <DynamicImage
                    src={Banner_2}
                    className="w-full h-full object-cover  md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
              </div> 
              <div className="md:w-full w-[639px]  1440:[639px] order-1 md:order-2  pl-[36px] 1280:pl-[28px] lg:pl-[28px ]">
                <div className="  md:max-w-none w-[full]  1280:w-full">                  
                    <h3 className="text-[32px] leading-[38px]  mlg:text-xl  md:text-md font-semibold">Dishwashers</h3>
                    <p className="mt-4 md:text-sm text-gray-800">
                     Beko dishwashers are revolutionary products that redefine performance, use the least amount of natural resources possible, and are priced within reach of everyone who wants to lead a healthy and sustainable life. Powerful technology cleans and dries dishes with less water and less energy. Stainless steel interiors resist rust and hard water spots and a self-cleaning tw-filter means you can clean more and worry less.
                    </p>

                    <button className="bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[36px] mt-4">
                     Shop Dishwashers
                    </button>
                </div>
              </div>
            </div>
          </section>
      </div>

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
          <section className="container max-w-1440 px-7 1440:px-4 1440:w-full">
            <div className="flex md:block items-center ">
              <div className="md:w-full w-[639px]  1440:[639px] order-1 md:order-2  mr-[36px] 1280:mr-[28px] lg:pr-[28px]">
                <div className="  md:max-w-none w-[full]  1280:w-full"> 
                  
                    <h3 className="text-[32px] leading-[38px]  mlg:text-xl  md:text-md font-semibold">Ranges</h3>           
                    <p className="mt-4 md:text-sm text-gray-800">
                     Healthy living is made easy with Beko ranges. Enjoy AirFry technology, which uses less cooking oil and twin turbo convection ovens, which cook food faster. Power burners and induction cooking zones offer superior technology that heats pans quickly, saving time and energy. Large interior capacities and a removable telescopic rack offer flexibility and convenience, making cooking for all sized groups a breeze.
                    </p>

                    <button className="bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[36px] mt-4">
                     Shop Ranges
                    </button>
                </div>
              </div>
              <div className="md:w-full  w-[767px] h-[450px] md:mt-4    order-2 md:order-2 flex md:ml-0 md:pt-5">
              <div className="w-[767px] h-[450px] 1280:w-[450px] 1280:h-[373px]  lg:w-[400px] lg:h-[306px]  md:p-0 rounded-[15px] overflow-hidden md:w-full md:h-[300px]">
                        <DynamicImage
                          src={Banner_3}Dishwashers
                          className="w-full h-full object-cover  md:object-top"
                          alt="Airport Home Appliance Logo"
                        />
                    </div> 
              </div>
              
            </div>
          </section>
      </div>*/}
      <div className='container max-w-1440 px-7 1440:px-4 1440:w-full'>
        <div className={`py-14 px-5 lg:py-11  lg:bg-mobileBG`}>
          <div className="grid grid-cols-3 place-items-center lg:gap-y-[10px]">
            <Card
              src={NextDay}
              heading="Next-Day Delivery"
              subHeading="on select items"
            />
            <Card
              src={SpecialFinancing}
              heading="Special Financing"
              subHeading="Subject to Approval*"
              className="border-x border-x-gray "
            />

            <Card
              src={StoreLocations}
              heading="Store Locations"
              subHeading="Visit our Showrooms"
            />
          </div>
        </div>
      </div> 
      
    </div>
  );
};
 
export default ApplianceBeko;