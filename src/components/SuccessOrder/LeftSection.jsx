import DummyProduct from "@/assets/images/category-card-product-img1.png";
import EditIcon from "@/assets/images/edit-icon.svg";
import PrintIcon from "@/assets/images/print-icon.svg";
import StoreIcon from "@/assets/images/store-icon.svg";
import TipsIcon1 from "@/assets/images/tips-icon-1.svg";
import TipsIcon2 from "@/assets/images/tips-icon-2.svg";
import TipsIcon3 from "@/assets/images/tips-icon-3.svg";
import TipsIcon4 from "@/assets/images/tips-icon-4.svg";
import TipsIcon5 from "@/assets/images/tips-icon-5.svg";
import TipsMainIcon from "@/assets/images/tips-main-icon.svg";
import TruckIcon from "@/assets/images/truck-icon.svg";
import { useGetOrderByIdQuery } from "@/redux/apiSlices/orderApis";

import Image from "next/image";
import Loader from "../Loader";

const LeftSection = ({ orderId }) => {
  const { data, isFetching } = useGetOrderByIdQuery({
    id: orderId,
  });
  const { data: orderDetails } = data || {};
  const {
    user,
    totalAmount,
    shippingAddress,
    orderItems = [],
  } = orderDetails || {};

  const {
    firstName,
    lastName,
    address1,
    address2,
    city,
    state,
    zipCode,
    mobile,
  } = shippingAddress || {};

  const shippableProducts = orderItems.filter((product) => !product.isPickup);
  const storePickupProducts = orderItems.filter((product) => product.isPickup);

  const productList = (list) => {
    return list.map(
      ({
        deliveryDate,
        id,
        productName,
        productSKU,
        total,
        quantity,
        productImages,
      }) => (
        <div key={id}>
          <p className=" mb-[5px] text-[15px] leading-[22px]">Arriving</p>
          <h5 className=" mb-6 text-[17px] leading-[25px] font-semibold">
            {deliveryDate || "--"}
          </h5>
          <div className="flex gap-[10px] justify-between mb-[30px]">
            <div className=" flex gap-[25px] ">
              <Image
                src={productImages[0]?.thumbnail || DummyProduct}
                alt="product-image"
                width={75}
                height={143}
                className=" h-[143px] w-[75px] object-contain"
              />
              <div>
                <h4 className=" text-[17px] leading-[21px] font-bold max-w-[330px] mb-[6px]">
                  {productName}
                </h4>
                <h5 className="text-[15px] leading-[22px] mb-2">
                  Qty : {quantity}
                </h5>
                <p className="text-[15px] leading-[22px]">
                  Model: {productSKU}
                </p>
              </div>
            </div>
            <h3 className="text-[20px] leading-[30px] font-semibold">
              ${total}
            </h3>
          </div>
        </div>
      )
    );
  };
  return (
    <div className="flex-1 text-blue3">
      {isFetching && <Loader />}
      <div className=" pt-[24px] pb-[22px] pr-[22px] pl-[40px] rounded-[13px] bg-white lg:px-4 lg:py-3">
        <div className="flex justify-between gap-3  ">
          <h2 className=" text-[32px] leading-[34px] font-medium pt-[6px] pb-4 lg:text-[18px] lg:leading-[27px] lg:pb-[5px]">
            Your order has been placed successfully!
          </h2>
          {/* <button className=" inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full lg:w-[38px] lg:h-[38px] ">
            <Image src={PrintIcon} alt="icon" />
          </button> */}
        </div>
        <h4 className=" text-[17px] leading-[25px] font-semibold mb-[2px] lg:text-[13px] lg:leading-[19px] lg:mb-1">
          Confirmation has been sent to <br></br> {user?.email}
        </h4>
        <p className=" text-[13px] leading-[17px] max-w-[80%] lg:text-[12px] lg:leading-[18px] lg:max-w-full">
          If you do not receive an email confirmation within two minutes, please
          refresh your inbox and check your spam or junk folder.
        </p>
      </div>
      <div className="pl-[40px] text-[14px] font-medium flex justify-between gap-3 pt-[17px] pb-[22px] items-center lg:text-[16px] lg:pl-0 lg:gap-y-0 lg:gap-x-3 lg:flex-wrap">
        <p className="leading-[25px]">
          Order Number: <span className="font-semibold">#{orderId}</span>
        </p>
        <p className="leading-[25px]">
          Order Total: <span className="font-semibold">${totalAmount}</span>
        </p>
      </div>

      {shippableProducts.length > 0 && (
        <div>
          <div className="lg:flex gap-3 hidden mb-3">
            <Image
              src={TruckIcon}
              alt="icon"
              className="  w-[26px] h-[18px] hidden lg:block lg:mt-1"
            />
            <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 lg:mb-0 ">
              Delivery Address
            </h4>
          </div>
          <div className="flex gap-[25px] pl-[40px] mb-5 lg:p-0">
            <Image
              src={TruckIcon}
              alt="icon"
              className=" mt-[27px] w-[26px] h-[18px] lg:hidden"
            />
            <div className=" py-6 flex-1  rounded-[13px] px-8 bg-white lg:py-4 lg:px-5">
              <div className=" relative border-b border-gray18 pb-[14px] mb-[13px]">
                <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 lg:hidden ">
                  Delivery Address
                </h4>
                <button className=" absolute top-0 right-0 inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full">
                  <Image src={EditIcon} alt="edit-icon" />
                </button>
                <div className=" text-[15px] text-blue3">
                  <p className=" font-medium">
                    {firstName} {lastName}
                  </p>
                  <p>
                    {address1} {address2}{" "}
                  </p>
                  <p>
                    {city}, {state} {zipCode}
                  </p>
                  <p>{mobile}</p>
                </div>
              </div>
              {productList(shippableProducts)}
              <div className="text-[15px] leading-[22px] lg:text-[12px] lg:leading-[18px]">
                <p className=" font-medium">What&apos;s Next?</p>
                <p>
                  We will contact you via phone or text with an estimated 4-hour
                  delivery window one business day prior to your scheduled
                  delivery date.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {storePickupProducts.length > 0 && (
        <div>
          <div className=" hidden lg:flex gap-3 ">
            <Image src={StoreIcon} alt="icon" className=" w-[26px] h-[26px]" />
            <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 ">
              In Store Pickup
            </h4>
          </div>
          <div className="flex gap-[25px] pl-[40px] mb-5 lg:p-0">
            <div className=" py-6 flex-1  rounded-[13px] px-8 bg-white lg:py-4 lg:px-5">
              <div className=" relative border-b border-gray18 pb-[14px] mb-[13px]">
                <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 lg:hidden ">
                  In Store Pickup
                </h4>
                <button className=" absolute top-0 right-0 inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full">
                  <Image src={EditIcon} alt="edit-icon" />
                </button>
                <div className=" text-[15px] text-blue3">
                  <p className=" text-gray15">Pick up at:</p>
                  <p className=" font-medium ">Concord Store</p>
                  <p>1505 Willow Pass Rd, Concord, CA </p>
                  <p>94520-5224</p>
                  <p className=" font-medium ">
                    Store Hours Today: 6am - 10 pm
                  </p>
                </div>
              </div>
              {productList(storePickupProducts)}
            </div>
          </div>
        </div>
      )}
      <div>
        <div className=" hidden lg:flex gap-3 mb-4">
          <Image
            src={TipsMainIcon}
            alt="icon"
            className="  w-[26px] h-[26px] lg:block  hidden"
          />
          <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-7 ">
            Tips For Your Delivery
          </h4>
        </div>
        <div className="flex gap-[25px] pl-[40px] mb-5 lg:p-0">
          <Image
            src={TipsMainIcon}
            alt="icon"
            className=" mt-[27px] w-[26px] h-[26px] lg:hidden"
          />

          <div className=" py-6 flex-1  rounded-[13px] px-8 bg-white">
            <div className=" pb-[14px]">
              <h4 className=" text-blue3 text-[17px] lg:hidden  leading-[25px] font-semibold mb-7 ">
                Tips For Your Delivery
              </h4>
              <div className=" grid grid-cols-2 gap-x-[46px] gap-y-[24px] sm:flex sm:flex-col">
                <div className="flex gap-4">
                  <Image
                    src={TipsIcon1}
                    alt="icon"
                    className=" w-[32px] h-[32px]"
                  />
                  <p className="text-[15px]  leading-[22px]">
                    Review your appliance check list for the correct connection
                    and installation details
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={TipsIcon2}
                    alt="icon"
                    className=" w-[32px] h-[32px]"
                  />
                  <p className="text-[15px]  leading-[22px]">
                    Make sure an 18+ is home to accept the delivery
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={TipsIcon3}
                    alt="icon"
                    className=" w-[32px] h-[32px]"
                  />
                  <p className="text-[15px]  leading-[22px]">
                    Empty and unplug your old Appliance
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={TipsIcon4}
                    alt="icon"
                    className=" w-[32px] h-[32px]"
                  />
                  <p className="text-[15px]  leading-[22px]">
                    Clear the delivery path of obstacles
                  </p>
                </div>

                <div className="flex gap-4 col-start-1 col-end-3">
                  <Image
                    src={TipsIcon5}
                    alt="icon"
                    className=" w-[32px] h-[32px]"
                  />
                  <p className="text-[15px]  leading-[22px]">
                    <span className="font-semibold">Easy Returns:</span> You
                    will have 48 hours to return your appliance(s){" "}
                    <span className=" text-red1">if there are any</span>&nbsp;
                    damages or defects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-[14px] pl-[95px]">
        <p className=" text-[15px] leading-[22px] font-medium ">
          <b>Need to cancel?</b>&nbsp;
          <button className=" underline">View Order in My Account</button>
        </p>
        <p className=" text-[15px] leading-[22px] font-medium ">
          It could take about 5 minutes for order details to be available in My
          Account
        </p>
      </div>
    </div>
  );
};

export default LeftSection;
