"use client";
import Script from "next/script";
import { useEffect } from "react";

export default function AffirmScriptLoader({ displayPrice }) {
  const displayPriceInCent =
    displayPrice && parseFloat(displayPrice?.replace(/[^0-9.]/g, "") * 100);
  useEffect(() => {
    if (window.affirm) {
      window.affirm.ui.refresh();
    }
  }, [displayPriceInCent]);

  return (
    <div>
      <Script
        src="https://cdn1-sandbox.affirm.com/js/v2/affirm.js"
        strategy="lazyOnload"
        onLoad={() => {
          window._affirm_config = {
            public_api_key: process.env.NEXT_PUBLIC_AFFIRM_SCRIPT_API_KEY,
            locale: "en_US",
            country_code: "USA",
          };

          if (window.affirm) {
            window.affirm.ui.refresh();
          }
        }}
      />
      {displayPriceInCent !== undefined && displayPriceInCent !== null && (
        <>
          <span
            className="__affirm-logo __affirm-logo-blue"
            style={{ fontSize: "28px" }}
          >
            Affirm
          </span>
          <div
            className="affirm-as-low-as"
            data-affirm-type="text"
            data-learnmore-show="true"
            data-page-type="product"
            data-amount={displayPriceInCent}
          ></div>
        </>
      )}
    </div>
  );
}
