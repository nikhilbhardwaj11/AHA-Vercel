import {
  getGuestRefreshToken,
  getRefreshToken,
  removeAccessToken,
  setAccessToken,
  setGuestToken,
} from "@/lib/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setBearerToken } from "../slices/authSlice";
import { Mutex } from "async-mutex";

const mutex = new Mutex();
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const { token, guestToken } = getState().auth;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token || guestToken) {
      headers.set("authorization", `Bearer ${token || guestToken}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  
  if (args?.url === "/loginUser" && result?.data?.success) {
    await api.dispatch(setBearerToken({ token: result.data.token }));
  }
  if (
    result.error &&
    (result?.error?.status === 500 || result?.error?.status === 400) &&
    (result?.error?.data?.error === "jwt expired" ||
      result?.error?.data?.msg === "Invalid or expired Token")
  ) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      const { isLogin } = api.getState().auth;
      const refreshToken = isLogin ? getRefreshToken() : getGuestRefreshToken();
      try {
        const data = await fetch(`${baseUrl}/refreshToken`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        });
        const response = await data.json();
        if (response && response.success) {
          //  store the new token
          if (isLogin) {
            api.dispatch(
              setBearerToken({ token: response.accessToken, isLogin: true })
            );
            setAccessToken(response.accessToken);
          } else {
            api.dispatch(
              setBearerToken({
                guestToken: response.accessToken,
                isLogin: false,
              })
            );
            setGuestToken(response.accessToken);
          }
          // retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          if (isLogin) {
            await api.dispatch(setBearerToken({ token: null, isLogin: false }));
            removeAccessToken();
          } else {
            const data = await fetch(`${baseUrl}/createGuest`, {
              method: "GET",
            });
            const response = await data.json();
            if (response) {
              const { token, refreshToken } = response;
              await api.dispatch(setBearerToken({ guestToken: token }));
              setGuestToken(token, refreshToken);
              result = await baseQuery(args, api, extraOptions);
            }
          }
        }
      } finally {
        // release must be called once the mutex should be released again.
        release();
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: [
    "categories",
    "subCategories",
    "blog",
    "brands",
    "products",
    "storeLists",
    "luxuryBrands",
    "profile",
    "cartList",
    "packagesList",
    "address",
    "updateSummary",
    "filters",
    "syncronyToken",
  ],
});