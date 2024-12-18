import { formatAmount } from "@/lib/utils";
import { useMemo } from "react";

// Custom hook for calculating subtotal
const useCalculateSubTotal = (addOnsPayload, cartPrice, displayPrice) => {
  return useMemo(() => {
    const { warranties, installationService, haulAwayPrice, moveAwayPrice } =
      addOnsPayload;

    // Parse numeric values from the strings and convert them to numbers
    const cartPriceValue =
      typeof cartPrice === "string"
        ? parseFloat(cartPrice?.replace(/[^0-9.]/g, "") || 0)
        : cartPrice || 0;

    const displayPriceValue =
      typeof displayPrice === "string"
        ? parseFloat(displayPrice?.replace(/[^0-9.]/g, "") || 0)
        : displayPrice || 0;

    const warrantyPriceValue = parseFloat(
      warranties?.warrantyPrice?.replace(/[^0-9.]/g, "") || 0
    );

    const installationFees = parseFloat(
      installationService?.installationFee?.replace(/[^0-9.]/g, "") || 0
    );
    const moveAwayFees = parseFloat(
      moveAwayPrice?.replace(/[^0-9.]/g, "") || 0
    );
    const haulAwayFess = parseFloat(
      haulAwayPrice?.replace(/[^0-9.]/g, "") || 0
    );

    const totalSubTotal =
      cartPriceValue +
      displayPriceValue +
      warrantyPriceValue +
      installationFees +
      moveAwayFees +
      haulAwayFess;

    return formatAmount(totalSubTotal);
  }, [addOnsPayload, cartPrice, displayPrice]);
};

export default useCalculateSubTotal;
