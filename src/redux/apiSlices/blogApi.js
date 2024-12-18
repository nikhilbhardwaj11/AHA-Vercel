import { api } from "./api";

export const blogDetailsApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getBlogDetails: builder.query({
      query: () => `/blog/getBlogDetails`,
      providesTags: ["blog"],
    }),
  }),
});

export const {
  useGetBlogDetailsQuery,
} = blogDetailsApiSlice;
