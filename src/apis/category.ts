import { categoryTypes } from "src/types";
import { apiRequest } from "src/utils";
import client from "./client";

const getCategory = async (): Promise<categoryTypes.getCategoryResProps[]> => {
  const data = await apiRequest({
    axios: client,
    url: `/category`,
    type: "get",
  });
  return data;
};

const categoryApi = {
  getCategory,
};

export default categoryApi;
