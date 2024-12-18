"use client";

import PasswordStrengthBar from "@/components/PasswordStrengthBar/PasswordStrengthBar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import CustomInput from "@/components/ui/customInput";
import { useToast } from "@/components/ui/use-toast";
import useGetCaptchaScore from "@/hooks/useGetCaptchaScore";
import { isValid, strengthTextColor } from "@/lib/utils";
import { validationRules } from "@/lib/validationRules";
import { useRegisterUserMutation } from "@/redux/apiSlices/authApis";
import { passwordStrength } from "check-password-strength";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

const CreateAccount = () => {
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
    registerUser,
    { data, isSuccess, isLoading: isRagisterLoading, isError, error: errMsg },
  ] = useRegisterUserMutation();
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

  const { password } = watch();

  const strength = passwordStrength(password).value;
  const { requiredAlphabetOnly, phoneNumber, email } = validationRules;

  const onSubmit = async (data) => {
    try {
      const { success, score } = await getScore();
      if (success && score > 0.5) {
        const { confirmPassword, ...newData } = data;
        registerUser(newData);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "ReCAPTCHA verification failed!",
      });
    }
  };

  const getStrength = () => {
    return password?.length > 0 ? (
      <span className={`${strengthTextColor[strength]}`}>{strength} </span>
    ) : (
      "No Password"
    );
  };
  return (
    <div className="max-w-[1091px] px-5 my-0 mx-auto pt-[40px]">
      <div className=" bg-gray9 rounded-[20px] px-4 pt-[38px] pb-[58px] lg:py-6 lg:mb-[20px]">
        <div className=" max-w-[456px]  my-0 mx-auto">
          <h3 className="leading-[30px] text-[20px] font-semibold mb-[13px]">
            Create an Account
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-5 ">
              <Controller
                name="firstName"
                control={control}
                rules={requiredAlphabetOnly("First Name")}
                render={({ field }) => (
                  <CustomInput
                    label="First Name"
                    maxLength={25}
                    isInvalid={isValid("firstName", errors)}
                    errorMessage={errors.firstName?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                rules={requiredAlphabetOnly("Last Name")}
                render={({ field }) => (
                  <CustomInput
                    label="Last Name"
                    maxLength={25}
                    isInvalid={isValid("lastName", errors)}
                    errorMessage={errors.lastName?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid">
              <Controller
                name="email"
                control={control}
                rules={email}
                render={({ field }) => (
                  <CustomInput
                    label="Email"
                    isInvalid={isValid("email", errors)}
                    errorMessage={errors.email?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="grid">
              <Controller
                name="mobile"
                control={control}
                rules={phoneNumber}
                render={({ field }) => (
                  <CustomInput
                    label="Phone Number"
                    isInvalid={isValid("mobile", errors)}
                    errorMessage={errors.mobile?.message}
                    {...field}
                  />
                )}
              />
            </div>
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
            <div className=" text-gray2 font-medium text-[12px] mb-2 leading-[15px] flex justify-between items-center">
              <p>Password Strength: {getStrength()}</p>

              <div className="flex items-center space-x-2 text-[12px]">
                <Checkbox
                  id="terms"
                  onCheckedChange={(e) => setIsShowPass(e)}
                  checked={isShowPass}
                />
                <label
                  htmlFor="terms"
                  className=" text-[12px] text-gray31  leading-[15px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                >
                  Show Password
                </label>
              </div>
            </div>

            {password?.length > 0 && (
              <PasswordStrengthBar strength={strength} />
            )}

            <div className="flex space-x-2 text-[12px]">
              <Controller
                name="terms"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Checkbox
                    id="terms"
                    onCheckedChange={(e) => field.onChange(e)}
                    checked={field.value}
                  />
                )}
              />
              <label
                htmlFor="terms"
                className=" text-[12px] text-gray31  leading-[15px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              >
                By selecting ‘Create Account’ you are agreeing to the{" "}
                <Link
                  href="/terms-and-conditions"
                  className="underline inline-block"
                >
                  {" "}
                  Terms & Conditions,
                </Link>
                ,{" "}
                <Link
                  href="/privacy-policy-cookie-restriction-mode"
                  className="underline inline-block"
                >
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link href="/sms-terms" className="underline inline-block">
                  SMS Terms
                </Link>
                . For Two-Factor Authentication, message and data rates may
                apply. Local store prices may vary from those displayed.
                Products shown as available are normally stocked but inventory
                levels cannot be guaranteed.
              </label>
            </div>
            {isValid("terms", errors) && (
              <p className="text-red-600 text-[10px] whitespace-nowrap ">
                please accept terms & conditions
              </p>
            )}
            <div className=" flex items-center justify-center mt-[15px] mb-[13px]">
              <Button
                type="submit"
                className=" text-[14px] w-full mzx-w-[300px] bg-blue2 text-white h-[38px] rounded-[8px]"
                disabled={isLoading}
              >
                Create an Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
