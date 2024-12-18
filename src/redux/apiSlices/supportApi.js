import { api } from "./api";

export const supportServices = api.injectEndpoints({
  endpoints: (builder) => ({
    getOpenBox: builder.query({
      query: (productId) => `/getOpenboxProductById?id=${productId}`,
      //   providesTags: [""],
    }),
    getWarrentyAndServices: builder.query({
      query: ({ categoryId, subCategory, productId }) =>
        `/getAddonServicesByproductID?category=${categoryId}&subCategory=${subCategory}&productId=${productId}`,
      // providesTags: [""],
    }),
    verifyCaptcha: builder.mutation({
      query: (body) => ({
        url: `/verifyCaptcha`,
        method: "POST",
        body,
      }),
      //   providesTags: [""],
    }),
    getSuggestions: builder.query({
      query: (keyword) => `/typehead?keyword=${keyword}`,
    }),

    getRebatesList: builder.query({
      query: ({
        page = 1,
        limit = 20,
        brandIds = "",
        search,
        categoryIds,
        validUntil,
        isExpired,
        sort,
        order,
      }) =>
        `/getRebatesList?page=${page}&limit=${limit}&brandIds=${brandIds}&search=${search}&categoryIds${categoryIds}&validUntil=${validUntil}&isExpired=${isExpired}&sort=${sort}&order=${order}`,
    }),
  }),
});

export const {
  useGetOpenBoxQuery,
  useVerifyCaptchaMutation,
  useGetWarrentyAndServicesQuery,
  useGetSuggestionsQuery,
  useGetRebatesListQuery,
} = supportServices;
