import Newsletter from "@/components/Newsletter";
import { api } from "./api";

export const authApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (body) => ({
        url: `/registerUser`,
        method: "POST",
        body,
      }),
    }),    
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: `/forgotPassword`,
        method: "POST",
        body,
      }),
    }),    
    resetPassword: builder.mutation({
      query: (body) => ({
        url: `/resetPassword`,
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: `/loginUser`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["cartList"],
    }),
    newsletter: builder.mutation({
      query: (body) => ({
        url: `/signUpNewsletter`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["newsletter"],
    }),
  }),
});

export const { useRegisterUserMutation, useForgotPasswordMutation, useResetPasswordMutation, useLoginUserMutation, useNewsletterMutation} = authApiSlice;
