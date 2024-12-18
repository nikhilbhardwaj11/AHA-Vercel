"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import RightArrow from "@/icons/RightArrow";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DynamicBreadcrumb = ({ sku, formattedLinks }) => {
  const pathname = usePathname();

  // Split the pathname into segments
  const pathSegments = pathname.split("/").filter(Boolean);

  const modifiedValues = {
    "All Refrigerators": "Refrigerators",
    Laundry: "Washers & Dryers",
    "Stacked Washer Dryer Sets": "Laundry Centers",
    "Grills Outdoor Kitchens": "Outdoor Grills",
    RebateProducts: "Rebate Products",
  };
  // Generate breadcrumb items based on the path segments
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
    // Replace hyphens with spaces and capitalize each word
    const label = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    return {
      href,
      label,
    };
  });

  const finalItems = [
    { href: "/", label: "Home" },
    ...(formattedLinks || []),
    ...(sku
      ? [{ href: pathname, label: "Model: " + sku.toUpperCase() }]
      : breadcrumbItems),
  ];

  return (
    <div className="px-5 container max-w-1440 py-5 lg:bg-mobileBG lg:p-[14px]">
      <Breadcrumb>
        <BreadcrumbList className="font-light text-[13px] leading-[20px] gap-[1px]">
          {finalItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <BreadcrumbItem>
                {index !== finalItems.length - 1 ? (
                  <Link href={item.href}>
                    {modifiedValues[item.label] || item.label}
                  </Link>
                ) : (
                  <BreadcrumbPage className="text-gray8 font-medium truncate max-w-72">
                    {modifiedValues[item.label] || item.label}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < finalItems.length - 1 && (
                <BreadcrumbSeparator className="[&>svg]:size-2.5 px-1">
                  <RightArrow />
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;
