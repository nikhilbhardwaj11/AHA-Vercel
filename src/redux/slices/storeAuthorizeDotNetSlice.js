import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardNumber: '',
  month: '',
  year: '',
  cardCode: '',
};

export const storeAuthorizeDotNetSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setStoreAuthorizeDotNet: (state, action) => {
      return { ...state, ...action.payload }; // Merge new values into the state
    },
  },
});

export const { setStoreAuthorizeDotNet } = storeAuthorizeDotNetSlice.actions;

export default storeAuthorizeDotNetSlice;