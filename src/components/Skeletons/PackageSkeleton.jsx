import React from "react";
import { Skeleton } from "../ui/skeleton";

const PackageSkeleton = () => {
  return (
    <div className="flex flex-col gap-[26px] overflow-auto pr-[5px] max-h-343">
      {" "}
      <div className="p-4 border border-gray1 rounded-[16px]">
        <div className="flex w-full pb-4">
          {/* Left side skeleton (column) */}
          <div className="min-h-full min-w-[160px] bg-gray1 rounded-[16px]">
            <Skeleton className="min-h-full bg-gray1"></Skeleton>
          </div>

          {/* Right side skeletons (rows) */}
          <div className="flex flex-col flex-grow ml-5">
            <Skeleton className="min-h-[35px] bg-gray1 "></Skeleton>
            <Skeleton className="min-h-[35px] bg-gray1 pt-5 mt-3"></Skeleton>
            <Skeleton className="min-h-[25px] bg-gray1 pt-5 mt-3"></Skeleton>
            <Skeleton className="min-h-[25px] bg-gray1 pt-5 mt-3"></Skeleton>
          </div>
        </div>
        <Skeleton className="min-h-[40px] w-full bg-gray1 "></Skeleton>
      </div>
      <div className="p-4 border border-gray1 rounded-[16px]">
        <div className="flex w-full pb-4">
          {/* Left side skeleton (column) */}
          <div className="min-h-full min-w-[160px] bg-gray1 rounded-[16px]">
            <Skeleton className="min-h-full bg-gray1"></Skeleton>
          </div>

          {/* Right side skeletons (rows) */}
          <div className="flex flex-col flex-grow ml-5">
            <Skeleton className="min-h-[35px] bg-gray1 "></Skeleton>
            <Skeleton className="min-h-[35px] bg-gray1 pt-5 mt-3"></Skeleton>
            <Skeleton className="min-h-[25px] bg-gray1 pt-5 mt-3"></Skeleton>
            <Skeleton className="min-h-[25px] bg-gray1 pt-5 mt-3"></Skeleton>
          </div>
        </div>
        <Skeleton className="min-h-[40px] w-full bg-gray1 "></Skeleton>
      </div>
    </div>
  );
};

export default PackageSkeleton;
