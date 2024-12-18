"use client";
import { useEffect } from "react";

const WriteAnReview = () => {
  useEffect(() => {
    window.pwr("render", {
      api_key: process.env.NEXT_PUBLIC_POWER_REVIEWS_API_KEY,
      locale: "en_US",
      merchant_group_id:
        process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_GROUP_ID,
      merchant_id: process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_ID,
      on_submit: function (config, data) {
        window.scrollTo(0, 0);
      },
      components: {
        Write: "pr-write",
      },
    });
  });
  return (
    <div className="container max-w-1440 px-5 justify-center flex items-center gap-7 py-p18 text-blue2 lg:gap-3 lg:px-4 lg:py-2">
      <div id="pr-write"></div>
    </div>
  );
};

export default WriteAnReview;
