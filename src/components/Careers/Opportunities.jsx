"use client";
import SearchIcon from "@/icons/SearchIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocationIcon from "@/icons/LocationIcon";
import TimeIcon from "@/icons/ClockIcon";

import CaseIcon from "@/icons/CaseIcon";

import { Checkbox } from "@/components/ui/checkbox";
import RightArrow from "@/icons/RightArrow";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SideBar = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="font-bold">Department</AccordionTrigger>
        <AccordionContent>
          <div className="py-3 flex flex-col gap-[14px]">
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Admin
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sales
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Management
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-0">
        <AccordionTrigger className="font-bold">Location</AccordionTrigger>
        <AccordionContent>
          <div className="py-3 flex flex-col gap-[14px]">
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bosch
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Whirlpool
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
            <div className="flex items-center gap-4 justify-between ">
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Management
                </label>
              </div>
              <p className="text-[#8F8F8F] text-[13px] leading-[22px]">
                (1501)
              </p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const Card = () => {
  const router = useRouter();

  return (
    <div className="border border-[#C5C5C54D] p-[32px] rounded-[12px] bg-white">
      <div className=" mb-[12px] flex items-center justify-between flex-wrap gap-2">
        <h3 className="text-[24px] leading-[34px] font-semibold text-black">
          Inventory Associate
        </h3>{" "}
        <button
          onClick={() => router.push("/more-info")}
          className=" text-[14px] leading-[21px] bg-[#F7F7F7] rounded-[8px] px-[12px] text-[#333E56] py-[8px] inline-flex gap-3 items-center justify-center"
        >
          More Info <RightArrow width="5px" height="8px" color="black" />
        </button>
      </div>
      <div className="mb-[12px] flex gap-[12px] text-[#3C3C43D9] flex-wrap">
        <div className="inline-flex gap-[9px] items-center">
          <LocationIcon color="#333E56" />
          <p>Hayward, CA</p>
        </div>
        <div className="inline-flex gap-[9px] items-center">
          <TimeIcon color="#333E56" />
          <p>Full-time</p>
        </div>
        <div className="inline-flex gap-[9px] items-center">
          <CaseIcon />
          <p>Urgent-Hiring</p>
        </div>
      </div>
      <p className="text-[#3C3C43D9] text-[16px] leading-[24px]">
        Main responsibilities include; utilize inventory control system to
        rectify discrepancies, review/analyze operation reports, audit
        inbound/outbound, and report findings to management.
      </p>
    </div>
  );
};
const Opportunities = () => {
  return (
    <div className=" pt-[70px] max-w-[1440px] mx-auto my-0 lg:pt-10 ">
      <h2 className=" text-[36px] mb-[47px] leading-[54px] font-bold text-center lg:text-[30px] lg:leading-38">
        4 Jobs, across all teams & all locations
      </h2>
      <div>
        <div className=" relative max-w-[572px] mr-0 ml-auto  ">
          <input
            className=" pr-[130px] placeholder:text-[#62636C] border-[#0C234030] border-1 p-[19px] rounded-[8px] h-[60px] bg-[#EBF2FB] w-full"
            placeholder="Search for your seat in the airportappliance"
          />
          <button className="  text-white bg-[#1D2E5C] absolute h-full right-0 top-0 bottom-0 px-4 inline-flex items-center justify-center gap-[6px] rounded-r-[8px]">
            {" "}
            <SearchIcon color="white" /> Search{" "}
          </button>
        </div>
      </div>
      <div className="lg:flex hidden justify-end py-3">
      <Sheet>
        <SheetTrigger className=" font-semibold text-[16px]">Filter</SheetTrigger>
        <SheetContent className="max-w-[300px]">
          <SheetHeader>
            <SheetTitle>Filter</SheetTitle>
            <SideBar />
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
      <div className="flex items-start gap-[30px] mt-[50px] pb-[40px] lg:mt-0">
        <div className="flex-1 max-w-[327px] border border-[#C5C5C5] bg-white rounded-[15px] p-[25px] lg:hidden">
          <SideBar />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
