import { api } from "./api";

export const userCart = api.injectEndpoints({
  endpoints: (builder) => ({
    getCartList: builder.query({
      query: () => `/getCartList`,
      providesTags: ["cartList"],
    }),
    addToCart: builder.mutation({
      query: (body) => ({
        url: `/addToCart`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cartList"],
    }),
    removeFromCart: builder.mutation({
      query: (body) => ({
        url: `/removeFromCart`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cartList","updateSummary"],
    }),

    updateCart: builder.mutation({
      query: (body) => ({
        url: `/updateCart`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cartList","updateSummary"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartListQuery,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} = userCart;
