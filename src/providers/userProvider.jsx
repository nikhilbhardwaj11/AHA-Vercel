"use client";
import { getAccessToken } from "@/lib/auth";
import { useGetUserDetailsQuery } from "@/redux/apiSlices/userApi";
import { useGetCartListQuery } from "@/redux/apiSlices/userCartApi";
import { setBearerToken } from "@/redux/slices/authSlice";
import { setUserLocation } from "@/redux/slices/locationSlice";
import { setUserCart } from "@/redux/slices/userCartSlice";
import { setUserDetails } from "@/redux/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UserProvider = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { data } = useGetUserDetailsQuery(
    {},
    {
      skip: !isLogin,
    }
  );
  const { data: userDetails } = data || {};
  const { data: cartApiData, refetch } = useGetCartListQuery();

  const updatedCartItems = cartApiData?.data || {};

  useEffect(() => {
    refetch();
  }, [isLogin]);

  useEffect(() => {
    dispatch(setUserDetails(userDetails));
  }, [userDetails]);

  useEffect(() => {
    dispatch(setUserCart(updatedCartItems));
  }, [updatedCartItems]);

  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      dispatch(setBearerToken({ token, isLogin: true }));
    }
  }, []);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(
            setUserLocation({
              lat: position.coords.latitude,
              long: position.coords.longitude,
            })
          );
        },
        (err) => {
          // setError(err.message);
        }
      );
    } else {
      // setError("Geolocation is not supported by this browser.");
    }
  }, []);
};
