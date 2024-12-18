import NoImage from "@/assets/images/no-image.webp";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { useQueryParams } from "@/utils/useQueryParams";
import RightArrow from "@/icons/RightArrow";
import { formatAmount, formatDate } from "@/lib/utils";
import { useGetOrderListQuery } from "@/redux/apiSlices/orderApis";
import Image from "next/image";
import Loader from "../Loader";
import { useEffect, useState } from "react";

const ProductDetail = ({ productDetails }) => {
  const { productName, productSKU, quantity, total, productImages, isPickup } =
    productDetails;

  return (
    <div className="pt-[22px] pb-[17px] flex gap-[10px] justify-between border-b border-b-[#F1F1F1] sm:flex-col">
      <div className="flex gap-[10px] justify-between lg:flex-col lg:w-full">
        <div className="flex gap-[18px]">
          <Image
            width={151}
            height={97}
            objectFit="contain"
            src={productImages[0]?.thumbnail || NoImage}
            alt="product"
            className="w-[157px] 1300:w-[130px] 1300:min-w-[130px] sm:min-w-[119px] sm:w-[119px]"
          />
          <div className="max-w-[520px]">
            <h3 className="text-[15px] leading-[22px] font-semibold two-line-dots mb-[10px]  ">
              {productName}
            </h3>
            {/* <p className="mb-[11px] text-[12px] leading-[20px] text-gray8 ">
            Minimizes fluctuating temperatures by ensuring optimal and uniform
            air circulation in the fridge.
          </p> */}

            {/* {for web} */}
            <div className="flex gap-[28px] text-[14px] flex-wrap lg:hidden">
              <div className="leading-[23px] inline-flex flex-col items-center">
                <h6 className="font-medium text-gray8">Quantity</h6>
                <p className="font-semibold text-black2">{quantity}</p>
              </div>
              <div className="leading-[23px] items-start inline-flex flex-col">
                <h6 className="font-medium text-gray8">Model</h6>
                <p className="font-semibold text-black2">{productSKU}</p>
              </div>
              <div className="leading-[23px] inline-flex flex-col items-start">
                <h6 className="font-medium text-green1">
                  {isPickup ? "Pickup" : "Delivery"}
                </h6>
                {/* <p className="font-semibold text-black2 flex flex-wrap gap-x-[10px]">
                {isPickup
                  ? "Haywards Outlet Center"
                  : `In Transit. Delivery by Apr. 26`}
                <button className="text-red1 underline decoration-red1">
                  Track Now
                </button>
              </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* {for mobile} */}
        <div className=" gap-[28px] text-[14px] flex-wrap hidden lg:flex">
          <div className="leading-[23px] inline-flex flex-col items-center">
            <h6 className="font-medium text-gray8">Quantity</h6>
            <p className="font-semibold text-black2">{quantity}</p>
          </div>
          <div className="leading-[23px] items-start inline-flex flex-col">
            <h6 className="font-medium text-gray8">Model</h6>
            <p className="font-semibold text-black2">{productSKU}</p>
          </div>
          <div className="leading-[23px] inline-flex flex-col items-start">
            <h6 className="font-medium text-green1">
              {isPickup ? "Pickup" : "Delivery"}
            </h6>
            {/* <p className="font-semibold text-black2 flex flex-wrap gap-x-[10px]">
                {isPickup
                  ? "Haywards Outlet Center"
                  : `In Transit. Delivery by Apr. 26`}
                <button className="text-red1 underline decoration-red1">
                  Track Now
                </button>
              </p> */}
          </div>
        </div>
        <div className="inline-flex flex-col justify-between items-end sm:items-start">
          <div className="leading-[23px] inline-flex flex-col items-end">
            <h6 className="font-medium text-[12px] leading-[16px] mb-2 text-gray8">
              Total Amount
            </h6>
            <p className="font-semibold text-[15px] text-black2">
              {formatAmount(total)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Order = ({ orderDetails }) => {
  const { id, orderDate, totalAmount, orderItems = [] } = orderDetails;
  return (
    <div className="shadow-inset11 rounded-[14px] overflow-hidden mt-10 lg:mt-4 lg:shadow-none lg:bg-white">
      <div className="shadow-inset11 bg-gray9 py-[15px] pl-[20px] pr-[30px] flex items-center justify-between lg:shadow-none lg:bg-[#F5F5F5]">
        <div className="flex items-center gap-[50px] text-[15px] leading-[22px] text-black">
          <p>
            <span className="font-semibold">Order:</span> AHA{id}{" "}
          </p>
          <p>{formatDate(orderDate)}</p>
          {/* <p>
            Purchase location:{" "}
            <span className="font-medium">San Jose Store</span>
          </p> */}
        </div>
        <h3 className="text-[19px] font-semibold leading-[28px]">
          {formatAmount(totalAmount)}
        </h3>
      </div>
      <div className="pt-[2px] pr-[30px] pl-[19px] lg:pr-[19px]">
        {orderItems.map((product) => (
          <ProductDetail key={product.id} productDetails={product} />
        ))}
      </div>

      <div className="flex items-center justify-end py-3 pr-5">
        <button className="py-[8px] px-[20px] pr-[10px] cursor-pointer shadow-inset8 rounded-[64px]">
          <Link
            href={`/my-order/AHA${id}?id=${id}`}
            className="flex text-[12px] gap-[10px] items-center "
          >
            See Details
            <span className="w-[22px] h-[22px] inline-flex items-center justify-center bg-gray13 rounded-full">
              <RightArrow width="7px" height="9px" color="#939393" />
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

const OrderDetail = () => {
  const [selectedSortValue, setSelectedSortValue] = useState("Asc");

  // Initialize query parameters
  const { limit = 5, page = 0, setQueryParams } = useQueryParams();

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setQueryParams({ page: newPage, limit });
    }
  };

  useEffect(() => {
    setQueryParams({ page: 1, limit: 5 });
  }, []);

  const { data, isFetching } = useGetOrderListQuery({
    limit,
    page,
  });

  // Pagination data from API
  const paginationData = data?.pagination;
  const orderList = data?.data || [];

  const { currentPage = 1, totalPages = paginationData?.totalPages } =
    paginationData || {};

  // Event handler for selection change
  const handleSortChange = (event) => {
    setSelectedSortValue(event);
  };

  return (
    <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px] lg:w-full lg:pt-0 lg:bg-transparent lg:px-4">
      {isFetching && <Loader />}
      <div className="flex justify-between items-center mb-5 lg:mb-0">
        <h3 className="font-semibold text-[24px] leading-[26px] text-blue3 lg:text-[17px] lg:leading-[24px]">
          My Orders
        </h3>
        <div className="inline-flex gap-[15px] items-center">
          <p className="text-gray23 font-medium text-[15px] leading-[23px] lg:text-[13px] lg:leading-[24px]">
            Sort By
          </p>
          <Select onValueChange={handleSortChange} value={selectedSortValue}>
            <SelectTrigger className="w-[180px] border-gray7 rounded-[10px] h-11">
              <SelectValue placeholder="None" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup id="selectOrder">
                <SelectItem value="Asc">Low to High</SelectItem>
                <SelectItem value="Desc">High to Low</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        {orderList.length > 0 &&
          orderList.map((orderDetails, index) => (
            <Order key={index} orderDetails={orderDetails} />
          ))}
      </div>
      {data && (
        <div className="py-[27px] flex justify-between">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() =>
                    currentPage > 1 && handlePageChange(currentPage - 1)
                  } // Prevent click if disabled
                  className={currentPage === 1 ? "disabled" : ""}
                  style={{
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                    backgroundColor: currentPage === 1 ? "#ccc" : "",
                  }}
                  disabled={currentPage === 1}
                />
              </PaginationItem>

              {/* Dynamic Page Numbers: Show only 5 pages */}
              {(() => {
                // Start and end page numbers for pagination
                const maxVisiblePages = 5;
                let startPage = Math.max(
                  currentPage - Math.floor(maxVisiblePages / 2),
                  1
                );
                let endPage = Math.min(
                  startPage + maxVisiblePages - 1,
                  totalPages
                );

                // Adjust the start page if we are near the last page
                if (endPage - startPage + 1 < maxVisiblePages) {
                  startPage = Math.max(endPage - maxVisiblePages + 1, 1);
                }

                return Array.from(
                  { length: endPage - startPage + 1 },
                  (_, index) => {
                    const pageNumber = startPage + index;
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink
                          href="#"
                          isActive={currentPage === pageNumber}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }
                );
              })()}

              {/* Ellipsis for many pages */}
              {currentPage < totalPages - 2 && totalPages > 5 && (
                <PaginationItem className="h-full">
                  <PaginationEllipsis />
                </PaginationItem>
              )}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    currentPage < totalPages &&
                    handlePageChange(currentPage + 1)
                  } // Prevent click if disabled
                  className={currentPage === totalPages ? "disabled" : ""}
                  style={{
                    cursor:
                      currentPage === totalPages ? "not-allowed" : "pointer",
                    backgroundColor: currentPage === totalPages ? "#ccc" : "",
                  }}
                  disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <Select>
            <SelectTrigger className="w-[180px] h-[44px] rounded-[64px] pl-[22px] shadow-inset8 border-[#F8F8F8]">
              <p>Showing </p>
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
