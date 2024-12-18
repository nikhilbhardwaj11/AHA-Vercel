import FindShowroomImage from "@/assets/images/find-showroom.png";
import LuxuryKitchenSuites from "@/assets/images/luxury-kitchen-suites.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";


const FindShowroom = () => {
  return (
    <div className=" bg-gray27 py-[52px] px-[20px] sm:px-0 ">
      <div className=" max-w-[1410px] mx-auto my-0 grid grid-cols-2 gap-8 slg:grid-cols-1 slg:max-w-[558px]">
        <div className="relative slg:pb-[100px]">
        <AspectRatio ratio={685 / 359} className="rounded-[24px] overflow-hidden 1440:rounded-[1.667vw] slg:rounded-[16px] sm:rounded-none">
        <Image
              src={FindShowroomImage}
              alt="image"
              fill
              className=" object-cover"
            />
          </AspectRatio>
          <div className="px-[64px] pt-[64px] pb-[62px] absolute top-0 left-0 bottom-0 right-0 1440:px-[4.444vw] 1440:pt-[4.444vw] 1440:pb-[4.306vw] slg:px-[34px] slg:py-[18px] slg:rounded-[16px] slg:flex slg:items-end sm:rounded-none slg:bottom-0 ">
            <div className="grid px-6 pt-6 pb-[18px] rounded-[24px] bg-[#FFFFFFE5] 1440:px-[1.667vw] 1440:pt-[1.667vw] 1440:pb-[1.25vw] 1440:rounded-[1.667vw] slg:rounded-[16px] slg:px-[35px] slg:py-4">
              <h2
                className=" text-[36px] leading-[43px] text-blue3 mb-2 font-bold text-center
                1440:text-[2.5vw] 1440:leading-[2.986vw] 1440:mb-[0.556vw]  slg:text-[24px] slg:leading-[29px] slg:mb-2"
              >
                Find a Showroom
              </h2>
              <p className="three-line-dot-mobile text-[18px] leading-[24px] text-black mb-4 text-center 1440:text-[1.25vw] 1440:leading-[1.667vw] 1440:mb-[1.111vw] slg:text-[14px] slg:leading-[24px] slg:mb-[16px]">
                We welcome walk-ins at all our showrooms, but encourage you to
                make an appointment so we can be properly prepared and ensure
                your experience is the best.
              </p>
              <button className=" text-white text-[16px] leading-[19px] bg-blue6 px-11 py-4 rounded-[50px] mx-auto my-0 1440:text-[1.111vw] 1440:leading-[1.319vw] 1440:px-[3.056vw] 1440:py-[1.111vw] 1440:rounded-[3.472vw] slg:text-[16px] slg:leading-[19px] slg:py-3 slg:px-8 sm:rounded-[45px]">
                View Stories
              </button>
            </div>
          </div>
        </div>
        <div className="relative slg:pb-[100px]">
          <AspectRatio ratio={685 / 359} className="rounded-[24px] overflow-hidden 1440:rounded-[1.667vw] slg:rounded-[16px] sm:rounded-none">
            <Image
              src={LuxuryKitchenSuites}
              alt="image"
              fill
              className=" object-cover"
            />
          </AspectRatio>
          <div className="px-[64px] pt-[64px] pb-[62px] absolute top-0 left-0 bottom-0 right-0 1440:px-[4.444vw] 1440:pt-[4.444vw] 1440:pb-[4.306vw] slg:px-[34px] slg:py-[18px] slg:rounded-[16px] slg:flex slg:items-end slg:bottom-0 ">
            <div className="grid px-6 pt-6 pb-[18px] rounded-[24px] bg-[#FFFFFFE5] 1440:px-[1.667vw] 1440:pt-[1.667vw] 1440:pb-[1.25vw] 1440:rounded-[1.667vw] slg:rounded-[16px] slg:px-[35px] slg:py-4">
              <h2
                className=" text-[36px] leading-[43px] text-blue3 mb-2 font-bold text-center
                1440:text-[2.5vw] 1440:leading-[2.986vw] 1440:mb-[0.556vw] slg:text-[24px] slg:leading-[29px] slg:mb-2"
              >
                Luxury Kitchen Suites
              </h2>
              <p className="three-line-dot-mobile text-[18px] leading-[24px] text-black mb-4 text-center 1440:text-[1.25vw] 1440:leading-[1.667vw] 1440:mb-[1.111vw] slg:text-[14px] slg:leading-[24px] slg:mb-[16px]">
                When it’s time to replace old appliances and breathe new life
                into your kitchen, look no further than than Airport Home
                Appliance for the best luxury kitchen packages.
              </p>
              <button className=" text-white text-[16px] leading-[19px] bg-blue6 px-11 py-4 rounded-[50px] mx-auto my-0 1440:text-[1.111vw] 1440:leading-[1.319vw] 1440:px-[3.056vw] 1440:py-[1.111vw] 1440:rounded-[3.472vw] slg:text-[16px] slg:leading-[19px] slg:py-3 slg:px-8 sm:rounded-[45px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindShowroom;
