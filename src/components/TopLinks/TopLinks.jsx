import { memo } from "react";
import HelpUs from "@/components/HelpUs";
import ChatIcon from "@/icons/ChatIcon";
import Link from "next/link";
import ZipCodeSheet from "../ZipCodeSheet/ZipCodeSheet";

const TopLinks = ({}) => {
  return (
    <>
      <div className="flex items-center lg:px-[30px] ">
        <nav className="flex items-center lg:flex-col lg:items-start w-full">
          <ZipCodeSheet />
          <Link
            href="/builder-trade"
            className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
          >
            Builders & Trade
          </Link>
          <Link
            href="/rebates-center"
            className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
          >
            Rebates
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
          >
            Blog
          </Link>
          <Link
            href="/brands"
            className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
          >
            Brands
          </Link>
          <Link
            href="/delivery-&-installation"
            className="hover:text-gray-300 pl-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
          >
            Delivery & Installation
          </Link>
        </nav>
      </div>
      <div className="flex items-center lg:flex-col lg:items-start lg:px-[30px] ">
        <Link
          href="/appliance-delivery"
          className="hover:text-gray-300 pr-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
        >
          Track Order
        </Link>
        <Link
          href="/"
          className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
        >
          <p className="flex items-center gap-2">
            <ChatIcon className="lg:hidden" /> Live Chat
          </p>
        </Link>
        <div className="hover:text-gray-300 px-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full">
        <HelpUs title="Help"/>
        </div>
        <Link
          href="/store"
          className="hover:text-gray-300 pl-p18 lg:px-0 lg:py-3 lg:border-b lg:border-[#B2B2B3] lg:w-full"
        >
          Find Store
        </Link>
      </div>
      {/* <div className=" hidden lg:block">
        <ZipCodeSheet />
      </div> */}
    </>
  );
};

export default memo(TopLinks);
