import Image from "next/image";
import DummyImage from "@/assets/images/category-card-product-img1.png";
import DummyImage1 from "@/assets/images/dummy-light-image.png";

import PlusIcon from "@/icons/PlusIcon";
import { Button } from "@/components/ui/button";

const CompleteYourKitchenWith = () => {
  return (
    <div className=" my-0 mx-auto py-6 lg:hidden">
      <h3 className="text-2xl font-semibold leading-[38px] mb-[21px] px-9 lg:pl-0 lg:text-[16px] lg:leading-[23px] lg:mb-[5px]">Complete Your Kitchen with Bosch</h3>
      <div className=" bg-white rounded-[10px] py-6 px-3 flex-wrap gap-2 flex">
        <div className="flex items-center gap-3 pr-5 w-full flex-wrap">
          <div className="flex items-center gap-5">
            <div className=" w-[132px] h-[132px]">
              <Image
                src={DummyImage}
                alt="images"
                className=" object-contain h-full"
              />
            </div>
            <PlusIcon />
            <div className=" w-[132px] h-[132px]">
              <Image
                src={DummyImage}
                alt="images"
                className=" object-contain h-full"
              />
            </div>
            <PlusIcon />
            <div className=" w-[132px] h-[132px]">
              <Image
                src={DummyImage}
                alt="images"
                className=" object-contain h-full"
              />
            </div>
            <PlusIcon />
            <div className=" w-[132px] h-[132px]">
              <Image
                src={DummyImage}
                alt="images"
                className=" object-contain h-full"
              />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Button className=" text-[14px] leading-[21px] bg-red3 h-[50px] w-full max-w-[308px]">Complete Your Kitchen</Button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CompleteYourKitchenWith;
