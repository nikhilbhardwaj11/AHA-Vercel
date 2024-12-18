import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const orderSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    setOrderDetails: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setOrderDetails } = orderSlice.actions;

export default orderSlice;
