"use client";

import BannerImage from "@/assets/images/learning-center-bg.png";
import BannerImageMobile from "@/assets/images/learning-center-bg-mobile.webp";

import Card from "@/components/LearningCenter/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SearchIcon from "@/icons/SearchIcon";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
const Filter = () => {
  return (
    <div className="flex-1 max-w-[280px] px-[30px] py-[35px] shadow-11 bg-white rounded-[20px]  lg:max-h-88 lg:overflow-auto">
      <div className="pb-[22px] border-b border-gray7 mb-[22px]">
        <h4 className=" text-[20px] mb-4 font-semibold leading-[30px] text-black">
          Filter by Category
        </h4>
        <div className="flex flex-col gap-1 max-h-[150px] overflow-auto">
          <div className="flex items-center space-x-2 ">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Refrigerator
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Dishwasher
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cooking
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Washer & Dryers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Deals & Offers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Cooking
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Washer & Dryers
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Deals & Offers
            </label>
          </div>
        </div>
      </div>
      <div className="pb-[22px] border-b border-gray7 mb-[22px]">
        <h4 className=" text-[20px] mb-4 font-semibold leading-[30px] text-black">
          Filter by Brand
        </h4>
        <div className="flex flex-col gap-1 max-h-[150px] overflow-auto">
          <div className="flex items-center space-x-2 ">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Bosch
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Blue Star
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              LG
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Electrolux
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              GE Appliances
            </label>
          </div>
        </div>
      </div>
      <div>
        <h4 className=" text-[20px] mb-4 font-semibold leading-[30px] text-black">
          Filter by Type{" "}
        </h4>
        <div className="flex flex-col gap-1 max-h-[150px] overflow-auto">
          <div className="flex items-center space-x-2 ">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Blog Article
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Buying Guide
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Checklist
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningCenter = () => {
  return (
    <div className=" bg-gray9 mt-[25px] lg:bg-mobileBG">
      <div className=" pt-[22px] max-w-[1440px] mb-0 mx-auto w-full px-5 lg:px-0 lg:pt-0 ">
        <div className=" relative mb-[50px]">
          <div className="lg:hidden">
            <AspectRatio ratio={1400 / 510} className="bg-muted">
              <Image src={BannerImage} alt="Photo by Drew Beamer" fill />
            </AspectRatio>
          </div>
          <div className=" hidden lg:block">
            <AspectRatio ratio={375 / 199} className="bg-muted">
              <Image src={BannerImageMobile} alt="Photo by Drew Beamer" cover />
            </AspectRatio>
          </div>
          <div className=" absolute top-0 left-0 right-0 bottom-0 z-1 flex items-center justify-center ">
            <div className="mt-[60px] lg:mt-2">
              <h3 className=" mb-6 font-bold text-[36px] leading-[50px] text-white lg:text-[18px] lg:leading-[27px] lg:text-center lg:mb-4  ">
                Airport Appliance Learning Center
              </h3>
              <div className=" relative flex-1 max-w-[670px] h-[60px] lg:h-[50px]">
                <Input
                  placeholder="Search for Product, Brand and More"
                  className="pr-[60px] pl-7  w-full h-full rounded-[40px] text-[16px] lg:text-[12px]"
                />
                <span className="absolute top-[19px] right-[25px]">
                  <SearchIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[20px] pb-[20px] items-start ">
          <div className="flex lg:hidden">
            <Filter />
          </div>
          <div className="flex-1 py-[23px]   shadow-11 bg-white rounded-[20px] lg:rounded-none lg:shadow-none lg:flex-wrap">
            <div className="flex px-[30px] items-center justify-between gap-3 pb-2 lg:flex-wrap lg:px-4">
              <h3 className=" text-[22px] leading-[33px] font-bold">
                Popular Articles
              </h3>
              <div className="flex gap-4 items-center">
                <div className="hidden lg:flex">
                  <Sheet>
                    <SheetTrigger>
                      <Button className="min-w-[80px] h-[30px]">Filter</Button>
                    </SheetTrigger>
                    <SheetContent className="max-w-[304px] px-[10px] sm:max-w-[304px]">
                      <SheetHeader>
                        <SheetTitle className="py-[10px]"> Filter</SheetTitle>
                        <SheetDescription>
                          <Filter />
                        </SheetDescription>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </div>
                <div className="inline-flex items-center gap-5 ">
                  <span className=" text-gray3 lg:hidden">Sort By</span>
                  <Select>
                    <SelectTrigger className="w-[205px] h-[44px] rounded-[10px] border-gray7 font-medium lg:text-12px lg:w-[116px]">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Popularity</SelectItem>
                        <SelectItem value="banana">Popularity</SelectItem>
                        <SelectItem value="blueberry">Popularity</SelectItem>
                        <SelectItem value="grapes">Popularity</SelectItem>
                        <SelectItem value="pineapple">Popularity</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="  py-3 px-[30px] grid grid-cols-203 gap-6 max-h-[860px] overflow-auto lg:px-4 lg:max-h-max">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
