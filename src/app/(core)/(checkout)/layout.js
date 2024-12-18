"use client";
import OrderSummary from "@/components/Checkout/OrderSummary";

const CheckOutLayout = ({ children }) => {
  return (
    <div className="pt-[25px] ">
      <div className=" bg-light-gray lg:bg-mobileBG">
      <div className=" lg:flex-col lg:gap-0  max-w-[1300px] px-5 mx-auto my-0  py-6 items-start flex gap-[26px] lg:px-0 ">
        {children}
        <OrderSummary/>
      </div>
    </div>
    </div>
  );
};

export default CheckOutLayout;
