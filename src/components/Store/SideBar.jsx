import DownArrowIcon from "@/icons/DownArrowIcon";
import LocationIcon from "@/icons/LocationIcon";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu";

const   Row = ({ pageLink }) => {
  return (
    <div className="text-black4 text-[15px] p-[10px] leading-[22px] flex gap-[10px] rounded-[20px] min-h-[62px]  items-center  lg:min-h-max lg:p-[6px]">
      <span className="shadow-2 min-w-[40px] h-[40px] inline-flex items-center justify-center rounded-[14px]">
        <LocationIcon />
      </span>
      <p className=" text-[15px] leading-[22px] font-semibold lg:text-[12px] lg:leading-4">{pageLink}</p>
    </div>
  );
};

const SideBar = ({ storeListsData }) => {
  const [open, setOpen] = useState(false);
  const handleDropdownChange = (isOpen) => {
    setOpen(isOpen);
  };
  return (
    <div className="flex flex-col gap-[30px] flex-1 max-w-[300px] sticky top-[114px] pr-[8px] rounded-[15px] bg-white py-2 overflow-hidden lg:rounded-[10px] lg:px-0 lg:self-end  border z-[1]  ">
      <div className=" py-[18px]  pr-[5px] pl-[26px]  grid gap-[7px] max-h-StoreSideBar overflow-auto lg:hidden">
        <Link href={"/store"}>
          <Row pageLink="All Stores" />
        </Link>
        {storeListsData?.map((store, index) => (
          <Link key={store?.id} href={`/store/${store?.id}`}>
            <Row pageLink={store?.storeName} />
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex">
        {/* Start of Dropdown mobile UI */}
        <DropdownMenu
          open={open}
          onOpenChange={handleDropdownChange}
        >
          <DropdownMenuTrigger className=" focus-visible:outline-none lg:px-4 lg:w-full">
            <div className="flex items-center gap-3 text-base lg:text-[14px] lg:justify-between	">
              All Stores
              <DownArrowIcon height="6.7px" width="11.1px" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="test w-full">
            <DropdownMenuItem className="cursor-pointer flex-col items-start lg:p-0">
              {storeListsData?.map((store, index) => (
                <Link key={store?.id} href={`/store/${store?.id}`} className="lg:w-full">
                  <Row pageLink={store?.storeName} />
                </Link>
              ))}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* End of Dropdown mobile UI */}
      </div>
    </div>
  );
};

export default SideBar;
