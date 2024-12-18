"use client";
import StoreLocation from "@/components/Store/StoreLocation";
import { useGetStoreByIdQuery } from "@/redux/apiSlices/storeApi";
import { use } from "react";

const StoreById = ({ params }) => {
  const unwrappedParams = use(params);
  const { data, isFetching } = useGetStoreByIdQuery({ id: unwrappedParams?.storeId });
  const storeData = data?.data || [];
  return <StoreLocation storeData={storeData} isFetching={isFetching} />;
};

export default StoreById;