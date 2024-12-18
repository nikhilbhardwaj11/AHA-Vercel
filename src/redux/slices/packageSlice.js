import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const packageSlice = createSlice({
  name: "package",
  initialState,
  reducers: {
    setPackageProducts: (state, action) => {
      return [...action.payload];
    },
  },
});

export const { setPackageProducts } = packageSlice.actions;

export default packageSlice;
