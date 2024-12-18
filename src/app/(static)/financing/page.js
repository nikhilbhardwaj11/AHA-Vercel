import Link from "next/link";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import financingImg1 from "@/assets/images/static/financingImg1.webp";
import financingImg2 from "@/assets/images/static/financingImg2.webp";
import financingImg3 from "@/assets/images/static/financingImg3.webp";
import financingImg4 from "@/assets/images/static/financingImg4.webp";
import financingImg5 from "@/assets/images/static/financingImg5.webp";
import financingImg6 from "@/assets/images/static/financingImg6.webp"; 


const FinancingPage = () => {
  return (
    <div className=" container-fuild max-w-full ">
      <div className="container mx-auto p-0 bg-[#F1F1F1] text-[#0B223C] py-[52px] md:py-6">      
      <section className="bg-[#F1F1F1] text-[#0B223C] container max-w-1440 px-7  mx-auto h-[102px] md:h-full">
      <h1 className="text-4xl leading-[54px] font-bold text-center  mlg:text-3xl  md:text-2xl ">
                    Financing Services
                  </h1>  
                  <h4 className="text-2xl font-normal text-center mlg:text-xl  md:text-md">
                  Find out more about Airport Home Appliance Financing Services
                   </h4> 
           </section>
       </div>
       
       <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
                  <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center h-[316px] md:h-full border-[#CA082E] border-2 rounded-xl overflow-hidden px-8 pl-7  md:py-6">
                      <div className="md:w-full w-7/12  1440:w-7/12  mlg:w-6/12  order-1 md:order-2 ">
                          <div className="  md:max-w-none w-[872px] float-left 1280:w-full  ">
                            <h3 className="max-w-[650px] w-full text-[44px] leading-[64px] lxl:text-4xl   lxl:leading-[54px] mlg:text-xl  md:text-md font-bold">Special Financing Options: <br/> 0% APR for 24 Months 2</h3>
                            <p className="md:text-sm text-gray-800 py-4">
                                We offer financing plans that suit your needs.<br/> <b>Call (866) 304-4449</b>, press 1 to purchase using promotional financing* 
                            </p>
                            <div className="md:mt-6 flex gap-y-2 gap-x-4 flex-wrap ">
                              <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] p-p10"> 
                                  Apply Now
                              </button>
                              <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10"> 
                                  Financing Terms
                              </button>
                          </div>
                          </div>
                      </div>
                      <div className="md:w-full w-5/12  1440:w-5/12  mlg:w-6/12  md:mt-4  order-2 md:order-1 flex md:ml-0 md:pt-5 justify-end">
                          <div className=" w-[408px]  h-[260px] lg:w-[100%] lg:h-[100%] lg:py-5 rounded-[0px] overflow-hidden md:w-full   md:px-6 md:py-0">
                              <DynamicImage
                                src={financingImg1}
                                className="w-full h-full object-cover md:object-top"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>                       
                        </div>
                    </div> 
                  </section>
              </div>


              <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px] ">
                    <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">
                    <div className="flex flex-col   justify-around items-start md:items-center ">
                        <div className="flex flex-col items-left mb-8 md:mb-0">
                          
                          <h3 className="text-[32px] font-bold text-black mb-4 1440:text-3xl md:text-2xl">The Choice is Yours</h3>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                              Special Financing Options
                          </p>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                           <b>01. </b> With the approved credit card. See store for details.
                          </p>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                          <b>02. </b> The Airport Home Appliance credit card is issued by the Wells Fargo Bank, N.A. Special terms apply to qualifying Purchases
                             of $1499 & up or more charged with approved credit. The special terms APR will continue to apply until all qualifying purchases
                            are paid in full. The monthly payment for this purchase will be the amount that will pay for the purchase in full in qual payments
                             during the promotional (Special terms) period. The APR for purchases will apply to certain fees such as late payments fee or if 
                             you use the card for other transactions. For new accounts, the APR for purchases is 28.99% if you are charged interest in any billing cycle, 
                             the minimum interest charge will be $1.00. This information in accurate as of 08/01/2023 and is subject to change. For current information, 
                             call us at 1-800-431-5921.
                          </p> 
                        </div> 
                        <ul className="w-full">
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 mb-6 md:inline-block md:w-full">
                            <div className="text-[#7B1D1C] text-6xl  text-center  w-[70px]  md:inline-block">
                              6
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px] slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl  leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base  " >Special Financing 1</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[65%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:inline-block">
                              For appliance purchases of <b>$499 & up</b>.
                            </div>
                          </li>
                          
                          <li className="flex items-center gap-6 border-[#BEBEBE]  border-2 rounded-xl px-6 py-5 mb-6 md:inline-block md:w-full">
                            <div className="text-[#C1051A] text-6xl   text-center  w-[70px]  md:inline-block">
                              12
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px] slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base  " >Special Financing 1</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[65%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of <b>$599 & up</b>.
                            </div>
                          </li>

                          
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 mb-6 md:inline-block md:w-full">
                            <div className="text-[#EC273C] text-6xl  text-center  w-[70px]  md:inline-block">
                              18
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px] slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl  leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base   " >Special Financing 1</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[65%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of <b>$999 & up</b>.
                            </div>
                          </li>

                          
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 md:inline-block md:w-full">
                            <div className="text-[#333E56] text-6xl   text-center w-[70px] md:inline-block">
                              24
                            </div> 
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px] slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl  leading-8 font-bold pb-0 mb-0 md:block">Months</span>
                              <label className="text-base  " >Special Financing 1</label>
                            </div> 
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[65%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of $1499 & up (Only for Dacor / JennAir / Monogram / Signature Kitchen Suite / Thermador)
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
             </div>

             <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[64px] lg:py-[30px] ">
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

            

            <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px] ">
                  <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full">
                  
                      <div className="flex flex-col   justify-around items-start md:items-center ">
                        <div className="flex flex-col items-left mb-8 md:mb-0">
                          
                          <h3 className="text-[32px] font-bold text-black mb-10 1440:text-3xl md:text-2xl">Local Donation Centers</h3>

                          <ul className="grid grid-cols-2 gap-[40px]  1500:gap-10 lg:grid-cols-1 sm:gap-5">
                              <li className="bg-white border-0 rounded-xl p-6">
                              <div className="h-[50px] w-auto  mr-4  inline-block  " >
                                      <DynamicImage
                                        src={financingImg3}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div> 
                                  <div className="mb-5"> 
                                        <h3 className="text-[32px] font-bold mb-4  1440:text-3xl md:text-2xl">Wells Fargo Financing</h3>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Buy today, pay over time with the Airport Appliance Credit card, issued with approved credit by Wells Fargo Bank, N.A.
                                        </p>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        With special financing from Wells Fargo, you can enjoy more purchasing power today and the convenience of monthly payments to help your budget. 
                                        Plus, yo&apos;ll have available credit for future purchases —no need to complete another application.
                                        </p>
                                        <p className="text-gray-700 text-left w-full font-bold  mb-3">
                                        Call (866) 304-4449, press 1 to purchase using promotional financing*
                                        </p>
                                  </div> 
                                  <span className="md:block md:mt-6 ">
                                      <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] p-p10 "> 
                                          Apply Today
                                      </button>
                                      <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10 ml-4"> 
                                          Manage Account
                                      </button>
                                  </span>
                              </li>


                              <li className="bg-white border-0  rounded-xl p-6">
                                  <div className="h-[50px] w-auto  mr-4  inline-block  " >
                                      <DynamicImage
                                        src={financingImg6}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div> 
                                  <div className="mb-5"> 
                                        <h3 className="text-[32px] font-bold mb-4  1440:text-3xl md:text-2xl">Progressive Leasing</h3>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Progressive Leasing is tailored for those with less-than-perfect credit, meaning our decision to approve 
                                        you for a lease is based on more than simply your credit score.
                                        </p>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        90-Day Purchase Options: Standard agreement offers 12 months to ownership. 90-day purchase options cost 
                                        more than the retailer&apos;s cash price (except 3-month option in CA).
                                        </p>
                                        <p className="text-gray-700 text-left w-full font-bold  mb-3"> 
                                        To cancel lease or purchase early call 877-898-1970*
                                        </p>
                                  </div> 
                                  <span className="md:block md:mt-6 ">
                                      <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] p-p10 "> 
                                          Apply Now
                                      </button>
                                      <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10 ml-4"> 
                                      Learn More
                                      </button>
                                  </span>
                              </li>

                              <li className="bg-white border-0 rounded-xl p-6">
                              <div className="h-[50px] w-auto   mr-4  inline-block  " >
                                      <DynamicImage
                                        src={financingImg4}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div> 
                                  <div className="mb-5"> 
                                        <h3 className="text-[32px] font-bold mb-4  1440:text-3xl md:text-2xl">Pay at Your Own Pace</h3>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Choose from more intelligent payment options—like 4 interest-free payments or monthly payments.
                                        </p>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Affirm offers payment options, subject to an eligibility check, and may not be available in all states. 
                                        Options depend on your purchase amount, and a down payment may be required.
                                        </p>
                                        <p className="text-gray-700 text-left w-full font-bold  mb-3">
                                        Choose Affirm at checkout*
                                        </p>
                                  </div> 
                                  <span className="md:block md:mt-6 "> 
                                      <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10 "> 
                                      Learn More
                                      </button>
                                  </span>
                              </li>


                              <li className="bg-white border-0  rounded-xl p-6">
                                  <div className="h-[50px] w-auto   mr-4  inline-block md:float-none  " >
                                      <DynamicImage
                                        src={financingImg5}
                                        className="float-left w-full h-full"
                                        alt="Authorized Dealer Badge"
                                      />
                                    </div> 
                                  <div className="mb-5"> 
                                        <h3 className="text-[32px] font-bold mb-4  1440:text-3xl md:text-2xl">Synchrony Home Credit Card</h3>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Take advantage of our special promotional financing and everyday benefits by applying today.
                                        </p>
                                        <p className="text-gray-700 text-left inline-block w-full mb-3 ">
                                        Shop smarter and save more with our retail credit card. It&apos;s the ultimate way to get more out of every 
                                        purchase and make your money go further.
                                        </p>
                                        <p className="text-gray-700 text-left w-full font-bold  mb-3"> 
                                        To cancel lease or purchase early call 877-898-1970*
                                        </p>
                                  </div> 
                                  <span className="md:block md:mt-6 ">
                                      <button className="bg-[#333E56] text-white py-3 px-6 rounded-[8px] p-p10 "> 
                                      Apply Today
                                      </button>
                                      <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10 ml-4"> 
                                      Manage Account
                                      </button>
                                  </span>
                              </li>
                            </ul>
                           
                        </div> 
                      </div>
                </div>
            </div>


               
         
            <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px]">
                  <section className=" container max-w-1440 px-7 1440:px-4 1440:w-full">
                    <div className="flex md:block items-center h-[406px] md:h-full border-[#31BDC7] border-2 rounded-xl overflow-hidden px-8 pl-7 lg:pl-4 md:py-6">
                      <div className="md:w-full w-7/12  1440:w-7/12  mlg:w-6/12  990:w-7/12 order-2 md:order-1 ">
                          <div className="  md:max-w-none w-[872px] float-left 1280:w-full  ">
                            <h3 className="w-[750px] text-[40px] leading-[54px] lxl:text-[36px] mlg:text-xl  md:text-md font-bold 1280:w-full ">
                              <span className="text-[44px] leading-[60px] lxl:text-[40px] mlg:text-xl lxl:leading-[44px] md:text-md font-bold block ">Special Financing Options:  </span>
                              0% APR with 24 equal monthly payments**<br/> On purchases of $1,499 and more</h3>
                            <p className="md:text-sm text-gray-800 py-4">
                                We offer financing plans that suit your needs.<br/> <b>Call (866) 304-4449</b>, press 1 to purchase using promotional financing* 
                            </p>
                            <span className="md:block md:mt-6 ">
                              <button className="bg-[#F5B700] text-white py-3 px-6 rounded-[8px] p-p10 "> 
                                  Apply Now
                              </button>
                              <button className="border-[#333E56] bg-#FBFBFB text-[#333E56] border-[1px] py-3 px-6 rounded-[8px] p-p10 ml-4"> 
                                  Financing Terms
                              </button>
                          </span>
                          </div>
                      </div> 
                      <div className="md:w-full w-5/12  1440:w-5/12 mlg:w-6/12 990:w-5/12 mlg:justify-end  md:mt-4 lxl:ml-[10px] ml-[20px] lg:ml-[5px] 1280:ml-[38px] order-2 md:order-2 flex md:ml-0 md:pt-5 justify-start md:justify-center">
                          <div className=" w-[544px]  h-[350px] 1280:w-[487px] 1380:w-[100% 1380:h-[100%] md:p-0 rounded-[0px] overflow-hidden  ">
                              <DynamicImage
                                src={financingImg2}
                                className="w-full h-full object-cover md:object-top"
                                alt="Airport Home Appliance Logo"
                              />
                          </div>                       
                        </div>
                    </div> 
                  </section>
              </div>


              <div className="container-fuild max-w-full bg-[#ffffff] mx-auto px-4 py-[58px]  sm:py-[30px] ">
                    <div className="container max-w-1440 px-7  mx-auto 1440:px-4 1440:w-full ">
                    <div className="flex flex-col   justify-around items-start md:items-center ">
                        <div className="flex flex-col items-left mb-8 md:mb-0">
                          
                          <h3 className="text-[32px] font-bold text-black mb-4 1440:text-3xl md:text-2xl">The Choice is Yours</h3>
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                              Special Financing Options
                          </p> 
                          <p className="text-gray-700 text-left mb-4  md:text-sm">
                          *No interest will be charged on the promo balance if you pay it off, in full, within the promo period. If you do not,  
                          interest will be charged on the promo balance from the purchase date. The required minimum monthly payments may or may 
                          not pay off the promo balance before the end of the promo period, depending on purchase amount, promo length and payment allocation. 
                          Regular account terms apply to non-promo purchases and, after promo period ends, to the promo balance. For New Accounts: Purchase APR is 29.99%.
                           Minimum Interest Charge is $2. Existing cardholders: See your credit card agreement terms. Subject to credit approval.
                          </p> 
                        </div> 
                        <ul className="w-full">
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 mb-6  md:inline-block md:w-full">
                            <div className="text-[#7B1D1C] text-6xl  text-center  w-[70px] md:inline-block">
                              6
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px]  slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl leading-8 font-bold pb-0 mb-0  md:block" >Months</span>
                              <label className="text-base  " >Special Financing*</label>
                            </div>
                            <div className="text-2xl   slg:text-xl  w-[1000px] mlg:w-[70%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of <b>$499 & up</b>.
                            </div>
                          </li>
                          
                          <li className="flex items-center gap-6 border-[#BEBEBE]  border-2 rounded-xl px-6 py-5 mb-6  md:inline-block md:w-full">
                            <div className="text-[#C1051A] text-6xl   text-center  w-[70px] md:inline-block">
                              12
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8  w-[190px]  slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base  " >Special Financing*</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[70%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of <b>$599 & up</b>.
                            </div>
                          </li>

                          
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 mb-6  md:inline-block md:w-full">
                            <div className="text-[#EC273C] text-6xl  text-center  w-[70px] md:inline-block">
                              18
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px]  slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px]  slg:text-2xl leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base   " >Special Financing*</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[70%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                              For appliance purchases of <b>$999 & up</b>.
                            </div>
                          </li>

                          
                          <li className="flex items-center gap-6 border-[#BEBEBE] border-2 rounded-xl px-6 py-5 mb-4  md:inline-block md:w-full">
                            <div className="text-[#333E56] text-6xl   text-center w-[70px] md:inline-block">
                              24
                            </div>
                            <div className="grid grid-cols-1 text-left border-r-2 pr-8 w-[190px]  slg:pr-6  md:inline-block  md:pl-6 md:w-[60%] md:border-r-0 ">
                              <span className="text-[32px] slg:text-2xl leading-8 font-bold pb-0 mb-0  md:block">Months</span>
                              <label className="text-base  " >No Interest*</label>
                            </div>
                            <div className="text-2xl  slg:text-xl  w-[1000px] mlg:w-[70%] slg:w-[60%] md:w-full md:border-t-2 md:py-2 md:block">
                            For appliance purchases of $1499 & up (Only for Dacor / JennAir / Monogram / Signature Kitchen Suite / Thermador)
                            </div>
                          </li>

                           
                        </ul>
                        <p>*Subject to credit approval. Minimum monthly payments required.</p>
                      </div>
                    </div>
             </div>


    </div>
  );
};

export default FinancingPage;
