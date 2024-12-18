import { api } from "./api";

export const deliveryApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getDeliveryRouteDetails: builder.query({
      query: (body) => ({
        url: `/getDeliveryRouteDetails`,
        method: "POST",
        body,
      }),
      providesTags: ["updateSummary"],
    }),
  }),
});

export const { useGetDeliveryRouteDetailsQuery } = deliveryApiSlice;