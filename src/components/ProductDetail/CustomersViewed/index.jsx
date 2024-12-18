import useRenderProductRatings from "@/hooks/useRenderProductRating";
import ViewedProductSlider from "./ViewedProductSlider";

const CustomersViewed = ({ heading, products }) => {
  useRenderProductRatings(products);
  return (
    <div className="  my-0 mx-auto py-6 lg:pb-0 overflow-auto">
      <h3 className="text-2xl font-semibold leading-[38px] mb-[21px] px-9 lg:pl-0 lg:text-[16px] lg:leading-[23px] lg:mb-[5px]">
        {heading}
      </h3>
      <div className=" bg-white rounded-[10px] pt-6 px-5 flex-wrap gap-2 flex lg:bg-transparent lg:p-0">
        <ViewedProductSlider products={products} />
      </div>
    </div>
  );
};

export default CustomersViewed;
