/* eslint-disable no-case-declarations */
import { AxiosInstance } from "axios";

interface apiRequestProps {
  axios: AxiosInstance;
  url: string;
  type: "get" | "post" | "put" | "delete" | "patch";
  body?: object;
  params?: any;
}

const getResponse = async ({
  axios,
  url,
  type,
  body,
  params,
}: apiRequestProps) => {
  let res;
  switch (type) {
    case "get":
      res = await axios.get(url, { params });
      break;
    case "post":
      res = await axios.post(url, body, { params });
      break;
    case "put":
      res = await axios.put(url, body, { params });
      break;
    case "patch":
      res = await axios.patch(url, body, { params });
      break;
    case "delete":
      res = await axios.delete(url, { params });
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
