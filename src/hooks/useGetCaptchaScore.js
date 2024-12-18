import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useVerifyCaptchaMutation } from "@/redux/apiSlices/supportApi";

const useGetCaptchaScore = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verifyCaptcha, { isLoading }] = useVerifyCaptchaMutation();

  const getScore = async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("inquirySubmit");
    const responce = await verifyCaptcha({ gRecaptchaToken });
    return responce?.data || {};
  };

  return { getScore, isLoading };
};

export default useGetCaptchaScore;
