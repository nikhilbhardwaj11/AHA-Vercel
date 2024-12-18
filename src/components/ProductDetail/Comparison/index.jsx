import NoImage from "@/assets/images/no-image.webp";
import { DefaultPriceUi } from "@/components/pricesUi/PricesUi";
import { Button } from "@/components/ui/button";
import { useGetCompareProductsQuery } from "@/redux/apiSlices/ProductListsApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { StockBadge } from "@/components/Badges/Badges";
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
    <Link className="px-[10px]" href={pdpUrl}>
      <div className=" w-full mb-5  justify-center relative items-start inline-flex py-[26px] px-[44px]  border border-gray13 rounded-[5px] bg-gray13 cursor-pointer lg:px-7 ">
        <Image
          className="w-auto max-h-[250px] object-contain mxl:max-h-[170px] "
          src={productThumbnail || NoImage}
          height={250}
          width={250}
          alt="icon"
        />
        {/* <button className=" absolute right-[10px] top-[10px] bg-white-trans1 inline-flex items-center justify-center h-[50px] w-[50px] rounded-full border border-gray7 ">
          <BookmarkIcon width="16px" height="24px" />
        </button> */}
      </div>
      {price_details && <DefaultPriceUi price_details={price_details} />}
      <h3 className="min-h-[100px] overflow-hidden four-line-dots  lg:text-[14px] text-[16px] leading-[24px] text-black font-semibold mxl:text-[16px] mxl:leading-[24px]  hover:underline">
        {productName}
      </h3>
      <div
        id={`category-snippet-${id}${index}`}
        className="product-rating flex"
      />
      <h4 className=" text-gray2 text-[14px] py-2 leading-[16px] font-medium pt-3 flex flex-wrap gap-y-1 gap-x-1">
        Model: {sku} |{" "}
        <StockBadge
          isInStock={isInStock}
          className="text-[14px] leading-[16px] m-0"
        />
      </h4>
    </Link>
  );
};

const FirstCol = ({ children }) => {
  return (
    <div className=" inline-flex items-center justify-end bg-gray18 text-[16px] leading-[25px] font-bold text-gray11 text-right px-7 py-4 mxl:text-[14px] mxl:leading-[22px] mxl:px-[12px] mxl:py-[10px] lg:text-[13px]">
      <p>
        <>{children}</>
      </p>
    </div>
  );
};

const OtherCol = ({ children }) => {
  return (
    <div className=" inline-flex items-center justify-center  font-medium text-[16px] leading-[20px] text-gray11 text-center px-3 py-4 mxl:text-[14px] mxl:leading-[22px] mxl:px-[12px] mxl:py-[10px] lg:text-[13px]">
      <p>
        {" "}
        <>{children}</>
      </p>
    </div>
  );
};

const Comparison = ({ id }) => {
  const router = useRouter();
  const { data, isFetching } = useGetCompareProductsQuery({
    id,
    type: "pdp",
  });
  const { headers = [], rows = [], topSpecs = [] } = data?.data || {};
  // const combineSku = headers.map((item) => item?.sku);
  const customRows = [
    {
      specs: [...topSpecs],
    },
  ];

  const onDetailBtnClick = () => {
    const path = headers.map((item) => item?.id).join(",");
    router.push(`/product-comparison?id=${path}`);
  };
  useRenderProductRatings(headers);
  return (
    <div className="  my-0 mx-auto py-6 lg:pb-0 overflow-auto">
      <div className="grid bg-white  rounded-10 py-[34px] px-[18px] lg:min-w-[800px] lg:pb-[20px]">
        <div className=" mb-[18px] grid  grid-cols-20% ">
          <div></div>
          {headers?.map((productDetails, index) => (
            <ImageCard
              key={productDetails?.id}
              {...productDetails}
              index={index}
            />
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

        <div className="grid  grid-cols-20%  mt-11 lg:mt-5 lg:flex">
          <div className="col-start-2 col-end-6 flex justify-center">
            <Button
              variant="outline"
              className=" border-blue2 rounded-[8px] h-[50px] min-w-[282px] lg:h-[40px] lg:min-w-[200px] "
              onClick={onDetailBtnClick}
            >
              See Detail Comparison
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
