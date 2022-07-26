/* eslint-disable no-case-declarations */
import { AxiosInstance } from "axios";

interface apiRequestProps {
  axios: AxiosInstance;
  url: string;
  type: "get" | "post" | "put" | "delete";
  body?: object;
}

const getResponse = async ({ axios, url, type, body }: apiRequestProps) => {
  let res;
  switch (type) {
    case "get":
      res = await axios.get(url);
      break;
    case "post":
      res = await axios.post(url, body);
      break;
    case "put":
      res = await axios.put(url, body);
      break;
    case "delete":
      res = await axios.delete(url);
      break;
    default:
  }
  return {
    statusCode: res?.data.statusCode,
    message: res?.data.message,
    data: res?.data.data,
  };
};

const apiRequest = async (params: apiRequestProps) => {
  try {
    const { statusCode, message, data } = await getResponse(params);
    if (statusCode >= 300) {
      throw new Error(message);
    }
    return data;
  } catch (e) {
    console.log(`[FAIL] ${params.type} ${params.url}`, e);
    throw new Error(`[FAIL] ${params.type} ${params.url}`);
  }
};

export default apiRequest;
