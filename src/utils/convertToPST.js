export const convertToPST = (dateString) => {
  const date = new Date(dateString);

  // Convert to PST (UTC-8)
  const pstDate = new Date(
    date.toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
  );

  const formattedDate = pstDate.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // hour12: true,
  });

  return formattedDate;
};