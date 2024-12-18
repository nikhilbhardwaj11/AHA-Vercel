import Image from "next/image";
import CardImage1 from "@/assets/images/static/culture-card-1.png";
import CardImage2 from "@/assets/images/static/culture-card-2.png";
import CardImage3 from "@/assets/images/static/culture-card-3.png";
import CardImage4 from "@/assets/images/static/culture-card-4.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Testimonial from "@/components/TestimonialsSlider";

const Card = ({ src, text, heading }) => {
  return (
    <div className=" px-4 pt-4 pb-[10px] bg-white border border-[#253A670D] hover:scale-110 transition-all">
      <AspectRatio ratio={233 / 200} className="bg-muted">
        <Image src={src} alt="img" fill className=" object-cover" />
      </AspectRatio>
      <h2 className=" text-[20px] leading-[30px] mb-4 mt-6">{heading}</h2>
      <p className=" text-[16px] leading-[24px] text-[#53648B]">{text}</p>
    </div>
  );
};

const Culture = () => {
  return (
    <>
    <div className=" pt-[70px] max-w-[1420px] px-5 mx-auto my-0 bg-[#F7F9FC] pb-[60px] mb-[34px] lg:pt-10 ">
      <h2 className=" text-[36px] mb-[47px] leading-[54px] font-bold text-center pb-[44px] lg:mb-0 lg:text-[30px] lg:leading-9">
        Working with Airport Home Appliance
      </h2>
      <div className=" max-w-[1240px] px-5  mx-auto my-0 grid grid-cols-4 gap-[3.357vw] lg:px-0 lg:gap-4 lg:grid-cols-2 mob:grid-cols-1">
        <Card
          src={CardImage4}
          heading="Company Values"
          text="Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do."
        />
        <Card
          src={CardImage3}
          heading="Company Values"
          text="Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do."
        />
        <Card
          src={CardImage2}
          heading="Company Values"
          text="Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do."
        />
        <Card
          src={CardImage1}
          heading="Company Values"
          text="Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do."
        />
      </div>
      <div className=" max-w-[1200px] mx-auto my-0">
        <h3 className=" text-[40px] leading-[66px] py-4 text-center font-semibold mt-[50px] mb-[20px] lg:text-[30px] lg:leading-9">See the feedback from your teammates.</h3>
        <Testimonial />

      </div>

    </div>
    </>
  );
};

export default Culture;
