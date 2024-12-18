"use client";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb/DynamicBreadcrumb";
import Pagination from "@/components/GlobalPagination/pagination";
import Sidebar from "@/components/ProductList/Sidebar";
import RebatesCard from "@/components/RebatesCard/RebatesCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FilterIcon from "@/icons/FilterIcon";
import LeftArrowIcon from "@/icons/LeftArrowIcon";
import { default as RightArrowIcon } from "@/icons/RightArrow";
import { useGetRebatesListQuery } from "@/redux/apiSlices/supportApi";
import { useQueryParams } from "@/utils/useQueryParams";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import CloseIcon from "@/icons/CloseIcon";
import SearchIcon from "@/icons/SearchIcon";

const RebatesCenter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const {
    limit,
    page,
    brandIds,
    search,
    categoryIds,
    validUntil,
    isExpired,
    sort,
    order,
    setQueryParams,
  } = useQueryParams();
  const [value] = useDebounce(search, 1000);

  const { data, isFetching } = useGetRebatesListQuery({
    page,
    limit,
    brandIds,
    search: value,
    categoryIds,
    validUntil,
    isExpired,
    sort,
    order,
  });

  const { data: rebatesList = [], pagination = {} } = data || {};

  return (
    <div>
      <DynamicBreadcrumb />

      <div className=" bg-gray9 lg:bg-mobileBG py-10 px-5 slg:pt-5">
        <h2 className=" text-[36px] text-[#0C2340] font-semibold text-center">
          Rebates Center
        </h2>
        {/* <h5 className=" text-[29px] text-[#0C2340] font-medium text-center mb-[35px]">
          How to Redeem your Rebate
        </h5>
        <div className="grid grid-cols-3 gap-[60px] max-w-[1557px] mx-auto mlg:gap-[40px] slg:grid-cols-1">
          <div className=" flex gap-5 ">
            <div className=" rounded-full min-w-[45px] h-[45px] bg-[#0C2340] text-[24px] font-medium text-white flex items-center justify-center">
              1
            </div>
            <div>
              <h3 className=" text-[18px] font-medium text-[#020206] ">
                Purchase rebate eligible products
              </h3>
              <p className=" text-[14px]  text-[#020206] ">
                Many of the products available on Abt.com include a rebate
                savings offer.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 ">
            <div className=" rounded-full min-w-[45px] h-[45px] bg-[#0C2340] text-[24px] font-medium text-white flex items-center justify-center">
              2
            </div>
            <div>
              <h3 className=" text-[18px] font-medium text-[#020206] ">
                Print or complete your rebate form online
              </h3>
              <p className=" text-[14px]  text-[#020206] ">
                Fill out your online or mail-in rebate form and gather any
                required UPC barcode/serial information from product packaging.
              </p>
            </div>
          </div>
          <div className=" flex gap-5 ">
            <div className=" rounded-full min-w-[45px] h-[45px] bg-[#0C2340] text-[24px] font-medium text-white flex items-center justify-center">
              3
            </div>
            <div>
              <h3 className=" text-[18px] font-medium text-[#020206] ">
                Submit documentation
              </h3>
              <p className=" text-[14px]  text-[#020206] ">
                Submit your rebate online or by mail with a copy of your
                invoice/receipt along with the fully completed rebate form.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className=" bg-gray9 lg:bg-mobileBG"> */}
        <div className="container max-w-1920 flex  px-5 lg:px-0 items-start pt-[50px]">
          <div
            className={` sticky top-[98px] flex-1 transition-all duration-200 ease-in-out lg:fixed lg:z-10  lg:top-[0] lg:bottom-0 lg:left-0  ${
              !isVisible
                ? "max-w-[300px] min-w-[266px] opacity-100 lg:translate-x-[-350px] mr-6 "
                : " max-w-0 min-w-0 overflow-hidden  opacity-0 lg:translate-x-0 lg:max-w-full lg:min-w-[266px] lg:opacity-100 lg:right-0"
            }`}
          >
            <Sidebar
              categorySlug={"rebates"}
              isOnDisplay={false}
              isAvailabiltyShow={false}
              isValidity
            />
          </div>
          <div className="flex-1">
            <div className="bg-white p-6 rounded-20 lg:px-0 lg:pt-1 lg:rounded-none">
              <div className="  lg:mb-2 lg:pb-2 lg:px-4">
                <div className="flex gap-5 gap-y-3 items-baseline  flex-wrap mb-4 lg:justify-start lg:mb-0">
                  <button
                    onClick={toggleVisibility}
                    className=" border border-gray7 lg:pl-0 rounded-10 h-[34px] px-4 text-blue2 font-medium inline-flex items-center justify-center gap-2 text-[12px] lg:text-[14px] lg:bg-white lg:rounded-[6px] lg:border-none "
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
                  {/* <button
                    onClick={toggleVisibility}
                    className="  whitespace-nowrap border border-gray7 rounded-[6px] h-[34px] hidden  px-4 text-blue2 font-medium lg:inline-flex items-center justify-center gap-2 text-[12px] lg:bg-white lg:text-black lg:border-0"
                  >
                    Filters & Sort
                  </button> */}

                    <div className="relative w-full max-w-[400px] ml-auto lg:ml-0">
                      <Input
                        placeholder="Search for rebates"
                        className="pr-[38px] pl-4  w-full h-full rounded-[10px] text-[16px] lg:text-[12px]"
                        value={search}
                        onChange={(e) =>
                          setQueryParams({ search: e.target.value })
                        }
                      />
                      {search ? (
                        <span onClick={() => setQueryParams({ search: "" })}>
                          <CloseIcon
                            className="absolute right-[10px] top-[12px] cursor-pointer lg:top-2"
                            fill="#C5C5C5"
                          />
                        </span>
                      ) : (
                        <SearchIcon
                          className="absolute right-[10px] top-[12px] cursor-pointer lg:top-2"
                          color="#C5C5C5"
                        />
                      )}
                    </div>
                    <div className="flex gap-3  items-center">
                      <RenderSort
                        setQueryParams={setQueryParams}
                        sort={sort}
                        order={order}
                      />
                    </div>
                    {/* <button className=" border lg:rounded-[6px] border-gray7 rounded-[10px] text-[12px] leading-[22px] text-blue2 font-medium min-w-[150px] py-[10px] px-5 lg:bg-white lg:text-black">
                      Recently Expired Rebates
                    </button> */}
                </div>
              </div>
              <div className="grid grid-cols-308 gap-6 1380:grid-cols-226 lg:px-4 lg:gap-4">
                {rebatesList.map((rebate) => (
                  <RebatesCard key={rebate.id} data={rebate} shopModels />
                ))}
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      {!isFetching && rebatesList.length > 0 && (
        <Pagination paginationData={pagination} />
      )}
    </div>
  );
};

