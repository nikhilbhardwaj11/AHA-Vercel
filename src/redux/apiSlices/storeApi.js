import { api } from "./api";

export const storeListsApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getStoreLists: builder.query({
      query: () => `/getStoreList`,
      providesTags: ["storeLists"],
    }),
    getStoreById: builder.query({
      query: ({ id }) => `/getStoreByID?id=${id}`,
    }),
    getStoreDistance: builder.query({
      query: ({ zipCode, lat = "", long = "", productId = "" }) => {
        let queryString = `/getStoreDistance?zipCode=${zipCode}&latitude=${lat}&longitude=${long}`;
        if (productId) {
          queryString += `&productId=${productId}`;
        }
        return queryString;
      },
    }),
  }),
});

export const {
  useGetStoreListsQuery,
  useGetStoreByIdQuery,
  useGetStoreDistanceQuery,
  useLazyGetStoreDistanceQuery,
} = storeListsApiSlice;
