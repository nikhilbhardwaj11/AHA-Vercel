"use client";

import StoryIcon from "@/assets/images/AHA-story-icon.webp";
import FaqIcon from "@/assets/images/FAQ-icon.png";
import ContactIcon from "@/assets/images/contact-us-icon.webp";
import LearningIcon from "@/assets/images/learning-center-icon.webp";
import Image from "next/image";
import Link from "next/link";

const Card = ({ src, link, heading, subHeading }) => {
  return (
    <div className="inline-flex gap-[20px] items-center bg-white rounded-[30px] min-h-[106px] justify-center py-3 px-9 max-w-[317px] lg:rounded-[12px]">
      <Image src={src} alt="icon" className=" w-10 h-10" />
      <div>
        <Link href={link}>
          <h3 className="text-[17px] leading-[25px] font-semibold mb-1 text-black">
            {heading}
          </h3>
          <p className=" text-[11px] leading-[16px] font-medium text-gray2">
            {subHeading}
          </p>
        </Link>
      </div>
    </div>
  );
};

const TopReasons = () => {
  return (
    <div className={`py-14 px-5 lg:py-11  bg-light-gray lg:bg-mobileBG`}>
      <h2 className=" text-[21px] leading-[31px] font-bold text-blue2 text-center lg:text-[16px] lg:leading-[22px] lg:mb-[27px]">
        Top reasons to choose Airport Home Appliance
      </h2>
      <p className="text-[15px] leading-[22px] text-gray30 mb-9 text-center font-semibold lg:hidden">
        Delivering Happiness One Home Appliance At a Time
      </p>
      <div className="flex items-center justify-center flex-wrap gap-10 lg:gap-y-[10px]">
        <Card
          src={StoryIcon}
          link="/about-us"
          heading="AHA Story"
          subHeading="Learn about our beginnings and history"
        />
        <Card
          src={LearningIcon}
          link="/learning-center"
          heading="Learning Center"
          subHeading="Leverage our extensive industry knowledge to make better decisions"
        />

        <Card
          src={ContactIcon}
          link="/contact"
          heading="Contact Us"
          subHeading="Reach out to us about 
your order or  for any questions"
        />

        <Card
          src={FaqIcon}
          link="/faq"
          heading="FAQ"
          subHeading="Reach out to us about 
your order or  for any questions"
        />
      </div>
    </div>
  );
};

export default TopReasons;