export default RebatesCenter;

const sortOptions = [
  { id: 1, label: "Alphabetical (A-Z)", sort: "title", order: "ASC" },
  { id: 2, label: "Alphabetical (Z-A)", sort: "title", order: "DESC" },
  { id: 3, label: "Start Date", sort: "startDate", order: "ASC" },
  { id: 4, label: "End Date", sort: "endDate", order: "ASC" },
  { id: 5, label: "Recently Added", sort: "createdAt", order: "DESC" },
];
const RenderSort = ({ setQueryParams, sort, order }) => {
  const selectedValue = sort ? JSON.stringify({ sort, order }) : "";

  const handleSortByChange = (value) => {
    const params = JSON.parse(value);
    setQueryParams({ page: 1, ...params });
  };

  return (
    <>
      <p className="text-blue2  font-medium text-[15px]">Sort By</p>
      <Select onValueChange={handleSortByChange} value={selectedValue}>
        <SelectTrigger className="text-blue2 font-medium text-base w-[205px] h-[44px] bg-gray9 border border-gray7 rounded-[10px]">
          <SelectValue value={""} placeholder={"Sort By"} />
        </SelectTrigger>

        <SelectContent className="text-blue2 text-base">
          {sortOptions.map(({ label, id, ...rest }) => (
            <SelectItem
              key={id}
              value={JSON.stringify(rest)}
              className=" cursor-pointer"
            >
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};
