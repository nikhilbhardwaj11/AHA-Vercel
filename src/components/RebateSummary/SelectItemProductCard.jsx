import ProductImg from "@/assets/images/dummy-color-option1.png"
import Image from "next/image"
import { Button } from "../ui/button"

const SelectItemCard = () => {
    return (
        <div className=" border border-[#C5C5C5] rounded-[10px] px-[22px] pt-[18px] pb-[22px]">
            <div className="grid gap-[10px] grid-cols-Card120">
                <div className="relative w-[120px] h-[170px] rounded-10 bg-[#F1F1F1] px-[20px] py-4 ">
                    <Image src={ProductImg} alt="product-img" className="h-full object-contain" />
                </div>
                <div className="pl-5">
                    <h2 className=" text-[24px] leading-9 max-w-[380px] mb-[10px] font-semibold">BOSCH 36 French Door Bottom Mount Refrigerator in SS</h2>
                    <p className=" text-[16px] font-medium ">Model: SHP78CM6C</p>
                </div>
                <div>
                    <h3 className=" font-bold text-[24px] leading-[30px] ">$3,599.00*</h3>
                    <span className=" text-[10px] mb-2 text-[#545454]">*Final price in cart</span>
                    <p className="  text-[#D80000] text-[13px] leading-[16px]">$400 OFF (12%)</p>
                    <p className=" text-[13px] leading-[16px]">$4,000</p>
                </div>
            </div>
            <div className=" grid grid-cols-1frAuto gap-3 mt-5 items-center">
                <div className=" text-[#545454]">
                    <p className=" font-medium mb-[16px]">Top Specs</p>
                    <div className="flex gap-x-9 gap-y-2 flex-wrap ">
                        <div className=" text-[16px] leading-6">
                            <div className="grid grid-cols-2 gap-9 mb-1"><p>Installation Depth</p><p className=" font-medium">Standard Depth</p></div>
                            <div className="grid grid-cols-2 gap-9 mb-1"><p>Dispenser Feature</p><p className=" font-medium">Water Dispenser</p></div>
                        </div>
                        <div className=" text-[16px] leading-6">
                            <div className="grid grid-cols-2 gap-9 mb-1"><p>Height to Top</p><p className=" font-medium">68.625 in</p></div>
                            <div className="grid grid-cols-2 gap-9 mb-1"><p>Number of Doors</p><p className=" font-medium">3 Doors</p></div>
                        </div>
                    </div>
                    <p className=" font-medium text-[#0B223C] mt-3 underline">More Detail</p>
                </div>
                <Button className=" rounded-[10px] text-[14px]">
                Select Item
                </Button>
            </div>
        </div>
    )
}

export default SelectItemCard