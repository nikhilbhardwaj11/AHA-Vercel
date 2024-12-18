import Cookies from "js-cookie";

export const setAccessToken = (token, refreshToken) => {
  Cookies.set("authtoken", token);
  if (refreshToken) {
    Cookies.set("refreshToken", refreshToken);
  }
};

export const getAccessToken = () => {
  let token = Cookies.get("authtoken");
  return token || "";
};

export const setGuestToken = (token, refreshToken) => {
  Cookies.set("guestToken", token);
  if (refreshToken) {
    Cookies.set("guestRefreshToken", refreshToken);
  }
};

export const getGuestToken = () => {
  let token = Cookies.get("guestToken");
  return token || "";
};
export const getRefreshToken = () => {
  let token = Cookies.get("refreshToken");
  return token || "";
};

export const getGuestRefreshToken = () => {
  let token = Cookies.get("guestRefreshToken");
  return token || "";
};

export const removeAccessToken = () => {
  Cookies.remove("authtoken");
  Cookies.remove("refreshToken");
};
