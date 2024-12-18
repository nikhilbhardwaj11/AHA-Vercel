import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStoreList: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { setStoreList } = storeSlice.actions;

export default storeSlice;
