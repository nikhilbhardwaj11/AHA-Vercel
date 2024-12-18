import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showAddToCart: false,
  showCategory: true,
  lastScrollY: 0,
};

export const headerSlice = createSlice({
  name: "headerDetails",
  initialState,
  reducers: {
    setShowAddToCart: (state, action) => {
      state.showAddToCart = action.payload;
    },
    setShowCategory: (state, action) => {
      state.showCategory = action.payload;
    },
    setLastScrollY: (state, action) => {
      state.lastScrollY = action.payload;
    },
  },
});

export const { setShowAddToCart, setShowCategory, setLastScrollY } =
  headerSlice.actions;

export default headerSlice;
