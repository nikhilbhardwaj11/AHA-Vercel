import { cn } from "@/lib/utils";
import { memo } from "react";

const CurrentActiveStep = ({ title,isActive }) => {
  return (
    <div className="lg:px-[16px]">
      <div className=" px-7 py-9 rounded-[13px] mb-4 bg-white lg:px-[16px] lg:py-[12px] lg:mb-5">
      <div className="flex gap-x-[50px] gap-y-[10px] flex-wrap items-center slg:flex-col slg:items-start">
        <h3 className="flex justify-between text-blue3 text-[24px] leading-[34px] font-medium lg:text-[18px] lg:leading-[27px]">
          {title}
        </h3>
        <div className="slg:w-full relative flex-1 max-[422px] flex items-center justify-between min-w-[368px] lg:min-w-[auto]">
          <p
            className={cn(
              "pr-[10px] bg-white relative z-[1] inline-flex text-[#333E56] text-[14px] leading-[28px] lg:text-[11px]",
              isActive === "products" ? "font-bold" : ""
            )}
          >
            Products
          </p>
          <p
            className={cn(
              "px-[10px] bg-white relative z-[1] inline-flex text-[#333E56] text-[14px] leading-[28px] lg:text-[11px]",
              isActive === "payment" ? "font-bold" : ""
            )}
          >
            Payment
          </p>
          <p
            className={cn(
              "pl-[10px] bg-white relative z-[1] inline-flex text-[#333E56] text-[14px] leading-[28px] lg:text-[11px]",
              isActive === "confirmation" ? "font-bold" : ""
            )}
          >
            Confirmation
          </p>

          <div className=" bg-[#DFDFDF] h-[4px] w-full absolute top-[13px] lg:h-[3px]"></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default memo(CurrentActiveStep);
