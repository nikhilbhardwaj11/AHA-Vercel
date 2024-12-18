import NoImage from "@/assets/images/no-image.webp";
import { useGetSwapProductListQuery } from "@/redux/apiSlices/packagesApi";
import { setPackageProducts } from "@/redux/slices/packageSlice";
import { getThumbnailUrl } from "@/utils/getThumbnailUrl";
import { useDispatch } from "react-redux";
import DynamicImage from "../DynamicImages/DynamicImage";
import { Ratings } from "../Ratings/Ratings";
import PackageSkeleton from "../Skeletons/PackageSkeleton";
import { Button } from "../ui/button";
import { SheetContent, SheetTitle } from "../ui/sheet";
import { useToast } from "../ui/use-toast";
import NoResultFound from "@/components/NoResultFound";

const SwapProductSheet = ({
  price,
  subCategoryId,
  brandId,
  currentProduct,
  brandName,
  currentProductIndex,
  temporaryPackageProducts,
  closeSheet,
}) => {
  const dispatch = useDispatch();
  const currentProductId = currentProduct?.id;
  const { data, isFetching } = useGetSwapProductListQuery({
    currentProductId,
    price,
    subCategoryId,
    brandId,
  });

  const packageData = data?.products || [];
  const isEmpty = packageData.length === 0;
  const { toast } = useToast();
  const SwapProductCard = () => {
    return (
      <>
        {packageData &&
          packageData.length > 0 &&
          packageData?.map((pkg, index) => {
            const productImage =
              pkg?.thumbnail || NoImage.src;
            const productName = pkg?.productName;
            const productSku = pkg?.SKU;
            const {
              displayPrice,
              savingAmount,
              savingPercentage,
              crossedPrice,
              cartPrice,
            } = pkg?.price_details || {};
            return (
              <div
                key={index}
                className=" py-[14px] px-[21px] border border-gray12 rounded-[16px]"
              >
                <div className="flex gap-7 mb-[17px]">
                  <div>
                    <DynamicImage
                      src={productImage}
                      width={300}
                      height={152}
                      alt="swappable-product"
                    />
                  </div>
                  <div>
                    <div className="grid grid-cols-2  items-start gap-x-3 ">
                      <div>
                        <h3 className=" text-[24px] font-semibold text-black2  leading-[29px]">
                          {cartPrice || displayPrice}
                        </h3>
                        {cartPrice && (
                          <p className=" text-gray2 text-[9px] font-medium  leading-[14px] mr-1">
                            *See final price in cart
                          </p>
                        )}
                      </div>
                      <div className="pt-[3px]">
                        <h5 className=" text-red2  text-[13px] leading-[15px]">
                          {savingAmount} {savingPercentage}
                        </h5>
                        <p className="text-[13px] line-through leading-[15px] font-medium">
                          {crossedPrice}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2  items-start gap-x-3 ">
                      <Ratings rating={4} />
                    </div>
                    <div className="grid grid-cols-2  items-start gap-x-3 ">
                      <div className=" mt-1 text-gray2 font-medium text-[13px]">
                        Model: {productSku}
                      </div>
                    </div>
                    <div className="mt-5">
                      <h3 className=" mb-[9px] font-semibold text-[18px] leading-[26px]">
                        {brandName}
                      </h3>
                      <p className="text-[15px] leading-[22px] mb-[14px]">
                        {productName}
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" gap-[10px] w-full">
                  <Button
                    variant="outline"
                    className=" text-[13px] border-blue2 rounded-[9px] w-full
                    "
                    onClick={() => {
                      let copyOfArr = [...temporaryPackageProducts];
                      copyOfArr?.splice(currentProductIndex, 1, pkg);
                      dispatch(setPackageProducts(copyOfArr));
                      closeSheet();
                      toast({
                        title: "Product Swapped Successfully",
                      });
                    }}
                  >
                    Select
                  </Button>
                </div>
              </div>
            );
          })}
      </>
    );
  };

  return (
    <SheetContent className="max-w-[500px] p-0 rounded-20">
      <SheetTitle className="px-[30px] pt-[25px] pb-[22px] border-b border-gray21">
        <div className=" gap-[10px] items-center inline-flex text-[25px] leading-[37px] font-medium">
          Current Selection
        </div>
      </SheetTitle>
      <div className="px-8 py-[15px] ">
        <div>
          <div className="flex gap-7 mb-[17px]">
            <div className=" w-[60%] relative  h-full max-h-[152px] max-[152px]">
              <DynamicImage
                src={ currentProduct?.thumbnail || NoImage.src}
                alt="product"
                width={100}
                height={100}
                objectFit="contain"
                className="max-h-[132px] w-full max-[152px] object-contain mx-0 my-auto"
              />
            </div>
            <div>
              <div className="grid grid-cols-1 items-start gap-x-3 ">
                <div>
                  <h3 className=" text-[15px] font-semibold text-black2  leading-[23px]">
                    {currentProduct?.productName}
                  </h3>
                  <div className=" mt-1 text-gray2 font-medium text-[13px]">
                    Model: {currentProduct?.SKU}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="mb-[14px] text-[16px] leading-[24px] text-gray6 font-bold">
            Select a different item:
          </h3>
          <div className=" flex flex-col gap-[26px] overflow-auto pr-[5px] max-h-343">
            {isFetching ? <PackageSkeleton /> : <SwapProductCard />}
            {!isFetching && isEmpty && <NoResultFound />}
          </div>
        </div>
      </div>
    </SheetContent>
  );
};

export default SwapProductSheet;
