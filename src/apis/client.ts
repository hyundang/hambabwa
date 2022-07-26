import axios, { AxiosRequestConfig } from "axios";
import signupApi from "./signup";

const client = axios.create({
  baseURL: `${API_DOMAIN}/api`,
  withCredentials: true,
});

client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    await signupApi.postRefresh();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default client;
