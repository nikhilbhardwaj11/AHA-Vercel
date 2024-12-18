"use client";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { isValid } from "@/lib/utils";
import Image from "next/image";

import { Checkbox } from "@/components/ui/checkbox";
import CustomSelect from "@/components/ui/customSelect";
import SlickSlider from "@/app/(static)/builder-trade/sickSlider";
import CustomerReviews from "@/app/(static)/builder-trade/customerReviews";
import CustomSelect_Country from "../../../components/ui/customselect_country";
import CustomSelectBusinessType from "../../../components/ui/customselect-businesstype";
import CustomSelectReasonInquiry from "../../../components/ui/customselect-reasoninquiry";
import CustomSelectProjectType from "../../../components/ui/customselect-projecttype";
import CustomSelectProjectScope from "../../../components/ui/customselect-projectscope";
import { Country } from "@/lib/country";

import DynamicImage from "@/components/DynamicImages/DynamicImage";
import tradeBg from "@/assets/images/static/builderDivision.webp";
import tradeMobileBg from "@/assets/images/static/builderDivisionMobile.webp";

import brand1 from "@/assets/images/static/brand1.webp";
import brand2 from "@/assets/images/static/brand2.webp";
import brand3 from "@/assets/images/static/brand3.webp";
import brand4 from "@/assets/images/static/brand4.webp";
import circleTrade from "@/assets/images/static/circleTrade.webp";
import tradeform1 from "@/assets/images/static/tradeform1.webp";
import tradeform2 from "@/assets/images/static/tradeform2.webp";
import tradeform3 from "@/assets/images/static/tradeform3.webp";
import tradeform4 from "@/assets/images/static/tradeform4.webp";
import tradeform5 from "@/assets/images/static/tradeform5.webp";
import captchImg from "@/assets/images/static/captch.webp";
import addIcon from "@/assets/images/static/addIcon.webp";
import deleteIcon from "@/assets/images/static/deleteIcon.webp";
import Testimonial from "@/components/TestimonialsSlider";

import trade1 from "@/assets/images/static/trade1.webp";
import trade2 from "@/assets/images/static/trade2.webp";
import trade3 from "@/assets/images/static/trade3.webp";
import trade4 from "@/assets/images/static/trade4.webp";

import CustomInputContact from "@/components/ui/customInput-contact";
import CustomSelectContact from "@/components/ui/customselect-contact";
// import { CustomSelectBusinessType } from "@/components/ui/customselect-businesstype";

const ImageTag = ({ src }) => {
  return (
    <div className="w-auto h-[132px] md:p-0 flex items-center justify-center rounded-[15px] overflow-hidden">
      <DynamicImage
        src={src}
        className="w-[auto] h-[100px] object-contain"
        alt="Airport Home Appliance Logo"
      />
    </div>
  );
};
const BrandImageTag = ({ src }) => {
  return (
    <div className="w-auto h-[101px] md:p-0 flex items-center justify-center rounded-[15px] overflow-hidden">
      <DynamicImage
        src={src}
        className="w-[auto] h-[80px] object-contain"
        alt="Airport Home Appliance Logo"
      />
    </div>
  );
};

