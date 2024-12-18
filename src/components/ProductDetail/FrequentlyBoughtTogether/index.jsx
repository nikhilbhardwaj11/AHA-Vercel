import DynamicImage from "@/components/DynamicImages/DynamicImage";
import { cn } from "@/lib/utils";
import Link from "next/link";
import AddToCart from "../AddToCart/AddToCart";
import PlusIcon from "@/icons/PlusIcon";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";

const FrequentlyBoughtTogether = ({
  frequentlyBoughtTogether,
  currentProductImages,
}) => {
  return (
    <div className=" my-0 mx-auto py-6">
      <h3 className="text-2xl font-semibold leading-[38px] mb-[21px] px-9 lg:pl-0 lg:text-[16px] lg:leading-[23px] lg:mb-[5px]">
        Frequently Bought Together
      </h3>
      <div className=" bg-white rounded-[10px] py-6 px-3  gap-2 flex lg:flex-wrap lg:gap-[15px]">
        <div className="inline-flex items-center gap-3 border-gray7 pr-5 xl:flex-wrap  xl:justify-center xl:text-center lg:pr-0 lg:border-0">
          {frequentlyBoughtTogether?.map((item, index) => {
            const {
              thumbnail,
              productName,
              pdpSeoUrl,
              productId,
              price_details,
            } = item || "";
            const { displayPrice, crossedPrice, cartPrice } =
              price_details || {};
            return (
              <>
                <div className=" w-[132px] h-[132px]">
                  <DynamicImage
                    src={getThumbnailUrl(currentProductImages)}
                    alt="images"
                    className=" object-contain h-full"
                    width={132}
                    height={132}
                  />
                </div>
                <PlusIcon />

                <div
                  className={cn(
                    "inline-flex items-center gap-3 pr-5 xl:flex-col",
                    frequentlyBoughtTogether.length === index + 1
                      ? "border-none"
                      : "border-r"
                  )}
                >
                  <div className="flex gap-3  items-center">
                    <Link href={pdpSeoUrl}>
                      <div className=" w-[132px] h-[132px]">
                        <DynamicImage
                          src={thumbnail}
                          alt="current product"
                          className=" object-contain h-full"
                          width={132}
                          height={132}
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="text-black">
                    <h5 className="text-sm  mb-1 font-semibold max-w-[350px] w-full">
                      {productName}
                    </h5>
                    <h3 className="text-[18px] leading-[27px] mb-[14px]">
                      ${cartPrice || displayPrice}&nbsp;{" "}
                      <span className="line-through text-xs">
                        {crossedPrice ? "$" + crossedPrice : ""}
                      </span>
                    </h3>
                    <AddToCart
                      productId={productId}
                      productData={item || {}}
                      btnVariant="outline"
                      btnClassName=" border-blue2 rounded-[8px] hover:bg-red2 hover:text-white hover:border-white "
                      // deliveryPayload={deliveryPayload}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBoughtTogether;
