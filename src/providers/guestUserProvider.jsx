"use client";
import { getGuestToken, setGuestToken } from "@/lib/auth";
import { useCreateGuestUserQuery } from "@/redux/apiSlices/userApi";
import { setBearerToken } from "@/redux/slices/authSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const GuestUserProvider = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const guestToken = getGuestToken();
  const dispatch = useDispatch();
  const { data: guestUserRes, isSuccess } = useCreateGuestUserQuery(
    {},
    { skip: isLogin || guestToken }
  );
  useEffect(() => {
    if (isSuccess && guestUserRes) {
      const { token, refreshToken } = guestUserRes;
      dispatch(setBearerToken({ guestToken: token }));
      setGuestToken(token,refreshToken);
    }
  }, [guestUserRes, isSuccess]);

  useEffect(() => {
    if (guestToken) {
      dispatch(setBearerToken({ guestToken }));
    }
  }, []);
};
