import { menuTypes } from "src/types";
import { apiRequest } from "src/utils";
import client from "./client";

const getMenuByCategory = async (
  categoryCode: string
): Promise<menuTypes.menuItemProps[]> => {
  const data = await apiRequest({
    axios: client,
    url: `/menu/category/${categoryCode}`,
    type: "get",
  });
  return data;
};

const menuApi = {
  getMenuByCategory,
};

export default menuApi;
