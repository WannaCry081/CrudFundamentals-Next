import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  return config;
});

axios.interceptors.response.use(
  (config) => config,
  (error) => {
    return error.response;
  }
);
