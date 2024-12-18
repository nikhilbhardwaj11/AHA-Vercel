import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const reducers = {
  setCompareProducts: (state, action) => {
    return [...state, ...action.payload];
  },
  removeCompareProduct: (state, action) => {
    return state.filter((product) => product.id !== action.payload.id);
  },
  removeAllCompareProduct: () => [],
};

const productCompareSlice = createSlice({
  initialState,
  name: "productCompare",
  reducers,
});

export const {
  setCompareProducts,
  removeCompareProduct,
  removeAllCompareProduct,
} = productCompareSlice.actions;

export default productCompareSlice;
