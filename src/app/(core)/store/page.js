"use client";
import AllStore from "@/components/Store/AllStore";
import { useSelector } from "react-redux";
const Store = () => {
  const storeListData = useSelector((state) => state.storeList);
  return <AllStore storeListsData={storeListData} />;
};

export default Store;