import { api } from "./api";

export const filtersApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getFiltersList: builder.query({
      query: ({ categorySlug = "", rebateId = "" }) => {
        // Construct the URL conditionally based on the categorySlug
        const url =
          categorySlug !== "products"
            ? `/getFilters?slug=${categorySlug}&rebateId=${rebateId}`
            : "/getFilters";

        return url;
      },
      providesTags: ["filters"],
    }),
  }),
});

export const { useGetFiltersListQuery } = filtersApiSlice;
