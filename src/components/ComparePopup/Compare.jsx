"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import CloseIcon from "@/icons/CloseIcon";
import { removeAllCompareProduct } from "@/redux/slices/productCompareSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
const Compare = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const compareProducts = useSelector((state) => state.compareProducts);
  const compareProductsCount = compareProducts.length;
  if (compareProductsCount <= 0) return;

  const handleOnRemove = () => {
    dispatch(removeAllCompareProduct());
  };

  const handleCompareClick = () => {
    const productIds = compareProducts.map((product) => product.id);

    const url = `/product-comparison?id=${productIds.join(",")}`;
    router.push(url);
  };

  return (
    <div className="h-[125px] w-full fixed right-0 left-0 bottom-0 z-[1] bg-gray9 ">
      <div className=" max-w-[1440px] mx-auto my-0 flex gap-[60px] justify-center items-center h-full px-4">
        <div className="text-center">
          <h3 className=" text-blue1 font-medium text-[25px] mb-[7px]">
            Compare Products
          </h3>
          <p className=" text-blue1 font-medium text-[15px] leading-[24px]">
            Select Up to 4
          </p>
        </div>
        <div className=" flex gap-[15px] items-center justify-center flex-1 relative">
          {compareProductsCount > 0 &&
            compareProducts?.map((comparePoducts, index) => {
              const { productImages, pdpSeoUrl } = comparePoducts;
              const imageUrl = productImages[0]?.thumbnail || "";
              return (
                <div key={index} className="flex gap-[34px] relative group cursor-pointer">
                  <div className="bg-white">
                    <Link href={pdpSeoUrl}>
                    <div className="  w-[100px] h-[100px] py-[15px] px-[10px]    border-gray10 rounded-[10px] border-dashed border-2	">
                      <AspectRatio ratio={205 / 184}>
                        <Image
                          src={imageUrl}
                          alt="Image"
                          className=" object-contain"
                          fill
                        />
                      </AspectRatio>
                    </div>
                    </Link>
                  </div>
                  {/* <p
                    style={{ left: "calc(50% - 56px)" }}
                    className=" h-[30px] cursor-pointer items-center justify-center absolute top-[50%] px-[20px] hidden group-hover:inline-flex py-1 rounded-[8px] text-[14px] border border-black bg-quickView "
                  >
                    Quickview
                  </p> */}
                </div>
              );
            })}
          
          
        </div>
        <div className=" relative h-full flex items-center">
        <button
            className=" border border-blue1 bg-white rounded-[10px] py-2 px-9 text-[20px] font-medium text-blue1 "
            onClick={handleCompareClick}
            disabled={compareProductsCount <= 1}
          >
            Compare
          </button>
        <button className=" absolute top-[15px] right-0" onClick={handleOnRemove}>
            <CloseIcon />
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Compare;
