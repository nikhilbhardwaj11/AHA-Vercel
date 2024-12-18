import { Skeleton } from "@/components/ui/skeleton";
const Loading = ({ className }) => {
  return (
    <>
      <div
        className={`border-2 min-h-[260px] rounded-2xl border-gray5 px-[2px] pt-9 pb-[30px] ml-3 mr-3 ${className}`}
      >
        <div className="flex items-center justify-center">
          <Skeleton className="w-[200px] h-[220px] bg-gray1  " />
        </div>
        <div className="px-4 ">
          <Skeleton className="h-4  bg-gray1 pt-5 mt-3 " />
          <Skeleton className="h-4  bg-gray1 pt-5 mt-3 px-[2px] " />
          <div className="flex justify-between gap-2 items-center border-gray4 border-b pb-2 ">
            <Skeleton className="bg-gray1 text-gray2 h-4 " />
          </div>
          <div className="flex justify-between gap-2 items-center pt-[10px]">
            <Skeleton className="bg-gray1 text-[14px]  h-4 " />
          </div>
        </div>
        <div className="px-4 ">
          <Skeleton className="bg-gray1 h-3 mb-2" />
          <Skeleton className="bg-gray1 h-3 mb-2" />
        </div>
        <div className="pb-3 mt-3 border-gray4  text-black pt-3 h-[20px] overflow-hidden">
          <div className="gap-1 mt-3 ">
            <Skeleton className="bg-gray1 h-3  mt-3" />
          </div>
        </div>
        <div className="px-4">
          <Skeleton className="bg-gray1 h-3 mb-2" />
        </div>
        <div className="flex justify-center items-center  mt-6  ">
          <Skeleton className="text-sm h-4 bg-gray1  " />
        </div>
      </div>
    </>
  );
};
export default Loading;
