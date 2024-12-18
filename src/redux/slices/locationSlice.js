import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const locationSlice = createSlice({
  name: "userLocation",
  initialState,
  reducers: {
    setUserLocation: (state, action) => {
      return { ...action.payload };
    },
  },
});

export const { setUserLocation } = locationSlice.actions;

export default locationSlice;