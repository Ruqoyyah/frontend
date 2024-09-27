export function getFormattedDate(date: string) {
  // Array of weekday names
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Array of abbreviated month names
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the current date
  const now = new Date(date);
  // Get the day of the week, day of the month, month, and year
  const weekday = weekdays[now.getDay()];
  const day = String(now.getDate()).padStart(2, "0");
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  // Format the date
  const formattedDate = `${weekday} ${day} ${month}, ${year}`;
  return formattedDate;
}
