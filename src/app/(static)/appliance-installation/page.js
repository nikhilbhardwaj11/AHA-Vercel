import DynamicImage from "@/components/DynamicImages/DynamicImage";
import ApplianceDeliveryImg from "@/assets/images/static/appliance-delivery.webp";
import hoursIcon from "@/assets/images/static/48HoursIcon.webp";
import deliveryTimeIcon from "@/assets/images/static/deliveryTimeIcon.webp"; 
import Image from "next/image";

import yourDelivery from "@/assets/images/yourDelivery.webp";
import applianceInstallationBanner from "@/assets/images/ApplianceInstallationBanner.webp";

 
import Faqs from "./CollapsiblePanel/Faqs";

const ApplianceInstallation = () => {
  
  return (
    <div className=" container-fuild max-w-full "> 

    {/*<div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">      
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto ">
                    <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl md:block  ">
                    Appliance Installation
                    </h1>  
                    <h4 className="text-md font-normal text-center mlg:text-lg  md:text-base  p-2 ">
                          <ul className="flex justify-center  gap-10 md:inline-block ">
                            <li className="border-r-2 border-cyan-100  pr-10 md:w-100 md:border-r-0 md:border-b-2 md:pr-0 md:mb-3 md:pb-3"> <b>Call Us:</b> (866) 304 - 4449 <span className="text-[#B3B3B3] lg:block">(Mon-Sun - 9am to 4pm) </span></li>
                            
                            <li className=" md:w-100 "> <b>Email:</b> <span className=" lg:block">Logistics@airportappliance.com</span> </li>
                            </ul> 
                    </h4>
            </section>
    </div>*/}
    
     <div className="container-fuild max-w-full">
        <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7 mx-auto h-auto">
            <h1 className="text-4xl leading-[54px] font-bold text-center mlg:text-3xl md:text-2xl md:block">
             Appliance Installation
            </h1>
          </section>
        </div>
      </div>
      <div className="px-5 container max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
        <Image
          src={applianceInstallationBanner}
          alt="Appliance Installation"
          title="Appliance Installation"
          className="w-full h-auto"
        />
      </div>

     <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[64px]  lg:py-[30px]">
       <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">        
            <div className=" ">
              <div className="text-left text-gray-700 mb-6">
                <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                  Airport Home Appliance is proud to introduce our NEW Premium Appliance Installation Service.
                </h3>
                <p className="md:text-sm mb-4">
                  Airport Home Appliance is pleased to announce the launch of our NEW Premium Appliance Installation Service. 
                  Our Premium service includes white glove delivery and is prepared by certified installers! Each specialist 
                  has been trained and tested, is customer-educated, and always maintains a professional level of care for your appliance and home!
                </p>
                <p className="md:text-sm mb-4">
                  We need a clear installation path for our employees&apos; safety and protection of your new appliances. Outside, there should be no ice, 
                  snow, or debris, and inside, there should be no rugs or other hazards.
                </p> 
              </div>
            </div>
       </div>
     </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] lg:py-[30px] ">
           <div className="container max-w-1440 px-1  mx-auto 1440:px-4 1440:w-full lg:px-0">
         
            <div className="flex flex-col   justify-around items-start md:items-center ">
                  <div className="flex flex-col items-left mb-8 md:mb-0">                  
                    <ul className="grid grid-cols-2 gap-[40px]  1500:gap-10 lg:grid-cols-1">
                        <li className="bg-white border-0 rounded-xl p-6 ">
                          <div className="flex flex-col items-start">
                          
                        <h3 className="  font-bold text-black  text-2xl md:text-xl">Refrigerators</h3>
                        
                              <div className="my-4 h-[365px] w-[648px] 1500:w-[100%] 1500:h-[100%] inline-block md:text-center md:flex md:float-none relative overflow-hidden mb-4 pt-[56%]" >
                                        <iframe src="https://player.vimeo.com/video/725398898?h=4497697b11&amp;title=0&amp;byline=0&amp;portrait=0" className="h-[100%] w-[100%] absolute top-0 left-0 bottom-0 right-0 border-0"  title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
                              </div> 
                      
                        <div className="text-[#3C3C43D9] ">
                              
                              <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">Requirements</h3>
                                <ul className="list-disc list-inside  pl-4 md:text-sm">
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Water Connection Kit must have shut off valve within 4ft of connection. We do not connect directly to PEX, Plastic, or Copper Tubing. We do connect directly to copper if the shut-off valve is located on the end of the tube within 4ft of connection.</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Shutting off the valve directly behind the refrigerator is recommended. Services to install a shut-off valve behind the refrigerator are available upon request. If needed, notify your salesperson to properly schedule your delivery.</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">110V grounded 3 prongs electrical outlet.</span></li>
                                <li className=" clear-both "><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">If you require a door-swing reversal, the option must be selected in the cart before you submit your order. If you request to reverse the door after delivery, there will be a substantial fee.</span></li>
                              </ul>
                            </div>

                            <div className="text-[#3C3C43D9] inline-block clear-both">
                            <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">To Prepare for Your Delivery</h3>
                              <ul className="list-disc list-inside mb-4 pl-4  md:text-sm">
                              <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Measure the path of delivery and installation area to ensure the appliance can fit perfectly.</span></li>
                              <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Verify your current electrical and water connections.</span></li>
                              <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Unplug and empty your old refrigerator.</span></li>
                              </ul>
                            </div>
                              <Image
                                src={yourDelivery}
                                alt="To Prepare for Your Delivery"
                                title="To Prepare for Your Delivery"
                                className="w-full h-auto"
                              />
                            
                            </div>
                            
                        </li>

                        <li className="bg-white border-0 rounded-xl p-6">
                          <div className="flex flex-col items-left mb-8 md:mb-0">
                          <h3 className="  font-bold text-black text-2xl md:text-xl">Gas Dryers</h3>
                          

                                <div className="my-4 h-[365px] w-[648px] 1500:w-[100%] 1500:h-[100%] inline-block md:text-center md:flex md:float-none relative overflow-hidden mb-4 pt-[56%]" >
                                        <iframe src="https://player.vimeo.com/video/725401164?h=e5af742390&title=0&byline=0&portrait=0" className="h-[100%] w-[100%] absolute top-0 left-0 bottom-0 right-0 border-0"  title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
                              </div> 
                        
                          <div className="text-[#3C3C43D9] ">
                                
                                <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">Requirements</h3>
                                  <ul className="list-disc list-inside  pl-4   md:text-sm">
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">New gas flex connection kit.</span></li>
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">110V-grounded, 3-prong electrical outlet.</span></li>
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">Rigid, black gas line (no copper).</span></li>
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">Gas shutoff directly behind the appliance.</span></li>
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">If you require an LP conversion, you must select the option in your cart prior to submitting your order. If you missed it, please contact us immediately at 510-342-7800.</span></li>
                                  <li className="clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4 ">If you require a door swing reversal (usually from right hinge to left hinge), you must select the option in the cart prior to submitting your order. There is a substantial fee to reverse the door after delivery.</span></li>
                                  </ul>
                              </div>

                              <div className="text-[#3C3C43D9] inline-block  clear-both">
                              <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">To Prepare for Your Delivery</h3>
                              <ul className="list-disc list-inside mb-4 pl-4  md:text-sm">
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Measure the path of delivery and installation area to make sure the new dryer will fit perfectly.</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Verify your current electrical and gas connections.</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Unplug and empty your old gas dryer.</span></li>
                                </ul>
                              </div>
                              </div>
                              
                              
                          </li>

                          <li className="bg-white border-0 rounded-xl p-6">
                              <div className="flex flex-col items-left mb-8 md:mb-0"> 
                              <h3 className="  font-bold text-black   text-2xl md:text-xl">Washers</h3>
                          
                                <div className="my-4 h-[365px] w-[648px] 1500:w-[100%] 1500:h-[100%] inline-block md:text-center md:flex md:float-none relative overflow-hidden mb-4 pt-[56%]" >
                                        <iframe src="https://player.vimeo.com/video/725401164?h=e5af742390&title=0&byline=0&portrait=0" className="h-[100%] w-[100%] absolute top-0 left-0 bottom-0 right-0 border-0"  title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
                              </div> 
                        
                          <div className="text-[#3C3C43D9] ">
                                
                                <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">Requirements</h3>
                                  <ul className="list-disc list-inside pl-4 md:text-sm">
                                    <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">New hoses.</span></li>
                                      <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">110V-grounded, 3-prong electrical outlet. </span></li>
                                      <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Corrosive-free hot & cold water valves within 6 ft. of the hookup site. </span></li>
                                      <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%]  mb-4">Ensure the water supply lines are metal or copper, not PVC. </span></li>
                                  </ul>
                              </div>

                              <div className="text-[#3C3C43D9] inline-block clear-both">
                              <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">To Prepare for Your Delivery</h3>
                              <ul className="list-disc list-inside mb-4 pl-4  md:text-sm">
                                <li className=" clear-both"><span className="inline-flex w-[96%] float-right mb-4">Measure the delivery path and installation area to ensure fit for your new washer Unplug and empty out your old washer.</span></li>
                                  <li className=" clear-both"><span className="inline-flex w-[96%] float-right mb-4">Unplug and empty out your old washer.</span></li>
                                </ul>
                              </div>
                              </div>
                              
                              
                          </li>

                          <li className="bg-white border-0 rounded-xl p-6">
                          <div className="flex flex-col items-left mb-8 md:mb-0"> 
                          <h3 className="  font-bold text-black   text-2xl md:text-xl">Electric Ranges</h3>
                          
                                <div className="my-4 h-[365px] w-[648px] 1500:w-[100%] 1500:h-[100%] inline-block md:text-center md:flex md:float-none relative overflow-hidden mb-4 pt-[56%]" >
                                        <iframe src="https://player.vimeo.com/video/725403389?h=fea7aa4579&title=0&byline=0&portrait=0" className="h-[100%] w-[100%] absolute top-0 left-0 bottom-0 right-0 border-0"  title="player-vimeo" data-uw-rm-iframe="gn"></iframe>
                              </div> 
                        
                          <div className="text-[#3C3C43D9] ">
                                
                                <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">Requirements</h3>
                                  <ul className="list-disc list-inside pl-4 md:text-sm">
                                  <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">New electrical cord (3 prong or 4 prong).</span></li>
                                  <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">240V electric outlet within 4 ft. of the hookup site.</span></li>
                                  </ul>
                              </div>

                              <div className="text-[#3C3C43D9] inline-block  clear-both">
                              <h3 className="text-xl text-black font-bold mb-4 md:text-left md:text-2xl">To Prepare for Your Delivery</h3>
                              <ul className="list-disc list-inside mb-4 pl-4  md:text-sm">
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">New electrical cord (3 prong or 4 prong).</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Verify the outlet type (must match the approved types shown above).</span></li>
                                <li className=" clear-both"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4">Unplug and empty out your old range.</span></li>
                                </ul>
                              </div>
                              </div>
                              
                              
                          </li>
                          
                    </ul>                    
                  </div> 
            </div>
            
            </div>
      </div>

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[64px]  lg:py-[30px]">
        <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">        
            <div className=" ">
                <h3 className="text-4xl text-left text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                  Additional Information
                  </h3>

                 <div className="text-left text-gray-700 mb-6">
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      Installation Safety Protocols
                      </h3>
                      <p className="md:text-sm mb-4">
                      <b> Protective Equipment: </b> Protective Equipment: Our delivery and installation teams are diligently wearing protective equipment such as masks 
                      and gloves to minimize the risk of transmission. We understand that many of our customers may be uncomfortable with our teams in their homes and are
                        taking every precaution possible.
                        </p>
                        <p className="md:text-sm mb-4">
                            <b>Reducing Touchpoints: </b>When possible, our teams are reducing touch points in every interaction. Things like signing for the delivery or exchanging paperwork 
                            are treated with extra caution or omitted where possible or upon customer request.
                        </p> 
                        <p className="md:text-sm mb-4">
                            <b>Social Distancing: </b>Our team is strictly enforcing social distancing when working on an installation in your home. Please be respectful 
                            of our teams and provide them a clear pathway in the home and avoid crowding them in tight spaces. Your cooperation and consideration are appreciated by our teams and their families.
                        </p> 
                </div>

                
                <div className="text-left text-gray-700 mb-6">
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                   Protection Plans
                      </h3>
                      <p className="md:text-sm mb-4">
                        Worry less and save more with online and in-store protection plans, available on all major appliances.
                        </p> 
                </div>

                
                <div className="text-left text-gray-700 mb-6">
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      Delivery Day
                      </h3>
                      <p className="md:text-sm mb-4">
                      Our team is dedicated to making sure your delivery process is completed promptly. The more contact information we have, the better. 
                      Please provide a primary and secondary number along with an e-mail address. As your delivery date nears, you will be contacted at least twice.
                        </p> 
                </div>

                
                <div className="text-left text-gray-700 mb-6">
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      48 Hour Call
                      </h3>
                      <p className="md:text-sm mb-4">
                         You will be contacted 48 hours before your delivery date via a phone call and e-mail. You must confirm to stay on the delivery schedule.
                     </p> 
                </div>
                
                <div className="text-left text-gray-700 mb-6">
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      Delivery Time Window Courtesy Call
                      </h3>
                      <p className="md:text-sm mb-4">
                          You will receive a call, text, and an e-mail the day before your delivery date informing you of your 4-hour delivery time window. 
                          You must confirm to stay on the delivery, CONFIRMATION MUST HAPPEN BY 12:00 MIDNIGHT TO STAY ON THE DELIVERY SCHEDULE.
                      </p>  
                </div>
                
                <div className="text-left text-gray-700 mb-6">
                      <p className="md:text-sm mb-4">
                         MISSED YOUR VERIFICATION CALLS?
                      </p>
                      <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      CALL (510) 342-7800 & Select Option 1.
                      </h3>  
                </div>
                
                <div className="text-left text-gray-700 mb-6">
                      <p className="md:text-sm mb-4">
                        NEED TO RESCHEDULE YOUR DELIVERY?
                     </p>
                     <h3 className="text-[32px] text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                        CALL (510) 342-7800 & Select Option 1.
                      </h3>
                </div> 
            </div>
        </div>
      </div>

      <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] lg:py-[30px]">
        <div className="container max-w-1440 px-1  mx-auto 1440:px-4 1440:w-full lg:px-0">
          <Faqs/>
        </div>
      </div>

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[64px]  lg:py-[30px]">
          <div className="container max-w-1440 px-1  mx-auto 1440:px-4 1440:w-full lg:px-0">
              <div className="text-left text-gray-700 mb-6">
                  <h3 className="text-4xl text-black leading-9 font-bold mb-4 text-left  md:text-xl w-3/4">
                      Disclaimer
                  </h3>
                  <ul className="list-disc list-inside mb-4 pl-4 md:text-sm">
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] mb-4"> 
                    Expedited delivery is not guaranteed and is subjected to the availability of delivery slots. Please contact us for the next-day delivery slot availability of your order.
                    </span> </li>
                    <li className="align-middle"><span className="inline-flex w-[96%] 1440:w-[90%] mb-4"> 
                    The Expedited delivery is not applicable for items that are to be installed. Once an order is placed, our installation team will reach out to you to schedule delivery and appliance installation within 48 hours. These items include but aren&apos;t limited to Dishwashers, Wall Ovens, Cooktops, Built-in Fridges, Pro Ranges, OTR Microwaves, and Hoods.
                    </span> </li>
                  </ul>
              </div>
          </div>
      </div>
          
      </div> 
  );
};

export default ApplianceInstallation;
