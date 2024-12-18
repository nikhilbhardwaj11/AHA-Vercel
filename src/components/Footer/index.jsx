import FeedbackIcon from "@/assets/images/feedback-icon.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Newsletter from "@/components/Newsletter";
import ClockIcon from "@/icons/AlarmIcon";
import LiveChatIcon from "@/icons/ChatIcon";
import {
  CopyRightFooter,
  ResourcesLink,
  shoppingToolLinks,
  socialMediaLinks,
  StaticLink,
} from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import TopReasons from "./TopReasons";

const Footer = () => {
  return (
    <div>
      {/* <TopReasons /> */}
      <footer className=" max-w-[1778px] px-5 pt-[25px]  mx-auto my-0 ">
        <div className="flex gap-2 justify-between pb-[30px] mxl:grid mxl:grid-cols-6 gap-y-5 smd:flex smd:flex-col">
          <div className="w-[308px]  mxl:row-start-2 mxl:col-start-1 mxl:col-end-4 mxl:w-full text-[15px] leading-[22px]">
            <h3 className=" text-blue3  font-bold mb-3 uppercase ">
              Sales and Customer Service
            </h3>
            <p className=" text-blue5 mb-4 inline-flex gap-[5px] items-center ">
              <LiveChatIcon fill=" black" /> Live Chat |{" "}
              <span className=" text-black3"> 
                <a
                  href="tel:+18663044449"
                  // className="DetailsBox flex text-[#0A223C] font-semibold items-center p-3 bg-white border  border-[#0A223C]  hover:bg-gray1 rounded-[8px]  w-full min-h-[60px] px-6  transition"
                  aria-label="call +18663044449"
                >
                (866) 304-4449
                </a>
              </span> |  <a
                  href="/contact"               
                  aria-label="Email Us"
                >Email
               </a>
            </p>
            <h3 className=" text-blue3  font-bold mb-3 uppercase ">
              Customer Service Weekly Hours
            </h3>
            <div className=" mb-6 flex  gap-[5px]">
              <ClockIcon />
              <div>
                <p className=" text-blue5">
                  Mon - Fri: 10:00 AM to 7:00 PM PST
                </p>
                <p className=" text-blue5">
                  Sat - Sun: 10:00 AM to 6:00 PM PST
                </p>
              </div>
            </div>
            <h3 className=" text-blue3  font-bold mb-5 uppercase ">
             <Link href={'/store'}>
               Store Hours & Locations
              </Link>
            </h3>
            <h3 className=" text-blue3  font-bold mb-5 uppercase ">
              Follow us on
            </h3>
            <div className="flex gap-[10px]">
              {socialMediaLinks?.map((link, index) => (
                <Link href={link.href} key={index} target="_blank">
                  <Image src={link.imgSrc} alt={link.alt} />
                </Link>
              ))}
            </div>
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full hidden smd:block"
          >
            <AccordionItem
              value="item-1"
              className="bg-[#F6F6F6] border-none rounded-[8px] mb-2"
            >
              <AccordionTrigger className=" px-5 text-[#0C2340] text-[14px] uppercase font-medium">
                <span>COMPANY INFO</span>
              </AccordionTrigger>
              <AccordionContent className=" px-5 ">
                <ul className=" text-black text-[12px] flex flex-col gap-3">
                  {StaticLink.map(({ href, label }, index) => (
                    <Link key={index} href={href}>
                      {label}
                    </Link>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="bg-[#F6F6F6] border-none rounded-[8px] mb-2"
            >
              <AccordionTrigger className=" px-5 text-[#0C2340] text-[14px] uppercase font-medium">
                SHOPPING TOOLS
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <ul className=" text-black text-sm flex flex-col gap-3">
                  {shoppingToolLinks.map(({ href, label }, index) => (
                    <Link key={index} href={href}>
                      {label}
                    </Link>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="bg-[#F6F6F6] border-none rounded-[8px]"
            >
              <AccordionTrigger className=" px-5 text-[#0C2340] text-[14px] uppercase font-medium">
                RESOURCES
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <ul className=" text-black text-sm flex flex-col gap-3">
                  {ResourcesLink.map(({ href, label }, index) => (
                    <Link key={index} href={href}>
                      {label}
                    </Link>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className=" smd:hidden w-[235px] mxl:w-full mxl:col-start-1 mxl:col-end-3 ">
            <h3 className=" text-blue3  font-bold mb-3 pb-3 uppercase ">
              COMPANY INFO
            </h3>
            <ul className=" text-black text-sm flex flex-col gap-3">
              {StaticLink.map(({ href, label }, index) => (
                <Link key={index} href={href}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="smd:hidden w-[235px] mxl:w-full  mxl:col-start-3 mxl:col-end-5">
            <h3 className=" text-blue3  font-bold mb-3 pb-3 uppercase ">
              SHOPPING TOOLS
            </h3>
            <ul className=" text-black text-sm flex flex-col gap-3">
              {shoppingToolLinks.map(({ href, label }, index) => (
                <Link key={index} href={href}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="smd:hidden w-[235px] mxl:w-full  mxl:col-start-5 mxl:col-end-7">
            <h3 className=" text-blue3  font-bold mb-3 pb-3 uppercase ">
              RESOURCES
            </h3>
            <ul className=" text-black text-sm flex flex-col gap-3">
              {ResourcesLink.map(({ href, label }, index) => (
                <Link key={index} href={href}>
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <Newsletter/>
          {/* <div className="  w-[363px] mxl:w-full  mxl:row-start-2 mxl:col-start-5 mxl:col-end-7">
            <h2 className=" text-[20px] smd:text-[14px] smd:font-medium leading-[34px] font-bold uppercase">
              Sign up now
            </h2>
            <p className=" smd:text-[13px] mb-4 text-[14px] leading-[23px]">
              Stay in the loop, with exclusive offers and product previews.
            </p>
            <Input
              className=" border-gray15 mb-3 h-[42px] py-[11px] px-[18px] rounded-[6px] text-[13px]"
              type="text"
              placeholder="Name"
            />
            <Input
              className=" border-gray15 mb-3 h-[42px] py-[11px] px-[18px] rounded-[6px] text-[13px]"
              type="email"
              placeholder="Email id"
            />
            <Button className=" smd:mt-3 py-[11px] px-[19px] border border-blue2 hover:bg-inherit text-blue2 mt-14 bg-transparent h-[54px] text-[15px] inline-flex items-center gap-3 rounded-[6px]">
              SignUp
            </Button>

            <Button className=" smd:mt-3 py-[11px] px-[19px] border border-blue2 hover:bg-inherit text-blue2 mt-14 bg-transparent h-[54px] text-[15px] inline-flex items-center gap-3 rounded-[6px]">
              <Image src={FeedbackIcon} alt="icon" />
              Feedback
            </Button>
          </div> */}
        </div>
        <div className="lg:flex-col lg:gap-2 lg:text-center text-black flex justify-between gap-[20px] py-[15px] items-center border-t border-gray-15">
          <p className=" text-[15px] leading-[22px]">
            Copyright © 2009 - 2024 <b>Airport Home Appliance</b> All Rights
            Reserve.
          </p>
          <p className=" text-[15px] leading-[22px]">
            {CopyRightFooter.map(({ href, label }, index) => (
              <span key={index}>
                <Link href={href} className="cursor-pointer">
                  {label}
                </Link>
                {index < CopyRightFooter.length - 1 && " | "}
              </span>
            ))}
            {/* Privacy Policy | Terms & Conditions | Accessibility */}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
