import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import NoImage from "@/assets/images/no-image.webp";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import Link from "next/link";

const Card = ({ item }) => {
  return (
    <div>
      <div className="lg:hidden">
        <AspectRatio ratio={417 / 345}>
          <div className=" relative h-full rounded-10 overflow-hidden">
            <DynamicImage
              src={item?.image || NoImage.src}
              alt="image"
              fill
              className=" object-cover"
            />
          </div>
        </AspectRatio>
      </div>
      <div className="hidden lg:block">
        <AspectRatio ratio={417 / 300}>
          <div className=" relative h-full rounded-10 overflow-hidden">
            <Image
              src={item?.image || NoImage.src}
              alt="image"
              fill
              className=" object-cover"
            />
          </div>
        </AspectRatio>
      </div>
      <div className="mt-[16px]">
        <h4 className=" mb-2 text-[20px] leading-[27px] font-medium lg:text-[18px] lg:leading-[22px]">
          {item?.title}
        </h4>
        <p className="  text-[15px] leading-[20px] lg:text-[14px] lg:leading-[18px]">
          {item?.description}
        </p>
      </div>
    </div>
  );
};

const ProductDetails = ({
  productHighlights = [],
  productOverview = [],
  productDescription = "",
  upcCode,
  sku,
  productManualGuides,
}) => {
  return (
    // <div className=" px-[38px] py-[24px]">
    //   <h3 className=" font-medium text-[20px] text-blue3 pt-[28px] pb-[22px] ">
    //     Highlights
    //   </h3>
    //   <ul className=" list-outside list-disc pl-6  text-blue3 text-[18px] leading-[23px] ">
    //     {productHighlights.length > 0 &&
    //       productHighlights?.map(({ highlights }, index) => (
    //         <li key={index} className="mb-4">
    //           {highlights}
    //         </li>
    //       ))}
    //   </ul>
    // </div>
    <div>
      <div className="grid grid-cols-3 gap-x-8 gap-y-12 p-8 lg:p-4 lg:gap-4 lg:grid-cols-237">
        {productOverview.length > 0 &&
          productOverview.map((item, index) => (
            <Card item={item} key={index} />
          ))}
      </div>
      <div className="flex p-8 gap-8 items-start 900:flex-col lg:p-4 lg:gap-4">
        <div className="flex flex-col gap-6 flex-1">
          {productDescription && (
            <div>
              <h3 className=" text-blue3 mb-2 text-[20px] leading-[27px] font-medium">
                About This Product
              </h3>
              <p className="text-[15px] leading-[24px]">
                {productDescription || ""}
              </p>
            </div>
          )}
          <div>
            {productHighlights && productHighlights.length > 0 && (
              <h3 className=" text-blue3 mb-2 text-[20px] leading-[27px] font-medium">
                Highlights
              </h3>
            )}
            <ul className=" list-outside list-disc pl-6  text-blue3 text-[15px] leading-[24px] ">
              {productHighlights.length > 0 &&
                productHighlights?.map(({ highlights }, index) => (
                  <li key={index}>{highlights}</li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-blue3 mb-2 text-[20px] leading-[27px] font-medium">
              Product Information
            </h3>
            <div>
              {sku && (
                <p className="text-[15px] leading-[24px] uppercase">
                  SKU # {sku}
                </p>
              )}
              {upcCode && (
                <p className="text-[15px] leading-[24px] uppercase">
                  UPC # {upcCode}
                </p>
              )}
            </div>
          </div>
        </div>
        {productManualGuides && productManualGuides.length > 0 && (
          <div className="flex-1 bg-gray17 rounded-[12px] p-6 max-w-[417px] 900:max-w-full 900:w-full">
            <h3 className=" text-blue3 mb-2 text-[20px] leading-[27px] font-medium">
              Additional Resources
            </h3>
            {/* <p className="  text-[15px] leading-[20px] mb-2">Shop All Bosch</p> */}
            <h4 className=" text-blue3 mb-2 text-[16px] leading-[21px] font-medium">
              From the Manufacturer
            </h4>
            <ul className=" text-[15px] leading-[20px] list-disc list-inside">
              {productManualGuides &&
                productManualGuides.length > 0 &&
                productManualGuides?.map((manual, index) => {
                  return (
                    <Link href={manual?.fileURL} target="_blank" key={index}>
                      <li className="underline cursor-pointer">
                        {manual?.fileName}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
