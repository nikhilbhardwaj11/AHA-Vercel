export const formatPhoneNo = (number) => {
  if (!number) return "";

  // Remove all non-digit characters
  const cleaned = ("" + number).replace(/\D/g, "");

  // Check if the length of cleaned number is correct
  if (cleaned.length === 10) {
    // Format as (xxx) xxx-xxxx
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  // Return the cleaned number if it's not a 10-digit number
  return cleaned;
};