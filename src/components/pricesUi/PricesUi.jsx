import { cn } from "@/lib/utils";
import { formatCurrency } from "@/utils/formatCurrency";

export const Price = ({ className, children }) => (
  <h3 className={cn(" text-[24px] font-bold   leading-[26px]", className)}>
    {children}
  </h3>
);

export const FinalPriceBadge = ({ className }) => (
  <p className={cn(" text-gray2 text-[8px] text-right mr-1", className)}>
    *Final price in cart
  </p>
);

export const DefaultPriceUi = ({ price_details }) => {
  const { cartPrice, displayPrice, savingAmount, savingPercentage, crossedPrice } =
    price_details || {};
  return (
    <div className="flex items-start gap-2 mb-[6px] h-[36px]">
      <div>
        <Price >{formatCurrency(displayPrice)}</Price>
         <FinalPriceBadge />
      </div>
      <div>
        <Price className=" text-red2  text-[10px] leading-[12px]">
          {savingAmount}
          {savingPercentage}
        </Price>
        <Price className="text-[10px] leading-[12px] line-through">
          {crossedPrice}
        </Price>
      </div>
    </div>
  );
};
