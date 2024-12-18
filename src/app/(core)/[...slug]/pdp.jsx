"use client";
import CallIcon from "@/assets/images/call-icon.svg";
import DummyCardImg from "@/assets/images/dummy-card-img.png";
import NoImage from "@/assets/images/no-image.webp";
import {
  BestSellerBadge,
  MotherDayBadge,
  SaleBadge,
} from "@/components/Badges/Badges";
import SynchronyPayment from "@/components/SynchronyPayment";
import WillItFitModal from "@/components/DimensionStepper";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import AddToCart from "@/components/ProductDetail/AddToCart/AddToCart";
import BuyPackage from "@/components/ProductDetail/BuyPackage";
import Comparison from "@/components/ProductDetail/Comparison";
import CustomersViewed from "@/components/ProductDetail/CustomersViewed";
import FrequentlyBoughtTogether from "@/components/ProductDetail/FrequentlyBoughtTogether";
import LowestPriceGuarantee from "@/components/ProductDetail/LowestPriceGuarantee/LowestPriceGurantee";
import OpenBox from "@/components/ProductDetail/OpenBox/OpenBox";
import ProductImageSlider from "@/components/ProductDetail/ProductSlider";
import { Tabs } from "@/components/ProductDetail/Tabs";
import RebateSheet from "@/components/RebateSheet/RebateSheet";
import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import ZipCodeHandler from "@/components/ZipcodeHandler/ZipcodeHandler";
import ChatIcon from "@/icons/ChatIcon";
import EmailIcon from "@/icons/EmailIcon";
import ColorChoseIcon from "@/icons/PaintIcon";
import QuestionIcon from "@/icons/QuestionMarkIcon";
import TruckIcon from "@/icons/TruckIcon";
import AffirmScriptLoader from "@/providers/AffirmScriptLoader";
import { useGetProductByIdQuery } from "@/redux/apiSlices/categoriesApi";
import { useGetViewedProductsQuery } from "@/redux/apiSlices/ProductListsApi";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import HelpUs from "@/components/HelpUs";

