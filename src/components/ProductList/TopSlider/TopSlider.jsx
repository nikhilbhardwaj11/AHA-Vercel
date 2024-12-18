"use client";

import ProductDummyImg from "@/assets/images/category-card-product-img1.png";
import { categoriesApiSlice } from "@/redux/apiSlices/categoriesApi";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

const TopSlider = ({ slug }) => {
  const pathname = usePathname();
  const [categorySlug = "", subCategorySlug = ""] = slug;

  const categoriesData = useSelector(
    (state) =>
      categoriesApiSlice.endpoints.getCategories.select()(state)?.data?.data
  );

  const subCategoriesData = useMemo(() => {
    const category = categoriesData?.find((cat) => cat?.slug === categorySlug);
    return subCategorySlug
      ? category?.subcategories?.find((sub) => sub?.slug === subCategorySlug)
          ?.subcategories2 || []
      : category?.subcategories || [];
  }, [categoriesData, categorySlug, subCategorySlug]);

  return (
    <div className="flex cursor-pointer gap-2 pb-2 lg:pb-0">
      {subCategoriesData?.map((item, index) => {
        const slugPath = `/${[categorySlug, subCategorySlug, item?.slug]
          .filter(Boolean)
          .join("/")}`;

        const isActive = pathname === slugPath;

        return (
          <Link href={slugPath} key={index}>
            <div
              className={cn(
                " max-w-[220px] min-w-[200px] w-full gap-5 items-center flex whitespace-break-spaces border-gray7 hover:border-red3 hover:text-red3  rounded-10 border-2 py-[15px] pl-[22px] pr-[15px] lg:py-[11px] lg:px-[15px] bg-white lg:gap-[15px] lg:max-w-[150px] ",
                isActive && "border-red3 text-red3"
              )}
            >
              <Image
                src={ProductDummyImg}
                alt="product-img"
                className="h-[50px] w-auto lg:h-[40px]"
              />
              <h3 className="text-[12px] leading-[24px] lg:text-[10px] lg:leading-[17px]">
                {item?.subCategoryName ||
                  item?.subCategory2Name ||
                  item?.categoryName}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TopSlider;
