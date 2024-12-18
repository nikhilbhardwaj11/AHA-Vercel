import Image from "next/image";

const StepsPlaceholder = ({ image, label }) => (
  <div className="flex gap-[55px] pl-[25px]  h-[58px] items-center lg:px-4 lg:gap-3  ">
    <Image src={image} alt="icon" className=" w-[26px] h-[26px]" />
    <div className="border-b border-gray15 w-full py-4 ">
      <h2 className=" text-[16px] font-semibold text-blue3    ">{label}</h2>
    </div>
  </div>
);

export default StepsPlaceholder;
