import { useState } from "react";
import StoreIcon from "@/assets/images/store-icon.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { DatePicker } from "../DatePicker/DatePicker";
import EditIcon from "@/assets/images/edit-icon.svg";
import { formatDate } from "date-fns";
import { useSelector } from "react-redux";

const StorePickup = ({ products = [], onChange }) => {
  const [date, setDate] = useState(null);
  const [editable, setEditable] = useState(false);
  const { pickUpProducts } = useSelector((state) => state.orderDetails || {});

  const onSaveClick = () => {
    const pickUpProducts = products.map((pro) => ({
      ...pro,
      pickUpDate: date,
    }));
    onChange({ pickUpProducts });
    editable && setEditable(false);
  };

  const onDateChnage = (selectedDate) => {
    setDate(selectedDate);
  };
  return (
    <>
     <div className="lg:flex items-start lg:gap-3 hidden px-4 lg:mt-4">
             <Image
          src={StoreIcon}
          alt="icon"
          className=" w-[26px] h-[26px] lg:inline-block hidden"
        />
             
              <div>
              <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold  ">
                Store Pickup
              </h4>
                <p className=" text-[15px]">San Jose Store</p>
              </div>
              </div>
      <div className="flex gap-[25px] pl-[25px] mt-[18px]  lg:px-4">
        <Image
          src={StoreIcon}
          alt="icon"
          className=" mt-[25px] w-[26px] h-[26px] lg:hidden"
        />
        <div className=" py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white lg:px-4 lg:py-5">
          {(!pickUpProducts || editable) && (
            <div>
            
             
              <div className="lg:hidden">
              <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold  ">
                Store Pickup
              </h4>
                <p className=" text-[15px]">San Jose Store</p>
              </div>

              <div className="max-w-[708px] overflow-auto">
                <div className="flex sm:flex-col w-full ">
                  {products?.map((item) => (
                    <div key={item.id}>
                      <div className=" my-[10px] py-[15px] pl-[0] pr-[15px] grid grid-cols-50 gap-5 items-center lg:m-0">
                        <Image
                          src={item?.product?.thumbnail || ""}
                          height={50}
                          width={50}
                          alt="product-img"
                          className="h-[50px] w-auto"
                        />
                        <h3 className=" text-[15px] leading-[18px] text-blue3 font-semibold lg:text-[14px]">
                          <p>{item?.product?.brand?.brandName}</p>
                          <p>{item?.product?.categoryName}</p>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className=" leading-[22px] mb-[18px]">
                Pickup:{" "}
                <DatePicker
                  label="Select pickup date"
                  date={date}
                  onChange={(value) => onDateChnage(value)}
                  className="max-w-[400px]"
                />
              </p>
              <div className=" text-[15px]">
                <p>
                  <span className=" font-semibold"> What&apos;s Next :</span>
                  We&apos;ll send you an email or text message when your order is ready to pick up. Please bring your ID and original payment method that you used to pay for it for pick up.
                </p>
              </div>
              <div className="flex justify-center mt-5">
                <Button
                  className="h-[50px] bg-red3   text-[16px] text-white rounded-[5px] w-full max-w-[258px] "
                  onClick={onSaveClick}
                  disabled={!date}
                >
                  Confirm Pickup
                </Button>
              </div>
            </div>
          )}
          {pickUpProducts?.length > 0 && !editable && (
            <div className=" relative">
              <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 ">
                Store Pickup
              </h4>
              <button
                className=" absolute top-0 right-0 inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full"
                onClick={() => setEditable(true)}
              >
                <Image src={EditIcon} alt="edit-icon" />
              </button>
              <div className=" text-15px text-blue3 flex">
                {pickUpProducts?.map((item) => (
                  <>
                    <div className="flex gap-3 flex-wrap mb-[18px]">
                      <div className=" py-[15px] pl-[22px] pr-[15px] inline-flex gap-5 items-center">
                        <Image
                          src={item?.product?.thumbnail || ""}
                          alt="product-img"
                          className="h-[50px] w-auto"
                          height={50}
                          width={50}
                        />
                        <h3 className=" text-[15px] leading-[17px] text-blue3 font-bold lg:text-[14px]">
                          {item?.product?.brand?.brandName}
                          <br /> {item?.product?.categoryName}
                        </h3>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div>
                <span className=" text-[15px] leading-[22px]">
                  Pickup:{" "}
                  {formatDate(pickUpProducts[0]?.pickUpDate, "EEEE, MMMM dd")}
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <span className=" text-[14px] leading-[22px] font-bold">
                      $3,900.00
                    </span> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StorePickup;
