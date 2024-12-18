"use client";
import AdBanner from "@/assets/images/banner-ad.png";
import DashboardBanner from "@/components/Dashboard/Banner";
import BundleCard from "@/components/Dashboard/BannerCard";
import CategoryCard from "@/components/Dashboard/CategoryCard";
import {
  FeaturedProductsCard,
  TopDealsCard,
} from "@/components/Dashboard/FeaturedProducts";
import { useRouter } from "next/navigation";

import OurBrandCard from "@/components/Dashboard/OurBrandCard";
import { Button } from "@/components/ui/button";
import { useGetBrandsQuery } from "@/redux/apiSlices/categoriesApi";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();

  const { data } = useGetBrandsQuery({
    limit: 6,
    filterBy: "isActive",
    filterValue: "true",
  });

  return (
    <div className=" bg-light-gray lg:bg-mobileBG">
      <DashboardBanner />

      <BundleCard />
      <div className="  pl-14 bg-white pt-10 mb-12 xl:pl-5 lg:pt-[30px] lg:bg-transparent lg:px-2">
        <div className="flex items-center justify-between lg:px-2">
          <h3 className=" text-[25px] text-black font-semibold mb-5 leading-[26px] lg:text-[20px] lg:leading-[26px] lg:text-blue1 lg:mb-3 ">
            Featured Products
          </h3>
          <Button
            onClick={() => router.push(`/products?limit=${24}`)}
            variant="outline"
            className="lg:inline-block hidden font-semibold lg:bg-transparent lg:h-[30px] lg:text-blue3 lg:border-blue3 lg:text-[10px] lg:py-[3px] lg:leading-[22px] lg:rounded-[50px]"
          >
            Shop All
          </Button>
        </div>
        <div className="flex gap-[10px]">
          <TopDealsCard />
          <FeaturedProductsCard />
        </div>
      </div>
      <div className="max-w-[1440px] px-[20px]  my-0 mx-auto lg:hidden">
        <div className=" py-[26px] bg-white   rounded-10 mb-12">
          <h3 className=" pl-7 text-[25px] pt-[14px] text-black font-semibold">
            Shop by Category
          </h3>
          <CategoryCardWrapper className="grid grid-cols-3">
            <CategoryCard />
          </CategoryCardWrapper>
        </div>
      </div>

      <div className="max-w-[1480px] px-[20px] w-full my-0 mx-auto mb-[34px] ">
        <Image src={AdBanner} alt="ad-banner" />
      </div>

      <div className="max-w-[1480px] px-[20px] my-0 mx-auto pb-4 ">
        <div className="flex justify-between items-center mb-[30px] lg:mb-[19px]">
          <h3 className="text-[25px] leading-[38px] font-bold lg:text-[20px] lg:leading-[26px] lg:text-blue1 ">
            Our Brands
          </h3>
          <Link
            href="/luxury-appliances"
            variant="outline"
            className="border-blue2 border h-10 rounded-[38px] px-[20px] lg:h-[30px] lg:text-blue3 lg:border-blue3 lg:text-[10px] lg:py-[3px] lg:leading-[22px] lg:rounded-[50px] lg:bg-transparent content-center"
          >
            All Luxury Brands
          </Link>
        </div>
        <div className="flex gap-10 justify-center mxl:flex-wrap sm:grid sm:grid-cols-2 sm:gap-0 sm:rounded-[15px] sm:overflow-hidden group-even:bg-black">
          {data?.data?.length > 0 &&
            data.data.map((brand) => (
              <OurBrandCard key={brand.id} brandDetails={brand} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

const CategoryCardWrapper = styled.div`
  margin-top: 60px;
  > div {
    border-right: 1px solid #c2c2c2;
    padding-left: 72px;
    border-top: 1px solid #c2c2c2;

    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(9) {
      border-right: none;
    }
    &:nth-child(1),
    &:nth-child(2),
    &:nth-child(3) {
      border-bottom: 0;
      padding-top: 0;
      border-top: 0;
    }
    &:nth-child(1),
    &:nth-child(4) {
      padding-left: 20px;
    }
  }
  @media (max-width: 1230px) {
    > div {
      padding-left: 35px;
    }
  }
`;
