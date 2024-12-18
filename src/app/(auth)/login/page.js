"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/ui/customInput";
import { useToast } from "@/components/ui/use-toast";
import useGetCaptchaScore from "@/hooks/useGetCaptchaScore";
import { getGuestToken, setAccessToken } from "@/lib/auth";
import { isValid } from "@/lib/utils";
import { validationRules } from "@/lib/validationRules";
import { useLoginUserMutation } from "@/redux/apiSlices/authApis";
import { setBearerToken } from "@/redux/slices/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const [
    loginUser,
    { data, isSuccess, isLoading: isUserLoading, isError, error },
  ] = useLoginUserMutation();
  const { getScore, isLoading: isCaptchaLoading } = useGetCaptchaScore();

  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isLoading = isUserLoading || isCaptchaLoading;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      if (data?.success) {
        const { token, msg, refreshToken } = data;
        setAccessToken(token, refreshToken);
        dispatch(setBearerToken({ isLogin: true }));
        toast({
          title: msg,
        });
        if (pathname === "/login") {
          router.push("/");
        } else {
          router.back();
        }
      }
    }

    if (isError) {
      toast({
        variant: "destructive",
        title: error?.data?.msg,
      });
    }
  }, [isSuccess, isError]);

  const onSubmit = async (data) => {
    try {
      const { success, score } = await getScore();
      if (success && score > 0.5) {
        loginUser({ ...data, token: getGuestToken() });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "ReCAPTCHA verification failed!",
      });
    }
  };

  const { email } = validationRules;

  return (
    <div className="max-w-[1091px] px-5 my-0 mx-auto pt-[40px]">
      <div className=" bg-gray9 rounded-[20px] px-4 pt-[38px] pb-[58px] lg:py-6 lg:mb-[20px]">
        <div className=" max-w-[403px]  my-0 mx-auto">
          <h3 className="leading-[30px] text-[20px] font-semibold mb-[13px]">
            Login
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid">
              <Controller
                name="email"
                rules={email}
                control={control}
                render={({ field }) => (
                  <CustomInput
                    label="Email"
                    isInvalid={isValid("email", errors)}
                    errorMessage={errors?.email?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Please enter password" }}
                render={({ field }) => (
                  <CustomInput
                    type={isShowPass ? "text" : "password"}
                    label="Password"
                    isInvalid={isValid("password", errors)}
                    errorMessage={errors?.password?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className=" text-gray2 font-medium text-[12px] leading-[15px] flex justify-between items-center">
              <p>
                <Link href="/forgot-password">Forgot your Password?</Link>
              </p>
              <div className="flex items-center space-x-2 text-[12px]">
                <Checkbox
                  id="terms"
                  onCheckedChange={(e) => setIsShowPass(e)}
                  checked={isShowPass}
                />
                <label
                  htmlFor="terms"
                  className=" text-[12px] text-gray31 leading-[15px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Show Password
                </label>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-[15px] mb-[13px]">
              <Button
                disabled={isLoading}
                className=" text-[14px] w-[200px] bg-blue2 text-white h-[38px] rounded-[8px]"
              >
                Login
              </Button>
              {/* <Image src={Captcha} alt="captcha" className="max-w-[150px]" /> */}
            </div>
            <p className="  leading-[16px] pb-[15px]  text-[10px] text-gray31 font-medium max-w-[295px] my-0 mx-auto text-center">
              By continuing, you agree to our Airport Home Appliance&nbsp;
              <Link href="/terms-and-conditions" className="underline">
                {" "}
                Terms & Conditions
              </Link>
              &nbsp;and our &nbsp;
              <Link
                href="/privacy-policy-cookie-restriction-mode"
                className="underline"
              >
                Privacy Policy.
              </Link>
            </p>
            <div className="flex gap-3 pt-[40px] border-t border-gray24">
              <button className=" font-medium whitespace-nowrap text-[12px] text-blue2 px-5">
                New User?
              </button>
              <Link
                href="/create-account"
                className="flex justify-center items-center text-[14px] w-full bg-blue2 text-white h-[38px] rounded-[8px]"
              >
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
