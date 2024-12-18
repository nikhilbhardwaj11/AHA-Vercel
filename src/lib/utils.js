import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format, isBefore, parseISO, parseJSON, startOfToday } from "date-fns";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const isValid = (name, errors) => {
  if (!name || !errors) return;
  return errors[name] ? true : false;
};

export const strengthBgColor = {
  "Too weak": "bg-red-800",
  Weak: "bg-[#FF0000]",
  Medium: "bg-[#FEC230]",
  Strong: "bg-[#039C03]",
};

export const strengthTextColor = {
  "Too weak": "text-red-800",
  Weak: "text-[#FF0000]",
  Medium: "text-[#FEC230]",
  Strong: "text-[#039C03]",
};

export const formatDate = (dateString, updatedFormet = "dd MMM, h:mm a") =>
  dateString && format(new Date(dateString), updatedFormet);

export const formatAmount = (amount) =>
  (amount &&
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)) ||
  "$0.00";

export function isValidSku(sku) {
  const str = sku.toUpperCase();
  // Define a regex pattern that matches the SKU format
  // const skuPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
  const skuPattern = /^(?:\d+|(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+)$/;
  // Test the SKU against the pattern
  return skuPattern.test(str);
}

export function capitalizeFirstLetter(string) {
  if (!string) return string; // Handle empty or undefined strings
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isRebateExpired(endDate) {
  // Parse the API-provided date string into a Date object
  const productEndDate = parseISO(endDate);

  // Get today's date at midnight
  const today = startOfToday();

  // Check if the productEndDate is before today
  return isBefore(productEndDate, today);
}
