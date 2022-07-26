import { Axios, AxiosError, AxiosResponse } from "axios";
import { categoryTypes } from "src/types";
import client from "./client";

const getCategory = async (): Promise<categoryTypes.getCategoryResProps[]> => {
  try {
    const {
      data: { statusCode, message, data },
    } = await client.get(`/category`);
    if (statusCode !== 200) {
      console.log(message);
      throw new Error(message);
    }
    return data;
  } catch (e) {
    console.log("[FAIL] get category");
    throw new Error("[FAIL] get category");
  }
};

const categoryApi = {
  getCategory,
};

export default categoryApi;
