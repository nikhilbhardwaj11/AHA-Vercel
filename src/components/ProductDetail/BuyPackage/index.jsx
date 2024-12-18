import { Button } from "@/components/ui/button";
import BookmarkIcon from "@/icons/BookmarkIcon";
import BuyPackageTabs from "./Tabs";
import { useGetPackageByIdQuery } from "@/redux/apiSlices/packagesApi";
import DynamicImage from "@/components/DynamicImages/DynamicImage";
import NoImage from "@/assets/images/no-image.webp";
import Link from "next/link";
import useAddToCart from "@/hooks/useAddToCart";
import { useSelector } from "react-redux";
import { calculatePriceTotal } from "@/utils/calculatePriceTotal";

const BuyPackage = ({ bundleId }) => {
  const { data, isFetching, isSuccess } = useGetPackageByIdQuery(
    { packageId: bundleId },
    { skip: !bundleId }
  );
  const { addToCart, isAddToCartLoading, isAddToCartSuccess } = useAddToCart();
  const {
    id,
    brandId,
    brandName,
    bundleProductList,
    image,
    price_details,
    productName,
    thumbnail,
  } = data?.data || {};
  const {
    displayPrice,
    savingAmount,
    savingPercentage,
    crossedPrice,
    cartPrice,
  } = price_details || {};

  const temporaryPackageProducts = useSelector(
    (state) => state.packageProducts || []
  );

  const isPackageEmpty =
    temporaryPackageProducts?.filter((item) => item.id)?.length === 0;

  const processPackageAddToCart = () => {
    let addToCartPayload = [];
    temporaryPackageProducts?.map((product, index) => {
      if (product.id) {
        addToCartPayload?.push({ productId: product.id, quantity: 1 });
      }
    });
    addToCart({ products: addToCartPayload });
  };

  const {
    totalCrossedPrice,
    totalDisplayPrice,
    totalSavingsAmount,
    totalSavingsPercentage,
  } = calculatePriceTotal(temporaryPackageProducts) || {};

  return isSuccess && !isFetching ? (
    <div className=" my-0 mx-auto py-6">
      <h3 className="text-2xl font-semibold leading-[38px] mb-[21px] px-9 lg:pl-0 lg:text-[16px] lg:leading-[23px] lg:mb-[5px]">
        Buy as a Package
      </h3>
      <div className=" px-[30px] pb-[30px] bg-white rounded-10 lg:px-5 lg:pb-[20px]">
        <div className=" border-b border-gray12 py-[22px] flex gap-3 items-center justify-between flex-wrap">
          <h4 className="three-line-dots text-[24px] leading-[36px] text-black2 font-semibold lg:text-[16px] lg:leading-[24px]">
            {productName}
          </h4>

          <Link
            href={{
              pathname: `packages/${id}`,
              query: {
                name: productName,
              },
            }}
          >
            <Button
              variant="outline"
              className="border border-blue2 rounded-[8px] lg:text-[12px] lg:h-[34px] px-3 py-2"
            >
              See Details
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-437 pt-[22px] mxl:grid-cols-1 mxl:gap-4">
          <div className=" lg:border-r-0 lg:p-0 grid  w-full px-5 border-r border-gray12 mxl:flex mxl:items-center mxl:justify-center sm: flex-col sm:gap-3">
            <div className=" h-[231px] mb-3 mxl:flex-1 lg:mb-0  rounded-[5px]">
              <DynamicImage
                src={thumbnail || NoImage}
                width={395}
                height={230}
                alt="img"
                className=" object-contain h-full"
              />
            </div>
            <div className=" mxl:flex-1 mxl:">
              <div className="flex mb-7 items-center justify-center gap-3 sm:mb-3 ">
                <div>
                  <h3 className=" text-[37px] font-semibold  text-black2  leading-[37px] sm:text-[32px] sm:leading-[48px]">
                    {totalDisplayPrice}
                  </h3>
                  {cartPrice && (
                    <p className=" text-gray2 text-[11px] font-medium  leading-[16px] mr-1">
                      *See final price in cart
                    </p>
                  )}
                </div>
                <div>
                  <h5 className=" text-red2  text-[14px] leading-[20px]">
                    {totalSavingsAmount} {totalSavingsPercentage}
                  </h5>
                  <p className="text-[14px] line-through leading-[20px]">
                    {totalCrossedPrice}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-center mxl:max-w-[500px] mxl:w-full mxl:my-0 mxl:mx-auto">
                <Button
                  variant="outline"
                  className=" border-blue2 rounded-[8px] flex-1 h-[50px] lg:h-[46px] sm:flex-1 hover:bg-red3 hover:text-white hover:border-red3"
                  onClick={() => processPackageAddToCart()}
                  disabled={isAddToCartLoading || isPackageEmpty}
                >
                  {isAddToCartLoading ? "Adding To Cart..." : "Add to Cart"}
                </Button>
                {/* <button className=" inline-flex items-center justify-center h-[50px] w-[50px] rounded-full border border-gray7 ">
                  <BookmarkIcon />
                </button> */}
              </div>
            </div>
          </div>
          <BuyPackageTabs
            bundleProductList={bundleProductList}
            brandId={brandId}
            brandName={brandName}
          />
        </div>
      </div>
    </div>
  ) : null;
};

export default BuyPackage;
