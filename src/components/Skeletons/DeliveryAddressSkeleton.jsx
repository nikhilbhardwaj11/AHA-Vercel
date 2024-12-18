import React from "react";
import { Skeleton } from "../ui/skeleton";

const DeliveryAddressSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 px-6 py-6 h-40 w-full border border-1 rounded-[16px]">
      <Skeleton className="h-4 mb-2  bg-gray19 w-[40%]"></Skeleton>
      <Skeleton className="h-4  bg-gray19 w-[95%]"></Skeleton>
      <Skeleton className="h-4  bg-gray19 w-[95%]"></Skeleton>
      <Skeleton className="h-4  bg-gray19 w-[95%]"></Skeleton>
    </div>
  );
};

export default DeliveryAddressSkeleton;
