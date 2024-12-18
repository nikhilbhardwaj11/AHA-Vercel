import { api } from "./api";

export const paymentApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation({
      query: (body) => ({
        url: `/createPayment`,
        method: "POST",
        body,
      }),
    }),
    createAuthorizePayment: builder.mutation({
      query: (body) => ({
        url: `/authorizePayment`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation, useCreateAuthorizePaymentMutation } =
  paymentApiSlice;
