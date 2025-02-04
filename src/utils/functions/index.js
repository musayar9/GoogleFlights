import dayjs from "dayjs";

export const formattedDate = (value) => {
  const date = dayjs(value).format("YYYY-MM-DD");
  return date;
};
