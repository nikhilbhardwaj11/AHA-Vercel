"use client";

import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/customInput";
import { useToast } from "@/components/ui/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { passwordStrength } from "check-password-strength";
import useGetCaptchaScore from "@/hooks/useGetCaptchaScore";
import { useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/apiSlices/authApis";
import { isValid, strengthTextColor } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ChangePassword = () => {
   const [getToken, setToken] = useState()

   useEffect(() => {
    if (typeof window !== 'undefined') {
       const urlParams = new URLSearchParams(window.location.search);
       const token = urlParams.get('token');      
       setToken(token || '');
    }
  }, []);

  const [isShowPass, setIsShowPass] = useState(false);
  const { toast } = useToast();

  const router = useRouter();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [
    resetPassword,
    { data, isSuccess, isLoading: isResetLoading, isError, error: errMsg },
  ] = useResetPasswordMutation();

  const { getScore, isLoading: isCaptchaLoading } = useGetCaptchaScore();
  const isLoading = isCaptchaLoading || isResetLoading;
  useEffect(() => {
    if (isSuccess) {
      if (data?.success) {
        toast({
          title: data?.msg,
        });
        router.push("/login");
      }
    }
    if (isError) {
      toast({
        variant: "destructive",
        title: errMsg?.data?.msg,
      });
    }
  }, [isSuccess, isError]);

  const { password } = watch();

  const strength = passwordStrength(password).value;

  const getStrength = () => {
    return password?.length > 0 ? (
      <span className={`${strengthTextColor[strength]}`}>{strength} </span>
    ) : (
      "No Password"
    );
  };

  const onSubmit = async (data) => {
    try {
      const { success, score } = await getScore();
      if (success && score > 0.5) {
        // router.push("/login");
        const dataObj = {
          token:getToken,
          newPassword:data.confirmPassword
        }
        resetPassword(dataObj);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "ReCAPTCHA verification failed!",
      });
    }
  };

  return (
    <div className="max-w-[1091px] px-5 my-0 mx-auto pt-[40px]">
      <div className=" bg-gray9 rounded-[20px] px-4 pt-[38px] pb-[58px] lg:py-6 lg:mb-[20px]">
        <div className=" max-w-[500px]  my-0 mx-auto">
          <h3 className="leading-[30px] text-[20px] font-semibold mb-[13px]">
           Reset Your Password?
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid">
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Please enter password",
                  validate: (value) =>
                    passwordStrength(value).value === "Strong" ||
                    "Your password is not strong",
                }}
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
            <div className="grid">
              <Controller
                name="confirmPassword"
                control={control}
                rules={{
                  required: "Please enter confirm password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                }}
                render={({ field }) => (
                  <CustomInput
                  type={isShowPass ? "text" : "password"}
                  label="Confirm Password"
                    isInvalid={isValid("confirmPassword", errors)}
                    errorMessage={errors?.confirmPassword?.message}
                    {...field}
                  />
                )}
              />
            </div>

            {/* <div className=" text-gray2 font-medium text-[12px] mb-2 leading-[15px] flex justify-between items-center">
              <p>Password Strength: {getStrength()}</p>             
            </div> */}

            <div className=" text-gray2 font-medium text-[12px] leading-[15px] flex justify-between items-center">
              <p>
               <p>Password Strength: {getStrength()}</p>            
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

            <div className=" flex items-center justify-center mt-[15px] mb-[13px]">
              <Button
                type="submit"
                className=" text-[14px] w-full mzx-w-[300px] bg-blue2 text-white h-[38px] rounded-[8px]"
                disabled={isLoading}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;