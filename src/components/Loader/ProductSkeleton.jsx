import { Skeleton } from "@/components/ui/skeleton";
const ProductSkeleton = () => {
  return (
    <>
      {[...Array(4)].map((_, index) => (
        <div
          key={index + 1}
          className="px-[18px] h-[750px] pt-9 pb-3 border-2 border-gray5 rounded-[16px] transition-all	delay-80  bg-white hover:shadow-15.9 cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <Skeleton className="w-[300px] h-[250px] bg-gray1  " />
          </div>
          <Skeleton className=" w-full bg-gray1 pt-5 mt-3 pl-[15px]" />
          <Skeleton className=" w-full bg-gray1 pt-5 mt-3 pl-[15px]" />
          <div>
            <div>
              <div className="flex justify-between gap-2 items-center border-gray4 border-b  ">
                <Skeleton className="bg-gray1 text-gray2 h-[16px] " />
              </div>
            </div>

            <div className="mb-12 pt-3 border-gray4  text-black h-[114px]">
              <div className="gap-1 mt-3 ">
                <Skeleton className="bg-gray1 h-4 pt-5  " />
                <Skeleton className="bg-gray1 h-4 pt-5 mt-3 " />
                <Skeleton className="bg-gray1 h-4 pt-5 mt-3 " />
                <Skeleton className="bg-gray1 h-4 pt-5 mt-3 " />
              </div>
            </div>

            {/* Bottom */}
            <div className="pt-[26px]">
              <Skeleton className="text-sm h-4 mt-3 pt-5 bg-gray1 " />
              <div className="flex gap-2 justify-center py-5  ">
                <Skeleton className="h-4 bg-gray1" />
                <Skeleton className="w-full bg-gray1 text-blue2 border-gray1  text-[13px] h-[40px]    " />
                <Skeleton className="h-4 bg-gray1 text-sm peer-disabled:cursor-not-allowed " />
              </div>
              <Skeleton className="text-sm h-4  pt-5 bg-gray1 " />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default ProductSkeleton;
