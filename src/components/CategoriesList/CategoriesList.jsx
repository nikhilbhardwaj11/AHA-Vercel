import BoschBg from "@/assets/images/bosch-bg.png";
import KitchenPackagesBg from "@/assets/images/kitchen-bg.png";
import NoImage from "@/assets/images/no-image.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RightArrow from "@/icons/RightArrow";
import { cn } from "@/lib/utils";
import { useGetCategoriesQuery } from "@/redux/apiSlices/categoriesApi";
import Link from "next/link";
import { useState } from "react";
import DynamicImage from "../DynamicImages/DynamicImage";

const CategoriesList = ({ callBack }) => {
  const { data } = useGetCategoriesQuery();
  const categoriesData = data?.data || [];

  const generateHref = (category, mainSlug, parentId) => {
    const { isTagged, fieldIds, fieldValueIds } = category;
    if (isTagged) {
      return `${mainSlug}?fieldIds=${fieldIds.join(
        ","
      )}&fieldValueIds=${fieldValueIds.join(
        ","
      )}&filterSubCategoryId=${parentId}`;
    } else {
      return mainSlug;
    }
  };
  return (
    <div className="bg-light-gray">
      <div className=" max-w-1440 px-5 container  p-0 lg:px-0">
        <div className="border-l-2 border-l-white grid grid-cols-102  min-h-[78.5px] lg:hidden">
          {categoriesData.length > 0 &&
            categoriesData?.map((category) => (
              <RenderCategories
                key={category.id}
                category={category}
                generateHref={generateHref}
              />
            ))}
        </div>
        {/*mobile view */}

        <div className="hidden lg:block ">
          {categoriesData.length > 0 &&
            categoriesData.map((category) => (
              <RenderCategoriesForMobile
                key={category.id}
                category={category}
                generateHref={generateHref}
                callBack={callBack}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;

const RenderCategories = ({ category, generateHref }) => {
  const [open, setOpen] = useState(false);
  const closePopover = () => setOpen(false);
  return (
    <Popover key={category?.id} open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        {category?.subCategoryCounts === 0 ? (
          <Link
            className={cn(
              "flex flex-col justify-center place-items-center p-p10 cursor-pointer border-r-2 border-r-white border-b-2 border-b-transparent "
            )}
            href={`/${category?.slug}`}
          >
            <DynamicImage
              alt={category?.categoryName}
              src={category?.categoryImages?.[0]?.url || NoImage.src}
              disableIsBlur
              width={25}
              height={25}
              className="min-h-[25px] max-h-25px"
            />
            <button className=" mt-1">{category?.categoryName}</button>{" "}
          </Link>
        ) : (
          <div
            className={cn(
              "grid place-content-center place-items-center p-p10 cursor-pointer border-r-2 min-h-[97px] border-r-white border-b-2 border-b-transparent ",
              open && " border-b-2 border-b-black "
            )}
          >
            <DynamicImage
              alt={category?.categoryName}
              src={category?.categoryImages?.[0]?.url || NoImage.src}
              width={25}
              height={25}
              className="min-h-[25px] max-h-25px"
            />
            <button className=" mt-1">{category?.categoryName}</button>
          </div>
        )}
      </PopoverTrigger>
      {category?.subcategories.length > 0 && (
        <PopoverContent className=" w-100vw bg-transparent  my-0 mx-auto right-0 shadow-none border-0 top[-4px] ">
          <div style={{ height: "100vh" }}>
            <div className="container bg-white lg:h-full">
              <div className="flex max-w-[1440px] my-0 mx-auto  px-5 ">
                <div className=" flex-1 max-w-932 border-r border-gray1 pr-7 pb-4 lg:pr-0 lg:border-0">
                  <div className=" flex justify-between items-center pt-5 pb-p18 border-b border-gray1 lg:flex-col lg:gap-2 lg:items-start">
                    <h3 className="text-xl font-medium text-blue3">
                      {category?.categoryName}
                    </h3>
                    <Link
                      href={`/${category?.slug}`}
                      className=" border-black border rounded-20 px-5 py-p9 lg:text-[14px] lg:self-end"
                      onClick={closePopover}
                    >
                      {`Browse All ${category?.categoryName}`}
                    </Link>
                  </div>

                  <ul className=" py-p18  ">
                    {category?.subcategories.map((sub, index) => (
                      <div key={index}>
                        <li className=" inline-block float-start pr-3 w-[225px] pl-2">
                          {["deals", "shop-outlet", "rebate-offers"].includes(
                            sub?.slug
                          ) ? (
                            <div className="text-base text-blue2 mb-3 font-medium flex gap-[6px] items-center">
                              {sub?.subCategoryName}
                              <RightArrow width="7px" height="11px" />
                            </div>
                          ) : (
                            <Link
                              href={`/${category?.slug}/${sub?.slug}`}
                              onClick={closePopover}
                            >
                              <h5 className="text-base text-blue2 mb-3 font-medium flex gap-[6px] items-center">
                                {sub?.subCategoryName}
                                <RightArrow width="7px" height="11px" />
                              </h5>
                            </Link>
                          )}

                          {sub?.subcategories2?.length > 0 &&
                            sub?.subcategories2
                              ?.slice(0, 11)
                              ?.map((sub2, idx) => (
                                <ul key={idx}>
                                  <li className="text-sm text-blue2 mb-2">
                                    <Link
                                      href={
                                        sub2?.slug === "rebate-center"
                                          ? "/rebates-center"
                                          : generateHref(
                                              sub2,
                                              `/${category?.slug}/${sub?.slug}/${sub2?.slug}`,
                                              sub.id
                                            )
                                      }
                                      onClick={closePopover}
                                    >
                                      {sub2?.subCategory2Name}
                                    </Link>
                                  </li>
                                </ul>
                              ))}
                        </li>
                        {/* Extra elements more than 11*/}
                        {sub?.subcategories2?.length > 11 && (
                          <li
                            key={"extraElements"}
                            className=" inline-block float-start pr-3 w-[225px] pl-2"
                          >
                            {sub?.subcategories2?.length > 0 &&
                              sub?.subcategories2
                                ?.slice(11, sub?.subcategories2?.length)
                                ?.map((sub2, indx) => (
                                  <ul key={indx}>
                                    <li className="text-sm text-blue2 mb-2">
                                      <Link
                                        href={generateHref(
                                          sub2,
                                          `/${category?.slug}/${sub?.slug}/${sub2?.slug}`,
                                          sub.id
                                        )}
                                        onClick={closePopover}
                                      >
                                        {sub2?.subCategory2Name}
                                      </Link>
                                    </li>
                                  </ul>
                                ))}
                          </li>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
                <div className=" flex flex-col gap-6 py-11 pr-5 pl-8 lg:hidden">
                  <Link
                    href={"/packages"}
                    className=" flex flex-col max-w-[340px] justify-center relative w-full min-w-340 min-h-107 rounded-xl overflow-hidden px-7 py-3"
                  >
                    <DynamicImage
                      src={KitchenPackagesBg}
                      alt="image"
                      fill
                      className="object-cover backdrop-brightness-50"
                    />
                    <div className="backdrop-brightness-50 absolute top-0 bottom-0 right-0 left-0" />
                    <h5 className="text-base text-white	relative">
                      Save More with
                    </h5>
                    <h3
                      className="relative text-26  leading-38 text-white font-bold
                      "
                    >
                      Kitchen Packages
                    </h3>
                  </Link>
                  <div className=" flex flex-col justify-center relative w-full min-w-340 min-h-107 rounded-xl overflow-hidden px-7 py-3">
                    <DynamicImage
                      src={BoschBg}
                      alt="image"
                      fill
                      className="object-cover backdrop-brightness-50"
                    />
                    <div className="backdrop-brightness-50 absolute top-0 bottom-0 right-0 left-0" />

                    <h5 className="text-base text-white	relative">
                      Amazing offers on
                    </h5>
                    <h3
                      className="relative text-26  leading-38 text-white font-bold
                      "
                    >
                      Bosch
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/20 h-full" onClick={closePopover}></div>
          </div>
        </PopoverContent>
      )}
    </Popover>
  );
};

const RenderCategoriesForMobile = ({ category, generateHref, callBack }) => {
  const [value, setValue] = useState("");
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full px-4"
      onValueChange={setValue}
      value={value}
    >
      <AccordionItem value={`item-${category.id}`}>
        <AccordionTrigger>
          <div className="flex items-center space-x-2">
            <DynamicImage
              alt={category?.categoryName}
              src={category?.categoryImages?.[0]?.url || NoImage.src}
              width={25}
              height={25}
              className="min-h-[25px] max-h-[25px]"
            />
            <div>{category?.categoryName}</div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          {category?.subcategories.length > 0 && (
            <div>
              <div className="container bg-white lg:h-full">
                <div className="flex max-w-[1440px] my-0 mx-auto  px-5 ">
                  <div className=" flex-1 max-w-932 border-r border-gray1 pr-7 pb-4 lg:pr-0 lg:border-0">
                    <div>
                      <div className=" flex justify-between items-center pt-5 pb-p18 border-b border-gray1 lg:py-3">
                        {/* <h3 className="text-xl font-medium text-blue3">
                                {category?.categoryName}
                              </h3> */}
                        <Link
                          href={`/${category?.slug}`}
                          className=" border-black border rounded-20 px-5 py-p9 lg:text-[14px]"
                          onClick={callBack}
                        >
                          {`Browse All ${category?.categoryName}`}
                        </Link>
                      </div>
                    </div>
                    <ul className=" py-p18  ">
                      {category?.subcategories.map((sub, index) => (
                        <li
                          key={index}
                          className=" inline-block float-start pr-4 w-[225px]"
                        >
                          <Link
                            href={`/${category?.slug}/${sub?.slug}`}
                            onClick={callBack}
                          >
                            <h5 className="text-base text-blue2 mb-3 font-medium flex gap-[6px] items-center">
                              {sub?.subCategoryName}
                              <RightArrow width="7px" height="11px" />
                            </h5>
                          </Link>
                          {sub?.subcategories2?.length > 0 &&
                            sub?.subcategories2?.map((sub2, idx) => (
                              <ul key={idx}>
                                <li className="text-sm text-blue2 mb-2">
                                  <Link
                                    href={generateHref(
                                      sub2,
                                      `/${category?.slug}/${sub?.slug}/${sub2?.slug}`,
                                      sub.id
                                    )}
                                    onClick={callBack}
                                  >
                                    {sub2?.subCategory2Name}
                                  </Link>
                                </li>
                              </ul>
                            ))}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
