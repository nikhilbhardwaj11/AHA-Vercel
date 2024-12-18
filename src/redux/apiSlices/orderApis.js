import { api } from "./api";

export const orderApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: `/placeOrder`,
        method: "POST",
        body,
      }),
    }),

    createGuestOrder: builder.mutation({
      query: (body) => ({
        url: `/createGuestOrder`,
        method: "POST",
        body,
      }),
    }),

    getOrderById: builder.query({
      query: ({ id }) => `/orderDetails?orderId=${id}`,
    }),

    getOrderList: builder.query({
      query: ({ limit = 10, page = 1 }) =>
        `/userOrderList?limit=${limit}&page=${page}`,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useCreateGuestOrderMutation,
  useGetOrderByIdQuery,
  useGetOrderListQuery,
} = orderApiSlice;
