import { api } from "./api";

export const categoriesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `/Website-getCategoriesList`,
    }),
    getProductById: builder.query({
      query: ({ seoUrl }) =>
        `/Website-getProductById?pdpSeoUrl=${seoUrl}`,
    }),
    getBrands: builder.query({
      query: ({
        limit = 10,
        page = 1,
        sortField = "createdAt",
        sortOrder = "DESC",
        filterBy,
        filterValue,
        search = "",
      }) => ({
        url: `/getBrandsList?limit=${limit}&page=${page}&sortField=${sortField}&sortOrder=${sortOrder}&filterBy=${filterBy}&filterValue=${filterValue}&search=${search}`,
      }),
      providesTags: ["brands"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetBrandsQuery,
  // useCreateCategoryMutation,
  // useUpdateCategoryMutation,
  // useUpdateCategoryStatusMutation,
} = categoriesApiSlice;
