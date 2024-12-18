import React from "react";
import { Skeleton } from "../ui/skeleton";

const InstallationSkeleton = () => {
  return (
    <div className="space-y-8">
      <div className="border border-1 rounded-[16px] border-gray19 h-40">
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
        <div className="border border-1 mx-4"></div>
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
      </div>
      <div className="border border-1 rounded-[16px] border-gray19 h-40">
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
        <div className="border border-1 mx-4"></div>
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
        <Skeleton className="bg-gray1 h-6 mx-3 my-4"></Skeleton>
      </div>
    </div>
  );
};

export default InstallationSkeleton;
