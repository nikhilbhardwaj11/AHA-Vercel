import Link from "next/link";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import contact_call from "@/assets/images/static/contact_call.webp";
import contact_store from "@/assets/images/static/contact_store.webp";
import contact_email from "@/assets/images/static/contact_email.webp";
import contact_chat from "@/assets/images/static/contact_chat.webp";

import contact_fb from "@/assets/images/static/contact_fb.webp";
import contact_x from "@/assets/images/static/contact_x.webp";
import contact_in from "@/assets/images/static/contact_in.webp";
import contact_insta from "@/assets/images/static/contact_insta.webp";

import contact_pinned from "@/assets/images/static/contact_pinned.webp";
import contact_time from "@/assets/images/static/contact_time.webp";
import contact_map from "@/assets/images/static/contact_map.webp";
import contact_phone from "@/assets/images/static/contact_phone.webp";
import contact_mail from "@/assets/images/static/contact_mail.webp";

import captchImg from "@/assets/images/static/captch.webp";

import CustomInput from "@/components/ui/customInput";
import { Controller, useForm } from "react-hook-form";

const NoUsedStoresPage = () => {
  return (
    <div className=" container-fuild max-w-full bg-[#f5f5f5]">
      {/* <div className="container mx-auto p-0 bg-blue9 text-white py-[73px] md:py-6">      
           <section className="bg-blue9 text-white container max-w-1440 px-7  mx-auto h-auto align-middle">
              <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
                      Contact Us
              </h1>  
           </section>
       </div> */}

      <div className="container-fuild max-w-full bg-[#fbfbfb] mx-auto px-4 py-[58px] ">
        <section className=" container max-w-1440 px-4 1440:px-4 1440:w-full">
          <div className=" w-full   inline-block">
            <div className="w-[350px]  inline-block float-left mr-[30px] rounded-[15px] p-4 bg-[#ffffff]">
              <ul className=" ">
                <li className="hover:bg-[#F4F6F8] bg-[#F4F6F8] flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    All Stores
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/concord"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Concord
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/dublin"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Dublin
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/emeryville"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Emeryville
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/hayward"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Hayward
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/redwood-city"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Redwood City
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/roseville"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Roseville
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/san-jose"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    San Jose
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/san-rafael"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    San Rafael
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/hayward-outlet-center"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Hayward Outlet Center
                  </Link>
                </li>

                <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                  <Link
                    href="/stores/customer-pick-up"
                    className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start"
                  >
                    <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                      <DynamicImage
                        src={contact_map}
                        className="w-[20px] h-auto object-cover md:object-top"
                        alt="Airport"
                      />
                    </span>
                    Warehouse - Customer Pick Up Only
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[1020px] inline-block bg-[#ffffff] py-[28px] px-[40px] rounded-[15px]">
              <div className="w-full   ">
                <h2 className="text-[26px] font-black leading-[39px] ">
                  Our Stores
                </h2>
                <p>Airport Home Appliance</p>
                <div className="my-[20px] ">
                  <iframe
                    className="rounded-20 h-[383px] w-full"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d955718.2379144423!2d-121.93846269577486!3d38.11002353967556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAirport%20Home%20Appliance%20google%20maps!5e0!3m2!1sen!2slk!4v1658140495630!5m2!1sen!2slk"
                    frameborder="0"
                    allowfullscreen=""
                    loading="lazy"
                    title="google"
                    data-uw-rm-iframe="gn"
                  ></iframe>
                </div>
                <div className="w-full">
                  <ul className="grid grid-cols-3 gap-[20px]">
                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px] ">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Concord
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">Dublin</h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Emeryville
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Hayward
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Redwood City
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Roseville
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          San Jose
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          San Rafael
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Hayward Outlet Center
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
                            20400 Hesperian Blvd Hayward CA, 94541
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

                    <li className="rounded-[14px] shadow-[0px_-3px_11.3px_0px_rgba(225,225,225,1)_inset] border-[1px] border-[#E1E1E1] bg-white py-[25px] px-[15px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] leading-[18px] w-[80%]">
                          Warehouse - Customer Pick Up Only
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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

                    <li className="rounded-[14px] border-[1px] border-[#E1E1E1] bg-white py-[30px] px-[20px]">
                      <span className="relative h-[46px] ">
                        <h2 className="text-lg font-bold  h-[46px] ">
                          Hayward Outlet Center
                        </h2>
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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
                        <span className="flex justify-start items-start float-left w-[46px] h-[46px] md:block md:float-none md:mb-8 md:m-auto absolute right-0 top-0">
                          <DynamicImage
                            src={contact_pinned}
                            className="w-full h-full object-cover md:object-top"
                            alt="Airport Home Appliance Logo"
                          />
                        </span>
                      </span>
                      <ul className="text-[#020206] grid grid-cols-1 gap-4">
                        <li className="flex items-start justify-start">
                          <span className=" float-left w-[15px] h-[auto] mt-[2px]">
                            <DynamicImage
                              src={contact_map}
                              className="w-full h-full object-cover md:object-top"
                              alt="Airport Home Appliance Logo"
                            />
                          </span>
                          <label className="inline-block w-[90%] 1440:w-[90%] text-sm font-normal pl-[8px]">
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default NoUsedStoresPage;
