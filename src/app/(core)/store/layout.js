"use client";

import Loader from "@/components/Loader";
import SideBar from "@/components/Store/SideBar";
import { useGetStoreListsQuery } from "@/redux/apiSlices/storeApi";
import { setStoreList } from "@/redux/slices/storeSlice";
import React, { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";

export default function StoreLayout({ children }) {
  const { data, isSuccess, isFetching } = useGetStoreListsQuery();
  const dispatch = useDispatch();

  // Memoize the store list data to prevent unnecessary updates
  const storeListsData = useMemo(() => data?.data || [], [data]);

  useEffect(() => {
    if (isSuccess) {
      // Dispatch action only if there is new data
      dispatch(setStoreList(storeListsData));
    }
  }, [isSuccess, storeListsData, dispatch]);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <div className="bg-gray9 lg:bg-mobileBG">
          <div className="flex items-start px-5 max-w-[1446px] gap-[38px] my-0 mx-auto py-[22px] lg:px-4 lg:gap-[20px] lg:flex-col">
            <SideBar storeListsData={storeListsData} />
            {React.cloneElement(children, { storeListsData })}
          </div>
        </div>
      )}
    </>
  );
}
