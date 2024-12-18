import { useEffect } from "react";

const useRenderProductRatings = (productListsData) => {
  useEffect(() => {
    if (productListsData?.length <= 0) return;

    productListsData.forEach((product, index) => {
      const snippetId = `category-snippet-${product.id}${index}`;
      const snippetElement = document.getElementById(snippetId);

      if (!snippetElement) return;

      window.pwr("render", [
        {
          ENABLE_CLIENT_SIDE_STRUCTURED_DATA: false,
          api_key: process.env.NEXT_PUBLIC_POWER_REVIEWS_API_KEY,
          locale: "en_US",
          merchant_group_id:
            process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_GROUP_ID,
          merchant_id: process.env.NEXT_PUBLIC_POWER_REVIEWS_MERCHANT_ID,
          page_id: product.sku?.toUpperCase() || product.SKU?.toUpperCase(),
          components: {
            CategorySnippet: snippetId,
          },
        },
      ]);
    });
  });
};

export default useRenderProductRatings;
