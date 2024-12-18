import { api } from "./api";

export const productListsApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getProductLists: builder.query({
      query: ({
        limit = 20,
        page = 1,
        slug = "",
        brandIds = "",
        minPrice = "",
        maxPrice = "",
        onDisplay = "",
        isAvailabilty = "",
        inStore = "",
        fieldIds = "",
        fieldValueIds = "",
        filterSubCategoryId = "",
        keyword = "",
        sort = "",
        order = "",
        rebateIds = "",
        dimensions = "",
      }) => ({
        url: `/filterProducts?limit=${limit}&page=${page}&keyword=${keyword}&slug=${slug}&brandIds=${brandIds}&minPrice=${minPrice}&maxPrice=${maxPrice}&onDisplay=${onDisplay}&isAvailabilty=${isAvailabilty}&fieldIds=${fieldIds}&fieldValueIds=${fieldValueIds}&filterSubCategoryId=${filterSubCategoryId}&sort=${sort}&order=${order}&rebateIds=${rebateIds}&dimensions=${dimensions}&inStore=${inStore}`,
        providesTags: ["products"],
      }),
      // serializeQueryArgs: ({ endpointName, queryArgs }) => {
      //   // Serialize query args to cache based on slug
      //   return `${endpointName}-${queryArgs.slug}-${queryArgs.brandIds}-${queryArgs.minPrice}-${queryArgs.maxPrice}-${queryArgs.onDisplay}-${queryArgs.isAvailabilty}-${queryArgs.fieldIds}-${queryArgs.fieldValueIds}-${queryArgs.filterSubCategoryId}-${queryArgs.keyword}-${queryArgs.sort}-${queryArgs.order}-${queryArgs.rebateIds}`;
      // },
      // // merge: (currentCache, newItems) => {
      // //   // Return if there's no new data
      // //   if (!newItems || newItems.data.length === 0) {
      // //     currentCache.isNotFound = true; // Flag when no data
      // //     return;
      // //   }

      // //   // Return newItems if currentCache data already meets length threshold
      // //   if (currentCache?.data?.length >= 24) {
      // //     return newItems;
      // //   }

      // //   // Update pagination and merge new data into currentCache
      // //   currentCache.pagination = newItems.pagination;
      // //   currentCache.data.push(...newItems.data);
      // // },
      // forceRefetch: ({ currentArg, previousArg }) => {
      //   if (!previousArg) return true;
      //   return (
      //     currentArg.page !== previousArg.page ||
      //     currentArg.slug !== previousArg.slug ||
      //     currentArg.brandIds !== previousArg.brandIds ||
      //     currentArg.minPrice !== previousArg.minPrice ||
      //     currentArg.maxPrice !== previousArg.maxPrice ||
      //     currentArg.onDisplay !== previousArg.onDisplay ||
      //     currentArg.isAvailabilty !== previousArg.isAvailabilty ||
      //     currentArg.fieldIds !== previousArg.fieldIds ||
      //     currentArg.fieldValueIds !== previousArg.fieldValueIds ||
      //     currentArg.filterSubCategoryId !== previousArg.filterSubCategoryId ||
      //     currentArg.keyword !== previousArg.keyword ||
      //     currentArg.sort !== previousArg.sort ||
      //     currentArg.order !== previousArg.order ||
      //     currentArg.rebateIds !== previousArg.rebateIds
      //   );
      // },
    }),

    getCompareProducts: builder.query({
      query: ({ id, type }) => `/compareProducts?id=${id}&type=${type}`,
    }),

    getViewedProducts: builder.query({
      query: (categoryId) => {
        const params = categoryId ? `?categoryId=${categoryId}` : "";
        return `/getReviewProducts${params}`;
      },
    }),
  }),
});

export const {
  useGetProductListsQuery,
  useGetCompareProductsQuery,
  useGetViewedProductsQuery,
} = productListsApiSlice;
