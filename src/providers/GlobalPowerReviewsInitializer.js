"use client";

import { useEffect } from "react";

const GlobalPowerReviewsInitializer = () => {
  useEffect(() => {
    // Initialize the PowerReviews library globally
    window.pwr =
      window.pwr ||
      function () {
        (pwr.q = pwr.q || []).push(arguments);
      };
  }, []);

  return null; // This component does not render any UI
};

export default GlobalPowerReviewsInitializer;
