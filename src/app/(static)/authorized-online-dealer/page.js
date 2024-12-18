import DynamicImage from "@/components/DynamicImages/DynamicImage";
import AuthorizedDealer1 from "@/assets/images/static/AuthorizedDealer1.webp";
import AuthorizedDealer2 from "@/assets/images/static/AuthorizedDealer2.webp";

const AuthorizedDealer = () => {
  return (
    <div className=" container-fuild max-w-full "> 
      <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[73px] md:py-6">      
           <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-auto align-middle">
                  <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
                      Authorized Online Dealer
                  </h1>  
           </section>
       </div>
  

        <div className="container-fuild max-w-full bg-[#ffffff] mx-auto ">
                  <section className="container max-w-1440  px-7 ">
                     <div className=" flex md:block items-center  justify-between p-[44px] lg:px-0">
                        <div className=" md:w-full  order-1 md:order-1  md:max-w-none max-w-[840px] w-full"> 
                            <p className="mt-4 text-gray-800">
                            As an Authorized Online Dealer, Airport Home Appliance will always
                            make sure your online and in-store experiences will feature nothing
                            but the best service. We are authorized to sell all your favorite
                            brands like Amana, Bosch, BlueStar, Café, Electrolux, Fisher & Paykel,
                            Gaggenau, GE, LG, Monogram, Samsung, Thermador, Whirlpool, and many
                            more!
                            </p>
                        </div>
                     
                      
                          <div className=" relative  flex order-2 md:order-2  md:mt-4 justify-end min-w-[460px] md:min-w-max w-full h-[170px] md:p-0 rounded-[15px] overflow-hidden">
                              <DynamicImage
                                src={AuthorizedDealer2}
                                fill
                  
                                className="w-full h-full object-contain"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>     
                      </div>
                    
                  </section>
        </div>

          <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[64px]  lg:px-0">
                  <section className="container max-w-1440 px-7 ">
                    <div className="flex md:flex-col items-center ">
                     
                          <div className="md:w-full min-w-[215px] h-[255px] md:p-0  rounded-[15px] overflow-hidden flex order-1 md:order-2  md:mt-4 justify-start">
                              <DynamicImage
                                src={AuthorizedDealer1}
                                className="w-full h-full object-contain"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>    
                        <div className="md:w-full pl-[44px] md:pl-0  md:max-w-none w-[960px] order-2 md:order-1">
                            <h3 className="text-2xl font-bold">What is an Authorized Dealer?</h3>
                            <p className="mt-4 text-gray-800">
                            As an authorized retailer, Airport Home Appliance has the best
                            customer service team that is highly knowledgeable and up-to-date on
                            all products we sell. All our employees receive regular training from
                            several different brands to stay up-to-date on the latest features,
                            models, recalls, and other developments.
                            </p>
                        </div> 
                     
                    </div>
                  </section>
              </div>

     

      <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px] lg:px-0">
                  <section className="container max-w-1440 px-7 ">
                    <div className="flex md:block items-center "> 
                      <div className="md:w-full w-full order-2 md:order-1 ">
                        <div className="  md:max-w-none w-full">
                            <h3 className="text-2xl font-bold">Authorized or Unauthorized - Does it Matter?</h3>
                            <p className="mt-4 text-gray-800">
                            Yes! It matters a lot. If you shop from an unauthorized dealer, chances are the manufacturer might void the warranty since they won&apos;t know whether the serial numbers or if the product itself has been damaged, used, or in any other condition. You also may not even be able to use any manufacturer rebates since they are generally reserved for real authorized dealers.
                            </p>
                            <p className="mt-4 text-gray-800">
                            If you ever want to know if a company is an authorized dealer, you can contact the manufacturers and ask! Another way to know if a company is authorized or not is by checking the price of the product. If the manufacturer has set a Unilateral Minimum Advertised Price (UMAP), and the company in question is selling below that set price, then they are an unauthorized dealer.
                            </p> 
                        </div>
                        <div className="text-left mt-6">
                          <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] ">
                              View all our Appliance Brands!
                          </button>
                        </div>
                      </div>
                     
                    </div>
                  </section>
              </div>
     
      
    </div>
  );
};

export default AuthorizedDealer;
