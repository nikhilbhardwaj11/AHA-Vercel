import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RenderSpecification = ({ productSpecification = [] }) => {
  const Specs = () => (
    <div className=" pb-3 mt-3 border-gray4 border-t border-b text-black pt-3 h-[114px] overflow-hidden">
      {productSpecification?.length > 0 &&
        productSpecification?.map(({ id, key, unit, value }, index) => {
          if (index > 4) return;
          return (
            <div key={index} className="grid grid-cols-2 gap-2">
              <p className=" truncate text-[12px] leading-[24px]">
                {key} {unit}
              </p>
              <p className=" truncate font-semibold text-[12px] leading-[24px]">
                {value}
              </p>
            </div>
          );
        })}
    </div>
  );
  return (
    <TooltipProvider>
      <Tooltip className="bg-red">
        <TooltipTrigger asChild data-side="bottom">
          <Specs />
        </TooltipTrigger>
        <TooltipContent className="max-w-[300px] bg-grayBg">
          <Specs />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default RenderSpecification;
