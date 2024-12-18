import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const reducers = {
  setUserDetails: (state, action) => {
    return { ...state, ...action.payload };
  },
};

const userSlice = createSlice({
  initialState,
  name: "auth",
  reducers,
});

export const { setUserDetails } = userSlice.actions;

export default userSlice;
