import React from "react";
import { Skeleton } from "../ui/skeleton";

const PickupDeliverySkeleton = () => {
  return (
    <div className="space-y-1">
      <Skeleton className="h-4 mt-1 bg-gray1"></Skeleton>
      <Skeleton className="h-4 bg-gray1"></Skeleton>
    </div>
  );
};

export default PickupDeliverySkeleton;
