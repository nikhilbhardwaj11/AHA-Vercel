"use client";
import { isValid } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import CustomSelectContact from "../../../components/ui/customselect-contact";

import contact_call from "@/assets/images/static/contact_call.webp";
import contact_chat from "@/assets/images/static/contact_chat.webp";
import contact_email from "@/assets/images/static/contact_email.webp";
import contact_store from "@/assets/images/static/contact_store.webp";
import DynamicImage from "@/components/DynamicImages/DynamicImage";

import contact_fb from "@/assets/images/static/contact_fb.webp";
import contact_in from "@/assets/images/static/contact_in.webp";
import contact_insta from "@/assets/images/static/contact_insta.webp";
import contact_x from "@/assets/images/static/contact_x.webp";

import contact_map from "@/assets/images/static/contact_map.webp";
import contact_phone from "@/assets/images/static/contact_phone.webp";
import contact_pinned from "@/assets/images/static/contact_pinned.webp";
import contact_time from "@/assets/images/static/contact_time.webp";


import { Checkbox } from "@/components/ui/checkbox";
import CustomInputContact from "@/components/ui/customInput-contact";
import CustomTextareaContact from "@/components/ui/customtextarea-contact";

const ContactPage = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [checkTerms, setCheckTerms] = useState(true);

  return (
    <div className=" container-fuild max-w-full bg-[#f5f5f5]">
      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-5 pt-[40px] lg:bg-mobileBG lg:pt-5 ">
        <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full lg:p-0 lg:pb-5">
          <div className=" w-full flex gap-14 lg: px-8 py-6 bg-white rounded-20  lg:flex-col-reverse lg:gap-5">
            <div className="max-w-[482px] w-full   inline-block mxl:max-w-[350px] pt-[64px] lg:pt-[14px] sm:max-w-full">
              <ul className="grid grid-cols-1 gap-[17px]">
                <li className="relative h-[68px] ">
                <a
                  href="tel:+18663044449"
                  // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                  aria-label="call +18663044449"
                >
                    <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full absolute top-[16px] z-[1]">
                      <DynamicImage
                        src={contact_call}
                        className="w-4 h-auto"
                        alt="Airport Home Appliance Logo"
                      />
                    </span>

                    <span className="relativew-[96%] w-[96%] text-[18px] leading-[30px] bg-[#F4F6F8] py-[19px] px-[30px] rounded-[5px] z-0 float-right">
                      (866) 304-4449
                    </span>
                  </a>
                </li>
                <li className="relative h-[68px] ">
                <a
                  href="/store"
                  // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                  // aria-label="store"
                >
                    <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full absolute  top-[16px] z-[1]">
                      <DynamicImage
                        src={contact_store}
                        className="w-auto h-[17px]"
                        alt="Airport Home Appliance Logo"
                      />
                    </span>
                    <span className="relativew-[96%] w-[96%] text-[18px] leading-[30px] bg-[#F4F6F8] py-[19px] px-[30px] rounded-[5px] z-0 float-right">
                      Store Locations
                    </span>
                  </a>
                </li>

                <li className="relative h-[68px] ">
                  <a
                    href="/contact"
                    // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                    aria-label="Email Us"
                  >
                    <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full absolute  top-[16px] z-[1]">
                      <DynamicImage
                        src={contact_email}
                        className="w-[19px] h-auto"
                        alt="Airport Home Appliance Logo"
                      />
                    </span>
                    <span className="relativew-[96%] w-[96%] text-[18px] leading-[30px] bg-[#F4F6F8] py-[19px] px-[30px] rounded-[5px] z-0 float-right">
                      Email us
                    </span>
                   </a>
                </li>

                <li className="relative h-[68px] ">
                  <a
                    href="#"
                    // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                    aria-label="Live Chat"
                  >
                      <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full absolute  top-[16px]  z-[1]">
                        <DynamicImage
                          src={contact_chat}
                          className="w-[17px] h-auto"
                          alt="Airport Home Appliance Logo"
                        />
                      </span>
                      <span className="relativew-[96%] w-[96%] text-[18px] leading-[30px] bg-[#F4F6F8] py-[19px] px-[30px] rounded-[5px] z-0 float-right">
                        Chat
                      </span>
                    </a>
                </li>
              </ul>

              <div className="w-[185px] mt-[27px]">
                <h3 className="text-sm font-black text-black mb-[6px]">
                  Follow us
                </h3>

                <ul className="grid grid-cols-4 gap-4 ">
                  <li>
                    <Link href={"https://www.facebook.com/airporthomeappliance/"}>
                      <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full ">
                        <DynamicImage
                          src={contact_fb}
                          className="w-auto h-[14.5px]"
                          alt="Airport Home Appliance Logo"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://twitter.com/airportapplianc/"}>
                      <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full ">
                        <DynamicImage
                          src={contact_x}
                          className="w-auto h-[14.5px]"
                          alt="Airport Home Appliance Logo"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.linkedin.com/company/airport-home-appliance/"}>
                      <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full ">
                        <DynamicImage
                          src={contact_in}
                          className="w-auto h-[14.5px]"
                          alt="Airport Home Appliance Logo"
                        />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={"https://www.instagram.com/airportappliance/"}>
                      <span className="bg-[#203F62] flex justify-center items-center w-9 h-9 overflow-hidden rounded-full ">
                        <DynamicImage
                          src={contact_insta}
                          className="w-auto h-[14.5px]"
                          alt="Airport Home Appliance Logo"
                        />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex-1 w-full ">
              <h2 className="text-[26px] font-black leading-[39px] mb-[19px]">
                Contact Us
              </h2>

              <div className="w-full   ">
                <form>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-1">
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="First Name"
                        />
                        <CustomInputContact
                          labelClassName=" bg-white"
                          label="Email"
                        />
                          <CustomInputContact
                            labelClassName=" bg-white"
                            label="Phone"
                          />
                          <Controller
                            name="Type"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                              <CustomSelectContact
                                label="Store location"
                                isInvalid={isValid("location", errors)}
                                errorMessage="Please Select Store location"
                                {...field}
                              />
                            )}
                          />
                      
                    </div>
                    <div className="flex mt-3 mx-1">
                        <Checkbox
                          id="terms"
                          onCheckedChange={(e) => setCheckTerms(e)}
                          checked={checkTerms}
                        />
                        <label
                          htmlFor="terms"
                          className="mx-2 text-[12px] text-gray31  leading-[15px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                        >
                          I agree to be contacted by Airport Home Appliance via
                          text. To opt-out, you can reply &apos;STOP&apos; at
                          any time. For more information see our{" "}
                          <Link
                            href={"/privacy-policy-cookie-restriction-mode"}
                            className="underline underline-offset-2"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and&nbsp;
                          <Link
                            href={"/sms-terms"}
                            className="underline underline-offset-2"
                          >
                            SMS Policy
                          </Link>{" "}
                          Message and data rates may apply.
                        </label>
                        <p></p>
                      </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 mt-4">
                    <div className="inline-block">
                      <div className="w-full inline-block  md:pr-0 mb:pb-4  md:w-full">
                        <CustomTextareaContact
                          labelClassName=" bg-white"
                          label="What's on your mind?*"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 w-full flex justify-between  md:block">
                    <button
                      type="submit"
                      className="w-[230px] h-[67px] md:w-full bg-[#CE000E] font-black  text-lg text-white px-6 py-3 rounded-[8px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 pt-[64px] ">
        <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">
          <div className="">
            <iframe
              className="rounded-20 h-[383px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d955718.2379144423!2d-121.93846269577486!3d38.11002353967556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAirport%20Home%20Appliance%20google%20maps!5e0!3m2!1sen!2slk!4v1658140495630!5m2!1sen!2slk"
              frameBorder="0"
              allowfullscreen=""
              loading="lazy"
              title="google"
              data-uw-rm-iframe="gn"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 pb-[64px] pt-[49px] ">
        <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full">
          <h2 className="text-[26px] font-black leading-[39px] mb-[19px]">
            Our Stores
          </h2>
          {/* shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] */}
          <ul className="grid grid-cols-4 gap-[24px] mxl:grid-cols-3  mlg:grid-cols-2 md:grid-cols-1">
            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] pl-[20px] pr-[10px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Concord</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/94')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/94')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    1505 Willow Pass Rd Concord, CA 94520-5224
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (925) 265-7154
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Dublin</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/93')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/93')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] pr-4 cursor-pointer">
                    7460 Dublin Blvd Dublin, CA 94568
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (925) 557-7888
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Emeryville</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/95')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/95')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    5815 Shellmound Way Emeryville, CA 94608
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (510) 549-0800
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Hayward</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/96')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/96')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    20286 Hesperian Blvd. Hayward, CA 94541
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 10:00 AM to 7:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (510) 783-3494
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Redwood City</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/97')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/97')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    1748 Broadway Street Redwood City, CA 94063
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (650) 261-0200
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Roseville</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/98')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/98')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    1251 Lead Hill Blvd. Roseville, CA 95661
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (916) 610-4388
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">San Jose</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/99')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/99')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    966 South Bascom Ave San Jose, CA 95128
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 10:00 AM to 7:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (408) 200-2100
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">San Rafael</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                  onClick={() => router.push('store/100')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/100')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    777 Francisco Blvd. E. San Rafael, CA 94901
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 6:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (628) 277-1388
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[46px] ">Hayward Outlet Center</h2>
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/101')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/101')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                   20400 Hesperian Bivd Hayward Ca, 94541
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 10:00 AM to 7:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 6:00 PM
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (510) 570-3833
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>

            <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
              <span className="relative h-[46px] ">
                <h2 className="text-lg font-bold  h-[56px] ">
                  Warehouse - Customer
                <br />
                  Pick Up Only
                </h2>
               
                {/* <h2 className="text-lg font-bold  h-[46px] "> Pick Up Only</h2> */}
                <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0 cursor-pointer"
                 onClick={() => router.push('store/106')}>
                  <DynamicImage
                    src={contact_pinned}
                    className="w-full h-full object-cover md:object-top"
                    alt="Airport Home Appliance Logo"
                  />
                </span>
              </span>
              <ul className="text-[#020206] grid grid-cols-1 gap-4">
                <li className="flex items-start justify-start cursor-pointer" onClick={() => router.push('store/106')}>
                  <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                    <DynamicImage
                      src={contact_map}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px] cursor-pointer">
                    3525 Arden Road Suite 100 Hayward, CA 94545
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[16px] h-[auto]  mt-[2px]">
                    <DynamicImage
                      src={contact_time}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Open Hours
                    </b>
                    Mon - Fri- 9:00 AM to 1:00 PM
                    <br />
                    Sat & Sun- 10:00 AM to 12:00 PM
                    <br />
                    Sun- Closed
                  </label>
                </li>
                <li className="flex items-start justify-start">
                  <span className=" float-left w-[13px] h-[auto]  mt-[3px]">
                    <DynamicImage
                      src={contact_phone}
                      className="w-full h-full object-cover md:object-top"
                      alt="Airport Home Appliance Logo"
                    />
                  </span>
                  <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                    <b className="text-[15px] text-black font-bold mb-1 block">
                      Phone
                    </b>
                    (510) 342-7800
                  </label>
                </li>
                <li className="flex gap-3">
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Book Appointment
                  </button>
                  <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">
                    Request a Call
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
