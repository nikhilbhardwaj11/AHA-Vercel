import { configureStore } from "@reduxjs/toolkit";
import { api } from "./apiSlices/api";
import storeSlice from "./slices/storeSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import userCartSlice from "./slices/userCartSlice";
import orderSlice from "./slices/orderSlice";
import packageSlice from "./slices/packageSlice";
import headerSlice from "./slices/headerSlice";
import locationSlice from "./slices/locationSlice";
import productCompareSlice from "./slices/productCompareSlice";
import storeAuthorizeDotNetSlice from "./slices/storeAuthorizeDotNetSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    storeList: storeSlice.reducer,
    auth: authSlice.reducer,
    userDetails: userSlice.reducer,
    userCart: userCartSlice.reducer,
    orderDetails: orderSlice.reducer,
    packageProducts: packageSlice.reducer,
    showAddToCart: headerSlice.reducer,
    showCategory: headerSlice.reducer,
    lastScrollY: headerSlice.reducer,
    userLocation: locationSlice.reducer,
    compareProducts: productCompareSlice.reducer,
    authorizeDotNetCardDetails: storeAuthorizeDotNetSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;