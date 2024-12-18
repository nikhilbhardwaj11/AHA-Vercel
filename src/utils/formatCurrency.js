export const formatCurrency = (value) => {
  if (!value) return value;
  
  // Extract numeric value from the string and parse it as a float
  const numericValue = typeof value === "string" && parseFloat(value?.replace(/[^0-9.]/g, "")) || value;
  // Return the formatted currency string with Dollar symbol
  return isNaN(numericValue)
    ? value // If the numeric value is invalid, return the original value
    : new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(numericValue);
};
