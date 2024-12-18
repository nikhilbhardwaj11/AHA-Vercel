import AccountInfoIcon from "@/icons/OrderDetail/AccountInfoIcon";
import AddressBookIcon from "@/icons/OrderDetail/AddressBookIcon";
import ContactUsIcon from "@/icons/OrderDetail/ContactUsIcon";
import FaqIcon from "@/icons/OrderDetail/FaqIcon";
import InstallationIcon from "@/icons/OrderDetail/InstallationIcon";
import MyOrderIcon from "@/icons/OrderDetail/MyOrderIcon";
import ReturnIcon from "@/icons/OrderDetail/ReturnIcon";
import StoreLocationIcon from "@/icons/OrderDetail/StoreLocationIcon";
import WarrantySupportIcon from "@/icons/OrderDetail/WarrantySupportIcon";

const Row = ({ pageLink, children }) => {
  return (
    <div className="text-black4 text-[15px] p-[10px] leading-[22px] flex gap-[10px] rounded-[20px] min-h-[62px]  items-center">
      <span className=" shadow-2 w-[40px] h-[40px] inline-flex items-center justify-center rounded-[14px]">
        {children}
      </span>
      <p className=" text-[15px] leading-[22px] font-semibold">{pageLink}</p>
    </div>
  );
};

const FaqsSideBar = () => {
  return (
    <div className="flex flex-col gap-[16px] flex-1 max-w-[300px] ">
      <div className=" py-[12px]  pr-[15px] pl-[26px] rounded-[15px] grid  bg-white">
        <Row pageLink="Ordering" className="bg-gray9 ">
          <MyOrderIcon />
        </Row>
        <Row pageLink="Shipping & Returns">
          <ReturnIcon />
        </Row>
        <Row pageLink="Warranty & Services">
          <WarrantySupportIcon />
        </Row>
        <Row pageLink="Customer Support">
          <AccountInfoIcon />
        </Row>

        <Row pageLink="Privacy & Policies">
          <AddressBookIcon />
        </Row>
      </div>
      <div className=" py-[12px]  pr-[15px] pl-[26px] rounded-[15px] grid gap-[7px] bg-white">
        <a
          href="tel:+18663044449"
          aria-label="call +18663044449"
        >
          <Row pageLink="(866) 304-4449">
            <ContactUsIcon />
          </Row>
        </a>
       
        <Row pageLink="Store Locations">
          <StoreLocationIcon />
        </Row>
      
        <a
          href="/contact"
        >
          <Row pageLink="Email Us">
            <InstallationIcon />
          </Row>
        </a>
        <Row pageLink="Chat">
          <FaqIcon />
        </Row>
      </div>
    </div>
  );
};

export default FaqsSideBar;
