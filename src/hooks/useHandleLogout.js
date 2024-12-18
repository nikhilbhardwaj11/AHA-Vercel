import { removeAccessToken } from "@/lib/auth";
import { api } from "@/redux/apiSlices/api";
import { setBearerToken } from "@/redux/slices/authSlice";
import { setUserCart } from "@/redux/slices/userCartSlice";
import { setUserDetails } from "@/redux/slices/userSlice";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

const protectedRoutes = ["/my-account", "/my-address"];

const useHandleLogout = () => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const router = useRouter();

  return () => {
    removeAccessToken();
    dispatch(setBearerToken({ token: null, isLogin: false }));
    dispatch(setUserCart({}));
    dispatch(setUserDetails({}));
    dispatch(api.util.resetApiState());
    if (protectedRoutes.includes(pathName)) {
      router.push("/");
    }
  };
};

export default useHandleLogout;
