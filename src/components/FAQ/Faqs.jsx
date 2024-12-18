import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/icons/SearchIcon";
import FaqsSideBar from "./FaqSidebar";
const Faqs = () => {
  return (
    <div className=" bg-light-gray lg:bg-mobileBG">
      <div className=" flex max-w-[1440px] my-0 mx-auto px-5 pt-[40px] gap-[36px]">
        <div className="flex-1 max-w-[300px]">
          <div className=" relative flex-1 mb-4 ">
            <Input
              placeholder="Search for FAQ"
              className="pr-9 w-full rounded-[10px] py-[9px] "
            />
            <span className="absolute top-[10px] right-[13px]">
              <SearchIcon />
            </span>
          </div>
          <FaqsSideBar />
        </div>
        <div className="flex-1 rounded-[15px] bg-white ">
          <h3 className=" px-4 py-5  text-blue6 text-[24px] leading-[26px] font-semibold">
            Ordering
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger
                icon={<SearchIcon />}
                className=" px-4 text-[15px] leading-[18px] text-black font-semibold"
              >
                Alright, but what exactly do you do?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                Timperdiet gravida scelerisque odio nunc. Eget felis, odio
                bibendum quis eget sit lorem donec diam. Volutpat sed orci
                turpis sit dolor est a pretium eget. Vitae turpis orci vel
                tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
                venenatis urna.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold">
                I don&apos;t need a brand strategist but I need help executing
                an upcoming campaign. Can we still work together?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                Timperdiet gravida scelerisque odio nunc. Eget felis, odio
                bibendum quis eget sit lorem donec diam. Volutpat sed orci
                turpis sit dolor est a pretium eget. Vitae turpis orci vel
                tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
                venenatis urna.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold">
                Are your rates competitive?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                Timperdiet gravida scelerisque odio nunc. Eget felis, odio
                bibendum quis eget sit lorem donec diam. Volutpat sed orci
                turpis sit dolor est a pretium eget. Vitae turpis orci vel
                tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
                venenatis urna.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className=" px-4 text-[15px] leading-[18px] text-black font-semibold">
                Why do you have a monthly project cap?
              </AccordionTrigger>
              <AccordionContent className="px-4 text-[15px] leading-[21px] text-gray30 opacity-85 pr-[80px]">
                Timperdiet gravida scelerisque odio nunc. Eget felis, odio
                bibendum quis eget sit lorem donec diam. Volutpat sed orci
                turpis sit dolor est a pretium eget. Vitae turpis orci vel
                tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem
                venenatis urna.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
