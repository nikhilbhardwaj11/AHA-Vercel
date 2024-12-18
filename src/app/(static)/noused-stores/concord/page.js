import Link from "next/link";
import DynamicImage from "@/components/DynamicImages/DynamicImage";

import Concord1 from "@/assets/images/static/Concord1.webp";
import Concord2 from "@/assets/images/static/Concord2.webp";

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

const ConcordPage = () => {
 
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
                        <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>
                          All Stores</Link>
                        </li>
                        
                        <li className="hover:bg-[#F4F6F8] bg-[#F4F6F8] flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/concord" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>
                          Concord</Link></li>

                          <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                        <Link href="/stores/dublin" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>
                            Dublin</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/emeryville" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Emeryville</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/hayward" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Hayward</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/redwood-city" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Redwood City</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/roseville" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Roseville</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/san-jose" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>San Jose</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/san-rafael" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>San Rafael</Link></li>

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/hayward-outlet-center" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Hayward Outlet Center</Link></li> 

                            <li className="hover:bg-[#F4F6F8] bg-white flex items-center h-[64px] w-full rounded-20 p-[10px]">
                          <Link href="/stores/customer-pick-up" className="text-[#4A4A4A] text-[15px] font-semibold flex items-center justify-start">
                             <span className="flex justify-center items-center float-left w-[41px] h-[41px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[15px] bg-white">
                                        <DynamicImage src={contact_map}
                                         className="w-[20px] h-auto object-cover md:object-top"
                                         alt="Airport" />
                            </span>Warehouse - Customer Pick Up Only</Link></li>
                            </ul>

                              </div>


                     
                          <div className="w-[1020px] inline-block bg-[#ffffff]  p-[34px] rounded-[15px]">
                           
                           
                            <div className="w-full   ">
                            <h2 className="text-[26px] font-black leading-[39px] ">Concord Store</h2>
                            <p className="mb-4">Airport Home Appliance</p>
                          
                              <div className="w-full shadow-[0px_-3px_11.3px_0px_#0000001A_inset] py-[24px] px-[30px] rounded-[14px] grid grid-cols-[47%_50%] gap-5">
                                <div className="grid grid-cols-1">

                                  <div className="grid grid-cols-[130px_65%]">
                                    <span className="flex justify-center items-center float-left w-[105px] h-[131px]   drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[7px] bg-white">
                                        <DynamicImage src={Concord1}
                                         className="w-full h-auto object-cover md:object-top"
                                         alt="Airport" />
                                    </span>
                                    <div>
                                    <ul className="grid grid-cols-1 gap-3">
                                      <li>
                                          <p className="text-xs text-[#828282] text-left">Store Manager</p>
                                          <b className="text-[18px] text-[#000000] text-left">David Jeckel </b>
                                      </li>
                                      <li className="text-[13px] flex items-center">
                                            <span className="flex justify-center items-center float-left w-[33px] h-[33px] mr-3  drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[50px] bg-white">
                                              <DynamicImage src={contact_mail}
                                              className="w-[17px] h-auto object-cover md:object-top"
                                              alt="Airport" />
                                          </span>
                                          david.jeckel@airportappliance.com
                                      </li>
                                      <li className=" flex items-center text-[13px]">
                                            <span className="flex justify-center items-center float-left w-[33px] h-[33px] mr-3 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.13)] rounded-[50px] bg-white">
                                              <DynamicImage src={contact_phone}
                                              className="w-[13px] h-auto object-cover md:object-top"
                                              alt="Airport" />
                                          </span>
                                          (510) 704-2898
                                      </li>
                                    </ul>
                                  
                                  </div>
                                  </div>
                                  
                                  <div>
                                      <p  className="text-xs text-[#828282] text-left">Location</p>
                                      <b className="text-[15px] text-[#000000] text-left">1505 Willow Pass Rd Concord, CA 94520-5224</b>
                                  </div>
                                  <div>
                                      <p className="text-xs text-[#828282] text-left">Open Hours</p>
                                      <b className="text-[15px] text-[#000000] text-left">Monday - Friday: 9:00 AM to 6:00 PM <br/> Saturday & Sunday: 10:00 AM to 6:00 PM</b>
                                  </div>
                                  <div>
                                      <p className="text-xs text-[#828282] text-left">Phone</p>
                                      <b className="text-[15px] text-[#000000] text-left">(925) 265-7154</b>
                                  </div>
                                  <div className="flex gap-3 h-[34px]">
                                              <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">Book Appointment</button>
                                              <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">Request a Call</button>
                                              <button className="w-auto   py-[9px] px-[12px] md:w-full border-[1px] border-[#0B223C] font-black text-xs text-[#0B223C]  text-center rounded-[4px]   hover:bg-blue-100 focus:outline-none  ">View Event</button>
                                          
                                  </div>


                                </div>
                                   <div className="grid grid-cols-1 gap-6">
                                           <span className="flex justify-center items-center float-left w-[455px] h-[243px]  rounded-[50px] bg-white ">
                                              <DynamicImage src={Concord2}
                                              className="w-full h-auto object-cover md:object-top"
                                              alt="Airport" />
                                          </span>
                                        <div className=" block">
                                            <h3 className="text-[15px] font-semibold text-black mb-3  ">Get Direction</h3>
                                            <iframe className="rounded-20 h-[158px] w-[455px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.240056449123!2d-122.05086408441873!3d37.97152670858754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808566daa4495ed7%3A0x99496f543c800ce9!2sAirport%20Home%20Appliance!5e0!3m2!1sen!2slk!4v1673585209779!5m2!1sen!2slk"  frameborder="0" allowfullscreen="" loading="lazy" title="google" data-uw-rm-iframe="gn"></iframe>
                                        </div>
                                    </div>    
                                </div>
                            

                          </div>
                          
                          </div>
                    
                      
                    </div> 
                  </section>
              </div>

 

              

            
 

    </div>
  );
};

export default ConcordPage;
