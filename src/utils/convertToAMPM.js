export const convertToAMPM = (time) => {
  if (!time) return;
  let [hour, minute, second] = time.split(":");

  hour = parseInt(hour, 10);

  // Determine AM or PM suffix
  const ampm = hour >= 12 ? "PM" : "AM";

  // Convert hour from 24-hour time to 12-hour time
  hour = hour % 12 || 12; // Converts 0 to 12 for midnight and noon

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.padStart(2, "0");
  const formattedSecond = second.padStart(2, "0");

  return `${formattedHour}:${formattedMinute} ${ampm}`;
};
