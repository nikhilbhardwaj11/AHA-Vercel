import NotFoundImg from "@/assets/images/no-result-found.png";
import DynamicImage from "../DynamicImages/DynamicImage";
import { cn } from "@/lib/utils";

const NoResultFound = ({ message = "No Results Found!", minHeight = 500 }) => {
  return (
    <div className={cn("flex items-center flex-col justify-center", `min-h-[${minHeight}px]`)}>
      <DynamicImage
        disableIsBlur
        src={NotFoundImg}
        width={256}
        height={256}
        alt="icon"
      />
      <p className="text-[24px] leading-[36px] font-semibold text-blue6 mt-11">
        {message}
      </p>
    </div>
  );
};

export default NoResultFound;
``
