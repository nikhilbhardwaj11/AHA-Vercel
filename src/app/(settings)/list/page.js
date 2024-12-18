import React from "react";

const WishList = () => {
  return (
    <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:px-[20px] lg:w-full lg:rounded-none lg:pt-[10px] lg:bg-transparent">
      <div className="flex gap-4 mb-6  items-center">
        <h3 className=" text-blue6 font-semibold text-[24px] leading-[26px]">
          My List
        </h3>
      </div>

      <div className="grid gap-[14px] lg:bg-white lg:rounded-[12px] lg:gap-0">
        <div className="justify-items-center content-center justify-center min-h-[200px] py-6 px-[30px] pb-[50px] rounded-[14px] shadow-inset11 relative lg:rounded-none lg:shadow-none lg:p-5 ">
          <p>You have not created a list yet.</p>
        </div>
      </div>
    </div>
  );
};

export default WishList;
