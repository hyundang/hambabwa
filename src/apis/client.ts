import axios, { AxiosRequestConfig } from "axios";
import cookie from "react-cookies";
import signupApi from "./signup";

const client = axios.create({
  baseURL: `${API_DOMAIN}/api`,
});

client.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    // const refreshToken = cookie.load("Refresh");

    // if (refreshToken) {
    //   await signupApi.postRefresh();
    // }
    await signupApi.postRefresh();
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default client;
