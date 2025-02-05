import dayjs from "dayjs";

export const formattedDate = (value) => {
  const date = dayjs(value).format("YYYY-MM-DD");
  return date;
};
export const formatDuration = (durationInMinutes) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  if (hours === 0) {
    return `${minutes}min`;
  }

  return `${hours}h ${minutes}min`;
};

export const formatHour = (dateTime) => {
  const time = dateTime.split("T")[1].slice(0, 5);
  return time;
};

export const formatLongDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const weekday = date.toLocaleString("en-US", { weekday: "long" });

  return `${day} ${month} ${weekday}`;
};
