import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const useQueryParams = () => {
  const searchParams = useSearchParams();
  const currentRoute = usePathname();
  const router = useRouter();

  const getParam = (param, defaultValue = "") =>
    searchParams.get(param) || defaultValue;

  const limit = Number(getParam("limit", 20));
  const page = Number(getParam("page", 1));
  const sortField = getParam("sortField");
  const sortOrder = getParam("sortOrder");
  const filterBy = getParam("filterBy");
  const filterValue = getParam("filterValue");
  const search = getParam("search");
  const brandIds = getParam("brandIds");
  const id = getParam("id");
  const minPrice = getParam("minPrice");
  const maxPrice = getParam("maxPrice");
  const onDisplay = getParam("onDisplay");
  const isAvailabilty = getParam("isAvailabilty");
  const inStore = getParam("inStore");
  const fieldIds = getParam("fieldIds");
  const fieldValueIds = getParam("fieldValueIds");
  const filterSubCategoryId = getParam("filterSubCategoryId");
  const keyword = getParam("keyword");
  const sort = getParam("sort");
  const order = getParam("order");
  const categoryIds = getParam("categoryIds");
  const rebateIds = getParam("rebateIds");
  const validUntil = getParam("validUntil");
  const isExpired = getParam("isExpired");
  const h = getParam("h");
  const w = getParam("w");
  const d = getParam("d");
  const dimensions = { h, w, d };

  const setQueryParams = (params) => {
    if (!params || Object.keys(params).length === 0) return;

    const newParams = new URLSearchParams(searchParams);

    // Update the parameters directly
    Object.entries(params).forEach(([key, value]) => {
      value !== undefined ? newParams.set(key, value) : newParams.delete(key);
    });

    // Replace the current route with the new query string
    router.replace(`${currentRoute}?${newParams}`, { scroll: false });
  };

  const clearAllParams = () => {
    router.replace(currentRoute, undefined, { scroll: false });
  };

  return {
    limit,
    page,
    sortField,
    sortOrder,
    filterBy,
    filterValue,
    search,
    brandIds,
    id,
    minPrice,
    maxPrice,
    onDisplay,
    isAvailabilty,
    inStore,
    fieldIds,
    fieldValueIds,
    filterSubCategoryId,
    keyword,
    sort,
    order,
    categoryIds,
    rebateIds,
    validUntil,
    isExpired,
    dimensions,
    setQueryParams,
    clearAllParams,
  };
};
