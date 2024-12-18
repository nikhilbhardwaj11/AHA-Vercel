import React from "react";
import { Skeleton } from "../ui/skeleton";

const WarrentySkeleton = () => {
  return (
    <>
      <div className="p-2 space-y-2">
        <Skeleton className="h-6 bg-gray1"></Skeleton>
        <Skeleton className="h-6 bg-gray1 w-[30%]"></Skeleton>
      </div>
      <div className=" border border-1 p-2 rounded-10 ">
        <div className="space-y-4 pb-4 ">
          <div className="space-y-4 border-b-2  p-3">
            <Skeleton className="h-6 bg-gray1 pb-2"></Skeleton>
            <Skeleton className="h-6 bg-gray1"></Skeleton>
            <Skeleton className="h-6 bg-gray1"></Skeleton>
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 bg-gray1"></Skeleton>
          <Skeleton className="h-6 bg-gray1"></Skeleton>
          <Skeleton className="h-6 bg-gray1"></Skeleton>
          <Skeleton className="h-6 bg-gray1"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default WarrentySkeleton;
