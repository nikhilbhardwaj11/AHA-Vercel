import GoogleCaptchaProvider from "@/providers/g-CaptchaProvider";

export default function AuthLayout({ children }) {
  return <GoogleCaptchaProvider>{children}</GoogleCaptchaProvider>;
}
