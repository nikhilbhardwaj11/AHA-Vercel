import Link from "next/link";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import donationImg from "@/assets/images/static/donationImg.webp";
import donationMobileImg from "@/assets/images/static/donation_banner_mobile.webp";

import captchImg from "@/assets/images/static/captch.webp";
import donationImg1 from "@/assets/images/static/donationImg1.webp";
import donationImg2 from "@/assets/images/static/donationImg2.webp";


import CustomInputContact from "@/components/ui/customInput-contact"; 

const DonationPage = () => {
  return (
    <div className=" container-fuild max-w-full ">
      <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[73px] md:py-6">      
           <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto align-middle">
           <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
           Corporate social responsibilites
                  </h1>  
           </section>
       </div>
       
       <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
                  <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center h-[303px] md:h-full border-[#333E56] border-2 rounded-xl overflow-hidden md:flex-row">
                      
                      <div className="md:w-full w-5/12  1440:w-5/12  mxl:w-6/12  md:mt-0  ml-[58px] lg:ml-[28px] 1280:ml-[38px]  order-2 md:!order-1 flex md:ml-0 justify-end">
                          <div className="w-[470px] h-[310px] lg:w-[400px] lg:h-[306px] 1280:w-[100%] 1280:h-[306px] md:p-0 rounded-[0px] overflow-hidden md:w-full md:h-[100%]">
                              <DynamicImage
                                src={donationImg}
                                className="w-full h-full object-cover md:object-top md:hidden"
                                alt="Airport Home Appliance Logo"
                              />
                               <DynamicImage
                                src={donationMobileImg}
                                className="w-full h-full object-cover md:object-top hidden md:block"
                                alt="Airport Home Appliance Logo"
                              />
                              
                          </div>                       
                        </div>
                      
                      <div className="md:w-full w-7/12  1440:w-7/12  mxl:w-6/12   order-1 md:!order-2">
                          <div className="  md:max-w-none w-[872px] float-left 1280:w-full pl-8 py-9 md:p-6">
                                <h3 className="w-[750px] text-[44px] leading-[64px] md:w-full  mlg:text-xl  md:text-md font-bold">Airport Home Appliance Donation!</h3>
                                <p className="md:text-sm text-gray-800 py-4">
                                Whatever the case may be, consider filling out a submission request and get in touch with us now! 
                                </p>
                                <span className="md:block ">
                                  <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] p-p10 "> 
                                    Submission Form
                                  </button>
                              </span>
                          </div>
                      </div>
                    
                    </div>
                    <div className="mt-[32px]">
                    <h3 className="text-[32px] mb-4  mlg:text-xl  md:text-md font-bold">Donations!</h3>
                        <p className="mt-4 md:text-sm text-gray-800 mb-4">
                        Is your school in need of a new refrigerator in the teachers&apos; lounge? 
                        Or maybe you need a new cooktop or dishwasher at your local donation or community center? 
                        Then look no further as Airport Home Appliance is committed to giving back, whether it&apos;s 
                        improving one kitchen or laundry room at a time, we want to help!
                        </p>
                        <p >Whatever the case may be, consider filling out a submission request and get in touch with us now!</p>
                    </div>
                  </section>
              </div>


              <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] ">
                    <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">
                      
                          <div className="bg-gray-100 rounded-lg flex ">
                              <div className="text-center text-gray-700 mb-6">
                                <h3 className="text-3xl font-bold mb-4 text-center  md:text-xl">
                                Submission Form
                                </h3>
                                <p className="md:text-sm mb-4">
                                Please follow the steps below in order to complete your request!
                                </p>
                                <p className="md:text-sm mb-4">
                                Specify the type of appliance you would like donated to your organization or cause. | 
                                Describe your organization&apos;s mission and purpose of your request. | i.e., How will the appliance be used? | 
                                • Provide tax exempt status/credentials for your organization.| 
                                • Please allow a 30-day window to process all requests prior to events.
                                </p> 
                              </div>
                          </div>
                          <div  className="bg-gray-100 rounded-xl flex border-2 w-[1000px] m-auto mlg:w-full">
                            <div className="w-full  ">
                            <div className=" mx-auto p-8 bg-white  rounded-lg w-full py-9">
                                <form>
                                  <div className="grid grid-cols-1 gap-6">
                                    <div className="inline-block">
                                        <div className="w-2/4 inline-block pr-6 md:pr-0 md:pb-4  md:w-full">
                                        
                                            <CustomInputContact
                                            labelClassName=" bg-white"
                                            label="Name of Organization"                                        
                                          />
                                        </div>
                                        <div className="w-2/4 inline-block  md:w-full">
                                          
                                            <CustomInputContact
                                            labelClassName=" bg-white"
                                            label="Mailing Address"                                        
                                          />
                                        </div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="w-1/3 inline-block pr-6 md:pr-0 md:pb-4  md:w-full">
                                          
                                            <CustomInputContact
                                            labelClassName=" bg-white"
                                            label="City"                                        
                                          />
                                        </div>
                                        <div className="w-1/3 inline-block pr-6 md:pr-0 md:pb-4  md:w-full">
                                         
                                          <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="State"                                        
                                        />
                                        </div>
                                        <div className="w-1/3 inline-block  md:pr-0 md:w-full">
                                         
                                            <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Zipcode"                                        
                                        />
                                        </div>
                                    </div>
                                  </div>

                                  <h2 className="text-lg font-semibold mt-8">Contact Details</h2>
                                  <div className="grid grid-cols-1   gap-6 mt-4">
                                    <div className="inline-block">
                                        <div className="w-2/4 inline-block pr-6  md:pr-0 md:pb-4  md:w-full">
                                         
                                            <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="First Name"                                        
                                        />
                                        </div>
                                        <div className="w-2/4 inline-block md:pr-0 md:w-full">
                                           <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Last Name"                                        
                                        />
                                        </div>
                                    </div>
                                    <div className="inline-block">
                                        <div className="w-1/3 inline-block pr-6 md:pr-0  md:pb-4 md:w-full">
                                          
                                        <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Phone Number"                                        
                                        />
                                        </div>
                                        <div className="w-1/3 inline-block pr-6 md:pr-4  md:pb-4  md:w-full">
                                          
                                        <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Email"                                        
                                        />
                                        </div>
                                        <div className="w-1/3 inline-block md:w-full">
                                          
                                        <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Website"                                        
                                        />
                                        </div>
                                    </div>
                                  </div>

                                  <h2 className="text-lg font-semibold mt-8">Additional Detail</h2>
                                  <div className="grid grid-cols-1   gap-6 mt-4">
                                  <div className="inline-block">
                                    <div className="w-2/4 inline-block pr-6  md:pr-0 md:mb-4 md:w-full">
                                     
                                         <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Project Timeline"                                        
                                        />
                                    </div>
                                    <div className="w-2/4 inline-block  md:mb-4 md:w-full">
                                      
                                         <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Mission"                                        
                                        />
                                    </div>
                                    <div className="w-2/4 inline-block md:col-span-2 mt-6  pr-6 md:mt-0 md:pr-0  md:w-full">
                                      
                                         <CustomInputContact
                                          labelClassName=" bg-white"
                                          label="Purpose of Request"                                        
                                        />
                                    </div>
                                    </div>
                                </div>

                                  <h2 className="text-lg font-semibold mt-8">Additional Documents Required</h2>
                                  <div className="grid grid-cols-1 gap-6 mt-4">
                                  <div className="inline-block">
                                    <div className="w-2/4 inline-block pr-6 md:pr-0 md:mb-4 md:w-full">
                                      <label className="block text-gray40 text-sm font-normal">Upload Tax Exempt Form*</label>
                                      <input
                                        type="file"
                                        className="mt-1 block w-full text-xs text-gray-500   h-[50px] border-dashed border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                      />
                                    </div>
                                    <div className="w-2/4 inline-block  md:w-full">
                                      <label className="block text-gray40 text-sm font-normal">Upload W9 Form*</label>
                                      <input
                                        type="file"
                                        className="mt-1 block w-full text-xs text-gray-500   h-[50px] border-dashed border-[#D9E1EC] border-2 rounded-[8px] p-p10 focus:ring-blue-500 focus:border-blue-500"
                                      />
                                    </div>
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
                                    <button
                                      type="submit"
                                      className="w-8/12 md:w-full bg-[#333E56]   text-white px-6 py-3 rounded-[8px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                    >
                                      Submit Now
                                    </button>
                                  </div>
                                </form>
                            </div>
                           
                            </div>

                          </div>
                    </div>
             </div>

             <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[64px] lg:py-[30px]">
                  <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full">
                  
                      <div className="flex flex-col   justify-around items-start md:items-center ">
                        <div className="flex flex-col items-left mb-8 md:mb-0">
                          
                          <h3 className="text-[32px] font-bold text-black mb-4 1440:text-3xl md:text-2xl">Consider Donating Your Old Appliances!</h3>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                          Shopping for a new appliance is an enjoyable experience but dealing with the disposal of your old one can be quite a hassle. 
                          Airport Home Appliance will take old appliances during &apos;Haul Away&apos;, however, if your appliances are still in working condition, 
                          it would be worth considering donating them instead.
                          </p>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                            Make a meaningful difference by utilizing your old appliances to support those in need. 
                            The best part is that many of these organizations provide free pickup services in the majority of areas. 
                            By donating your used appliances, you can contribute to a worthy cause while also making the process 
                            convenient and hassle-free. Donating used, functioning appliances can make a significant impact through 
                            various charitable organizations listed below. 
                          </p> 
                        </div> 
                      </div>
                </div>
            </div>

            

            <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] ">
                  <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full">
                  
                      <div className="flex flex-col   justify-around items-start md:items-center ">
                        <div className="flex flex-col items-left mb-8 md:mb-0">
                          
                          <h3 className="text-[32px] font-bold text-black mb-10 1440:text-3xl md:text-2xl">Local Donation Centers</h3>

                          <ul className="grid grid-cols-2 gap-[72px]  1500:gap-10 lg:grid-cols-1">
                              <li className="bg-white border-0 rounded-xl p-6">
                              <div className="h-[50px] w-auto mlg:w-auto  mr-4  inline-block md:text-center  " >
                                      <DynamicImage
                                        src={donationImg1}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div>
                                    <div>
                              <div className="  md:mb-0">
                                   
                                    <h3 className="text-[32px] font-bold mb-4 md:text-left md:text-2xl">Habitat for Humanity</h3>
                                    <p className="text-gray-700 text-left inline-block w-full  ">
                                    Habitat for Humanity, operating in nearly 70 countries, is an outstanding non-profit organization that gladly accepts used appliances. 
                                    Their extensive network includes numerous Habitat for Humanity ReStores, where you can find a wide range of reusable appliances and other items. 
                                    The best part is that they provide free pickup services. To locate a local branch in your area, simply visit their website.
                                    </p>
                                    <p className="text-gray-700 text-left w-full font-bold mt-3">
                                      www.habitat.org
                                     </p>
                                  </div>
                                  </div>
                                  
                              </li>


                              <li className="bg-white border-0  rounded-xl p-6">
                             
                              <div className="  mb-0">
                                    <div className="h-[50px] w-auto mlg:w-auto mr-4  inline-block md:text-center ">
                                      <DynamicImage
                                        src={donationImg2}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div>
                                  <div>
                                  <h3 className="text-[32px] font-bold mb-4 md:text-left  md:text-2xl">The Salvation Army</h3>
                                    <p className="text-gray-700 text-left inline-block  w-full">
                                    The Salvation Army, present in more than 8,000 locations across 133 countries, offers convenient options for donating your used appliances. 
                                    They can assist in scheduling a pickup time that suits your convenience. Alternatively, you can choose to drop off your appliances directly 
                                    at their designated centers. To verify if your local Salvation Army center accepts appliances, please visit their website for further details.
                                    </p>
                                    <p className="text-gray-700 text-left w-full font-bold mt-3">
                                    www.salvationarmy.org/ihq
                                    </p>
                                  </div>
                                  </div>
                              </li>
                            </ul>
                           
                        </div> 
                      </div>
                </div>
            </div>


    </div>
  );
};

export default DonationPage;
