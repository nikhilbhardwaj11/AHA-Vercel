import BannerImage from "@/assets/images/story-banner.png";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const Story = () => {
  return (
    <div className=" relative pb-[68px] lg:pb-[30px] sm:pb-[78px] ">
       <div className="  relative">
      <div className="block lg:hidden"><AspectRatio ratio={1920 / 686}>
        <Image src={BannerImage} alt="banner" fill className="object-cover" />
      </AspectRatio></div>
     <div className="hidden lg:block h-[400px]">
     <Image src={BannerImage} alt="banner" fill className="object-cover "  />
     </div>
        <div className="absolute right-[18.906vw] top-0 bottom-0 flex items-center justify-center 1280:right-[100px] 1280:max-w-[315px] lg:right-10 lg:max-w-[257px] sm:h-[258px] sm:top-auto sm:bottom-[-18%] sm:left-0 sm:right-0 sm:my-0 sm:mx-auto">
          <div className="  p-[44px] flex flex-col items-center text-center rounded-[24px] max-w-[358px] bg-white 1280:p-[24px] lg:bg-[#fffffff2]">
            <h2 className="text-[30px] font-semibold leading-[45px] text-blue3 pb-[5px] 1280:text-[24px] 1280:leading-[30px]">
              Ryan & Megan&apos;s Remodel Story
            </h2>
            <p className="text-[15px] font-medium leading-[25px] text-black mb-[16px] 1280:text-[14px] 1280:leading-[20px] four-line-dot-mobile ">
              After spending three years in Germany, Ryan & Megan Engebrethson
              were ready to come back home to California and make their dream
              kitchen a reality. Read about their story and many other Airport
              customer kitchen stories..
            </p>
            <button className=" rounded-[50px] border py-[12px] text-[14px] leading-[18px] px-[20px] text-blue2 border-blue2">
              Get Inspired{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
