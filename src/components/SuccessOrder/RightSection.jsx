import { Button } from "../ui/button";

const RightSection = () => {
  return (
    <div className="flex-1 max-w-[383px] text-blue3 grid gap-4">
      <div className="  py-[26px] px-[24px] rounded-[13px] bg-white mb-[18px]">
        <h3 className=" text-[17px] font-semibold leading-[25px] pb-[10px] mb-[15px] border-b border-gray18 ">
          Let us know if your need help
        </h3>
        <div className=" font-medium text-[14px] leading-[22px] ">
          <p className="mb-2">See FAQ’s Or Phone Us :</p>
          <p className="mb-2">Online Customer Support: (866) 304-4449</p>
          <p className="mb-2">Major Appliances: 000 000 0000 </p>
          <p className="mt-7">Available Monday-Sunday 6 a.m. to 2 a.m. EST</p>
        </div>
      </div>
      <div className="  py-[26px] px-[24px] rounded-[13px] bg-white mb-[18px]">
        <h3 className=" text-[17px] font-semibold leading-[25px] pb-[10px] mb-[15px] border-b border-gray18 ">
          Want to update your Instant Checkout Settings?
        </h3>
        <div className=" font-medium text-[14px] leading-[22px] ">
          <p className="mb-2">
            You can adjust your saved payment and address information at any
            time.
          </p>
          <Button className="min-h-[38px] rounded-[8px] border border-blue3 bg-transparent text-blue3 mt-[15px] hover:bg-inherit">
            Edit Instant Checkout Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
