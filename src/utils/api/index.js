import axios from "axios";

const BASE_URL = "https://sky-scrapper.p.rapidapi.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,

    "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
  },
});
