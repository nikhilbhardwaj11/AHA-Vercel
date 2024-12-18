"use client";
import LeftSection from "@/components/SuccessOrder/LeftSection";
import RightSection from "@/components/SuccessOrder/RightSection";
import { use } from "react";

const SuccessOrder = ({ params }) => {
  const unwrappedParams = use(params);
  const { orderId } = unwrappedParams;
  return (
      <div className="mt-[25px]  bg-light-gray lg:bg-mobileBG">
      <div className=" max-w-[1300px] px-5 mx-auto my-0  py-6 items-start flex gap-[26px] lg:flex-col lg:px-4 ">
        <LeftSection orderId={orderId} />
        <RightSection />
      </div>
    </div>
  );
};

export default SuccessOrder;
