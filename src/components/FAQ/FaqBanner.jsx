import FaqBannerImg from "@/assets/images/faq-banner.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
const FaqBanner = () => {
  return (
    <div className="  bg-blue7">
      <div className=" max-w-[1440px] gap-3 justify-between my-0 mx-auto py-[33px] px-5 flex items-center">
        <div className="text-white">
          <h1 className=" text-[36px] leading-[54px] font-bold mb-[13px]">
            Frequently Asked Questions
          </h1>
          <p className=" text-[16px] leading-[24px] max-w-[680px]">
            Welcome to our FAQ page! We’ve compiled a list of commonly asked
            questions to provide you with quick and informative answers;
          </p>
        </div>
        <div className=" w-full max-w-[290px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={FaqBannerImg}
              alt="Image"
              width={290}
              height={290}
              className="rounded-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default FaqBanner;
