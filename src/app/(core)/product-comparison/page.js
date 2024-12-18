"use client";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import BookmarkIcon from "@/icons/BookmarkIcon";
import LeftArrow from "@/icons/LeftArrowIcon";
import { useGetCompareProductsQuery } from "@/redux/apiSlices/ProductListsApi";
import { useQueryParams } from "@/utils/useQueryParams";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NoImage from "@/assets/images/no-image.webp";
import { DefaultPriceUi } from "@/components/pricesUi/PricesUi";
import { StockBadge } from "@/components/Badges/Badges";
import UpArrowIcon from "@/icons/UpArrow";
import DownArrowIcon from "@/icons/DownArrow";
import useRenderProductRatings from "@/hooks/useRenderProductRating";

const ImageCard = ({
  productName,
  productThumbnail,
  pdpUrl,
  price_details,
  sku,
  isInStock,
  id,
  index,
}) => {
  return (
    <Link className=" px-[15px]" href={pdpUrl}>
      <div className=" w-full group mb-5 justify-center relative items-start inline-flex py-[26px] px-[44px]  border border-gray13 rounded-[5px] bg-gray13 cursor-pointer lg:px-7 lg:py-5 ">
        <Image
          className="w-auto  object-contain max-h-[200px] "
          src={productThumbnail || NoImage || ""}
          height={200}
          width={200}
          alt="icon"
        />
        {/* <button className=" absolute right-[3px] top-[3px] bg-white-trans1 inline-flex items-center justify-center h-[35px] w-[35px] rounded-full border border-gray7 ">
          <BookmarkIcon width="10px" height="15px" />
        </button> */}
        {/* <p
          style={{ left: "calc(50% - 90px)" }}
          className=" h-[40px] items-center justify-center absolute top-[50%] px-[50px] hidden group-hover:inline-flex py-1 rounded-[8px] text-[16px] border border-black bg-quickView "
        >
          Quickview
        </p> */}
      </div>
      {price_details && <DefaultPriceUi price_details={price_details} />}
      <h3 className="min-h-[100px] overflow-hidden four-line-dots  lg:text-[14px] text-[16px] leading-[24px] text-black font-semibold mxl:text-[16px] mxl:leading-[24px]  hover:underline">
        {productName}
      </h3>
      <div
        id={`category-snippet-${id}${index}`}
        className="product-rating flex"
      />
      <h4 className=" text-gray2 text-[14px] ]py-2 leading-[16px] font-medium pt-3 flex flex-wrap gap-y-1 gap-x-1">
        Model: {sku} |{" "}
        <StockBadge
          isInStock={isInStock}
          className="text-[14px] leading-[16px] m-0"
        />
      </h4>
    </Link>
  );
};

const ImageCardFloat = ({ productThumbnail, pdpUrl }) => {
  const router = useRouter();
  return (
    <div className=" py-[15px] " onClick={() => router.push(`/${pdpUrl}`)}>
      <div className=" w-full  justify-center relative items-start group inline-flex py-[15px] px-[20px]  border border-gray13 rounded-[5px] bg-white cursor-pointer">
        <Image
          className="w-auto  object-contain max-h-[70px] "
          src={productThumbnail || NoImage || ""}
          height={200}
          width={200}
          alt="icon"
        />
        {/* <p
          style={{ left: "calc(50% - 90px)" }}
          className=" h-[40px] items-center justify-center absolute top-[50%] px-[50px] hidden group-hover:inline-flex py-1 rounded-[8px] text-[16px] border border-black bg-quickView "
        >
          Quickview
        </p> */}
      </div>
    </div>
  );
};
const FirstCol = ({ children }) => {
  return (
    <div className="border-b border-[#C4C4C4] px-[15px] inline-flex items-center justify-start bg-[#D9D9D9] text-[14px] leading-[25px] font-medium text-blue1 py-4 mxl:text-[14px] mxl:leading-[22px] mxl:px-[12px] mxl:py-[10px] lg:text-[13px]">
      <p>{children}</p>
    </div>
  );
};
const OtherCol = ({ children }) => {
  return (
    <div className="border-b border-gray18  px-[15px] pl-6  inline-flex items-center justify-start  font-medium text-[14px] leading-[20px] text-blue1  py-4 mxl:text-[14px] mxl:leading-[22px] mxl:px-[12px] mxl:py-[10px] lg:text-[13px]">
      <p>
        <>{children}</>
      </p>
    </div>
  );
};

const ProductComparison = () => {
  const [isActive, setIsActive] = useState(true);
  const router = useRouter();
  const { id } = useQueryParams();
  const { data, isFetching } = useGetCompareProductsQuery({
    id,
    type: "compare",
  });

  const { headers = [], rows = [], topSpecs = [] } = data?.data || {};
  // const combineSku = headers.map((item) => item?.sku);
  const customRows = [
    {
      title: "Key Specs",
      specs: [...topSpecs],
    },
    ...rows,
  ];
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 400; // Adjust this value to your desired scroll threshold

      if (scrollPosition > scrollThreshold) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
      setLastScrollY(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useRenderProductRatings(headers);

  return (
    <div className="max-w-[1794px] mx-auto my-0 px-5 relative">
      {isFetching && <Loader />}
      <div className="grid grid-cols-3 py-4">
        <div>
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-3  text-[18px] leading-[24px]"
          >
            <LeftArrow height="16px" width="8px" />
            Back to Products
          </button>
        </div>
        <h3 className="text-center text-blue1 font-medium text-[25px] leading-[24px] lg:text-[20px] lg:leading-[22px]">
          Product Comparison
        </h3>
      </div>
      <div className="bg-gray9 p-12 rounded-t-10 pb-[10px] lg:overflow-auto lg:p-5">
        <div className="pt-[38px] bg-white rounded-t-10 min-w-[1200px]">
          <div className=" mb-[18px] grid grid-cols-20% ">
            <div />
            {headers.map((productDetails, index) => (
              <ImageCard key={index} {...productDetails} index={index} />
            ))}
          </div>

          {!isFetching &&
            customRows.length > 0 &&
            customRows.map(({ title, specs }, rowIndex) => (
              <>
                {title && <p className="p-4 text-3xl">{title}</p>}
                {specs?.map(({ key, values }, specIndex) => (
                  <div
                    key={`${rowIndex}-${specIndex}`}
                    className=" grid  grid-cols-20%  "
                  >
                    <FirstCol>{key}</FirstCol>
                    {values?.map((value, valueIndex) => (
                      <OtherCol key={valueIndex}>{value}</OtherCol>
                    ))}
                  </div>
                ))}
              </>
            ))}
        </div>
      </div>
      {showDiv && (
        <div
          className={`${
            isActive ? "bottom-0" : "bottom-[-106px]"
          } lg:hidden rounded-b-10 overflow-hidden sticky right-0 left-0 max-w-[1794px] mx-auto my-0`}
        >
          <div className="flex justify-end">
            <button
              className="p-4 rounded-full bg-[white] shadow-brandCard "
              onClick={handleClick}
            >
              {" "}
              {isActive ? <DownArrowIcon /> : <UpArrowIcon />}
            </button>
          </div>
          <div className=" px-12  grid grid-cols-20% bg-gray9 gap-2  ">
            <div className="flex items-center justify-center text-[22px] text-center font-medium ">
              <h4 className=" lg:hidden inline-flex">
                Product <br></br> Comparison
              </h4>
            </div>
            {headers.map((productDetails, index) => (
              <ImageCardFloat key={index} {...productDetails} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductComparison;
