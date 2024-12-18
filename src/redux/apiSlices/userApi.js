import { api } from "./api";

export const userApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: () => `/getUserDetails`,
      providesTags: ["profile"],
    }),

    getAddress: builder.query({
      query: () => `/getAddressById`,
      providesTags: ["address"],
    }),

    createAddress: builder.mutation({
      query: (body) => ({
        url: `/createAddress`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["address"],
    }),

    editAddress: builder.mutation({
      query: (body) => ({
        url: `/editAddress`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["address"],
    }),
    deleteAddress: builder.mutation({
      query: (body) => ({
        url: `/deleteAddress`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["address"],
    }),

    editProfile: builder.mutation({
      query: (body) => ({
        url: `/editProfile`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["profile"],
    }),

    updateEmailPassword: builder.mutation({
      query: (body) => ({
        url: `/updateEmailPassword`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["profile"],
    }),
    createGuestUser: builder.query({
      query: () => `/createGuest`,
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useGetAddressQuery,
  useCreateAddressMutation,
  useEditProfileMutation,
  useUpdateEmailPasswordMutation,
  useCreateGuestUserQuery,
  useEditAddressMutation,
  useDeleteAddressMutation,
} = userApiSlice;