const TradePage = () => {
  const services = [
    {
      title: "Dedicated Account Rep",
      description:
        "Every Co-pilot member will get a dedicated Airport account representative that will help you manage your project from concept to completion.",
      imgSrcWebp: trade1,
      link: "/appliance-installation",
    },
    {
      title: "Trade Discounts",
      description:
        "Get exceptional trade discounts on a huge variety of brands, and an expert sales team to ensure every client gets their dream kitchen at the best possible price.",
      imgSrcWebp: trade2,
      link: "/appliance-delivery",
    },
    {
      title: "Flexible Financing",
      description:
        "Every Co-pilot member will get special financing with flexible payment options through Capitol One Trade Credit. Let our experts handle everything.",
      imgSrcWebp: trade3,
      link: "/delivery-and-customer-pick-up",
    },
    {
      title: "White Glove Install",
      description:
        "Our installations are followed in real-time; if something does not go perfectly we know immediately and are there to address the issue.",
      imgSrcWebp: trade4,
      link: "/customer-kitchens",
    },
  ];

  const defaultOption = [
    { label: "Type1", value: "Type1" },
    { label: "Type2", value: "Type2" },
    { label: "Type3", value: "Type3" },
    { label: "Type4", value: "Type4" },
  ];

  const dbusinessOption = [
    { label: "Architect", value: "Architect" },
    { label: "Designer", value: "Designer" },
    { label: "Property Manager", value: "Property Manager" },
    { label: "Other", value: "Other" },
  ];
  const inquiryOption = [
    {
      label: "Learn more about the AA Co-pilot program",
      value: "Learn more about the AA Co-pilot program",
    },
    { label: "Request a Quote", value: "Request a Quote" },
    {
      label: "Schedule a virtual appointment",
      value: "Schedule a virtual appointment",
    },
    {
      label: "Schedule a showroom appointment",
      value: "Schedule a showroom appointment",
    },
  ];

  const projectTypeOption = [
    { label: "Custom Home", value: "Custom Home" },
    { label: "Multi-Family", value: "Multi-Family" },
    { label: "Apartment", value: "Apartment" },
  ];

  const projectScopeOption = [
    { label: "Replacement", value: "Replacement" },
    { label: "Remodel", value: "Remodel" },
    { label: "New Construction", value: "New Construction" },
  ];

  const inputs = [
    { id: 1, label: "Quantity" },
    { id: 2, label: "Model" },
    { id: 3, label: "Description" },
    // { id: 4, label: "Delete", isIcon: true },
  ];
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <div className=" container-fuild max-w-full ">
      <div className="container mx-auto bg-[#F1F1F1] text-[#0B223C] py-[64px] lg:py-5">
        <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto">
          <h1 className="text-4xl leading-[54px] font-bold text-center lg:text-[28px] lg:leading-38 ">
            Builder Division
          </h1>
          {/* <h4 className="text-md font-normal text-center mlg:text-lg  md:text-base  p-2 ">
                Airport Home Appliance
                </h4> */}
        </section>
      </div>
      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px] lg:py-10 lg:px-0 ">
        <section className=" container max-w-1440 px-7 ">
          <div className="  md:block items-center ">
            <div className="w-full  ">
              <div className="w-full  md:p-0 rounded-[15px] overflow-hidden mb-6">
                <DynamicImage
                  src={tradeBg}
                  className="w-full h-full object-contain sm:hidden"
                  alt="Airport Home Appliance Logo"
                />
                <DynamicImage
                  src={tradeMobileBg}
                  className="w-full h-full object-contain hidden sm:block"
                  alt="Airport Home Appliance Logo"
                />
                
              </div>
            </div>
            <div className="w-full ">
              <div className="  md:max-w-none w-full text-[#3C3C43D9]">
                <h3 className="text-2xl font-bold text-black">
                  Doing Business Has Never Been Easier
                </h3>
                <p className="mt-4 ">
                  For over 40 years, Airport Home Appliance has provided Bay
                  Area residents with all their appliances to build memorable
                  moments. Now, we&apos;re proud to introduce Airport&apos;s
                  Builder Division! A program tailored to assist you and your
                  clients. Whether you&apos;re working on a single custom home
                  or a multi-unit development, our professional appliance
                  experts are here and ready to work with you. Our experts will
                  be with you every step of the way in a one-on-one manner to
                  help you manage your projects from concept to completion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="py-8 mt-8">
        <div className="px-5 container max-w-1440 lg:p-[14px] lg:px-5">
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center max-w-xs text-center justify-between"
              >
                <div>
                  <picture className="mb-4">
                    <source srcSet={service.imgSrcWebp} type="image/webp" />
                    <Image
                      src={service.imgSrcWebp}
                      alt={service.title}
                      className=" mx-auto m-h-[70px]"
                      loading="lazy"
                      height={70}
                      width="auto"
                    />
                  </picture>
                  <h4 className="text-[16px] font-semibold mb-2 mt-[15px]">
                    {service.title}
                  </h4>
                  <p className="text-sm mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] lg:py-10 lg:px-0 ">
        <section className="container max-w-1440 px-7 ">
          <h2 className="text-[32px] font-semibold leading-10 text-black mb-1 text-center">
            Participating Brands
          </h2>
          <p className="text-base text-[#3C3C43D9] text-center mb-6 ">
            Our participating brands are extending exceptional trade discounts
            for you and your clients on a huge variety of appliances.
          </p>
          <ul className="grid grid-cols-4 gap-8 max-w-[995px] m-auto lg:flex lg:flex-wrap justify-center">
            <li className="bg-white rounded-[15px] ">
              <a href="/brand-info?title=Thermador">
                <BrandImageTag src={brand1} />
              </a>
            </li>
            <li className="bg-white rounded-[15px] ">
              <a href="/brand-info?title=FisherPaykel">
                <BrandImageTag src={brand2} />
              </a>
            </li>
            <li className="bg-white rounded-[15px] ">
              <a href="/brand-info?title=Monogram">
                <BrandImageTag src={brand3} />
              </a>
            </li>
            <li className="bg-white rounded-[15px] ">
              <a href="/brand-info?title=Signature Kitchen Suite">
                <BrandImageTag src={brand4} />
              </a>
            </li>
          </ul>
          <div className="mt-5">
            <a
              href="/brands"
              className="px-[15px] py-[9px] text-[14px] text-[#0c2340] font-semibold rounded-[35px] text-center flex items-center justify-center w-full underline"
            >
              View All
            </a>
          </div>
        </section>
      </div>

      <div className="container-fuild max-w-full mx-auto px-4 py-[58px] lg:py-10">
        <section className="container max-w-[1200px] px-7 mb-5">
          <h2 className="text-[32px] font-semibold leading-10 text-black mb-1 text-center">
            Our Top Builder Projects
          </h2>
          <p className="text-base text-[#3C3C43D9] text-center">
            View our top recent builder projects and discover the exceptional
            value we provide for builders. We offer turnkey installation with
            options for non-union, prevailing wage, or union install teams,
            ensuring flexibility and compliance with your project needs. Benefit
            from factory-direct pricing and access to all major appliance
            brands. Our dedicated project management team is here to deliver
            best-in-class service, ensuring your project runs smoothly from
            start to finish.
          </p>
        </section>

        <SlickSlider />
        <div className="project-contact-info-content p-3 max-w-[1200px] bg-[#d6e1fa] rounded-lg shadow-md m-auto">
          <div className="space-y-3 flex justify-around  gap-8 slg:flex-col slg:justify-center">
            <h3 className="text-[34px] font-bold text-gray-800 items-center mt-2 text-center">
              Let&apos;s Talk Now
            </h3>
             <div className="contact flex items-center space-x-4 slg:justify-center slg:flex-col slg:text-center">
              <img
                src="https://cdn.airportappliance.com/media/wysiwyg/aha-static-images/build-page/call.webp"
                alt="Call Icon"
                className="w-12 h-12"
              />
              <a
                className="link text-gray-700 hover:text-blue-500 flex flex-col"
                href="tel:+16502919849"
                aria-label="Call +16502919849"
              >
                <span className="font-medium text-lg">Call Now</span>
                <p className="text-base">650-291-9849</p>
              </a>
            </div>
            <div className="contact flex items-center space-x-4 slg:justify-center slg:flex-col slg:text-center">
              <img
                src="https://cdn.airportappliance.com/media/wysiwyg/aha-static-images/build-page/mail.webp"
                alt="Mail Icon"
                className="w-12 h-12"
              />
              <a
                className="link text-gray-700 hover:text-blue-500 flex flex-col"
                href="mailto:Laura.clifton@airportappliance.com"
                aria-label="Send an email to Laura.clifton@airportappliance.com"
              >
                <span className="font-medium text-lg">Email Now</span>
                <p className="text-base">Laura.clifton@airportappliance.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] lg:py-10 lg:px-0">
        <section className="container max-w-[1200px] px-7 1440:px-4 1280:w-full ">
          <div className="flex md:flex-col-reverse items-center justify-center gap-8 ">
              <div className=" max-w-[711px] ">
                <h3 className="text-[32px] leading-[38px]  mlg:text-xl  md:text-md font-semibold">
                  Airport home appliance achieves significant milestone with
                  inaugural tower building project
                </h3>
                <ul className="flex gap-[10px] mt-4 mb-4">
                  <li className="bg-[#9f9f9f] text-base text-[#fff] py-2 px-3">
                    <a href="/blog/category/life-style">Life Style</a>
                  </li>
                  <li className="bg-[#9f9f9f] text-base text-[#fff] py-2 px-3">
                    <a href="/blog/category/smart-appliances">
                      Smart Appliances
                    </a>
                  </li>
                </ul>
                <p className="mt-4 md:text-sm text-gray-800">
                  Hayward, [Oct. 3rd, 2023] - Airport Home Appliance, the
                  esteemed family-owned appliance superstore, proudly announces
                  a pivotal achievement in its latest Builder Division
                  endeavors. Within a mere three months of its relaunch, the
                  company has secured its inaugural tower building project,
                  marking a significant milestone in its legacy.
                </p>

                <button className="bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[30px] mt-4">
                  <a href=" builders-blog" className="hover:underline">
                    Read More
                  </a>
                </button>
              </div>
            <div className="">
              <div className="w-[322px] h-[322px] overflow-hidden">
                <DynamicImage
                  src={circleTrade}
                  className="w-full h-full object-cover  md:object-top"
                  alt="Airport Home Appliance Logo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fuild max-w-[1500px] bg-[#ffffff] mx-auto px-4 py-[58px] lg:py-10">
        <section className="info-box grid grid-cols-3 gap-8 lg:flex lg:flex-col">
          {/* First Column - Adjusted to take 1/3 width */}
          <div className="col-span-1 bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto text-center lg:max-w-full">
            <h1
              className="text-2xl font-bold text-gray-800 mb-5 mt-10"
              role="heading"
              aria-level="2"
            >
              Laura Clifton
            </h1>
            <p className="text-gray-600 text-base mb-4">
              Director of Builder Sales
            </p>
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden border-2 p-[10px] border-[#dfdfdf]">
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src="https://cdn.airportappliance.com/media/wysiwyg/Static-page-images/Laura-Cliftonv2.webp"
                    alt="Laura Clifton"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                With 21+ years of industry experience as Director of Builder
                Sales at Airport Home Appliance, I provide extensive knowledge
                and expertise to top builders in Northern California. I provide
                competitive pricing on all brands, access to 8 stunning
                showrooms across Northern California, turn-key delivery and
                installation (union and non-union), and a spacious local
                warehouse in Hayward, CA, resulting in shorter project lead
                times.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Contact:{" "}
                {/* <a
                          href="mailto:Laura.clifton@airportappliance.com"
                          className="hover:underline"
                        > */}
                Laura.clifton@airportappliance.com
                {/* </a> */}
              </p>
            </div>
          </div>

          {/* Second Column - Adjusted to take 2/3 width */}
          <div className="col-span-2 bg-white shadow-md rounded-lg">
            <CustomerReviews />
          </div>
        </section>
      </div>



      {/* <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] ">
                  <section className="container max-w-1440 px-7 "> 
                  <h2 className=" font-semibold text-[36px] leading-[54px] mb-[34px] text-center"> Insights from Our Customers and Team</h2>
                      <Testimonial />
                  </section>
              </div> */}



      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
        <section className="container max-w-1500 px-7 ">
          <ul className="flex items-center justify-center mt-6 gap-2 flex-wrap">
            <li className="bg-white border-[#D9D9D9] py-4 px-[35px]">
              <ImageTag src={tradeform1} />
            </li>
            <li className="bg-white border-[#D9D9D9] py-4 px-[35px]">
              <ImageTag src={tradeform2} />
            </li>
            <li className="bg-white  border-[#D9D9D9] py-4 px-[35px]">
              <ImageTag src={tradeform3} />
            </li>
            <li className="bg-white border-[#D9D9D9] py-4 px-[35px]">
              <ImageTag src={tradeform4} />
            </li>
            <li className="bg-white border-r-[0px] border-[#2e1313] py-4 px-[35px]">
              <ImageTag src={tradeform5} />
            </li>
          </ul>
        </section>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] lg:px-0">
        <div className="container max-w-1440 px-7  mx-auto 1440:px-4  ">
          <div className="bg-gray-100 rounded-lg flex ">
            <div className="text-center text-gray-700 mb-6">
              <h3 className="text-3xl font-bold mb-4 text-center  md:text-xl">
                Become a Member
              </h3>
              <p className="md:text-sm mb-4">
                Give us some insight into your business and the project you are
                working on by filling out the form below and we will have one of
                our Trade Experts follow up with you shortly.
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl flex border-2 max-w-[1440px] m-auto mlg:w-full">
            <div className="w-full  ">
              <div className=" mx-auto p-8 bg-white  rounded-lg w-full py-9 slg:p-5">
                <form>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-3 gap-6 sm:grid-cols-1">
                        {/* <label className="block text-gray40 text-sm font-normal">Name of Organization</label>
                                          <input
                                            type="text"
                                            placeholder="Organization"
                                            className="mt-1 block w-full h-[50px] text-base border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                          /> */}
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="First Name"
                        />
                        {/* <label className="block text-gray40 text-sm font-normal">Mailing Address</label>
                                          <input
                                            type="text"
                                            placeholder="Address"
                                            className="mt-1 block w-full h-[50px] text-base border-[#D9E1EC] border-2 rounded-[8px] p-p10  focus:ring-blue-500 focus:border-blue-500"
                                          /> */}
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Last Name"
                        />
                        {/* <label className="block text-gray40 text-sm font-normal">City</label>
                                          <input
                                            type="text"
                                            placeholder="Enter City"
                                            className="mt-1 block w-full h-[50px] text-base border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                          /> */}
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Phone"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                        {/* <label className="block text-gray40 text-sm font-normal">State</label>
                                          <input
                                            type="text"
                                            placeholder="Enter State"
                                            className="mt-1 block w-full h-[50px] text-base border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                          /> */}
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Email"
                        />
                        {/* <label className="block text-gray40 text-sm font-normal">Zipcode</label>
                                          <input
                                            type="text"
                                            placeholder="Zipcode"
                                            className="mt-1 block w-full h-[50px] text-base border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                          /> */}
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Company Name"
                        />
                    </div>
                  </div>

                  <h2 className="text-lg font-semibold mt-8">Business Type*</h2>
                  <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                        <Controller
                          name="businessType"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CustomSelect
                              label="Role"
                              options={dbusinessOption}
                              isInvalid={isValid("type", errors)}
                              errorMessage="Please Select Business Type"
                              className="select-margin-b-0"
                              {...field}
                              // className="mb-0"
                            />
                          )}
                        />
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Address"
                        />
                      {/* <div className="w-full inline-block mt-4  md:w-full">                                      
                                            <Controller
                                                name="Country"
                                                control={control}
                                                rules={{ required: true }}
                                                render={({ field }) => (
                                                  <customSelect
                                                    label="Country" 
                                                    options={defaultOption}
                                                    isInvalid={isValid("Country", errors)}
                                                    errorMessage="Please Select Country"
                                                    {...field}
                                                  />
                                                )}
                                              />
                                        </div> */}
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="City"
                        />
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="State"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Zipcode"
                          
                        />
                        <Controller
                          name="Country"
                          control={control}
                          
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CustomSelect
                              label="Country"
                              className="select-margin-b-0"
                              options={defaultOption}
                              isInvalid={isValid("Country", errors)}
                              errorMessage="Please Select Country"
                              {...field}
                            />
                          )}
                        />
                    </div>
                  </div>

                  <h2 className="text-lg font-semibold mt-8 sm:mt-0">
                    Reason for Inquiry*
                  </h2>
                  <div className="grid grid-cols-1   gap-6 mt-4">
                    <div className="inline-block">
                      <div className="w-3/4 inline-block pr-6  md:pr-0 md:mb-4 md:w-full">
                        <Controller
                          name="inquiry"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CustomSelect
                              label="Inquiry"
                              options={inquiryOption}
                              isInvalid={isValid("Inquiry", errors)}
                              errorMessage="Please Select Reason for Inquiry"
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mt-8 sm:mt-0">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                      <div>
                        <h2 className="text-lg font-semibold mb-4">
                          Project Type*
                        </h2>
                        <Controller
                          name="projectType"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CustomSelect
                              label="Project Type"
                              options={projectTypeOption}
                              isInvalid={isValid("projecttype", errors)}
                              errorMessage="Please Select Project Type"
                              {...field}
                            />
                          )}
                        />
                      </div>

                      <div >
                        <h2 className="text-lg font-semibold mb-4">
                          Project Scope*
                        </h2>
                        <Controller
                          name="projectScope"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <CustomSelect
                              label="Project Type"
                              options={projectScopeOption}
                              isInvalid={isValid("projectscope", errors)}
                              errorMessage="Please Select Project Scope"
                              {...field}
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>

                  {inputs.map((mainIndex, index) => (
                    <div key={mainIndex.id}>
                      <div className="flex justify-between items-center  mt-8">
                        <h2 className="text-lg font-semibold text-black">
                          Item #{index + 1}
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 gap-6 mt-4">
                          <ul className="grid grid-cols-3 gap-6 items-center sm:grid-cols-1">
                            {inputs.map((input) => (
                              <li key={input.id}>
                                {/* {input.isIcon ? (
                                                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                                                    <DynamicImage
                                                      src={deleteIcon}
                                                      className="w-[24px] h-[24px] object-contain"
                                                      alt="Delete Icon"
                                                    />
                                                  </div>
                                                ) : ( */}
                                <CustomInputContact
                                  labelClassName="bg-white"
                                  label={input.label}
                                />
                                {/* )} */}
                              </li>
                            ))}
                          </ul>
                      </div>
                    </div>
                  ))}
                  <div className="mt-8 w-full gap-3 md:block">
                    {/* <input type="checkbox" id="allowDiv" /> */}
                    <div className="flex items-center space-x-2 text-[12px]">
                      <Checkbox
                        id="allowDiv"
                        // onCheckedChange={(e) => setIsShowPass(e)}
                        // checked={isShowPass}
                      />
                      <label
                        className="inline-flex w-[96%] 1440:w-[90%] ml-4"
                        htmlFor="allowDiv"
                      >
                        I would like to be added to Airport&apos;s Exclusive
                        Premium email list & recieve the Expert Advice, Customer
                        Testimonials, Alerts on In-stock Arrivals & much more.
                      </label>
                    </div>
                  </div>

                  <div className="mt-8 w-full flex justify-between  md:block">
                    <span className="inline-block float-left w-[267px] h-[60px] md:block md:float-none md:mb-8 md:m-auto">
                      <DynamicImage
                        src={captchImg}
                        className="w-full h-full object-cover md:object-top"
                        alt="Airport Home Appliance Logo"
                      />
                    </span>
                    {/* <button
                                      type="submit"
                                      className="w-8/12 md:w-full bg-[#333E56]   text-white px-6 py-3 rounded-[8px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                      Submit Now
                                    </button> */}
                  </div>
                  <button className="bg-blue1 text-white py-4 px-[32px] text-[16px] rounded-[30px] mt-4">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
