"use client";
import Logo from "@/assets/images/logo.png";
import MobileHeaderLogo from "@/assets/images/mobile-logo.png";
import { Suspense, useCallback, useEffect, useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import HelpUs from "@/components/HelpUs";
import useCartDetails from "@/hooks/useCartDetails";
import useHandleLogout from "@/hooks/useHandleLogout";
import CloseIcon from "@/icons/CloseIcon";
import DownArrowIcon from "@/icons/DownArrowIcon";
import MenuIcon from "@/icons/MenuIcon";
import ShopingCartIcon from "@/icons/ShopingCartIcon";
import StoreIcon from "@/icons/StoreIcon";
import LocationIcon from "@/icons/LocationIconHeader";
import {
  setLastScrollY,
  setShowAddToCart,
  setShowCategory,
} from "@/redux/slices/headerSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import CategoriesList from "./CategoriesList/CategoriesList";
import GlobalSearch from "./GlobalSearch/GlobalSearch";
import TopLinks from "./TopLinks/TopLinks";
import ZipCodeSheet from "./ZipCodeSheet/ZipCodeSheet";

const Header = () => {
  const logout = useHandleLogout();
  const { isLogin } = useSelector((state) => state.auth);
  const userDetails = useSelector((state) => state.userDetails);
  const { getTotalItemsCount } = useCartDetails();
  const totalItemsCount = getTotalItemsCount();
  const dispatch = useDispatch();
  const showAddToCart = useSelector(
    (state) => state.showAddToCart?.showAddToCart
  );
  const showCategory = useSelector((state) => state.showCategory?.showCategory);
  const lastScrollY = useSelector((state) => state.lastScrollY?.lastScrollY);
  const [isToggled, setIsToggled] = useState(true);
  const [open, setOpen] = useState(false);

  const handleDropdownChange = (isOpen) => {
    setOpen(isOpen);
  };
  //Function to toggle the state // Only for mobile UI dont make any changes here
  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };
  const CartCountBadge = ({ count }) => (
    <span className="lg:-top-[6px] lg:-right-[6px] absolute -top-4 right-1 inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-500 text-white text-xs">
      {count}
    </span>
  );
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 140;
    const isScrollingUp = scrollY < scrollThreshold;

    dispatch(setShowCategory(isScrollingUp));
    dispatch(setShowAddToCart(scrollY > scrollThreshold));
    dispatch(setLastScrollY(scrollY));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (isToggled) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
    // Clean up by removing class when component is unmounted
    return () => {
      document.body.classList.add("overflow-hidden");
    };
  }, [isToggled]);

  return (
    <header
      className={`h-[77px] main-header z-10 fixed right-0 left-0 top-0 lg:h-[109px] ${
        showAddToCart ? "hide" : ""
      }`}
    >
      <div
        className={`lg:hidden blue-header bg-blue1 text-white relative z-[1] ${
          showCategory ? "show" : "hide"
        }`}
      >
        <div className=" text-xs max-w-1440 px-5 mx-auto flex justify-between items-center py-p10 gap-3 flex-wrap	">
          <TopLinks />
        </div>
      </div>
      <div
        className={`search-header border-b border-b-light-gray bg-white text-white relative z-[2] ${
          showCategory ? "show" : "hide"
        }`}
      >
        <div className="container max-w-1440 px-5 justify-center flex items-center gap-7 py-p18 text-blue2 lg:gap-3 lg:px-4 lg:py-2">
          <button className="hidden lg:block" onClick={toggle}>
            {isToggled ? (
              <MenuIcon />
            ) : (
              <CloseIcon width="21px" height="21px" />
            )}
          </button>

          <Link href="/" className="lg:hidden">
            <Image src={Logo} alt="logo" width={157} />
          </Link>
          <Link href="/" className="hidden lg:block">
            <Image src={MobileHeaderLogo} alt="logo" width={85} />
          </Link>
          <div className="text-xs leading-14 flex items-center gap-2 text-center lg:hidden w-min text-wrap ">
            <span className="min-w-[24px]">
              <StoreIcon />
            </span>
            <ZipCodeSheet type={"store"} />
          </div>
          <Suspense fallback="loading">
            <GlobalSearch />
          </Suspense>
          <div className=" pr-7 border-r border-border-gr lg:hidden">
            <div className="text-xs">
              <HelpUs title="&nbsp;Expert Help" />
            </div>
            <p className="text-sm">(866) 304-4449</p>
          </div>

          <div className=" lg:hidden">
            {!isLogin && (
              <div>
                <p className=" text-[14px]">Hi! Guest</p>
                <Link href="/login" className=" font-bold leading-[20px]">
                  Login
                </Link>
              </div>
            )}
            {isLogin && (
              <DropdownMenu
                open={open}
                onOpenChange={handleDropdownChange}
                className=" lg:hidden"
              >
                <DropdownMenuTrigger className=" focus-visible:outline-none">
                  <div className="flex items-center gap-3 text-base	">
                    Hi {userDetails?.firstName}{" "}
                    <DownArrowIcon height="6.7px" width="11.1px" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/my-account" onClick={() => setOpen(false)}>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  </Link>
                  <DropdownMenuSeparator />

                  <Link href="/my-order" onClick={() => setOpen(false)}>
                    <DropdownMenuLabel>My Orders</DropdownMenuLabel>
                  </Link>
                  <DropdownMenuSeparator />

                  <Link href="/list" onClick={() => setOpen(false)}>
                    <DropdownMenuLabel>List</DropdownMenuLabel>
                  </Link>
                  <DropdownMenuSeparator />

                  <Link href="/my-address" onClick={() => setOpen(false)}>
                    <DropdownMenuLabel>Address Book</DropdownMenuLabel>
                  </Link>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-red-500 cursor-pointer"
                    onClick={logout}
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          <div className="relative inline-flex">
            <Link
              href="/cart"
              className="pl-7 border-l border-border-gr inline-flex lg:border-none lg:pl-0"
            >
              <ShopingCartIcon />
              {totalItemsCount > 0 && (
                <CartCountBadge count={totalItemsCount} />
              )}
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between gap-2 hidden bg-white px-4 border-[#0B62A0] border-t-2">
        <div
          href="/store"
          className="text-[12px] leading-14 flex gap-2 text-center items-center  w-[164px] text-wrap font-semibold text-[#0A223C] "
        >
          <span className="min-w-[10px]">
            <LocationIcon />
          </span>
          <ZipCodeSheet type={"store"} />
        </div>
      </div>
      {/*mobile view */}
      <div
        className={` hidden lg:block transition-all duration-500 linear relative top-0 backdrop-blur-md backdrop-brightness-50   ${
          isToggled ? "left-[-100%]" : "left-[0]"
        }`}
      >
        <div className="max-w-40 w-full bg-light-gray min-h-57 max-h-MobileMenuHeight overflow-auto lg:pb-[20px]">
          <CategoriesList callBack={toggle} />
          <TopLinks />
        </div>
      </div>
      {/* Categories and Sub Categories */}
      <div
        className={` lg:hidden categories-list relative z-0 ${
          showAddToCart ? "hideCategoryHeader" : ""
        } ${showCategory ? "show" : "hide"}`}
      >
        <CategoriesList />
      </div>
    </header>
  );
};

export default Header;
