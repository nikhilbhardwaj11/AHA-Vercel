import Benefits from "@/components/Careers/Benefits";
import Culture from "@/components/Careers/Culture";
import Opportunities from "@/components/Careers/Opportunities";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Careers = () => {
  return (
    <div>
      <div className="  bg-blue7 pt-[67px] pb-[89px]">
        <div className="px-5 max-w-[1440px] mx-auto my-0 text-white">
          <h2 className=" font-bold text-[36px] leading-[54px] mb-[9px]">
            Join Our Family.
          </h2>
          <p className="text-[16px] leading-[24px] mb-[26px] max-w-[1085px]">
            Family is at the heart of our culture and everything we do here at
            Airport Home Appliance. We are a family-owned business with a
            working environment that promotes mentorship, trust, a sense of
            ownership, and personality. It makes perfect sense that family is
            how we describe the unique culture and strong benefits we offer our
            employees to get the most out of their work and personal life.
          </p>
          <Button
            variant="outline"
            className="font-medium text-[14px] bg-transparent rounded-[8px] min-w-[164px]"
          >
            About Us
          </Button>
        </div>
      </div>
     <div >
     <Tabs defaultValue="opportunities" className="  pt-[22px] ">
      <div className="px-5 pt-4 max-w-[1440px] mx-auto my-0">
      <TabsList className="text-[20px] mob:h-7  bg-white gap-[30px] flex border-b border-b-[#E4E9F5] justify-start p-0 ">
          <TabsTrigger className="leading-[30px] h-full text-[20px]  p-0 pb-[22px] CareersTabsTrigger  text-[#565E70] [data-state=active]:text-[#3A6FE7] mob:text-[16px] mob:leading-5 " value="opportunities">Opportunities</TabsTrigger>
          <TabsTrigger  className="leading-[30px]  h-full text-[20px] p-0 pb-[22px] CareersTabsTrigger text-[#565E70] [data-state=active]:text-[#3A6FE7] mob:text-[16px] mob:leading-5 " value="culture">Culture</TabsTrigger>
          <TabsTrigger  className="leading-[30px] h-full text-[20px]  p-0 pb-[22px] CareersTabsTrigger text-[#565E70] [data-state=active]:text-[#3A6FE7] mob:text-[16px] mob:leading-5 " value="benefits">Benefits</TabsTrigger>
      </TabsList>
      </div>
        <TabsContent value="opportunities" className="bg-[#FBFBFB] px-5">
          <Opportunities />
        </TabsContent>
        <TabsContent value="culture"  className="bg-[#FBFBFB] ">
          <Culture />
        </TabsContent>
        <TabsContent value="benefits"  className="bg-[#FBFBFB] px-5">
          <Benefits/>
        </TabsContent>
      </Tabs>
     </div>
    </div>
  );
};

export default Careers;