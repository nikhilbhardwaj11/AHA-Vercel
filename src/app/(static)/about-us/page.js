import DynamicImage from "@/components/DynamicImages/DynamicImage";
import AboutUsImg1 from "@/assets/images/static/AboutUs1.webp";
import AboutUsImg2 from "@/assets/images/static/AboutUs2.webp";
import AboutUsImg3 from "@/assets/images/static/AboutUs3.webp";
import AboutUsImg4 from "@/assets/images/static/AboutUs4.webp";
import AboutUsBg from "@/assets/images/static/AboutUsBg.webp";

const ImageTag = ({ src }) => {
  return (
    <div className="w-[587px] h-[450px] md:p-0 rounded-[15px] overflow-hidden 1280:w-[487px] 1280:h-[373px] lg:w-[400px] lg:h-[306px] md:w-full md:h-[300px]">
    <DynamicImage
      src={src}
      className="w-full h-full object-cover md:object-top"
      alt="Airport Home Appliance Logo"
    />
</div>  
  );
};

const AboutUs = () => {
  return (
    <div className=" container-fuild max-w-full "> 

       <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[55px] md:py-6">      
         
          <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-[90px] md:h-full">
          <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl  ">
                         About Us
                   </h1> 
                   <h4 className="text-2xl   font-normal text-center mlg:text-xl  md:text-md">
                        Airport Home Appliance
                   </h4> 
 
            </section>
        </div>

        <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
                  <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center ">
                      <div className="md:w-full w-7/12  1440:w-7/12  order-2 md:order-1 ">
                      <div className="  md:max-w-none w-[660px] float-right 1280:w-full ">
                        <h3 className="text-2xl  mlg:text-xl  md:text-md font-bold">Why Shop with Us?</h3>
                        <p className="mt-4 md:text-sm text-gray-800">
                        We have an unmatched selection, unbeatable prices, and people you
                              can count on! Airport Home Appliance is a &quot;Family-Owned
                              Appliance Superstore&quot; providing you with guaranteed low prices
                              and outstanding customer service. We have the largest selection of
                              appliance brands in Northern California with over 80 brands and
                              hundreds of appliances on display.
                        </p>
                         
                      </div>
                      </div>
                      <div className="md:w-full w-5/12  1440:w-5/12  md:mt-4  ml-[58px] lg:ml-[28px] 1280:ml-[38px] order-2 md:order-2 flex md:ml-0 md:pt-5">
                          {/* <div className="w-[587px] h-[450px] lg:w-[400px] lg:h-[306px] 1280:w-[487px] 1280:h-[373px]  md:p-0 rounded-[15px] overflow-hidden md:w-full md:h-[300px]">
                              <DynamicImage
                                src={AboutUsBg}
                                className="w-full h-full object-cover md:object-top"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>                  */}
                            <ImageTag   src={AboutUsBg}   />      
                        </div>
                    </div>
                  </section>
              </div>


              <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] ">
                  <section className="container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center ">
                      <div className="md:w-full w-7/12  1440:w-7/12 order-2 md:order-1">
                        <div className="  md:max-w-none w-[660px]  1280:w-full"> 
                           {/* 1440:w-full */}
                            <h3 className="text-2xl  mlg:text-xl  md:text-md font-bold">Our Products</h3>
                            <p className="mt-4 md:text-sm text-gray-800">
                              We offer the largest selection of appliance brands in Northern
                              California including popular brands such as Amana, Bosch,
                              Electrolux, Frigidaire, GE, Hotpoint, KitchenAid, LG, Thermador,
                              Samsung, Whirlpool, and many more. Our showrooms have every
                              appliance you&apos;ve looked for along with live kitchen
                              vignettes to give you great kitchen remodeling ideas.
                              You&apos;ll never have to drive to different dealers to see all
                              the appliances that are offered today - just visit us at any of
                              our Airport Home Appliance showrooms.
                            </p>
                        </div>
                      </div>
                      <div className="md:w-full  w-5/12 1440:w-5/12  md:mt-4   mr-[68px] 1280:mr-[38px] lg:mr-[28px]  order-1 md:order-2 flex md:ml-0 md:pt-5">
                      {/* <div className="w-[587px] h-[450px] 1280:w-[487px] 1280:h-[373px]  lg:w-[400px] lg:h-[306px]  md:p-0 rounded-[15px] overflow-hidden md:w-full md:h-[300px]">
                                <DynamicImage
                                  src={AboutUsImg1}
                                  className="w-full h-full object-cover  md:object-top"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div>  */}
                            <ImageTag   src={AboutUsImg1}   />
                      </div>
                     
                    </div>
                  </section>
              </div>

              <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
                  <section className=" container max-w-1440 px-7 1440:px-4 1400:w-full">
                    <div className="flex md:block items-center mlg:items-start">
                      <div className="md:w-full w-7/12  1440:w-7/12  order-2 md:order-1 ">
                      <div className="  md:max-w-none w-[660px] float-right  1280:w-full" >
                        <h3 className="text-2xl  mlg:text-xl  md:text-md font-bold">Our History</h3>
                        <p className="mt-4 md:text-sm text-gray-800">
                          Airport Home Appliance began as a small appliance and furniture
                          store in 1963 built and run by Bernie Schwartz and his brother,
                          Manny. In 1970 Bernie sold his business to three engineers, who
                          now enjoy retirement and with one running a local winery in
                          Livermore. Then in 1981, Don and Yoni Van Etten became the third
                          and current owners of Airport Home Appliance.
                        </p>
                        <p className="mt-4 md:text-sm text-gray-800">
                          Their two daughters, Kris and Kate worked every day after
                          school, including the weekends, to get adjusted to their new
                          family business. They both had several years of experience in
                          retail while working at Miller&apos;s Home Appliance in San
                          Jose. Now, the second-generation company is led by Kate and has
                          taken the &quot;Mom, Pop, & Daughters Shop&quot; to what is now
                          a nationally ranked and recognized appliance superstore.
                        </p>
                        <p className="mt-4 md:text-sm text-gray-800">
                          To this day our goal remains the same, to provide our customers
                          with the largest brand selection while also offering the comfort
                          and expert knowledge of a mom-and-pop retail business.
                        </p>
                      </div>
                      </div>
                      <div className="md:w-full w-5/12 1440:w-5/12  ml-[58px] order-2 md:order-2 flex 1280:ml-[38px] lg:ml-[28px] md:ml-0 md:pt-5  "> 
                      {/* 1440:w-[487px] 1440:h-[373px]  */}
                          {/* <div className="w-[587px] h-[450px] md:p-0 rounded-[15px] overflow-hidden 1280:w-[487px] 1280:h-[373px] lg:w-[400px] lg:h-[306px] md:w-full md:h-[300px]">
                                <DynamicImage
                                  src={AboutUsImg2}
                                  className="w-full h-full object-cover  md:object-top"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div>  */}
                            <ImageTag   src={AboutUsImg2}   />
                        </div>
                    </div>
                  </section>
              </div>

              <div className="container-fuild max-w-full bg-[#f5f5f5] mx-auto px-4 py-[58px] ">
              <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                <div className="flex md:block items-center ">
                <div className="md:w-full w-7/12  1440:w-7/12 order-2 md:order-1 float-left">
                    <div className="  md:max-w-none w-[660px]  1280:w-full">
                        <h3 className="text-2xl  mlg:text-xl  md:text-md font-bold">Expert Sales Advice</h3>
                        <p className="mt-4 md:text-sm text-gray-800">
                          Our staff members are constantly trained to keep up with the
                          latest innovations in appliance design and technology. You can
                          count on us to help you select the right appliances for your
                          needs and budget. Airport Home Appliance is an appliance
                          superstore, not an aisle, which means our staff makes it their
                          business to know everything they can about appliances. So, you
                          can expect expert advice from start to finish as you decide
                          which appliances are perfect for you.
                        </p>
                    </div>  
               </div>

                  <div className="md:w-full  w-5/12 1440:w-5/12  md:mt-4   mr-[68px] 1280:mr-[48px] order-1 md:order-2 flex lg:ml-[38px] md:ml-0 md:pt-5  ">
                           {/* <div className="w-[587px] h-[450px] 1280:w-[487px] 1280:h-[373px] md:p-0 rounded-[15px] overflow-hidden lg:w-[400px] lg:h-[306px] md:w-full md:h-[300px]">
                                <DynamicImage
                                  src={AboutUsImg3}
                                  className="w-full h-full object-cover  md:object-top"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div>  */}
                                 <ImageTag   src={AboutUsImg3}   />
                  </div>
                </div>
              </section>
              </div>

              <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
              <section className=" container max-w-1440 px-7  1440:px-4">
                <div className="flex md:block items-center ">
                   <div className="md:w-full w-7/12 1440:w-7/12  order-2 md:order-1 ">
                    <div className="  md:max-w-none w-[660px] float-right  1280:w-full">
                    <h3 className="text-2xl  mlg:text-xl  md:text-md font-bold">
                      Iron Clad Low Price Guarantee
                    </h3>
                    <p className="mt-4 md:text-sm text-gray-800">
                      We are confident in our low-price guarantee that we will match
                      ANY advertised deal from any local retailer, online or in print.
                      Simply provide proof of the competitor&apos;s price within 30
                      days of purchase, such as an ad, printout, or live web page, and
                      we will match it. We will refund the difference if you have
                      already purchased something and find a lower price within 30
                      days.
                    </p>
                    <p className="mt-4 md:text-sm text-gray-800">
                      The low-price guarantee applies to the total invoice amount,
                      including applicable delivery charges. The package price
                      guarantee covers the entire package price. The advertised
                      products must be comparable (new in the box) and in stock.
                    </p>
                  </div>
                  </div>
                  <div className=" md:w-full w-5/12 1440:w-5/12 order-2 md:order-2 md:mt-4 ml-[58px] flex 1280:ml-[38px] lg:ml-[28px] md:ml-0 md:pt-5">
                        {/* <div className="w-[587px] h-[450px] 1280:w-[487px] 1280:h-[373px] md:p-0 rounded-[15px] overflow-hidden lg:w-[400px] lg:h-[306px] md:w-full md:h-[300px]">
                                <DynamicImage
                                  src={AboutUsImg4}
                                  className="w-full h-full object-cover  md:object-top"
                                  alt="Airport Home Appliance Logo"
                                />
                            </div>  */}

                        <ImageTag   src={AboutUsImg4}   />

                  </div>
                </div>
              </section>      
            </div>


    </div> 
   
  );
};

export default AboutUs;
