import { api } from "./api";

export const discountApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    applyDiscount: builder.mutation({
      query: (body) => ({
        url: `/applyDiscount`,
        method: "POST",
        body,
      }),
      invalidatesTags: (data) => (data?.success ? ["updateSummary"] : [""]),
    }),
    removeDiscount: builder.mutation({
      query: (body) => ({
        url: `/removeDiscount`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["updateSummary"],
    }),
  }),
});

export const { useApplyDiscountMutation, useRemoveDiscountMutation } =
  discountApiSlice;
