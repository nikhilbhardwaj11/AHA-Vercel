import { api } from "./api";

export const synchronyApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    syncronyGenerateToken: builder.query({
      query: (body) => ({
        url: `/syncronyGenerateToken`,
        method: "POST",
        body,
      }),
      providesTags: ["syncronyToken"],
    }),
  }),
});

export const { useSyncronyGenerateTokenQuery } = synchronyApiSlice;