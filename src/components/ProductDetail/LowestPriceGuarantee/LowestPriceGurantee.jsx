import DynamicImage from "@/components/DynamicImages/DynamicImage";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import StarIcon from "@/icons/LowestPriceGuarantee";
import AwardStar from "@/assets/images/award_star.svg";

const LowestPriceGuarantee = () => {
  return (
    <div>
      {" "}
      <Sheet>
        <SheetTrigger asChild>
          <button className=" text-[11px] border-gray12 border-l lg:pl-0 pl-[52px] ml-[52px] flex gap-2 lg:m-0  lg:gap-x-[2px] flex-wrap">
            <StarIcon />
            Lowest Price Guarantee
          </button>
        </SheetTrigger>
        <SheetContent className=" max-w-[500px] p-0  rounded-20">
          <SheetTitle className="px-[30px] pt-[25px] pb-[22px] border-b border-gray21">
            <h3 className=" gap-[10px] items-center inline-flex text-[25px] leading-[37px] font-medium">
              Low Price Guarantee
              <DynamicImage
                className=" w-[26px] h-[26px]"
                src={AwardStar}
                alt="AwardStar"
              />
            </h3>
          </SheetTitle>
          <SheetDescription className="text-blue1  max-h-[100vh] overflow-auto">
            <div className="px-[30px]">
              <div className="text-[16px] leading-[24px] mt-[23px] mb-[32px]">
                <p className=" font-semibold text-center">
                  Provide proof of Lower Price within 30 Days of Purchase &
                  we’ll credit you 110% of the difference!
                </p>
              </div>
              <div className="text-[16px] leading-[24px] px-[40px] pb-[32px] ">
                <h4 className="mb-[10px] font-semibold text-[20px] leading-[30px]">
                  Example:
                </h4>
                <div className="grid gap-6 ">
                  <div className=" rounded-[8px] items-center grid grid-cols-58 gap-5 py-[6px] px-[14px] bg-gray22">
                    <div className="w-[58px] h-[58px] rounded-full border-[3px] border-red1 flex items-center justify-center text-[20px] leading-[30px] font-semibold">
                      1
                    </div>
                    <p className=" text-[15px] leading-[22px] text-center">
                      You Purchase a Range for $1,500 from Your Local Airport
                      Home Appliance Showroom.
                    </p>
                  </div>
                  <div className=" rounded-[8px] items-center grid grid-cols-58 gap-5 py-[6px] px-[14px] bg-gray22">
                    <div className="w-[58px] h-[58px] rounded-full border-[3px] border-red1 flex items-center justify-center text-[20px] leading-[30px] font-semibold">
                      2
                    </div>
                    <p className=" text-[15px] leading-[22px] text-center">
                      A Week Later, You Find the Same Range Priced at $1,200
                      From an Authorized Retailer.
                    </p>
                  </div>
                  <div className=" rounded-[8px] items-center grid grid-cols-58 gap-5 py-[6px] px-[14px] bg-gray22">
                    <div className="w-[58px] h-[58px] rounded-full border-[3px] border-red1 flex items-center justify-center text-[20px] leading-[30px] font-semibold">
                      3
                    </div>
                    <p className=" text-[15px] leading-[22px] text-center">
                      You Show us Proof. We Note the Difference of $300. We Then
                      Credit You $330, 110% Of the Difference!
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className=" mt-4 text-[13px]  leading-[26px] bg-transparent p-0 cursor-pointer text-blue5">
                    Learn More...
                  </button>
                </div>
              </div>
            </div>
            <div className="border-t border-gray21">
              <div className="px-[30px] py-7 text-blue1 text-[15px] leading-[22px]">
                <p>
                  We are confident in our low-price guarantee that we will match
                  ANY advertised deal from any local retailer, online or in
                  print. Simply provide proof of the competitor&apos;s price
                  within 30 days of purchase, such as an ad, printout, or live
                  web page, and we will match it. We will refund the difference
                  if you have already purchased something and find a lower price
                  within 30 days.
                </p>
                <p className="mt-[15px]">
                  The low-price guarantee applies to the total invoice amount,
                  including applicable delivery charges. The package price
                  guarantee covers the entire package price. The advertised
                  products must be comparable (new in the box) and in stock.
                </p>
              </div>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default LowestPriceGuarantee;
