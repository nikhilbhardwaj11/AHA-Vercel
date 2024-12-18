"use client";
import { DatePicker } from "@/components/DatePicker/DatePicker";
import RangeSlider from "@/components/RangeSlider/RangeSlider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/utils";
import { useGetFiltersListQuery } from "@/redux/apiSlices/filtersApi";
import { useQueryParams } from "@/utils/useQueryParams";
import { useState } from "react";

const Sidebar = ({
  categorySlug,
  categoryId,
  isOnDisplay = true,
  isAvailabiltyShow = true,
  isValidity = false,
  rebateId,
}) => {
  const { data } = useGetFiltersListQuery({ categorySlug, rebateId });
  const brandsList = data?.brands || [];
  const categoriesList = data?.categories || [];

  const filtersList = data?.data || [];
  const {
    brandIds,
    onDisplay,
    isAvailabilty,
    fieldIds,
    fieldValueIds,
    categoryIds,
    validUntil,
    isExpired,
    inStore,
    setQueryParams,
    clearAllParams,
  } = useQueryParams();

  const { minDisplayPrice, maxDisplayPrice } = data?.priceFilter || {};
  // Get current brandIds from the query string
  const currentBrandIds = brandIds ? brandIds.split(",") : [];
  const currentFieldIds = fieldIds ? fieldIds.split(",") : [];
  const currentCategoriesIds = categoryIds ? categoryIds.split(",") : [];
  const currentFieldValueIds = fieldValueIds ? fieldValueIds.split(",") : [];

  const [searchQuery, setSearchQuery] = useState("");

  const injectParams = (params) => setQueryParams({ page: 1, ...params });

  // Filtered list based on search query
  const filteredBrands = brandsList.filter(
    (brand) =>
      brand?.brandName &&
      brand.brandName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBrandChange = (brandId) => {
    // Check if the brandId already exists
    const updatedBrandIds = currentBrandIds.includes(String(brandId))
      ? currentBrandIds.filter((id) => id !== String(brandId)) // Remove if it exists
      : [...currentBrandIds, brandId?.toString()]; // Add if it doesn't exist
    // Set the updated list in the query params
    injectParams({ brandIds: updatedBrandIds.toString() });
  };

  const handleCategoryChange = (categoryId) => {
    const updatedCategoryIds = currentCategoriesIds.includes(String(categoryId))
      ? currentCategoriesIds.filter((id) => id !== String(categoryId)) // Remove if it exists
      : [...currentCategoriesIds, categoryId?.toString()]; // Add if it doesn't exist

    injectParams({ categoryIds: updatedCategoryIds.toString() });
  };

  const handlePriceChange = (min, max) => {
    injectParams({ minPrice: min, maxPrice: max });
  };

  const handleDynamicFiltersChange = (fieldId, fieldValues) => {
    const updatedFieldIds = currentFieldIds.includes(String(fieldId))
      ? currentFieldIds.filter((id) => id !== String(fieldId)) // Remove if it exists
      : [...currentFieldIds, fieldId?.toString()];

    const updatedFieldValueIds = currentFieldValueIds.includes(
      String(fieldValues)
    )
      ? currentFieldValueIds.filter((id) => id !== String(fieldValues)) // Remove if it exists
      : [...currentFieldValueIds, fieldValues?.toString()];

    injectParams({
      fieldIds: updatedFieldIds.toString(),
      fieldValueIds: updatedFieldValueIds.toString(),
      filterSubCategoryId: categoryId,
    });
  };

  return (
    <div className="p-0 lg:px-[15px] lg:pb-[15px] rounded-20 overflow-hidden border border-gray5 bg-white lg:overflow-auto lg:border-0 lg:rounded-none">
      <div className="   pr-[10px] py-6  lg:max-h-230 relative ">
        <div
          className={`pr-[10px]  overflow-auto pl-5  sidebar ${
            !isValidity
              ? "max-h-PLPSideBar lg:max-h-mobilePLPSideBar"
              : "lg:max-h-mobilePLPSideBar max-h-RebateSidebar "
          }`}
        >
          {/* Brands */}
          <div
            className="flex justify-end mb-3 cursor-pointer sticky top-[-1px] z-[1] bg-white "
            onClick={clearAllParams}
          >
            <span className="text-xs font-semibold ">Clear Filters</span>
          </div>
          {categoriesList && categoriesList.length > 0 && (
            <Accordion
              collapsible
              type="single"
              className="mb-3"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pb-[14px] pt-0 text-[16px]  font-semibold">
                  Categories
                </AccordionTrigger>

                <AccordionContent>
                  <div className="border-gray-200 border my-[10px] mb-[15px] rounded-[10px] py-2 px-3">
                    <div className=" max-h-40 overflow-y-auto sidebar ">
                      {categoriesList?.map(
                        ({ categoryId, categoryName, count }) => {
                          return (
                            <div
                              key={categoryId}
                              className=" flex items-center justify-between py-[7px]"
                            >
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={`categories-${categoryId}`}
                                  onCheckedChange={() =>
                                    handleCategoryChange(categoryId)
                                  }
                                  checked={currentCategoriesIds.includes(
                                    `${categoryId}`
                                  )}
                                />
                                <label
                                  htmlFor={`categories-${categoryId}`}
                                  className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {categoryName}
                                </label>
                              </div>
                              <span className=" text-gray6 text-[15px] leading-[30px]">
                                ({count})
                              </span>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {brandsList && brandsList.length > 0 && (
            <Accordion
              collapsible
              type="single"
              className="mb-3"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="pb-[14px] pt-0 text-[16px]  font-semibold">
                  Brand
                </AccordionTrigger>

                <AccordionContent>
                  {/* Search Input */}
                  <Input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                    className="h-[44px] px-7 border-gray5 rounded-[8px] text-[18px]"
                  />
                  <div className="border-gray-200 border my-[10px] mb-[15px] rounded-[10px] py-2 px-3">
                    <div className=" max-h-40 overflow-y-auto sidebar ">
                      {filteredBrands && filteredBrands.length > 0 ? (
                        filteredBrands?.map((brand, index) => {
                          return (
                            <div
                              key={index}
                              className=" flex items-center justify-between py-[7px]"
                            >
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id={`brands-${index}`}
                                  onCheckedChange={() =>
                                    handleBrandChange(brand?.brandId)
                                  }
                                  checked={currentBrandIds.includes(
                                    `${brand?.brandId}`
                                  )}
                                />
                                <label
                                  htmlFor={`brands-${index}`}
                                  className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  {brand?.brandName}
                                </label>
                              </div>
                              {/* <span className=" text-gray6 text-[15px] leading-[30px]">
                          (N/A)
                        </span> */}
                            </div>
                          );
                        })
                      ) : (
                        <p className="text-gray6 text-[16px] p-4">
                          No brand found
                        </p>
                      )}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {/* Brands End */}

          {/* On Display */}
          {isOnDisplay && (
            <div type="single" className="mb-3 border-b " defaultValue="item-1">
              <div value="item-1">
                <div className=" no-arrow my-[6px] pb-[5px] pt-0 text-[16px]  font-semibold flex justify-between items-center">
                  <label htmlFor="onDisplayFilter" className="cursor-pointer">
                    On Display{" "}
                  </label>
                  <Checkbox
                    id="onDisplayFilter"
                    checked={onDisplay === "true"}
                    onCheckedChange={(value) =>
                      injectParams({ onDisplay: value ? "true" : "" })
                    }
                  />
                </div>
              </div>
            </div>
          )}
          {/*On Display End */}

          {/* Delivery & Availability */}
          {isAvailabiltyShow && (
            <Accordion collapsible type="multiple" className="mb-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className=" pt-0 text-[16px] my-[6px] pb-1 font-semibold">
                  Delivery & Availability
                </AccordionTrigger>
                <AccordionContent className="border-gray-200 border my-[10px] mb-[15px] rounded-[10px] py-2">
                  <div className="pl-3 pr-2 min-[25px]">
                    <div className="" type="multiple">
                      <div value="item-1" className="bottom-0 border-none">
                        <div>
                          <div className="mt-[5px] max-h-48 overflow-y-auto sidebar">
                            {/* Checkbox for "Next Day Delivery" */}
                            <div className="flex items-center justify-between py-[7px]">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="nextDayDelivery"
                                  onCheckedChange={(value) =>
                                    injectParams({
                                      isAvailabilty: value ? "true" : "",
                                    })
                                  }
                                  checked={isAvailabilty === "true"}
                                />
                                <label
                                  htmlFor="nextDayDelivery"
                                  className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Next Day Delivery
                                </label>
                              </div>
                            </div>

                            {/* Checkbox for "In Store Pickup" */}
                            <div className="flex items-center justify-between py-[7px]">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="inStorePickup"
                                  onCheckedChange={(value) =>
                                    injectParams({
                                      inStore: value ? "true" : "",
                                    })
                                  }
                                  checked={inStore === "true"}
                                />
                                <label
                                  htmlFor="inStorePickup"
                                  className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  In Store Pickup
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {/* Delivery & Availability End */}

          {filtersList &&
            filtersList.length > 0 &&
            filtersList?.map((filter, index) => (
              <Accordion collapsible key={index} type="single" className="mb-4">
                <AccordionItem key={index} value="item-1">
                  <AccordionTrigger className=" pt-0 text-[16px] my-[6px] pb-1 font-semibold">
                    {filter?.titleName}
                  </AccordionTrigger>
                  {filter.fields &&
                    filter.fields.length > 0 &&
                    filter.fields?.map((childFilter, childIndex) => (
                      <AccordionContent
                        key={childIndex}
                        className="border-gray-200 border my-[10px] mb-[15px] rounded-[10px] py-2"
                      >
                        <div className="pl-3 pr-2 min-[25px]">
                          <div className="" type="multiple">
                            <div
                              value="item-1"
                              className="bottom-0 border-none"
                            >
                              <div className="text-black1 p-0 my-2 text-[14px] leading-[24px] ">
                                {childFilter?.fieldName}
                              </div>
                              <div>
                                <div className="mt-[5px] max-h-48 overflow-y-auto sidebar">
                                  {childFilter?.fieldValues &&
                                    childFilter?.fieldValues.length > 0 &&
                                    childFilter?.fieldValues?.map(
                                      (subChildFilter, subChildindex) => (
                                        <div
                                          key={subChildindex}
                                          className=" flex items-center justify-between py-[7px]"
                                        >
                                          <div className="flex items-center space-x-2">
                                            <Checkbox
                                              id={`${childFilter?.fieldName}-${subChildindex}`}
                                              onCheckedChange={() =>
                                                handleDynamicFiltersChange(
                                                  childFilter?.fieldId,
                                                  subChildFilter?.fieldValueId
                                                )
                                              }
                                              checked={currentFieldValueIds.includes(
                                                `${subChildFilter?.fieldValueId}`
                                              )}
                                            />
                                            <label
                                              htmlFor={`${childFilter?.fieldName}-${subChildindex}`}
                                              className="text-[14px] leading-[25px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                              {subChildFilter?.fieldValue}
                                            </label>
                                          </div>
                                        </div>
                                      )
                                    )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    ))}
                </AccordionItem>
              </Accordion>
            ))}
          {/* Pricing UI */}
          {minDisplayPrice && maxDisplayPrice && (
            <div type="multiple" className="mb-6" defaultValue="item-1">
              <div value="item-1">
                <div className="pb-[5px] pt-0 text-[16px]  font-semibold">
                  Pricing
                </div>
                <div>
                  <div className="mt-[5px]">
                    <RangeSlider
                      min={Math.round(minDisplayPrice)}
                      max={Math.round(maxDisplayPrice)}
                      onPriceChange={([min, max]) => {
                        handlePriceChange(min, max);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Pricing UI END */}

          {isValidity && (
            <>
              <h4 className=" pt-0 text-[16px] my-[6px] pb-1 font-semibold">
                Validity
              </h4>
              <p className="text-[15px]">Valid Until:</p>
              <DatePicker
                label="Select date"
                date={validUntil || null}
                onChange={(value) =>
                  setQueryParams({
                    validUntil: formatDate(value, "yyyy-MM-dd"),
                  })
                }
                className="max-w-[400px]"
              />

              <div className="pb-7 flex gap-[7px] items-center">
                <Checkbox
                  id="recentlyExpired"
                  checked={isExpired === "true"}
                  onCheckedChange={(value) =>
                    injectParams({
                      isExpired: value ? "true" : "false",
                    })
                  }
                />
                <label
                  htmlFor="recentlyExpired"
                  className="cursor-pointer text-[14px]"
                >
                  Recently Expired Rebates
                </label>{" "}
              </div>
            </>
          )}
        </div>
        <div className=" absolute bottom-0 right-0 left-0 h-14 bg-filterBoxShadow "></div>
      </div>
    </div>
  );
};

export default Sidebar;
