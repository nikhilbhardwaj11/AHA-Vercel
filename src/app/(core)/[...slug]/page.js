"use client";

import { isValidSku } from "@/lib/utils";
import ProductDetailPage from "./pdp";
import ProductListingPage from "./plp";
import PackageDetailPage from "./package";
import { use } from "react";

const ProductList = ({ params }) => {
  // Unwrap the params Promise
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;

  const packageId = slug[0] === "packages" && slug[1];
  const isPdp = isValidSku(slug[0]?.split("-")?.at(-1));

  if (packageId) {
    return <PackageDetailPage packageId={packageId} />;
  }

  if (isPdp) {
    return <ProductDetailPage slug={slug} />;
  }

  return <ProductListingPage slug={slug} />;
};

export default ProductList;
