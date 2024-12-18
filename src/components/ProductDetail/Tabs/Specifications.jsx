import DynamicImage from "@/components/DynamicImages/DynamicImage";
import { Button } from "@/components/ui/button";
import DownArrowIcon from "@/icons/DownArrowIcon";
import FileDownloadIcon from "@/icons/FileDownload";
import Link from "next/link";
import { useState } from "react";

export default function Specifications({
  productSpecifications = [],
  orderedSpecifications = [],
  specificationImage,
  productImages,
  specificationPdfUrl,
}) {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <div className="py-10 px-9 lg:p-5 lg:pb-0">
      <div className=" pt-3 flex gap-7 lg:justify-center lg:flex-wrap lg:gap-[18px] lg:p-0 ">
        <div className="  min-w-[316px] pr-[10px] pl-[50px] lg:p-2 lg:min-w-[auto]  ">
          <DynamicImage
            src={specificationImage || productImages[0]?.imageurl || ""}
            className=" h-[374px] w-400px my-0 mx-auto lg:h-[207px] lg:w-auto object-contain "
            width={400}
            height={374}
            alt="product-image"
          />
        </div>
        <div className="grid w-full">
          <div className="grid grid-cols-spec-col gap-x-3 items-center lg:grid-cols-1">
            {orderedSpecifications.length > 0 &&
              orderedSpecifications?.map((specs, index) => {
                return (
                  <div className="p-[10px] lg:py-[8px] lg:px-0" key={index}>
                    <h3 className=" text-[18px] leading-[27px] text-blue3 font-bold lg:text-[15px] lg:leading-[22px] lg:font-medium">
                      {specs?.key}
                    </h3>
                    <p className=" text-gray11 text-[21px] leading-[31px] lg:text-[15px] lg:leading-[22px]">
                      {specs?.value}
                    </p>
                  </div>
                );
              })}
          </div>
          {specificationPdfUrl && specificationPdfUrl !== undefined && (
            <div className="flex items-center justify-center lg:justify-center pr-[12rem] lg:pr-0">
              <Link
                href={specificationPdfUrl}
                target="_blank"
                className="flex justify-center items-end "
              >
                <Button className=" hover:bg-inherit inline-flex gap-2 border border-blue1 text-blue3 text-[14px] h-10 rounded-[8px] bg-transparent lg:h-[42px]">
                  <FileDownloadIcon /> Download Specification Sheet
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="mt-[30px] lg:mt-[18px]">
       <div className="mt-[10px]">
        {isShowMore &&
          productSpecifications.length > 0 &&
          productSpecifications?.map(({ category, details }, index) => {
            return (
              <div key={index} className="mb-[10px] lg:mb-1">
                <h3 className="pl-4 text-blue3 font-bold text-[17px] leading-[25px] mb-2">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-x-10 lg:gap-x-5 900:grid-cols-1">
                  {details.length > 0 &&
                    details.map((detail, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-2 text-blue3 text-[17px] leading-[22px] border border-gray16 border-b-0"
                      >
                        <p className=" bg-gray17 py-[9px] font-medium pl-4 border-b border-gray16 lg:text-[14px]">
                          {detail.key} {detail.unit}
                        </p>
                        <p className=" pl-[34px] py-[9px] border-b border-gray16 lg:text-[14px]">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-end mt-9 lg:mt-0">
          {!isShowMore && productSpecifications.length > 0 && (
            <Button
              className=" hover:bg-inherit px-7 inline-flex gap-2 border border-blue1 text-blue3 text-[18px] h-[50px] rounded-[10px] bg-transparent lg:h-[42px] lg:text-[14px] lg:w-[268px] lg:rounded-[8px]"
              onClick={() => setIsShowMore(true)}
            >
              Show Full Specifications <DownArrowIcon />
            </Button>
          )}
          {isShowMore && productSpecifications.length > 0 && (
            <Button
              className=" hover:bg-inherit px-7 inline-flex gap-2 border border-blue1 text-blue3 text-[18px] h-[50px] rounded-[10px] bg-transparent lg:h-[42px] lg:text-[14px] lg:w-[268px] lg:rounded-[8px]"
              onClick={() => setIsShowMore(false)}
            >
              Show Less Specifications <DownArrowIcon className="rotate-180" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
