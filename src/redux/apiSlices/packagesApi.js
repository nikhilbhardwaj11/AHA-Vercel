import { api } from "./api";

export const packagesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getPackagesList: builder.query({
      query: ({
        limit = 20,
        page = 1,
        sort = "",
        order = "",
        brandIds = "",
        minPrice = "",
        maxPrice = "",
        categoryIds = "",
      }) => ({
        url: `/getBundleListWebsite?limit=${limit}&page=${page}&sort=${sort}&order=${order}&brandIds=${brandIds}&minPrice=${minPrice}&maxPrice=${maxPrice}&categoryIds=${categoryIds}`,
      }),

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Serialize query args to cache based on slug
        return `${endpointName}-${queryArgs.sort}-${queryArgs.order}-${queryArgs.brandIds}-${queryArgs.minPrice}-${queryArgs.maxPrice}-${queryArgs.categoryIds}`;
      },
      // merge: (currentCache, newItems) => {
      //   // Return if there's no new data
      //   if (!newItems || newItems.data.length === 0) {
      //     currentCache.isNotFound = true; // Flag when no data
      //     return;
      //   }
      //   // Return newItems if currentCache data already meets length threshold
      //   if (currentCache?.data?.length >= 24) {
      //     return newItems;
      //   }
      //   // Update pagination and merge new data into currentCache
      //   currentCache.pagination = newItems.pagination;
      //   currentCache.data.push(...newItems.data);
      // },
      forceRefetch: ({ currentArg, previousArg }) => {
        if (!previousArg) return true;
        return (
          currentArg.page !== previousArg.page ||
          currentArg.sort !== previousArg.sort ||
          currentArg.order !== previousArg.order ||
          currentArg.brandIds !== previousArg.brandIds ||
          currentArg.minPrice !== previousArg.minPrice ||
          currentArg.maxPrice !== previousArg.maxPrice ||
          currentArg.categoryIds !== previousArg.categoryIds
        );
      },
      // providesTags: ["packagesList"],
    }),

    getPackageById: builder.query({
      query: ({ packageId }) => `/getBundleByIdWebsite?id=${packageId}`,
    }),
    getSwapProductList: builder.query({
      query: ({
        currentProductId = "",
        brandId = "",
        price = "",
        subCategoryId = "",
      }) =>
        `/getSwapProductList?id=${currentProductId}&brandId=${brandId}&subCategoryId=${subCategoryId}&price=${price}`,
    }),
  }),
});

export const {
  useGetPackagesListQuery,
  useGetPackageByIdQuery,
  useGetSwapProductListQuery,
} = packagesApiSlice;
