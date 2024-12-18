"use client";
import AccountInfoIcon from "@/icons/OrderDetail/AccountInfoIcon";
import AddressBookIcon from "@/icons/OrderDetail/AddressBookIcon";
import ContactUsIcon from "@/icons/OrderDetail/ContactUsIcon";
import FaqIcon from "@/icons/OrderDetail/FaqIcon";
import InstallationIcon from "@/icons/OrderDetail/InstallationIcon";
import ListIcon from "@/icons/OrderDetail/ListIcon";
import MyAccountIcon from "@/icons/OrderDetail/MyAccountIcon";
import MyOrderIcon from "@/icons/OrderDetail/MyOrderIcon";
import ReturnIcon from "@/icons/OrderDetail/ReturnIcon";
import StoreLocationIcon from "@/icons/OrderDetail/StoreLocationIcon";
import WarrantySupportIcon from "@/icons/OrderDetail/WarrantySupportIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "My Account",
    icon: <MyAccountIcon fill={"#000000"} />,
    href: "/my-account",
  },
  { label: "My Orders", icon: <MyOrderIcon />, href: "/my-order" },
  { label: "List", icon: <ListIcon />, href: "/list" },
  { label: "Address Book", icon: <AddressBookIcon />, href: "/my-address" },
];

const links2 = [
  {
    label: "Contact us",
    icon: <ContactUsIcon />,
    href: "/contact",
  },
  { label: "FAQ", icon: <FaqIcon />, href: "/faq" },
  {
    label: "Return & Replacements",
    icon: <ReturnIcon />,
    href: "/return-policy",
  },
  {
    label: "Warranty Support",
    icon: <WarrantySupportIcon />,
    href: "/warranty-support",
  },
  {
    label: "Delivery & Installation",
    icon: <InstallationIcon />,
    href: "/appliance-delivery",
  },
  { label: "Store Location", icon: <StoreLocationIcon />, href: "/store" },
];

const Row = ({ pageLink, children, active, href = "" }) => {
  return (
    <Link
      href={href}
      className={cn(
        "text-black4 text-[15px] p-[10px] leading-[22px] flex gap-[10px] rounded-[20px] min-h-[62px]  items-center lg:min-h-[24px] lg:py-[3px] lg:px-[8px] lg:rounded-[5px]",
        active && "bg-gray32 text-black lg:bg-[#0C2340] lg:text-white"
      )}
    >
      <span className=" lg:hidden shadow-2 w-[40px] h-[40px] inline-flex items-center justify-center rounded-[14px] bg-white">
        {children}
      </span>
      <p className=" text-[15px] leading-[22px] font-semibold lg:whitespace-nowrap lg:text-[12px] lg:leading-[18px]">
        {pageLink}
      </p>
    </Link>
  );
};

const UserSideBar = () => {
  const pathname = usePathname();
  const getLinks = (links) => {
    return links.map(({ label, icon, href }, index) => (
      <Row key={index} pageLink={label} href={href} active={href === pathname}>
        {icon}
      </Row>
    ));
  };
  return (
    <div className="flex flex-col gap-[30px] flex-1 max-w-[300px] sticky top-[95px] lg:max-w-full lg:flex-row lg:overflow-auto lg:gap-[20px] lg:px-[26px] lg:bg-white  lg:top-[57px]">
      <div className=" py-[18px]  pr-[15px] pl-[26px] rounded-[15px] grid gap-[7px] bg-white lg:flex lg:rounded-none lg:py-[15px] lg:px-0 lg:gap-[20px] ">
        {getLinks(links)}
      </div>
      <div className=" py-[18px]  pr-[15px] pl-[26px] rounded-[15px] grid gap-[7px] bg-white lg:flex lg:rounded-none lg:py-[15px] lg:px-0 lg:gap-[20px]">
        {getLinks(links2)}
      </div>
    </div>
  );
};

export default UserSideBar;
