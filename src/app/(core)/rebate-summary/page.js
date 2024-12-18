import BannerImg from "@/assets/images/kitchen-interior.webp";
import SelectItemCard from "@/components/RebateSummary/SelectItemProductCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductImg from "@/assets/images/dummy-color-option1.png";
import DeleteIcon from "@/icons/DeleteIcon";
import CopyIcon  from "@/icons/CopyIcon";

const RebateSummary = () => {
  return (
    <div>
      <div className="relative h-[510px] w-full max-w-[1400px] container bg-rebateBanner">
        <Image src={BannerImg} alt="banner" fill objectFit="cover" />
        <div className=" bg-rebateBanner absolute top-0 bottom-0 right-0 left-0 text-white flex justify-end flex-col pl-[46px] pb-[20px] ">
          <h3 className=" mb-[10px] text-[32px] font-light">
            Get the Look{" "}
            <b className="font-medium ml-4 ">Receive Up to a $3,000 Rebate!</b>
          </h3>
          <div className="flex ">
            <div className="text-[24px] leading-[32px] pr-8">
              <h4>Buy 3 Appliances = $200</h4>
              <h4>Buy 4 Appliances = $300</h4>
            </div>
            <div className="text-[24px] leading-[32px] px-8 border-x border-x-white">
              <h4>Buy 3 Appliances = $200</h4>
              <h4>Buy 4 Appliances = $300</h4>
            </div>
            <div className="text-[24px] leading-[32px] pl-8">
              <h4>Buy 3 Appliances = $200</h4>
              <h4>Buy 4 Appliances = $300</h4>
            </div>
          </div>
          <div className="pt-[10px] flex justify-end max-w-[1012px]">
            <p className=" font-light text-[10px]">
              Primis integer etiam tincidunt erat cursus. Consectetur pharetra{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container max-w-1440 px-5  py-p18 lg:gap-3 lg:px-4 lg:py-2  ">
        <div className=" flex gap-[30px]">
          <div className="flex-1 flex flex-col gap-12 items-start">
            <SelectItemCard />
            <SelectItemCard />
          </div>

          <div className="flex-1 max-w-[482px] ">
            <div className="lg:px-4 lg:w-full border border-[#F3F1F1] rounded-[10px]">
              <div className="lg:max-w-full py-[26px] px-[24px] rounded-[13px] bg-white sticky top-[95px] mb-[18px] ">
                <h3 className=" text-blue3 text-[17px] leading-[25px] font-medium text-center pb-2">
                  Rebate Summary
                </h3>
                <p className=" text-[13px] leading-[17px] font-medium mb-3">
                  Primis integer etiam tincidunt erat cursus. Consectetur
                  pharetra{" "}
                </p>
                <div className="border-b border-gray18 pb-[5px] pt-[15px]">
                  <div className="text-sm pb-[10px] flex justify-between items-center ">
                    <p className=" font-medium">List Price</p>
                    <p className=" font-semibold">$8,000.00</p>
                  </div>
                  <div className="text-sm pb-[10px] flex justify-between items-center ">
                    <p className=" font-medium">Rebate</p>
                    <p className="  font-semibold text-green1 ">
                      $802.00 (10.00 %)
                    </p>
                  </div>
                  <div className="text-sm pb-[10px] flex justify-between items-center ">
                    <p className=" font-medium underline">Rebate Breakdown</p>
                  </div>
                </div>
                <div className="text-sm pb-6 pt-4 flex justify-between items-center ">
                  <p className=" font-medium">Price After Rebate</p>
                  <p className=" font-semibold">$7,198.00</p>
                </div>
                <Button className="rounded-[8px] w-full bg-red3">
                  Proceed to Checkout
                </Button>
              </div>
            </div>
            <div className="mt-6 pr-3">
              <h3 className=" text-[22px] leading-9 font-semibold mb-6">
                Selected Products
              </h3>
              <div className=" text-[16px] leading-6 font-medium mb-6 flex justify-between ">
                <p>Product Quantity</p>
                <p>2</p>
              </div>
              <div className="grid gap-4">
                <div className="flex gap-[10px] border-b border-b-[#D9D9D9] ">
                  <div className="relative w-[165px] h-[206px] flex justify-center items-center rounded-10 px-[20px] py-4 ">
                    <Image
                      src={ProductImg}
                      alt="product-img"
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="pt-[8px] flex flex-col justify-between gap-4 pb-6 ">
                    <div>
                      <h3 className="mb-7 text-[16px] leading-[27px]">
                        BOSCH 36 French Door Bottom Mount Refrigerator in SS
                      </h3>
                      <p className=" text-[18px] leading-[26px] font-extrabold">
                        $3,599.00
                        <span className="text-[#7E8492] text-[14px] ml-1 line-through	decoration-2">
                          $4,000.00
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button className=" flex gap-[10px] items-center">
                        <div className="h-10 w-10 inline-flex items-center justify-center border border-[#B5B5B5] rounded-full">
                          <DeleteIcon fill="#0B223C" />
                        </div>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[10px] border-b border-b-[#D9D9D9] ">
                  <div className="relative w-[165px] h-[206px] flex justify-center items-center rounded-10 px-[20px] py-4 ">
                    <Image
                      src={ProductImg}
                      alt="product-img"
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="pt-[8px] flex flex-col justify-between gap-4 pb-6 ">
                    <div>
                      <h3 className="mb-7 text-[16px] leading-[27px]">
                        BOSCH 36 French Door Bottom Mount Refrigerator in SS
                      </h3>
                      <p className=" text-[18px] leading-[26px] font-extrabold">
                        $3,599.00
                        <span className="text-[#7E8492] text-[14px] ml-1 line-through	decoration-2">
                          $4,000.00
                        </span>
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <button className=" flex gap-[10px] items-center">
                        <span className="h-10 w-10 inline-flex items-center justify-center border border-[#B5B5B5] rounded-full">
                          <DeleteIcon fill="#0B223C" />
                        </span>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pt-10 pb-5">
              <h4 className="text-[22px] leading-[34px] pb-4 ">Share This Rebate</h4>
              <div className=" flex items-center gap-4">
              <input className="p-5 rounded-[8px] border border-[#D9D9D9] text-[#545454]" value="https://www.airportappliance.com/re" />
                <CopyIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RebateSummary;
