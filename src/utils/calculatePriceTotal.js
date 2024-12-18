export const calculatePriceTotal = (products) => {
  const totals = products.reduce(
    (acc, product) => {
      const crossedPrice =
        parseFloat(
          product?.price_details?.crossedPrice?.replace(/[^0-9.]/g, "")
        ) || 0;
      const displayPrice =
        parseFloat(
          product?.price_details?.displayPrice?.replace(/[^0-9.]/g, "")
        ) || 0;
      const savingAmount =
        parseFloat(
          product?.price_details?.savingAmount?.replace(/[^0-9.]/g, "")
        ) || 0;

      acc.totalCrossedPrice += crossedPrice;
      acc.totalDisplayPrice += displayPrice;
      acc.totalSavings += savingAmount;

      return acc;
    },
    { totalCrossedPrice: 0, totalDisplayPrice: 0, totalSavings: 0 }
  );

  const totalSavingsPercentage = totals.totalCrossedPrice
    ? ((totals.totalSavings / totals.totalCrossedPrice) * 100).toFixed(2)
    : "0.00";

  const result = {};
  if (totals.totalCrossedPrice)
    result.totalCrossedPrice = `$${totals.totalCrossedPrice.toFixed(2)}`;
  if (totals.totalDisplayPrice)
    result.totalDisplayPrice = `$${totals.totalDisplayPrice.toFixed(2)}`;
  if (totals.totalSavings)
    result.totalSavingsAmount = `Save $${totals.totalSavings.toFixed(2)}`;
  if (parseFloat(totalSavingsPercentage) > 0)
    result.totalSavingsPercentage = `(${totalSavingsPercentage}%)`;

  return result;
};
