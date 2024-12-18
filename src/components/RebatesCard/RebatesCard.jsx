import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import DummyCardImg from "@/assets/images/dummy-rebat-card-img.png";
import PDFIcon from "@/icons/PDFIcon";
import { formatDate, isRebateExpired } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DynamicImage from "../DynamicImages/DynamicImage";
import NoImage from "@/assets/images/no-image.webp";
import { Button } from "../ui/button";

function RebatesCard({ data = {}, shopModels = false }) {
  const {
    description,
    startDate,
    endDate,
    title,
    formUrl = "",
    id,
    rebateImage = null,
    brandNames = [],
  } = data;

  const brandIds = brandNames?.map((brand) => brand.brandId).join(",");

  const getLinkForRebates = () => {
    if (!shopModels) return;
    return !isRebateExpired(endDate) ? (
      <Link
        href={`/rebateProducts?brandIds=${brandIds}&rebateIds=${id}`}
        variant="outline"
        className="font-medium px-2 text-center text-sm flex justify-center items-center border border-blue2 rounded-[8px] min-h-14 mb-[14px]  w-full lg:h-[42px] lg:min-h-[auto]"
      >
        Shop Models in this Rebate
      </Link>
    ) : (
      <Button
        variant="outline"
        className="font-medium text-sm flex justify-center items-center border border-blue2 rounded-[8px] min-h-14 mb-[14px]  w-full lg:h-[42px] lg:min-h-[auto]"
        disabled={true}
      >
        Expired Rebate
      </Button>
    );
  };

  return (
    <div className=" border border-gray1 rounded-[15px] p-5">
      <div
        className={`rounded-[15px] overflow-hidden   flex items-center justify-center ${
          rebateImage ? "min-h-[150px] mb-[30px]" : "min-64px mb-[10px]"
        }`}
      >
        {rebateImage ? (
          <AspectRatio ratio={301 / 216}>
            <Image src={rebateImage} alt="Image" />
          </AspectRatio>
        ) : (
          <div className="flex justify-center items-center gap-3 relative w-full ">
            {(brandNames?.length
              ? brandNames
              : [{ brandImage: NoImage.src, brandId: "no-image" }]
            ).map(({ brandImage, brandId }) => (
              <div key={brandId} className="h-[60px] relative w-full">
                <DynamicImage
                  src={brandImage}
                  alt="Image"
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="px-[7px] text-[13px] leading-[20px] text-blue2 grid">
        <div className="flex gap-4 mb-2 lg:mb-3 min-h-10 text-[14px]">
          {rebateImage && (
            <div className="max-w-[70px]">
              <Image src={DummyCardImg} alt="Image" />
            </div>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p className=" font-semibold two-line-dots text-[15px]">
                  {title}
                </p>
              </TooltipTrigger>
              <TooltipContent>
                <p className=" max-w-[200px]">{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="mb-3 min-h-[60px] three-line-dots">{description}</p>
            </TooltipTrigger>
            <TooltipContent>
              <p className=" max-w-[240px]">{description}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="mb-2 ">
          Valid from {formatDate(startDate, "MM/dd/yyyy")} to{" "}
          {formatDate(endDate, "MM/dd/yyyy")}
        </p>

        {getLinkForRebates()}
        <Link
          href={formUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" mx-0 my-auto inline-flex gap-[10px] p-0 bg-transparent hover:bg-transparent text-blue2 h-6 text-[12px] leading-[22px]"
        >
          <PDFIcon />
          Download Rebate Form
        </Link>
      </div>
    </div>
  );
}

export default RebatesCard;
