import BookmartIocn from "@/icons/BookmarkIcon";
import TruckIcon from "@/icons/TruckIcon";
import WifiIcon from "@/icons/WifiIcon";
import { cn } from "@/lib/utils";

export const MotherDayBadge = ({ className }) => (
  <div
    className={cn(
      "  inline bg-blue4 py-[6px] px-4 rounded-[7px] font-medium text-[12px] leading-[12px] text-white",
      className
    )}
  >
    Mothers Day Sale
  </div>
);

export const BestSellerBadge = ({ className }) => (
  <div
    className={cn(
      " inline bg-green2 py-1 px-4 rounded-[7px] font-medium text-[14px] leading-[14px] text-white",
      className
    )}
  >
    Best Sellers
  </div>
);

export const SmartAppliancesBadge = ({ className }) => (
  <div
    className={cn(
      "flex items-center justify-center w-[37px] h-[37px] rounded-full shadow-2.86 bg-white",
      className
    )}
  >
    <WifiIcon />
  </div>
);

export const BookmarkBadge = ({ className }) => (
  <div
    className={cn(
      "flex items-center justify-center w-[37px] h-[37px] rounded-full shadow-2.86 bg-white",
      className
    )}
  >
    <BookmartIocn />
  </div>
);

export const SaleBadge = ({ className }) => (
  <p
    className={cn(
      " rounded-tr-[10px] inline rounded-bl-[10px] bg-red3 py-1 px-[10px] font-medium text-[14px] text-white leading-[14px]",
      className
    )}
  >
    Sale
  </p>
);

export const ColorBadge = ({ className, children }) => (
  <p
    className={cn(
      " text-[14px] leading-[29px] text-black px-[3px] bg-white-trans rounded-[4px] ",
      className
    )}
  >
    {children}
  </p>
);

export const RebatesBadge = ({ className }) => (
  <p
    className={cn(
      " text-[10px] leading-[11px] text-white  font-semibold bg-orange1 rounded py-[3px] px-[5px]",
      className
    )}
  >
    Rebates Available
  </p>
);

export const StockBadge = ({ className, isInStock }) => (
  <p
    className={cn(
      "text-[10px] leading-[14px] text-green1 text-right mt-[3px] font-semibold whitespace-nowrap",
      isInStock ? "text-green1" : "text-red2",
      className
    )}
  >
    {isInStock ? "In-Stock" : "Out Of Stock"}
  </p>
);

export const DeliveryBadge = ({ className }) => (
  <div className={cn("flex gap-2 justify-center py-2", className)}>
    <TruckIcon width={22} height={22} fill="#1C1B1F" />
    <p className="text-[12px]">
      Delivery &nbsp;
      <span className=" font-semibold text-blue2">
        Check Earliest Available Date
      </span>
    </p>
  </div>
);
