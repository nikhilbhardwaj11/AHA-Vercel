import NoImage from "@/assets/images/no-image.webp";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import { Button } from "@/components/ui/button";
import { categoriesApiSlice } from "@/redux/apiSlices/categoriesApi";
import Link from "next/link";
import { useSelector } from "react-redux";

const CategoryCard = () => {
  const data = useSelector(
    (state) => categoriesApiSlice.endpoints.getCategories.select()(state)?.data
  );
  const categoriesData = data?.data || [];

  return (
    <>
      {categoriesData.length > 0 &&
        categoriesData.slice(0, 6).map((category,index) => {
          const { subCategoryCounts } = category;
          return subCategoryCounts !== 0 ? (
            <div
              key={index}
              className="inline-flex gap-[10px] bg-white font-semibold pl-[20px] pb-8 pt-12"
            >
              <div className="max-w-[115px] w-full">
                <DynamicImage
                  alt={category.name}
                  src={category?.categoryPicture || NoImage.src}
                  width={103}
                  height={195}
                  className="mx-auto my-0"
                />
              </div>
              <div className="grid grid-rows-auto1fr">
                <h3 className="text-xl leading-[25px] text-blue2 font-medium mb-3">
                  {category?.categoryName}
                </h3>
                <div className="flex flex-col justify-between items-start overflow-hidden">
                  <ul>
                    {category?.subcategories.length > 0 &&
                      category.subcategories
                        .slice(0, 5)
                        .map((subcategory, index) => (
                          <li
                            key={index}
                            className="text-gray2 text-[13px] leading-[16.5px] my-1 flex font-medium"
                          >
                            <span className="mr-2 w-[17px] h-[17px] inline-flex justify-center items-center bg-light-gray lg:bg-mobileBG rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                              >
                                <path
                                  d="M5.97409 5.49974L3.98729 7.4865L4.55494 8.05414L7.10938 5.49974L4.55494 2.94531L3.98729 3.51296L5.97409 5.49974Z"
                                  fill="#5C5C5C"
                                />
                              </svg>
                            </span>
                            <Link
                              href={`/${category?.slug}/${subcategory?.slug}`}
                            >
                              {subcategory.subCategoryName}
                            </Link>
                          </li>
                        ))}
                  </ul>
                  <Link href={`/${category?.slug}`}>
                    <Button
                      className="h-[38px] mt-2 border-blue2 rounded-[8px] text-xs leading-[18px] font-semibold hover:text-white hover:bg-red2 hover:border-red1"
                      variant="outline"
                    >
                      View More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <PackageCard category={category} key={index} />
          );
        })}
    </>
  );
};

const PackageCard = ({ category }) => (
  <div key={category?.id} className=" bg-white font-semibold pb-8 pt-12">
    <div className="max-w-[240px]">
      <DynamicImage
        alt={category.name}
        src={category?.categoryPicture || NoImage.src}
        width={240}
        height={195}
        className="px-1 my-0"
      />
    </div>
    <div className="flex pt-2 items-center">
      <h3 className="text-[18px] leading-[25px] text-blue2 font-medium px-4 pr-[19px] ">
        {category?.categoryName}
      </h3>
      <Link href={`/${category?.slug}`}>
        <Button
          className="h-[38px] mt-2 border-blue2 rounded-[8px] text-xs leading-[18px] font-semibold hover:text-white hover:bg-red2 hover:border-red1"
          variant="outline"
        >
          View More
        </Button>
      </Link>
    </div>
  </div>
);

export default CategoryCard;
