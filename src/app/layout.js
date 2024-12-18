import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StyledComponentsRegistry from "@/lib/registry";
import { Poppins } from "next/font/google";
import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import { ReduxProvider } from "../providers/reduxProvider";
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/providers/userProvider";
import { GuestUserProvider } from "@/providers/guestUserProvider";
import Script from "next/script";
import GlobalPowerReviewsInitializer from "@/providers/GlobalPowerReviewsInitializer";
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

export const metadata = {
  title: "Airport Appliances",
  description: "Airport Appliances",
  icons: {
    icon: "/favicon.png", // specify the path to the favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add PowerReviews script */}
        <Script
          src="https://ui.powerreviews.com/stable/4.1/ui.js"
          strategy="lazyOnload"
        />
      </head>
      <body className={poppins.className}>
        <StyledComponentsRegistry>
          <ReduxProvider>
            <UserProvider />
            <GuestUserProvider />
            <GlobalPowerReviewsInitializer />
            <Header />
            <React.Suspense fallback={<div></div>}>
              <div className="mt-[212px] lg:mt-[109px]">{children}</div>
              <SpeedInsights />
            </React.Suspense>
            <Toaster />
            <Footer />
          </ReduxProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
