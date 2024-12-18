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
                Can my delivery team install using liquid propane hookups?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                  Yes; but you must have previously indicated the need for an LP conversion and paid the service fee.
              </AccordionContent>
            </AccordionItem>


            <AccordionItem value="item-3">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
               Will the delivery team install a unitized (all-in-one) washer dryer?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              Yes. Please be sure to measure the delivery path and installation area beforehand to ensure your new unitized washer and dryer will fit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
                Will the delivery team install my front-load washer and dryer stacked to save space?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              Yes; be sure to indicate you require stacking at the time of sale, and purchase the required stacking kit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold text-left">
              At delivery time, what if my new appliance is damaged or not working correctly?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
              We will test the operation of your new appliance prior to leaving your home. If you notice any damage or if the appliance is not working properly, our delivery team will connect you with our customer service department to find a resolution before we leave.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
