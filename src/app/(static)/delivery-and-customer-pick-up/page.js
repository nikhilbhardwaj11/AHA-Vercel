import DynamicImage from "@/components/DynamicImages/DynamicImage";
import PickUpBg from "@/assets/images/static/pick-up.webp";
import PickUpBgMobile from "@/assets/images/static/pick-up-m.jpg";

import PickUp1 from "@/assets/images/static/pick-up-02.webp";
import PickUp2 from "@/assets/images/static/pick-up-01.webp";

const DeliveryCustomerPickup = () => {
  return (

    
    <div className=" container-fuild max-w-full "> 

    <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[73px] md:py-6">      
      
       <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto">
                <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
                Delivery & Customer Pick-up
                </h1> 
                

         </section>
     </div>
     <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px] sm:py-[30px] ">
                  <section className=" container max-w-1440 px-7 lg:px-0 ">
                    <div className="  md:block items-center ">
                    <div className="w-full  ">
                          <div className=" sm:hidden w-full h-[300px] md:p-0 rounded-[15px] overflow-hidden mb-6">
                              <DynamicImage
                                src={PickUpBg}
                                className="w-full h-full object-cover"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>   
                          <div className=" hidden sm:flex w-full  md:p-0 rounded-[15px] overflow-hidden mb-6">
                              <DynamicImage
                                src={PickUpBgMobile}
                                className="w-full h-full object-contain"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>                      
                        </div>
                      <div className="w-full ">
                      <div className="  md:max-w-none w-full text-[#3C3C43D9]">
                        <h3 className="text-2xl font-bold text-black"> Delivery & Shipping Information</h3>
                        <p className="mt-4 ">  
                            All orders for In-Stock items & items priced $499 & above, placed
                            before 12PM (Monday through Friday) are eligible for Next Day
                            Delivery Available. Orders placed on Saturday and before 12PM on
                            Sunday are eligible for delivery on the following Monday. Additional
                            shipping and installation cost.
                          </p>
                          <p className="mt-4 ">
                            Expedited delivery is not guaranteed and is subject to the
                            availability of delivery slots. Please contact us for the next-day
                            delivery slot availability of your order. The Expedited delivery is
                            not applicable for items that are to be installed. Once an order is
                            placed, our installation team will reach out to you to schedule
                            delivery & installation for the product within 48 hours.
                          </p>
                         
                      </div>
                      </div>
                     
                    </div>
                  </section>
              </div>

              
              <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] sm:py-[30px] ">
                  <section className="container max-w-1440 px-7 sm:px-0 ">


                    <ul className="grid grid-cols-2  gap-[40px] lg:grid-cols-1">
                      <li className="w-full p-8 bg-white rounded-xl">
                            <div className="w-full h-[566px]  mb-4 overflow-hidden">
                                <DynamicImage
                                  src={PickUp1}
                                  className="w-full h-full object-cover"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div>
                        <div className="  md:max-w-none w-full text-[#3C3C43D9]">
                            <h3 className="text-2xl font-bold text-black">Customer Pick-Up</h3>
                            <p className="mt-4">
                            A member of our staff will contact you upon completion of your
                            purchase to confirm your order, schedule your pick-up, and
                            double-check that your purchase will fulfill your needs. If an
                            item is backordered or a special-order product, we will notify
                            you of the estimated arrival date.
                            </p>
                            <p className="mt-4 font-bold ">
                            Customer must pick up all items within 30 days of arrival or
                            &apos;In-Stock date&apos;. In-Stock and Special Order items not
                            picked up within said period may be subject to product release
                            or cancellation with refund.
                          </p>
                        </div>
                      </li> 
                      
                  
                    
                      <li className="w-full p-8 bg-white rounded-xl">
                          <div className="w-full h-[566px]  overflow-hidden mb-4">
                                <DynamicImage
                                  src={PickUp2}
                                  className="w-full h-full object-cover"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div> 
                          <div className="w-full text-[#3C3C43D9]">
                            <h3 className="text-2xl font-bold text-black">Pick-up Location</h3>
                            <p className="mt-4"> 
                              Pickup is be available at our Product Distribution Center,
                              located at:
                            </p>
                            <p className="mt-4 font-bold ">
                              3525 Arden Road, Suite 100, Hayward, CA 94545. PARK AT Dock #56.
                            </p>
                            <p className="mt-4 font-bold ">
                              (Online orders must be picked up by the original customer who
                              purchased the order)
                            </p>
                            <p className="mt-6 font-bold text-black">Please bring:</p>
                            <ul className="list-disc pl-5 mb-4 ">
                              <li className="mb-2">A government-issued ID</li>
                              <li className="mb-2">
                                Credit Card matching the ID that was used to purchase
                              </li>
                              <li className="mb-2">Pick-up confirmation email</li>
                            </ul>
                            <p className="mb-6">
                              NOTE: If you are unable to print your pickup notification, be
                              sure to have the pickup email ready on your mobile device.
                            </p>
                          </div>
                      </li> 
                    </ul>
                  </section>
              </div>
 
    </div>
  );
};

export default DeliveryCustomerPickup;