const ProductDetailPage = ({ slug }) => {
  const showCategory = useSelector((state) => state.showCategory?.showCategory);
  const showAddToCart = useSelector(
    (state) => state.showAddToCart?.showAddToCart
  );
  const [synchronyFlag, setSynchronyFlag] = useState(false);
  const [deliveryPayload, setDeliveryPayload] = useState({ isPickup: true });

  const { data } = useGetProductByIdQuery({
    seoUrl: slug,
  });
  const {
    id: productId,
    productName,
    productImages = [],
    category,
    subCategory,
    subCategory2,
    productHighlights,
    webPriceInactive,
    productOverview,
    productSpecification,
    orderedSpecifications,
    frequentlyBoughtTogether,
    specificationImage,
    productManualGuide,
    price_details,
    isWifiEnabled,
    isOpenbox,
    openboxPrice,
    specificationPdf,
    categoryId,
    colorDetails,
    bundleId,
    upcCode,
    floorMatrix,
    productDescription,
    sku,
    brand,
    pdpSeoUrl,
    isInstallationService,
    isWarranty,
    rebates = [],
    // Flags
    customPromotion,
    saleOnWebsite,
    bestSeller,
  } = data?.data || {};

  const {
    displayPrice,
    savingAmount,
    savingPercentage,
    crossedPrice,
    cartPrice,
  } = price_details || {};

  const productSKU = sku || "";

  const powerReviewsPayloads = {
    productName,
    productDescription,
    pdpSeoUrl,
    image: productImages[0]?.awsImage,
    sku,
    brand: brand?.brandName,
    displayPrice,
    category,
    upcCode,
  };

  const { categoryName, slug: categorySlug } = category || {};
  const { categoryName: subCategoryName, slug: subCategorySlug } =
    subCategory || {};
  const { subCategory2Name, slug: subCategory2Slug } = subCategory2 || {};

  const links = [
    { name: categoryName, slug: categorySlug },
    { name: subCategoryName, slug: `${categorySlug}/${subCategorySlug}` },
    {
      name: subCategory2Name,
      slug: `${categorySlug}/${subCategorySlug}/${subCategory2Slug}`,
    },
  ];

  // Memoize the formattedLinks array to prevent recalculation on every render
  const formattedLinks = useMemo(
    () =>
      links
        .filter((link) => link?.name) // Filter out null or undefined names
        .map(({ name, slug }) => ({
          // href: link.name.toLowerCase().replace(/\s+/g, "-"),
          href: slug,
          label: name,
        })),
    [categoryName, subCategoryName, subCategory2Name] // Dependencies
  );

  const onButtonSynchronyClick = () => {
    setSynchronyFlag(true);
  };

  return (
    <div className="bg-gray9">
      <div className=" bg-white">
        <DynamicBreadcrumb sku={productSKU} formattedLinks={formattedLinks} />
        <div className="max-w-[1440px] my-0 mx-auto w-full px-5 lg:bg-mobileBG lg:px-4 ">
          <div className=" flex gap-[65px] mxl:gap-[40px] lg:flex-col lg:gap-[14px]">
            <div className="  flex-1 max-w-[792px] 1300:max-w-[600px] 1070:max-w-[500px] lg:max-w-full">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild data-side="bottom">
                    <h2 className=" pt-1 lg:text-[19px] lg:leading-[25px] mb-2 text-2xl two-line-dots leading-9 text-black2 z-[1] font-semibold max-w-[668px]">
                      {productName}
                    </h2>
                  </TooltipTrigger>
                  <TooltipContent
                    data-side="bottom"
                    className="max-w-[300px] bg-grayBg"
                  >
                    <p> {productName}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div id="pr-reviewsnippet" className="min-h-8" />
              <div className="pt-2 flex gap-4">
                {customPromotion && <MotherDayBadge />}
                {bestSeller && <BestSellerBadge />}
                {saleOnWebsite && <SaleBadge />}
              </div>
              <ProductImageSlider
                isWifiEnabled={isWifiEnabled}
                images={productImages}
              />
            </div>
            <div className="flex-1 max-w-[525px] lg:max-w-full">
              {!webPriceInactive && (
                <div className="flex mb-4 pb-3 pt-2 items-start gap-3  z-[1] bg-white lg:pt-[17px] lg:px-[17px] lg:rounded-t-[12px] lg:mb-0 ">
                  <div>
                    <h3 className=" text-[37px] font-semibold text-black2  leading-[44px] lg:text-[32px]">
                      {formatCurrency(displayPrice)}
                    </h3>
                    {cartPrice && (
                      <p className=" text-gray2 text-[11px] font-medium  leading-[16px] mr-1">
                        *See final price in cart
                      </p>
                    )}
                  </div>
                  <div className="pt-[3px]">
                    <h5 className=" text-red2  text-[14px] leading-[20px]">
                      {savingAmount} {savingPercentage}
                    </h5>
                    <p className="text-[14px] line-through leading-[20px] font-medium">
                      {crossedPrice}
                    </p>
                  </div>
                </div>
              )}
              <div className=" lg:bg-white lg:rounded-b-[12px] lg:px-[17px] lg:pb-[17px] ">
                <div className=" mb-6 border-b border-gray12 lg:border-0 lg:mb-3">
                  <div className=" flex text-gray11 text-xs max-w-[425px] mb-5 lg:flex-col ">
                    <div className="flex gap-2 pr-4 lg:pr-0 lg:mb-1 border-r border-[#EAEAEA] mr-4">
                      <DynamicImage
                        src={DummyCardImg}
                        className=" w-11 h-7"
                        alt="card-image"
                        disableIsBlur
                      />
                      <div className="leading-[18px] font-medium text-gray11">
                        <p>
                          $179/mo suggested payments with 18-month special
                          financing.
                        </p>

                        <p
                          className=" text-blue3"
                          onClick={onButtonSynchronyClick}
                        >
                          <a className="text-blue5 underline  cursor-pointer">
                            Learn now
                          </a>
                        </p>
                      </div>
                    </div>
                    {synchronyFlag && <SynchronyPayment pageType="" />}
                    {displayPrice && (
                      <AffirmScriptLoader displayPrice={displayPrice} />
                    )}
                  </div>
                </div>
                <div className="flex mb-5 lg:mb-0 flex-wrap lg:gap-2 lg:items-center">
                  {rebates.length > 0 && (
                    <Sheet>
                      <SheetTrigger asChild>
                        <div className="inline-flex bg-orange1 py-[5px] px-2 text-white font-medium text-[12px] leading-[14px] rounded-[5px] cursor-pointer">
                          See Available Rebates
                        </div>
                      </SheetTrigger>
                      <DialogTitle></DialogTitle>
                      <SheetContent className=" max-w-[500px] p-0 rounded-20">
                        <RebateSheet rebates={rebates} />
                      </SheetContent>
                    </Sheet>
                  )}
                  <LowestPriceGuarantee />
                </div>
                {isOpenbox && (
                  <OpenBox
                    productId={productId}
                    isOpenBox={isOpenbox}
                    openBoxPrice={openboxPrice}
                    productImage={productImages[0]}
                  />
                )}
              </div>
              <div className="pt-[10px]  pb-4 lg:mt-[17px] lg:pt-[17px] lg:rounded-[12px] lg:bg-white lg:px-[16px]">
                {colorDetails && colorDetails.length > 0 && (
                  <div className="pt-3 border-b boder-gray13 lg:border-0">
                    <p className="flex gap-[14px] items-center text-sm font-medium mb-3">
                      <ColorChoseIcon />
                      Color Options 
                    </p>
                    <div className=" pl-[35px] flex flex-wrap gap-x-4 gap-y-3 pb-6 lg:pl-0">
                      {colorDetails &&
                        colorDetails.length > 0 &&
                        colorDetails?.map((colorData, index) => {
                          const { id, pdpSeoUrl, thumbnail, color } = colorData;
                          return (
                            <TooltipProvider key={id}>
                              <Tooltip>
                                <TooltipTrigger asChild data-side="bottom">
                                  <Link
                                    href={pdpSeoUrl}
                                    className="hover:border-red3 border rounded-[5px] bg-gray13 cursor-pointer "
                                  >
                                    <DynamicImage
                                      className="rounded-[5px]"
                                      width={60}
                                      height={60}
                                      src={thumbnail}
                                      alt={color}
                                      key={index}
                                    />
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="bottom"
                                  className=" bg-grayBg"
                                >
                                  <h2 className=" lg:text-[19px]  text-sm  leading-6 text-black2 z-[1] font-medium">
                                    {color}
                                  </h2>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          );
                        })}
                    </div>
                  </div>
                )}
                <div className="pt-[10px] border-y border-gray13 pb-4 lg:border-none lg:pt-0">
                  <WillItFitModal
                    specifications={
                      orderedSpecifications || productSpecification
                    }
                  />
                </div>
                <div className=" lg:pt-0 flex gap-[14px] pt-[22px] pb-2 border-b border-gray12">
                  <TruckIcon
                    fill="#1C1B1F"
                    width="20px"
                    height="20px"
                    className="lg:hidden"
                  />
                  <div className="flex gap-4 flex-1  items-start flex-wrap lg:gap-[14px] lg:grid lg:grid-cols-189">
                    <ZipCodeHandler
                      onDeliveryTypeChange={(payload) =>
                        setDeliveryPayload(payload)
                      }
                      productId={productId}
                      productImages={productImages || NoImage}
                      productName={productName}
                      productSKU={productSKU}
                      seeInStore={floorMatrix}
                    />
                  </div>
                </div>

                <div className="border-b border-gray12 pt-[17px] pb-[22px] lg:hidden">
                  <AddToCart
                    productId={productId}
                    productData={data?.data || {}}
                    deliveryPayload={deliveryPayload}
                    isInstallationService={isInstallationService}
                    isWarranty={isWarranty}
                  />
                </div>
                <div className=" flex pt-5 pb-8 gap-[15px] lg:pb-[2px] items-center">
                  <QuestionIcon className="mt-[5px] lg:hidden" />
                  <div className=" flex-1 flex py-[9px] lg:bg-[#F2F2F2] lg:py-3 lg:px-[19px] lg:items-start  px-[14px] border border-gray-14 rounded-10 gap-y-1 gap-x-8 items-center lg:flex-col lg:gap-0 justify-center">
                    <div className="flex gap-8 items-center lg:gap-3 justify-center">
                      <p className=" text-[17px] leading-[18px] font-thin">
                        Ask our Experts
                      </p>
                    </div>
                    <div className="flex gap-7 pl-8 border-l border-black py-3 lg:border-0 lg:gap-[12px] lg:pl-[47px]">
                      {/* <CallIcon /> */}
                      <div className="lg:w-[43px] lg:h-[43px] lg:bg-white lg:rounded-full lg:inline-flex lg:items-center lg:justify-center">
                        <HelpUs title={<Image src={CallIcon} alt="icon" />} />
                      </div>
                      <div className="lg:w-[43px] lg:h-[43px] lg:bg-white lg:rounded-full lg:inline-flex lg:items-center lg:justify-center">
                        <ChatIcon fill="#1C1B1F" width="19px" height="20px" />
                      </div>
                      <div className="lg:w-[43px] lg:h-[43px] lg:bg-white lg:rounded-full lg:inline-flex lg:items-center lg:justify-center">
                        <HelpUs title={<EmailIcon />} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] px-5 my-0 mx-auto lg:bg-mobileBG ">
        <div className="pt-6">
          <Tabs
            productOverview={productOverview}
            productHighlights={productHighlights}
            productDescription={productDescription}
            productSpecifications={productSpecification}
            orderedSpecifications={orderedSpecifications}
            specificationImage={specificationImage}
            productImages={productImages}
            productManualGuides={productManualGuide}
            specificationPdfUrl={specificationPdf}
            sku={productSKU}
            upcCode={upcCode}
            powerReviewsPayloads={powerReviewsPayloads}
            rebates={rebates}
          />
        </div>
        {frequentlyBoughtTogether?.length > 0 && (
          <FrequentlyBoughtTogether
            frequentlyBoughtTogether={frequentlyBoughtTogether}
            currentProductImages={productImages}
          />
        )}
        {/* <CompleteYourKitchenWith /> */}
        <BuyPackage bundleId={bundleId} />
        {productId && <Comparison id={productId} />}

        {categoryId && <ViewsProductsWrapper categoryId={categoryId} />}
      </div>
      {showAddToCart && (
        <div
          style={{
            boxShadow: "0 10px 15px -3px #0000001a,0 4px 6px -4px #0000001a",
          }}
          className={` pdp-price fixed top-0 z-[11] right-0 left-0 lg:bottom-0 lg:top-auto  bg-white ${
            showCategory ? "up" : "down"
          }`}
        >
          <div className="py-2 flex justify-between max-w-[1400px]   my-0 mx-auto w-full px-5 lg:py-6 ">
            <div>
              <h2 className=" lg:hidden pt-5 pb-2 text-[20px] leading-[24px] two-line-dots  text-black2 z-[1] font-semibold max-w-[668px] ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild data-side="bottom">
                      <h2 className=" pt-1 lg:text-[19px] lg:leading-[25px] mb-2 text-2xl two-line-dots leading-9 text-black2 z-[1] font-semibold max-w-[668px]">
                        {productName}
                      </h2>
                    </TooltipTrigger>
                    <TooltipContent
                      data-side="bottom"
                      className="max-w-[300px] bg-grayBg"
                    >
                      <p> {productName}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>{" "}
              </h2>
              {/* <div className=" mb-[10px] lg:hidden">
                <Ratings rating={4} />
              </div> */}
            </div>
            <div className="lg:w-full">
              {!webPriceInactive && (
                <div className="flex items-start gap-3  lg:hidden z-[1]">
                  <div>
                    <h3 className=" text-[30px] font-semibold text-black2  leading-[36px]">
                      {formatCurrency(displayPrice)}
                    </h3>
                    {cartPrice && (
                      <p className=" text-gray2 text-[11px] font-medium  leading-[16px] mr-1">
                        *See final price in cart
                      </p>
                    )}
                  </div>
                  <div className="pt-[3px]">
                    <h5 className=" text-red2  text-[14px] leading-[20px]">
                      {savingAmount} {savingPercentage}
                    </h5>
                    <p className="text-[14px] line-through leading-[20px] font-medium">
                      {crossedPrice}
                    </p>
                  </div>
                </div>
              )}
              <div className="border-b border-gray12 pt-[6px] lg:p-0 ">
                <AddToCart
                  productId={productId}
                  productData={data?.data || {}}
                  deliveryPayload={deliveryPayload}
                  isInstallationService={isInstallationService}
                  isWarranty={isWarranty}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;

export const ViewsProductsWrapper = ({ categoryId = "" }) => {
  const { data } = useGetViewedProductsQuery(categoryId);
  const { customerViewed = [], recentlyViewed = [] } = data || {};
  return (
    <>
      {customerViewed.length > 0 && (
        <CustomersViewed
          heading="Customers Also Viewed"
          products={customerViewed}
        />
      )}
      {recentlyViewed.length > 0 && (
        <CustomersViewed heading="Recently Viewed" products={recentlyViewed} />
      )}
    </>
  );
};
