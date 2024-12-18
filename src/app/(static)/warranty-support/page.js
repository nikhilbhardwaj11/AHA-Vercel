import DynamicImage from "@/components/DynamicImages/DynamicImage";
import warrantySupport1 from "@/assets/images/static/warranty-support1.webp";
import warrantySupport2 from "@/assets/images/static/warranty-support2.webp";
import warrantyIcon from "@/assets/images/static/warrantyIcon.webp";


const WarrantySupport = () => {
  return (
    <div className=" container-fuild max-w-full ">
          <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">      
      
      <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto ">
               <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl md:block  ">
                  Warranty Support
               </h1>  
               <h4 className="text-md font-normal text-center mlg:text-lg  md:text-base  py-2 ">
                      <ul className="flex justify-center  md:inline-block md:w-full">
                         <li className=" md:w-full w-[450px] lg:w-2/4 lg:text-right md:text-center"> <b>Call Us:</b> (866) 304 - 4449 <span className="text-[#B3B3B3] lg:block">(Mon-Sun - 9am to 4pm) </span></li>
                         <li className=""> <b className="w-[2px] h-[24px] bg-white inline-block mx-[50px] md:w-[50px] md:h-[2px]"></b></li> 
                       <li className=" md:w-full text-left  md:text-center  w-[490px] lg:w-2/4"> <span>Cant wait to call?</span>  <span className="block"> Chat with one of our specialist now at  Airportappliance.com</span> </li>
                       </ul> 
               </h4>
        </section>
    </div>
     
    
        <div className="container-fuild max-w-full bg-[#ffffff] mx-auto ">
                  <section className="container max-w-1440  px-7  w-1433">
                     <div className="h-[316px] flex md:block items-center  justify-center  py-[58px] md:h-full sm:py-[30px]">
                       <div className="   flex order-2 md:order-1  md:mt-4 justify-end w-[167px] h-[200px] lg:w-auto lg:h-[180px] md:w-[160px] md:justify-center md:m-auto md:p-0 rounded-[15px] overflow-hidden">
                              <DynamicImage
                                src={warrantyIcon}
                                className="w-full h-full object-cover"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>   

                        <div className=" md:w-full  order-1 md:order-2  md:max-w-none w-[720px] mr-[56px] mlg:mr-9 mlg:w-3/4 md:mr-0"> 
                            <p className="mt-4 text-gray-800">
                            As an authorized retailer, Airport Home Appliance can provide each customer with 
                            the most premium level of protection in their appliance experience. We strive to ensure each online visit, 
                            purchase, and conversation is accompanied by the best possible customer service available.
                            </p>
                        </div>
                     
                      
                           
                      </div>
                    
                  </section>
        </div>

          
        <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] sm:py-[30px] ">
        <section className="container max-w-1440 px-0 ">
          <ul className="grid grid-cols-2 gap-[72px]  1500:gap-10 mlg:gap-5 lg:grid-cols-1">
            <li className="border-[#333E56] border-2 rounded-xl p-6">
            <h3 className="text-[32px] font-bold mb-4 md:text-center md:text-2xl">Appliance Warranties</h3>
            <div className="  md:mb-0">
                  <div className="h-[140px] w-[105px] mlg:w-auto mlg:h-[120px] mr-4 float-left inline-block md:text-center md:flex md:float-none md:w-[105px] md:m-auto" >
                    <DynamicImage
                      src={warrantySupport1}
                      className="float-left w-full h-full"
                      alt="Authorized Dealer Badge"
                    />
                  </div>
                  <div>
                 
                  <p className="text-gray-700 text-left inline-block w-[508px] 1440:w-3/4 lg:w-5/6 md:w-full">
                    When you purchase from Airport Home Appliance, you&apos;ll receive
                    the full manufacturer&apos;s warranty on your product. Though the
                    standard manufacturer&apos;s warranty can range from a year to
                    three, we also provide 2, 3, and 5 years of extended warranties at
                    an additional cost. Extended warranties help cover when component
                    failures impede the function of the product such as handles,
                    knobs, racks, and more!
                  </p>
                
                </div>
                </div>
                <p className="text-gray-700 text-left w-full font-bold">
                    Ask our associates about the manufacturer and extended warranties
                    today!
                  </p>
            </li>


            <li className="border-[#333E56] border-2 rounded-xl p-6">
            <h3 className="text-[32px] font-bold mb-4 md:text-center  md:text-2xl">Support</h3>
            <div className="  mb-0">
                  <div className="h-[140px] w-[105px] mlg:w-auto mlg:h-[120px] mr-4 float-left inline-block md:text-center md:flex md:float-none md:w-[105px] md:m-auto">
                    <DynamicImage
                      src={warrantySupport2}
                      className="float-left w-full h-full"
                      alt="Authorized Dealer Badge"
                    />
                  </div>
                <div>
                  <p className="text-gray-700 text-left inline-block w-[500px] 1440:w-3/4  lg:w-5/6 md:w-full">
                    Issues with your appliance? Questions about your warranty? We&apos;ve got you covered! </p>
                    <p>
                    Airport Home Appliance customers have
                    access to our hard-working customer service available Mon to
                    Friday, from 10am - 7pm PST. As well as on the weekend&apos;s Sat
                    & Sun from 10am - 6pm PST. Our trained customer service
                    specialists are here to help before, during, and after each
                    purchase.
                  </p>
                </div>
                </div>
            </li>
          </ul>
       
             

            {/* <div className="flex flex-col md:flex-row justify-around items-start md:items-center mb-0">
                <div className="flex flex-col items-center mb-4 md:mb-0">
                  <div className="h-16 w-16 flex justify-center items-center mb-4">
                    <DynamicImage
                      src={warrantySupport1}
                      className="float-left w-auto h-auto"
                      alt="Authorized Dealer Badge"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Appliance Warranties</h3>
                  <p className="text-gray-700 text-left w-full">
                    When you purchase from Airport Home Appliance, you&apos;ll receive
                    the full manufacturer&apos;s warranty on your product. Though the
                    standard manufacturer&apos;s warranty can range from a year to
                    three, we also provide 2, 3, and 5 years of extended warranties at
                    an additional cost. Extended warranties help cover when component
                    failures impede the function of the product such as handles,
                    knobs, racks, and more!
                  </p>
                  <p className="text-gray-700 text-left w-full mt-5">
                    Ask our associates about the manufacturer and extended warranties
                    today!
                  </p>
                </div>
         
                <div className="flex flex-col items-center mb-0">
                  <div className="h-16 w-16 flex justify-center items-center ">
                    <DynamicImage
                      src={warrantySupport2}
                      className="float-left w-auto h-auto"
                      alt="Authorized Dealer Badge"
                    />
                  </div>
                
                  <p className="text-gray-700 text-left  w-full">
                    Issues with your appliance? Questions about your warranty?
                    We&apos;ve got you covered! Airport Home Appliance customers have
                    access to our hard-working customer service available Mon to
                    Friday, from 10am - 7pm PST. As well as on the weekend&apos;s Sat
                    & Sun from 10am - 6pm PST. Our trained customer service
                    specialists are here to help before, during, and after each
                    purchase.
                  </p>
                </div>
        </div>  */}

          </section>
          </div> 


       
    </div>
  );
};

export default WarrantySupport;
