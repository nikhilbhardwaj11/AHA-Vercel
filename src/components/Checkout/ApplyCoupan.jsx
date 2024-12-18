import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  useApplyDiscountMutation,
  useRemoveDiscountMutation,
} from "@/redux/apiSlices/discountApi";
import Loader from "../Loader";

const ApplyCoupan = ({ total, cartId }) => {
  const [couponCode, setCouponCode] = useState("");
  const [coupanErr, setCoupanErr] = useState("");
  const [
    applyCoupanCode,
    {
      data: coupanResponce,
      isLoading: applyCoupanLoading,
      isSuccess: applyCoupanSuccess,
    },
  ] = useApplyDiscountMutation();

  const [
    removeCoupanCode,
    { isLoading: removeCoupanLoading, isSuccess: removeCoupanSuccess },
  ] = useRemoveDiscountMutation();

  const isLoading = applyCoupanLoading || removeCoupanLoading;

  useEffect(() => {
    if (total?.discountCode && total?.discountCode !== couponCode) {
      setCouponCode(total?.discountCode);
    }
  }, [total]);

  useEffect(() => {
    if (applyCoupanSuccess && !coupanResponce.success) {
      setCoupanErr(coupanResponce?.message);
    }
    if (applyCoupanSuccess && coupanResponce.success) {
      coupanErr && setCoupanErr("");
    }
  }, [applyCoupanSuccess]);

  useEffect(() => {
    if (removeCoupanSuccess) {
      setCouponCode("");
    }
  }, [removeCoupanSuccess]);

  const onApplyCoupan = () => {
    if (couponCode) {
      applyCoupanCode({ cartId, discountCode: couponCode });
    }
  };

  const onRemoveCoupan = () => {
    removeCoupanCode({ cartId });
  };
  return (
    <div className=" relative mb-6">
      {isLoading && <Loader />}
      <Input
        type="text"
        placeholder="Enter your promo code"
        className="h-44px border-blue2 rounded-[5px] text-[13px] pr-[90px]"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        disabled={total?.discount}
      />
      {total?.discount ? (
        <button
          className=" bg-transparent p-0 text-[12px] text-red-400 font-semibold absolute top-3 right-3"
          onClick={onRemoveCoupan}
        >
          Remove code
        </button>
      ) : (
        <button
          className=" bg-transparent p-0 text-[12px] text-blue3 font-semibold absolute top-3 right-3"
          onClick={onApplyCoupan}
        >
          Apply Code
        </button>
      )}
      <p className="text-red-500 text-sm">{coupanErr}</p>
    </div>
  );
};

export default ApplyCoupan;