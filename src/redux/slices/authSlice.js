import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  guestToken: null,
  isLogin: false,
};

const reducers = {
  setBearerToken: (state, action) => {
    return { ...state, ...action.payload };
  },
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers,
});

export const { setBearerToken } = authSlice.actions;

export default authSlice;
