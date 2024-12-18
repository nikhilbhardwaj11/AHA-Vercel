import NoImage from "@/assets/images/no-image.webp";
import OvenIcon from "@/assets/images/oven-gen.svg";
import { Ratings } from "@/components/Ratings/Ratings";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";
import Link from "next/link";
import {
  BestSellerBadge,
  BookmarkBadge,
  ColorBadge,
  DeliveryBadge,
  MotherDayBadge,
  RebatesBadge,
  SaleBadge,
  SmartAppliancesBadge,
  StockBadge,
} from "../Badges/Badges";
import DynamicImage from "../DynamicImages/DynamicImage";
import { DefaultPriceUi } from "../pricesUi/PricesUi";
import AddToCart from "../ProductDetail/AddToCart/AddToCart";
import { Button } from "../ui/button";
import RenderSpecification from "./Specification";

const MAX_COMPARE_LIMIT = 4;

const ProductCard = ({
  productDetail = {},
  type = "full",
  className = "",
  isPackages,
  handleOnCompareChange = () => {},
  compareProducts = [],
  index,
}) => {
  const {
    id,
    isInStock,
    productName,
    sku,
    brand,
    productImages,
    productSpecification,
    orderedSpecifications,
    price_details,
    customPromotion,
    saleOnWebsite,
    bestSeller,
    webPriceInactive,
    isWifiEnabled,
    numberOfColors,
    isRebateAvailable,
    //BUNDLE DATA//
    thumbnail,
    bundleProductList,
    pdpSeoUrl,
    isInstallationService,
    isWarranty,
  } = productDetail;

  const totalCapacity =
    productSpecification?.find((specs) => specs.key.includes("Total Capacity"))
      ?.value || "";

  const compareProductsCount = compareProducts.length || 0;
  const isChecked = compareProducts.some((product) => product.id === id);
  const isDisabled = compareProductsCount >= MAX_COMPARE_LIMIT && !isChecked;

  return (
    <div
      className={cn(
        "px-[18px] pt-9 pb-3 border-2 border-gray5 rounded-[16px] transition-all	delay-80  bg-white hover:shadow-15.9",
        className
      )}
    >
      <Link
        href={
          isPackages
            ? {
                pathname: `/packages/${productDetail?.id}`,
              }
            : `/${pdpSeoUrl}`
        }
      >
        <div className="relative mb-6">
          <div className="flex items-start flex-col gap-[2px] absolute z-[1] lg:top-[-15px] top-[-20px]">
            {customPromotion && <MotherDayBadge />}
            {bestSeller && <BestSellerBadge />}
          </div>
          <div className="grid gap-[14px] absolute right-0 top-[-12px] z-[1]">
            {/* <BookmarkBadge /> */}
            {isWifiEnabled && <SmartAppliancesBadge />}
          </div>
          <div className=" px-3 relative group">
            {isPackages ? (
              <PackageThumbnailImage bundleProductList={bundleProductList} />
            ) : (
              <DynamicImage
                className=" xl:h-[210px] lg:h-[188px] h-[238px] w-auto  m-auto my-0 object-contain"
                src={getThumbnailUrl(productImages) || thumbnail || NoImage.src}
                width={300}
                height={238}
                alt={productName}
              />
            )}
            {/* <p
              style={{ left: "calc(50% - 90px)" }}
              className=" h-[40px] items-center justify-center absolute top-[50%] px-[50px] hidden group-hover:inline-flex py-1 rounded-[8px] text-[16px] border border-black bg-quickView "
            >
              Quickview
            </p> */}
          </div>
          <div className=" flex justify-between items-center absolute w-full bottom-0">
            {saleOnWebsite && <SaleBadge />}
            <div className="ml-auto">
              {numberOfColors > 0 && (
                <ColorBadge>+{numberOfColors} Colors</ColorBadge>
              )}
            </div>
          </div>
        </div>
        <div>
          {!webPriceInactive && (
            <DefaultPriceUi price_details={price_details} />
          )}
          {!isPackages && (
            <div>
              <div className="flex justify-between gap-2 items-center  mb-1 flex-wrap">
                {/* <Ratings rating={4} /> */}
                <div
                  id={`category-snippet-${id}${index}`}
                  className="product-rating"
                />
                {isRebateAvailable && <RebatesBadge />}
              </div>
              <div className="flex justify-between gap-1 items-center border-gray4 border-b pb-3 pr-[7px] ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild data-side="bottom">
                      <h4 className="truncate text-gray2 text-[12px] leading-[12px] font-medium ">
                        Model: {sku}
                      </h4>
                    </TooltipTrigger>
                    <TooltipContent
                      data-side="bottom"
                      className="max-w-[200px] bg-grayBg"
                    >
                      {sku}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <StockBadge isInStock={isInStock} />
              </div>
              <div className="flex justify-between gap-2 items-center pt-[10px]">
                <h4 className=" text-[14px] truncate leading-[21px] font-bold">
                  {brand?.brandName}
                </h4>
                <p className=" whitespace-nowrap text-[14px] leading-[21px]">
                  {totalCapacity}
                </p>
              </div>
              <RenderProductName productName={productName} />
            </div>
          )}
          {type === "full" && (
            <>
              {isPackages ? (
                <BundleData
                  packageName={productName}
                  bundleProductList={bundleProductList}
                />
              ) : (
                <RenderSpecification
                  productSpecification={
                    orderedSpecifications && orderedSpecifications?.length > 0
                      ? orderedSpecifications
                      : productSpecification
                  }
                />
              )}
            </>
          )}
        </div>
      </Link>
      <div className="flex flex-col justify-end">
        <div>
          <DeliveryBadge />
          {isPackages && (
            <Link
              href={{
                pathname: `/packages/${productDetail?.id}`,
              }}
            >
              <Button
                variant={"outline"}
                className={cn(
                  "border-blue2 rounded-[8px] w-full h-[32px] text-[10px] mb-[14px]"
                )}
              >
                Shop Collection
              </Button>
            </Link>
          )}
        </div>
      </div>

      {!isPackages && type === "full" && (
        <>
          <AddToCart
            productId={productDetail?.id}
            productData={productDetail || {}}
            btnClassName="border-blue2 rounded-[8px] w-full h-[32px] text-[10px] mb-[14px]"
            btnVariant={"outline"}
            isInstallationService={isInstallationService}
            isWarranty={isWarranty}
          />
          <div className="flex justify-center items-center  space-x-2 ">
            <Checkbox
              id="terms"
              disabled={isDisabled}
              checked={isChecked}
              onCheckedChange={(checked) =>
                handleOnCompareChange(checked, productDetail)
              }
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-[30px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Compare
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;

const RenderProductName = ({ productName }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild data-side="bottom">
        <p className=" text-[14px] leading-[21px] pt-1 h-[67px] overflow-hidden two-line-dots">
          {productName}
        </p>
      </TooltipTrigger>
      <TooltipContent data-side="bottom" className="max-w-[200px] bg-grayBg">
        <p>{productName}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const PackageThumbnailImage = ({ bundleProductList }) => (
  <div className="p-0 relative group">
    <div className="grid grid-cols-2 lg:gap-0 bundle-group">
      {bundleProductList &&
        bundleProductList.length > 0 &&
        bundleProductList?.map((product, index) => (
          <div key={index}>
            <DynamicImage
              // className="h-[150px] w-[150px] object-contain"
              className=" xl:h-[210px] lg:h-[188px] h-[238px] w-auto  m-auto my-0 object-contain "
              src={product.thumbnail || NoImage.src}
              width={300}
              height={238}
              alt={product.productName}
            />
          </div>
        ))}
    </div>
  </div>
);

const BundleData = ({ packageName, bundleProductList }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild data-side="bottom">
        <p className=" text-[16px] py-[11px] border-y border-y-gray4 leading-[25px] h-[94px] overflow-hidden three-line-dots">
          {packageName}
        </p>
      </TooltipTrigger>
      <TooltipContent data-side="top" className="max-w-[200px] bg-grayBg">
        <p>{packageName}</p>
      </TooltipContent>
    </Tooltip>
    <ul className="h-[212px] p-[17px] border-b border-b-gray4">
      {bundleProductList &&
        bundleProductList.length > 0 &&
        bundleProductList?.slice(0, 4).map((product, index) => (
          <li key={index} className=" mb-[15px]">
            <div className="flex gap-[11px]">
              <DynamicImage src={OvenIcon} alt="Icon" />
              <p className=" text-blue6 font-medium text-[12px] leading-[16px] two-line-dots ">
                {product?.ProductName}
              </p>
            </div>
          </li>
        ))}
    </ul>
  </TooltipProvider>
);
