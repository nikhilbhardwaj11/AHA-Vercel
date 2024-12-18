import Image from "next/image";
import NoImage from "@/assets/images/no-image.webp";
import { formatDate } from "@/lib/utils";
import Loader from "../Loader";
import { useQueryParams } from "@/utils/useQueryParams";
import { useGetOrderByIdQuery } from "@/redux/apiSlices/orderApis";
import { Button } from "../ui/button";

const ProductDetail = ({ data }) => {
  return (
    <div className="pt-[20px] pb-[17px] flex gap-3 lg:pt-[8px]">
      <div className="text-[16px] leading-[26px] text-blue3 flex-1 lg:text-[13px]">
        <div>
          <p className="mb-3 lg:mb-2">
            <span className="font-semibold">Date Ordered:</span> {formatDate(data?.orderDate)}
          </p>
          <p className="mb-3 lg:mb-2">
            <span className="font-semibold">Order Total:</span> ${data?.totalAmount}
          </p>
          <p className="mb-3 lg:mb-2">
            <span className="font-semibold">Payment:</span> {data?.paymentMethod}
          </p>
          <p className="mb-3 lg:mb-2">
            <span className="font-semibold">Order Origin: </span> NA
          </p>
        </div>
        <Button className="w-full max-w-[348px] text-blue3 border-blue3 border bg-transparent hover:bg-inherit rounded-[8px] font-medium text-[13px] leading-[20px]">
          Cancel Order
        </Button>
      </div>
      <div className="inline-flex flex-col justify-between items-end flex-1 max-w-[360px]">
        <div className="text-[16px] leading-[26px] w-full text-blue3 lg:text-[13px]">
          <p className="mb-3 lg:mb-2 w-full flex justify-between gap-2 font-semibold">
            <span className="font-semibold">Subtotal</span>
            <span className="text-black">${data?.subTotal}</span>
          </p>
          <p className="mb-3 lg:mb-2 w-full flex justify-between gap-2">
            <span>Savings</span>
            <span className="text-black">-${data?.savings}</span>
          </p>
          <p className="mb-3 lg:mb-2 w-full flex justify-between gap-2">
            <span>Delivery</span>
            <span className="text-black">${data?.deliveryCharge}</span>
          </p>
          <p className="mb-3 lg:mb-2 w-full flex justify-between gap-2">
            <span>Sales Tax</span>
            <span className="text-black">${data?.tax}</span>
          </p>
          <p className="mb-3 lg:mb-2 w-full py-[10px] flex justify-between gap-2 font-semibold border-t border-gray14">
            <span className="font-semibold">Total</span>
            <span className="text-black">${data?.totalAmount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Delivery = ({ data, item, index }) => {
  return (
    <div className="lg:px-4 ">
      <div className="flex gap-5 justify-between mlg:flex-col pb-10 lg:px-4 lg:flex-row lg:pt-4 lg:pb-4 lg:rounded-10 lg:bg-white md:flex-col" key={index}>
      <div className="flex-1 max-w-[453px] mlg:max-w-full">
        <div className="flex gap-4 text-blue3 pr-[10px] items-start">
          <Image
            width={78}
            height={97}
            src={item?.productImages[0]?.imageurl || NoImage}
            alt="product-img"
            className="w-[76px] h-auto object-contain"
          />
          <div>
            <h4 className="font-semibold text-[16px] leading-[24px] mb-2">
              {item?.productName}
            </h4>
            <div className="flex justify-between items-center mb-2">
              <p className="text-[15px] leading-[22px]">Qty: {item?.quantity}</p>
              <h4 className="font-semibold text-[20px] leading-[29px]">
                ${item?.price}
              </h4>
            </div>
            <p className="text-gray23 text-[13px] leading-[18px] underline mb-2">
              Info & Guides
            </p>
            <div className="mlg:grid mlg:grid-cols-2 mlg:gap-3 slg:grid-cols-1 md:grid-cols-2 mob:grid-cols-1 ">
              <Button className="mb-2 w-full max-w-[348px] text-blue3 border-blue3 border bg-transparent hover:bg-inherit rounded-[8px] font-medium text-[13px] leading-[20px]">
                Buy Again
              </Button>
              <Button className="w-full max-w-[348px] text-blue3 border-blue3 border bg-transparent hover:bg-inherit rounded-[8px] font-medium text-[13px] leading-[20px]">
                Add Protection Plan
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[398px] flex-1 text-blue3 mlg:max-w-full">
        <div className="flex justify-between mb-[16px]">
          <div className="text-center max-w-[99px] w-full">
            <span className="mb-[9px] bg-green1 font-bold text-[16px] text-white rounded-full w-[34px] h-[34px] inline-flex items-center justify-center">
              1
            </span>
            <p className="font-semibold text-[10px] leading-[15px]">Processed</p>
          </div>
          <div className="text-center max-w-[99px] w-full">
            <span className="mb-[9px] bg-green1 font-bold text-[16px] text-white rounded-full w-[34px] h-[34px] inline-flex items-center justify-center">
              2
            </span>
            <p className="font-semibold text-[10px] leading-[15px]">Delivery Window Scheduled</p>
          </div>
          <div className="text-center max-w-[99px] w-full">
            <span className="mb-[9px] bg-gray15 font-bold text-[16px] text-white rounded-full w-[34px] h-[34px] inline-flex items-center justify-center">
              3
            </span>
            <p className="font-semibold text-[10px] leading-[15px]">Out For Delivery</p>
          </div>
          <div className="text-center max-w-[99px] w-full">
            <span className="mb-[9px] bg-gray15 font-bold text-[16px] text-white rounded-full w-[34px] h-[34px] inline-flex items-center justify-center">
              4
            </span>
            <p className="font-semibold text-[10px] leading-[15px]">Delivered</p>
          </div>
        </div>

        <div className="flex gap-4 py-6">
          <span className=" font-semibold text-[15px] leading-[25px] whitespace-nowrap	">
            Ship to:
          </span>
          <div>
            <p>{data?.billingAddress?.firstName +' '+ data?.billingAddress?.lastName}</p>
             {data?.billingAddress?.address1} {data?.billingAddress?.address2}, {data?.billingAddress?.city} {data?.billingAddress?.state} {data?.billingAddress?.zipCode},
             {data?.billingAddress?.country}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mlg:grid-cols-3 lg:grid-cols-2">
          <Button className="col-start-1 col-end-3 w-full mlg:col-end-2 lg:col-end-3 text-white bg-blue2 rounded-[8px] font-medium text-[13px] leading-[20px]">
            Track Shipment
          </Button>
          <Button className=" w-full  text-blue3 border-blue3 border bg-transparent hover:bg-inherit rounded-[8px] font-medium text-[13px] leading-[20px]">
            Cancel Order
          </Button>
          <Button className=" w-full  text-blue3 border-blue3 border bg-transparent hover:bg-inherit rounded-[8px] font-medium text-[13px] leading-[20px]">
            Reschedule Delivery
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
};

const Order = ({ data }) => {
  return (
    <div className="shadow-inset11 rounded-[14px] overflow-hidden mb-[35px] lg:px-4 lg:shadow-none lg:mb-4">
      <div className="flex-wrap gap-[10px] lg:rounded-t-10 shadow-inset11 bg-gray9 py-[15px] pl-[20px] pr-[30px] flex items-center justify-between lg:bg-white lg:shadow-none">
        <div className="flex items-center gap-x-[50px] gap-y-[10px] flex-wrap text-[15px] leading-[22px] text-black">
          <p>
            <span className="font-semibold">Order:</span> AHA {data?.orderId}
          </p>
          <p>{formatDate(data?.createdAt)}</p>
           {/* {data?.orderItems[0].isPickup && <p>
            Purchase location:
            <span className=" font-medium">
             {data?.orderItems[0].storeId}
            </span>
          </p>} */}
        </div>
        <h3 className="text-[19px] font-semibold leading-[28px]">${data?.totalAmount}</h3>
      </div>
      <div className="pt-[2px] pr-[30px] pl-[19px] lg:bg-white lg:rounded-b-10">
        <ProductDetail data={data} />
      </div>
    </div>
  );
};

const OrderFullDetail = () => {
  const { id } = useQueryParams();
  const { data, isFetching } = useGetOrderByIdQuery({
    id,
  });

  return (
    <>{isFetching && <Loader />}
      {data && (
        <div className="bg-white px-[38px] py-[24px] rounded-[15px] flex-1 990:px-[18px]  lg:w-full lg:p-0 lg:bg-transparent">
          <div className="flex justify-between items-center mb-5 lg:px-4">
          <h3 className=" font-semibold text-[24px] leading-[26px] text-blue3">
              Order Details
            </h3>
            <button className="bg-transparent cursor-pointer underline text-blue3 text-[13px] leading-[26px]">
              View Receipt
            </button>
          </div>
          <Order data={data?.data} />
          {data?.data?.orderItems?.map((item, index) => (
            <div key={index} > 
             <div className=" flex  items-center  mb-5 lg:px-4 lg:pt-4">
              <h3 className=" flex-1 font-semibold text-[24px] leading-[26px] text-blue3">
                {item.isPickup?"Pickup": "Delivery"}
              </h3>
              <p className="flex-1 font-semibold max-w-[424px] text-blue3 text-[16px] leading-[26px]">
                {formatDate(item?.deliveryDate)}
              </p>
             </div>
            <Delivery data={data?.data} item={item} index={index} />
          </div>            
          ))}
        </div>
      )}
    </>
  );
};

export default OrderFullDetail;
