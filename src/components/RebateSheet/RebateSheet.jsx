
import DummyCardImg from "@/assets/images/dummy-rebat-card-img.png";
import { Button } from "@/components/ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatDate } from "@/lib/utils";
import DynamicImage from "../DynamicImages/DynamicImage";

const RebateSheet = ({ rebates }) => {
  return (
    <div className="text-blue1 py-[20px] px-[20px]">
      <h3 className="mb-7 text-[25px] leading-[37px] font-medium">
        Available Rebates
      </h3>
      <div className="grid gap-[16px] pr-4 pt-0 max-h-110 overflow-auto">
        {rebates &&
          rebates.length > 0 &&
          rebates?.map((rebate, index) => (
            <div
              key={index}
              className=" border border-gray1 rounded-[15px] p-5 lg:border-0"
            >
              <div className="px-[7px] text-[13px] leading-[20px] text-blue2 grid">
                <div className="flex gap-4 items-center  mb-5 lg:mb-3 pb-6 border-b">
                  <div className="max-w-[70px]">
                    <DynamicImage src={DummyCardImg} alt="Image" />
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className=" font-bold three-line-dots">
                          {rebate?.title}
                        </p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className=" max-w-[200px]">{rebate?.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <p className="lg:mb-3 min-h-[60px] three-line-dots">
                        {rebate?.description}
                      </p>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className=" max-w-[240px]">{rebate?.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <p className="mb-[26px] lg:mb-3">
                  Valid from {formatDate(rebate?.startDate, "dd/mm/yyyy")} to{" "}
                  {formatDate(rebate?.endDate, "dd/mm/yyyy")}
                </p>
                <div className="flex gap-6">
                  <Button className="  px-[18px] h-[44px] rounded-10 bg-blue1 border-blue1 text-white border">
                    View Rebate
                  </Button>
                  <Button className=" px-[18px] h-[44px] hover:bg-inherit rounded-10 text-blue1 border-blue1 bg-white border">
                    Browse Eligible Items
                  </Button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RebateSheet;
