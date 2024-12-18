import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userCartSlice = createSlice({
  name: "usercart",
  initialState,
  reducers: {
    setUserCart: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setUserCart } = userCartSlice.actions;

export default userCartSlice;
