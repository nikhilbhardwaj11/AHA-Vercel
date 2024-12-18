"use client";
import Compare from "@/components/ComparePopup/Compare";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import Pagination from "@/components/GlobalPagination/pagination";
import ProductSkeleton from "@/components/Loader/ProductSkeleton";
import NoResultFound from "@/components/NoResultFound";
import ProductCard from "@/components/productCard/ProductCard";
import Sidebar from "@/components/ProductList/Sidebar";
import TopSlider from "@/components/ProductList/TopSlider/TopSlider";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import useRenderProductRatings from "@/hooks/useRenderProductRating";
import CloseIcon from "@/icons/CloseIcon";
import FilterIcon from "@/icons/FilterIcon";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import {
  default as EnterIcon,
  default as RightArrowIcon,
} from "@/icons/RightArrow";
import CrossIcon from "@/icons/XIcon";
import { capitalizeFirstLetter, formatDate } from "@/lib/utils";
import { useGetPackagesListQuery } from "@/redux/apiSlices/packagesApi";
import { useGetProductListsQuery } from "@/redux/apiSlices/ProductListsApi";
import {
  removeCompareProduct,
  setCompareProducts,
} from "@/redux/slices/productCompareSlice";
import { useQueryParams } from "@/utils/useQueryParams";
import Link from "next/link";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DummyImg from "@/assets/images/dummy-asko.png";
const ProductListingPage = ({ slug }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const dispatch = useDispatch();
  const compareProducts = useSelector((state) => state.compareProducts);

  const filterBy = slug.at(-1);

  const isPackages = slug?.[0] === "packages";
  const isAllProducts = slug?.[0] === "products";

  const {
    limit,
    page,
    brandIds,
    minPrice,
    maxPrice,
    onDisplay,
    isAvailabilty,
    inStore,
    fieldIds,
    fieldValueIds,
    filterSubCategoryId,
    keyword,
    sort,
    order,
    rebateIds,
    categoryIds,
    dimensions,
    setQueryParams,
  } = useQueryParams();

  const {
    data: productsData,
    isFetching: isProductFetching,
    isError: isProductNotFound,
  } = useGetProductListsQuery(
    {
      limit,
      page,
      slug: (!isAllProducts && filterBy) || "",
      brandIds,
      minPrice,
      maxPrice,
      onDisplay,
      isAvailabilty,
      inStore,
      fieldIds,
      fieldValueIds,
      filterSubCategoryId,
      keyword,
      sort,
      order,
      categoryIds,
      rebateIds,
      dimensions:
        (Object.values(dimensions).every((value) => value?.trim() !== "") &&
          Object.values(dimensions).join(",")) ||
        "",
    },
    { skip: isPackages }
  );

  const isInvalidPage = !productsData && isProductNotFound;

  const { data: packagesData, isFetching: isPackagesFetching } =
    useGetPackagesListQuery(
      {
        limit,
        page,
        sort,
        order,
        brandIds,
        categoryIds,
        minPrice,
        maxPrice,
      },
      { skip: !isPackages }
    );

  const isFetching = isPackagesFetching || isProductFetching || false;

  const productList =
    (isPackages ? packagesData?.data : productsData?.data) || [];

  const categoryTitle =
    productsData?.category?.categoryName || (isPackages ? "Packages" : "");

  const categoryId = productsData?.category?.id;

  const totalProductCount =
    (isPackages
      ? packagesData?.pagination?.totalCount
      : productsData?.pagination?.totalCount) || 0;

  const paginationData = isPackages
    ? packagesData?.pagination
    : productsData?.pagination;

  const rebateDetails = productsData?.rebate || null;

  useRenderProductRatings(productList);

  const handleSortByChange = (value) => {
    const sortMapping = {
      alphabetAsc: { sort: "alphabet", order: "asc" },
      alphabetDesc: { sort: "alphabet", order: "desc" },
      priceAsc: { sort: "price", order: "asc" },
      priceDesc: { sort: "price", order: "desc" },
    };
    setQueryParams({ page: 1, ...sortMapping[value] });
  };

  const handleOnCompareChange = (checked, product) => {
    if (checked) {
      if (compareProducts.length < 4) {
        const { categoryName: defaultCategory } = compareProducts[0] || {};
        const { categoryName } = product;
        if (!defaultCategory || defaultCategory === categoryName) {
          dispatch(setCompareProducts([product]));
        } else {
          toast({
            variant: "destructive",
            title:
              "Select products from the same category to proceed with comparison.",
          });
        }
      }
    } else {
      dispatch(removeCompareProduct(product));
    }
  };

  const RenderProducts = () => {
    return (
      <>
        {productList?.length > 0 &&
          productList?.map((productDetail, index) => (
            <ProductCard
              key={index}
              index={index}
              productDetail={productDetail}
              isPackages={isPackages}
              handleOnCompareChange={handleOnCompareChange}
              compareProducts={compareProducts}
            />
          ))}
      </>
    );
  };
  return (
    <div>
      <DynamicBreadcrumb />

      <div className="container max-w-1920 flex gap-6 px-5 lg:bg-mobileBG lg:px-[15px] items-start">
        <div
          className={` sticky top-[98px] flex-1 transition-all duration-200 ease-in-out lg:fixed lg:z-10 bg-white lg:top-[0] lg:bottom-0 lg:left-0  ${
            !isVisible
              ? "max-w-[300px] min-w-[266px] opacity-100 lg:translate-x-[-350px]"
              : " max-w-0 min-w-0 overflow-hidden  opacity-0 lg:translate-x-0 lg:max-w-full lg:min-w-[266px] lg:opacity-100 lg:right-0"
          }`}
        >
          <div className=" pl-5 text-[16px] leading-[22px] mb-6">
            <div className=" hidden lg:flex justify-between pr-[25px] py-[15px] items-center ">
              <h5 className=" text-[18px] leading-[27px] font-medium">Sort</h5>
              <button onClick={toggleVisibility}>
                <CloseIcon />
              </button>
            </div>
            <WillItFitFilter
              setQueryParams={setQueryParams}
              defaultValues={dimensions}
            />
          </div>
          <Sidebar
            categorySlug={filterBy}
            categoryId={categoryId}
            isAvailabiltyShow={!isPackages}
            isOnDisplay={!isPackages}
            rebateId={rebateIds}
          />
        </div>
        <div className="flex-1">
          <div className="flex-1">
            <div className=" lg:flex lg:flex-col">
              <div className="flex gap-3  items-center mb-5 lg:mb-[13px] lg:flex-col lg:items-start lg:gap-0">
                <h3 className=" text-blue1 font-medium text-[25px] lg:font-semibold lg:text-[18px] lg:leading-[26px]">
                  {isAllProducts ? "Products" : categoryTitle}
                </h3>
                {!isFetching && (
                  <>
                    {rebateDetails ? (
                      <div className=" flex flex-col justify-center items-center mx-auto my-0 text-[#0B223C]">
                        <div className="flex gap-4">
                          {rebateDetails?.brandDetails?.length > 0 &&
                            rebateDetails?.brandDetails?.map(
                              ({ brandImage, id }) => (
                                <DynamicImage
                                  key={id}
                                  src={brandImage}
                                  height="48"
                                  width="40"
                                  className="h-12 object-contain w-auto mb-2"
                                />
                              )
                            )}
                        </div>
                        <h3 className=" font-semibold text-center text-[19px] leading-[29px]  mb-2">
                          {rebateDetails?.title}
                        </h3>
                        <p className="text-[15px] leading-[22px] mb-2 text-center">
                          {rebateDetails?.description}
                        </p>
                        <p className="mb-2 ">
                          Valid from{" "}
                          {formatDate(rebateDetails?.start_date, "MM/dd/yyyy")}{" "}
                          to {formatDate(rebateDetails?.end_date, "MM/dd/yyyy")}
                        </p>
                        <Link
                          href={rebateDetails?.form_url || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" border-[#0A223C] bg-white border py-2 px-7 rounded-10 text-[14px] font-semibold"
                        >
                          View Rebate{" "}
                        </Link>
                      </div>
                    ) : (
                      <p className="text-blue1 text-[18px] leading-[24px] lg:text-[14px] lg:leading-[16px] ">
                        {totalProductCount !== undefined
                          ? `${totalProductCount} ${
                              totalProductCount === 1 || totalProductCount === 0
                                ? "Result"
                                : "Results"
                            }`
                          : "0 Result"}
                      </p>
                    )}
                  </>
                )}
              </div>
              {!isPackages && (
                <div
                  className={`overflow-auto mb-2 ${
                    isVisible
                      ? "max-w-fullTopSlider lg:max-w-fullTopSliderMobile"
                      : " max-w-topSlider lg:w-fullTopSliderMobile lg:max-w-fullTopSliderMobile "
                  }`}
                >
                  <TopSlider slug={slug} />
                </div>
              )}
            </div>
            <div className=" bg-gray9 p-6 rounded-20 lg:px-0 lg:pt-1 lg:bg-mobileBG">
              <div className=" lg:overflow-auto lg:max-w-filterMaxWidth lg:mb-2 lg:pb-2">
                <div className="flex justify-between items-center gap-5 gap-y-3 flex-wrap mb-4 lg:justify-start lg:flex-nowrap lg:mb-0">
                  <button
                    onClick={toggleVisibility}
                    className=" border border-gray7 rounded-10 h-[34px] px-4 text-blue2 font-medium inline-flex items-center justify-center gap-2 text-[12px] lg:text-[14px] lg:bg-white lg:rounded-[6px] lg:border-none "
                  >
                    <span className=" inline-flex lg:hidden">
                      {isVisible ? (
                        <RightArrowIcon width="7px" height="11px" />
                      ) : (
                        <LeftArrowIcon />
                      )}
                    </span>
                    {/* Hide Filter */}
                    <span className=" inline-flex lg:hidden">
                      {!isVisible ? " Hide Filters" : "Show Filters"}
                    </span>
                    <FilterIcon className=" hidden lg:inline-flex " />
                    <span className="hidden lg:inline-flex">
                      Filters & Sort
                    </span>
                  </button>
                  <button
                    onClick={toggleVisibility}
                    className="  whitespace-nowrap border border-gray7 rounded-[6px] h-[34px] hidden  px-4 text-blue2 font-medium lg:inline-flex items-center justify-center gap-2 text-[12px] lg:bg-white lg:text-black lg:border-0"
                  >
                    Filters & Sort
                  </button>
                  <div className="flex items-center flex-wrap gap-5 gap-y-3 lg:flex-nowrap">
                    {/* <div className="flex gap-3 items-center pr-6 border-r border-gray7 lg:border-0 lg:p-0">
                          <p className=" text-[11px] leading-[12px] inline-flex items-center lg:hidden">
                            <SmartFilterIcon />
                          </p>
                          <button className=" border lg:rounded-[6px] border-gray7 rounded-10 text-[12px] leading-[22px] text-blue2 font-medium min-w-[150px] py-[5px] px-5 lg:bg-white lg:text-black lg:border-0">
                            Budget Range
                          </button>
                          <button className=" border lg:rounded-[6px] border-gray7 rounded-10 text-[12px] leading-[22px] text-blue2 font-medium min-w-[150px] py-[5px] px-5 lg:bg-white lg:text-black lg:border-0">
                            Most Popular
                          </button>
                          <button className=" border lg:rounded-[6px] border-gray7 rounded-10 text-[12px] leading-[22px] text-blue2 font-medium min-w-[150px] py-[5px] px-5 lg:bg-white lg:text-black lg:border-0">
                            Luxury Range
                          </button>
                        </div> */}
                    <div className="flex gap-3 pl-6 items-center lg:hidden">
                      <p className="text-blue2 font-medium text-base">
                        Sort By
                      </p>
                      <Select
                        onValueChange={(value) => handleSortByChange(value)}
                        value={sort + capitalizeFirstLetter(order)}
                      >
                        <SelectTrigger className="text-blue2 font-medium text-base w-[205px] h-[44px] bg-gray9 border border-gray7 rounded-[10px]">
                          <SelectValue
                            value={sort + capitalizeFirstLetter(order)}
                            placeholder={"Sort By"}
                          />
                        </SelectTrigger>

                        <SelectContent className="text-blue2 text-base">
                          {/* <SelectItem value="best">Best Match</SelectItem> */}
                          <SelectItem
                            value="alphabetAsc"
                            className=" cursor-pointer"
                          >
                            Alphabetical (A-Z)
                          </SelectItem>
                          <SelectItem
                            value="priceAsc"
                            className=" cursor-pointer"
                          >
                            Price Low-High
                          </SelectItem>
                          <SelectItem
                            value="alphabetDesc"
                            className=" cursor-pointer"
                          >
                            Alphabetical (Z-A)
                          </SelectItem>
                          <SelectItem
                            value="priceDesc"
                            className=" cursor-pointer"
                          >
                            Price High-Low
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {!isFetching &&
                  (productList?.length === 0 || isInvalidPage) && (
                    <NoResultFound />
                  )}
                <div className="grid grid-cols-308 gap-6 lxl:grid-cols-220">
                  {isFetching ? <ProductSkeleton /> : <RenderProducts />}
                </div>
              </div>
            </div>
          </div>
          <Compare />
        </div>
      </div>
      {!isFetching && productList?.length > 0 && (
        <Pagination paginationData={paginationData} />
      )}
    </div>
  );
};

export default ProductListingPage;

const WillItFitFilter = ({ setQueryParams, defaultValues }) => {
  const [dimensions, setDimensions] = useState(defaultValues);
  const inputRefs = [useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index, key) => {
    const { value } = e.target;

    // Allow only one numeric digit
    if (/^\d{0,3}$/.test(value)) {
      setDimensions((prev) => ({ ...prev, [key]: value }));

      if (value.length >= 3 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setQueryParams({ ...dimensions });
  };

  return (
    <>
      <h3 className="mb-1 font-bold lg:text-[19px] lg:leading-[23px] lg:mb-[7px]">
        Will it Fit?
      </h3>
      <p className="max-w-[267px] mb-6 lg:mb-[19px]">
        Enter your dimensions to see products that fit your space
      </p>
      <form onSubmit={handleOnSubmit} className="flex gap-[20px]">
        <div className="flex gap-[9px] items-center">
          <Input
            ref={inputRefs[0]}
            type="text"
            maxLength="3"
            placeholder="(h)"
            className="max-w-[50px] text-center border-gray7 rounded-[8px] h-[42px] p-2"
            value={dimensions.h}
            onChange={(e) => handleInputChange(e, 0, "h")}
          />
          <CrossIcon />
          <Input
            ref={inputRefs[1]}
            type="text"
            maxLength="3"
            placeholder="(w)"
            className="max-w-[50px] text-center border-gray7 rounded-[8px] h-[42px] p-2"
            value={dimensions.w}
            onChange={(e) => handleInputChange(e, 1, "w")}
          />
          <CrossIcon />
          <Input
            ref={inputRefs[2]}
            type="text"
            maxLength="3"
            placeholder="(d)"
            className="max-w-[50px] text-center border-gray7 rounded-[8px] h-[42px] p-2"
            value={dimensions.d}
            onChange={(e) => handleInputChange(e, 2, "d")}
          />
        </div>
        <button
          type="submit"
          className="border-blue2 border-2 rounded-[8px] h-[42px] w-[38px] flex items-center justify-center"
        >
          <EnterIcon />
        </button>
      </form>
    </>
  );
};
