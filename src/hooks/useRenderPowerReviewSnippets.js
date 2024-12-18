"use client";
import { useEffect } from "react";

const useRenderPowerReviewSnippets = (powerReviewsPayloads) => {
  const {
    productName,
    productDescription,
    pdpSeoUrl,
    image,
    sku,
    brand,
    displayPrice,
    category,
    upcCode,
  } = powerReviewsPayloads;

  const url = `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/${pdpSeoUrl}`;

  useEffect(() => {
    if (!sku) return;

    window.pwr("render", {
      api_key: process.env.NEXT_PUBLIC_POWER_REVIEWS_API_KEY,
      locale: "en_US",
      merchant_group_id:
        process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_GROUP_ID,
      merchant_id: process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_ID,
      page_id: `${sku}`,
      review_wrapper_url: `write-a-review?pr_page_id=${sku}`,
      subject: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productName,
        description: productDescription,
        url,
        image,
        sku,
        brand,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          url,
          price: displayPrice,
          priceValidUntil: "",
          availability: "",
        },
      },
      //*** Start Feedless Product Code ***
      product: {
        name: productName,
        url,
        image_url: image,
        description: productDescription,
        category_name: category,
        manufacturer_id: "",
        upc: upcCode,
        brand_name: brand,
        price: displayPrice,
        in_stock: "",
      },
      //*** End Feedless Product Code ***
      components: {
        ReviewSnippet: "pr-reviewsnippet",
        ReviewDisplay: "pr-reviewdisplay",
        QuestionSnippet: "pr-questionsnippet",
        QuestionDisplay: "pr-questiondisplay",
      },
    });
  });
};

export default useRenderPowerReviewSnippets;
