import { api } from "./api";

export const luxuryappliancesApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getluxuryLists: builder.query({
      query: ({
        limit = 10,
        page = 1,
        id = ""
      }) => ({
        url: `/getActiveBrandList?limit=${limit}&page=${page}&id=${id}`,
        providesTags: ["luxuryBrands"],
      }),
    }),
  }),
});

export const { useGetluxuryListsQuery } = luxuryappliancesApiSlice;
