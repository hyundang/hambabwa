import axios, { AxiosRequestConfig } from "axios";
import authApi from "./auth";

const client = axios.create({
  baseURL: `${API_DOMAIN}/api`,
  withCredentials: true,
});

client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    await authApi.getRefresh();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default client;
