import React from "react";
import { Skeleton } from "../ui/skeleton";

const OpenBoxSkeleton = () => {
  return (
    <div className="p-6 ">
      <div className="flex gap-8 items-center pb-8 px-2">
        <div className="min-w-[135px] h-[135px] inline-flex items-center justify-center bg-gray1 rounded-20"></div>
        <Skeleton className="h-12 flex-1 bg-gray1"></Skeleton>
      </div>
      <div>
        <div className=" border border-1 p-4 rounded-[18px] ">
          <div className="space-y-4">
            <Skeleton className="h-6 bg-gray1"></Skeleton>
            <Skeleton className="h-6 w-[50%] bg-gray1"></Skeleton>
            <Skeleton className="h-6 w-[80%] bg-gray1"></Skeleton>
            <Skeleton className="h-6 w-[80%] bg-gray1"></Skeleton>
            <div className="flex space-x-6">
              <Skeleton className="h-10 w-[30%] bg-gray1"></Skeleton>
              <Skeleton className="h-10 w-[30%] bg-gray1"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBoxSkeleton;
