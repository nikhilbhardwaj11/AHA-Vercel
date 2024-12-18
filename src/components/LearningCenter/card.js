import CardImage from "@/assets/images/learning-center.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className=" shadow-11.3 rounded-[14px] bg-white p-[18px] pb-[20px] ">
      <Image
        src={CardImage}
        alt="card-image"
        className="rounded-[10px] overflow-hidden"
      />
      <p className="mt-3 font-medium text-[14px] leading-[18px] two-line-ellipsis">
        Unlock the Shine: A Comprehensive Guide on How to Clean a Dishwasher
      </p>
      <p className="mt-3 text-gray23 font-medium text-[14px] leading-[20px]">
        Admin | April 22, 2024
      </p>
    </div>
  );
};

export default Card;
