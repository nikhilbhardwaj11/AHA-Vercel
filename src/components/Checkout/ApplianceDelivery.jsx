import DeliveryIcon from "@/assets/images/delivery-icon.svg";
import EditIcon from "@/assets/images/edit-icon.svg";
import TruckIcon from "@/assets/images/truck-icon.svg";
import { Textarea } from "@/components/ui/textarea";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";
import { DatePicker } from "../DatePicker/DatePicker";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";

const ApplianceDelivery = ({ products = [], onChange }) => {
  const [dates, setDates] = useState([]);
  const [notes, setNotes] = useState("");
  const [editable, setEditable] = useState(false);
  const { deliverProducts } = useSelector((state) => state.orderDetails || {});

  const onSaveClick = () => {
    onChange({ deliverProducts: dates, deliveryNote: notes });
    editable && setEditable(false);
  };

  const onDateChnage = (selectedDate, product) => {
    const isExist = dates.some((pro) => pro.id === product.id);
    if (isExist) {
      setDates((prev) =>
        prev.map((pro) =>
          pro.id === product.id ? { ...pro, deliveryDate: selectedDate } : pro
        )
      );
    } else {
      setDates((prev) => [...prev, { ...product, deliveryDate: selectedDate }]);
    }
  };
  const totalQuantity = useMemo(() => {
    return products.reduce(
      (accumulator, item) => accumulator + item.quantity,
      0
    );
  }, [products, products?.length]);

  return (
    <div className="flex gap-[25px] pl-[25px] mt-[18px] ">
      <Image
        src={DeliveryIcon}
        alt="icon"
        className=" mt-[25px] w-[26px] h-[26px]"
      />
      <div className=" py-6 flex-1 mb-[18px] rounded-[13px] px-8 bg-white">
        {(!deliverProducts || editable) && (
          <div>
            <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 ">
              Appliance Delivery
            </h4>
            <div>
              <div className="flex gap-[40px]">
                <div className=" inline-flex mt-[15px] flex-col items-center gap-y-[10px]">
                  <Image
                    src={TruckIcon}
                    alt="icon"
                    className=" w-[26px] h-[18px]"
                  />
                  <p className=" text-center text-15px leading-[22px] font-semibold text-blue3">
                    {totalQuantity} Items
                  </p>
                </div>
                <div className=" flex-1">
                  {products.length > 0 &&
                    products.map((item) => {
                      const date =
                        dates.find((pro) => item.id === pro.id)?.deliveryDate ||
                        null;
                      return (
                        <div key={item?.id} className="max-w-[330px]">
                          <div className="flex gap-3 flex-wrap mb-[18px]">
                            <div className=" py-[15px] pl-[22px] pr-[15px] inline-flex gap-5 items-center">
                              <Image
                                src={item?.product?.thumbnail || ""}
                                alt="product-img"
                                className="h-[50px] w-auto"
                                height={50}
                                width={50}
                              />
                              <h3 className=" text-[17px] leading-[20px] text-blue3 font-bold">
                                {item?.product?.brand?.brandName}
                                <br /> {item?.product?.categoryName}
                              </h3>
                            </div>
                          </div>
                          {/* <CustomInput label="Select delivery date" /> */}
                          <DatePicker
                            date={date}
                            onChange={(value) => onDateChnage(value, item)}
                          />
                        </div>
                      );
                    })}
                  <Textarea
                    placeholder="Add details that might help us"
                    className="mt-[35px]"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-5">
              <Button
                className="h-[50px] bg-red3   text-[16px] text-white rounded-[5px] w-full max-w-[258px] "
                onClick={onSaveClick}
                disabled={dates.length !== products.length}
              >
                Save Delivery Details
              </Button>
            </div>
          </div>
        )}
        {deliverProducts?.length > 0 && !editable && (
          <div className=" relative">
            <h4 className=" text-blue3 text-[17px]  leading-[25px] font-semibold mb-3 ">
              Appliance Delivery
            </h4>
            <button
              className=" absolute top-0 right-0 inline-flex items-center justify-center w-[50px] h-[50px] shadow-4 rounded-full"
              onClick={() => setEditable(true)}
            >
              <Image src={EditIcon} alt="edit-icon" />
            </button>
            <div className=" text-15px text-blue3">
              {deliverProducts?.map((item) => (
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
                      <h3 className=" text-[17px] leading-[20px] text-blue3 font-bold">
                        {item?.product?.brand?.brandName}
                        <br /> {item?.product?.categoryName}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <span className=" text-[15px] leading-[22px]">
                      {formatDate(item?.deliveryDate, "EEEE, MMMM dd")}
                    </span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <span className=" text-[14px] leading-[22px] font-bold">
                      $3,900.00
                    </span> */}
                  </div>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplianceDelivery;
