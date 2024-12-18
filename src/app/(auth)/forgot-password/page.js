"use client";

import { Button } from "@/components/ui/button";
import CustomInput from "@/components/ui/customInput";
import { useToast } from "@/components/ui/use-toast";
import useGetCaptchaScore from "@/hooks/useGetCaptchaScore";
import { isValid } from "@/lib/utils";
import { useForgotPasswordMutation } from "@/redux/apiSlices/authApis";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

const ForgotPassword = () => {
  const { toast } = useToast();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [
    forgotPassword,
    { data, isSuccess, isLoading: isRagisterLoading, isError, error: errMsg },
  ] = useForgotPasswordMutation();
  const { getScore, isLoading: isCaptchaLoading } = useGetCaptchaScore();
  const isLoading = isCaptchaLoading || isRagisterLoading;
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


  const onSubmit = async (data) => {
    console.log("email====",data)
    try {
      const { success, score } = await getScore();
      if (success && score > 0.5) {
        //router.push("/login");
        forgotPassword(data);
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
           Forgot Your Password?
          </h3>
          <p className="text-[14px] pb-5">Please enter your email address below to receive a password reset link.</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid ">
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Please enter email ",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter valid email",
                  },
                }}
                render={({ field }) => (
                  <CustomInput
                    label="Email"
                    isInvalid={isValid("email", errors)}
                    errorMessage="Please enter email"
                    {...field}
                  />
                )}
              />
            </div>

            <div className=" flex items-center justify-center mt-[15px] mb-[13px]">
              <Button
                type="submit"
                className=" text-[14px] w-full mzx-w-[300px] bg-blue2 text-white h-[38px] rounded-[8px]"
                disabled={isLoading}
              >
                Reset My Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
