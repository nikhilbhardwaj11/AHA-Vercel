import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/icons/SearchIcon"; 
const Faqs = () => {
  return (
    <div className=" w-full ">
        <h3 className=" px-4 pb-6  text-black text-4xl leading-[26px] font-semibold md:leading-[100%] md:text-3xl">
          Frequently Asked Questions
          </h3>
      <div className=" flex ">
    
        <div className="flex-1 rounded-[15px] bg-white ">
          
          <Accordion type="single" collapsible className="w-full">
            

            <AccordionItem value="item-2">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left"> 
              How Does the 110% Price Match Work?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              To participate, provide the ad, printout, or photo for validation. (This may involve the sales associate contacting the competitor). 
              Price matching must be made at the time of purchase, or within 30 days of purchase. An item may only be price matched once per customer,
               per identical item.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-3">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              Which items are available for Price Match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              Item must be brand new to qualify (open box appliances do not qualify).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              How many times can I Price Match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              An item may only be price matched once per customer, per identical item.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              What is included in the Price Match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              Price Match Guarantee is for the cash register or final in-cart price of the item(s) plus Tax, Labor, Shipping/Delivery cost. Price Match items must be available from competitor to ship to customer&apos;s address.
              </AccordionContent>
            </AccordionItem>



            <AccordionItem value="item-6">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              What competitors will Airport Price Match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              Local and online competitors. Qualifying online competitors include but are not limited to: ajmadison.com, abt.com, appliancesconnection.com, bestbuy.com, homedepot.com, lowes.com, rcwilley.com. Local competitors are those who serve the Northern California market. </AccordionContent>
            </AccordionItem>

            

            <AccordionItem value="item-7">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              What if you lower your price after I purchase?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              If we lower our price on a product within 30 days of your purchase, we will issue a price match upon request.
              </AccordionContent>
            </AccordionItem>

            

            <AccordionItem value="item-8">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              Which brands aren&apos;t available for price match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              The following excluded brands: AGA, Alfresco Grills, American Range, Bertazzoni, Best, BlueStar, Bosch Benchmark, Broan, Capital, Coyote, DCS, Faber, FIsher & Paykel, Fulgor Milano, GE Monogram, Jenn-Air, Liebherr, Marvel, Miele, Premier, Superiore, Thermador, Thor, U-Line, Ventahood, and Waste King.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              What else is not available for Price Match?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                 <ul className="list-disc list-inside ml-4  md:text-sm">
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">We cannot price match any financing offers, manufacturer instant rebates, promotional prices outside the promotional window, bundle offers, 
                      items included in bundle offers, price errors on our website or a competitors, free items, rebates, mail-in offers, coupons, loyalty offers, membership-based offers, items advertised as limited quantity, 
                      open-box items, scratch and dent items, pre-owned items, returned items, display merchandise, rent/lease to own items, service contracts, installation, delivery, or assembly services, parts, accessories, 
                      daily or hourly deals, or items for sale Thanksgiving Day through the Monday after Thanksgiving, whether offered by Airport Home Appliance or a competitor.</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Employee, military, senior citizen, or other discounts</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Purchases outside of the 30-day window</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Prices from auction or bidding sites</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Customized or special-order product (defined as product which has been custom configured or manufactured for you alone)</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">non-verifiable competitor prices</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Volume or wholesale pricing</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Third-party sellers on Amazon.com</span></li>
                    <li><span className="inline-flex w-[96%] 1440:w-[90%] ">Advertised pricing from a competitor based on a typographical error or misprint, Pricing from membership-based retail wholesalers.</span></li>
                </ul>
                
                  </AccordionContent>
            </AccordionItem>

          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
