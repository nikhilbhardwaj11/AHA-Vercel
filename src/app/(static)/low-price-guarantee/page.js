import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";
import DynamicImage from "@/components/DynamicImages/DynamicImage";

import PickUplowBg from "@/assets/images/static/lowBg.webp";
import PickUplowMobileBg from "@/assets/images/static/AboutUs4.webp";

import PickUpBg from "@/assets/images/static/pick-up.webp";
import PickUp1 from "@/assets/images/static/pick-up-02.webp";
import PickUp2 from "@/assets/images/static/pick-up-01.webp";
import Faqs from "./CollapsiblePanel/Faqs";
const PriceMatchGuarantee = () => {
  return (
    <div className=" container-fuild max-w-full "> 
      <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[73px] md:py-6">      
      
      <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto ">
               <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl md:block  ">
               Lowest Price Guaranteed
               </h1>  
             
        </section>
    </div>

      
    <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]h-auto ">
                  <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center h-[300px] mxl:h-[250px] mlg:h-[200px] lg:h-[150px]  md:h-[auto] bg-[#f2f3f7]  border-2 rounded-xl overflow-hidden p-0 relative">
                      <div className="md:w-full w-7/12  1440:w-7/12  mlg:w-6/12   md:block" >
                          <div className="  md:max-w-none w-[872px] float-left 1280:w-full  pl-[40px] lg:pl-[20px] md:h-[auto] md:float-none md:block">
                           
                            <h3 className="max-w-[650px] w-full text-[38px] leading-[44px] xl:text-[32px] mxl:text-[28px] xl:max-w-[480px] mxl:max-w-[420px] md:max-w-[400px] mlg:text-xl md:p-[20px] md:text-3xl font-bold md:h-[100%]">
                              Provide Proof of Lower Price Within 30-Days of Purchase
                            <br /> 
                            <span className="font-normal text-[28px] xl:text-2xl mxl:text-xl md:text-xl mlg:text-lg">& we&apos;ll Give You 110% of the difference!</span></h3>
                             
                          </div>
                      </div>
                      <div className="md:w-full md:block  md:mt-4  ml-[58px] lg:ml-[20px] 1280:ml-[38px]  flex md:ml-0  justify-end absolute right-0 top-0  md:h-[100%] md:relative">
                          <div className=" w-[auto]  mxl:h-[250px] h-[300px] mlg:h-[200px] lg:h-[150px] first-letter: rounded-[0px] overflow-hidden md:w-full  md:h-[100%] ">
                             <DynamicImage
                                src={PickUplowBg}
                                className="w-full h-full object-cover md:object-top md:hidden"
                                alt="Airport Home Appliance Logo"
                              />  
                              <DynamicImage
                              src={PickUplowMobileBg}
                              className="w-full h-full object-cover md:object-top md:block"
                              alt="Airport Home Appliance Logo"
                            />
                          </div>                       
                        </div>
                    </div> 

                     
                    <div className="text-left text-4xl font-semibold text-gray-800 mt-4 mb-4 xl:text-3xl 1400:text-2xl lg:text-2xl md:text-center">
                      Example of Our 110% Price Match Guarantee!
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-6 items-center relative"> 
                    {/* <span className=" h-[3px] bg-red-600 absolute top-[20%]  w-full z-10"></span> */}
                    <div className="bg-white p-8  w-full h-full  md:mb-0 grid grid-col-1 text-center  gap-4 relative  border-[1px] border-[#D9D9D9] rounded-[15px] "> 
                     
                        <div className="flex justify-center items-center ">
                          <div className=" bg-white border-4 border-[#CA082E] text-black rounded-full h-24 w-24 flex items-center justify-center text-3xl font-extrabold  ">
                            1
                          </div>
                        </div>
                        <div className="flex justify-center items-start text-gray-700 px-2 w-[380px]  h-[80px] m-auto  mxl:w-[80%]  mxl:h-[100px] mlg:w-full md:h-full md:w-10/12">
                          You Purchase a Range for $1,500 from Your Local Airport Home
                          Appliance Showroom.
                        </div>
                      </div>
          
          

                      <div className="bg-white p-8  w-full h-full  md:mb-0 grid grid-col-1 text-center  gap-4 relative  border-[1px] border-[#D9D9D9] rounded-[15px] "> 
                      
                        <div className="flex justify-center items-center ">
                          <div className="bg-white border-4 border-[#CA082E] text-black rounded-full h-24 w-24 flex items-center justify-center text-3xl font-extrabold ">
                            2
                          </div>
                        </div>
                        <div className="flex justify-center items-start text-gray-700 px-2 w-[380px] h-[80px] m-auto  mxl:w-[80%]  mxl:h-[100px] mlg:w-full  md:h-full md:w-10/12">
                          A Week Later, You Find the Same Range Priced at $1,200 From an
                          Authorized Retailer.
                        </div>
                      </div>
                      <div className="bg-white p-8  w-full h-full  md:mb-0 grid grid-col-1 text-center gap-4 relative border-[1px] border-[#D9D9D9] rounded-[15px]  "> 
                     
                        <div className="flex justify-center items-center ">
                          <div className="bg-white  border-4 border-[#CA082E] text-black rounded-full h-24 w-24 flex items-center justify-center text-3xl font-extrabold  ">
                            3
                          </div>
                        </div>
                        <div className="flex justify-center items-start text-gray-700 px-2 w-[380px]  h-[80px] m-auto  mxl:w-[80%]  mxl:h-[100px] mlg:h-[130px] mlg:w-full md:h-full md:w-10/12">
                          You Show us Proof. We Note the Difference of $300. We Then
                          Credit You $330, 110% Of the Difference!
                        </div>
                      </div>
                    </div>


                  </section>
              </div>


            <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px] h-auto ">
              <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                     <Faqs/>
         
              </section>
            </div>
    </div>
  );
};

export default PriceMatchGuarantee;
