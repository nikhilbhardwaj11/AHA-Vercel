import DynamicImage from "@/components/DynamicImages/DynamicImage";
import NoImage from "@/assets/images/no-image.webp";

const OurBrandCard = ({ brandDetails = {} }) => {
  const { brandImage, brandName } = brandDetails;
  return (
    <div className="w-[206px] bg-white rounded-10 overflow-hidden shadow-brandCard sm:w-full sm:rounded-none sm:shadow-none group  sm:even:border-l sm:even:border-l-gray15 sm:border-b sm:border-b-gray15 sm:last:border-b-0  nth-last-child-2:border-b-0 ">
      <div className=" min-h-[100px] flex items-center justify-center ">
        <DynamicImage
          className=" max-h-[52px] object-contain"
          src={brandImage || NoImage}
          width={100}
          height={52}
          alt={brandName}
        />
        {/* {brandName} */}
      </div>
    </div>
  );
};

export default OurBrandCard;
