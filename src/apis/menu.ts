import { menuTypes } from "src/types";
import client from "./client";

const getMenuByCategory = async (
  categoryCode: string
): Promise<menuTypes.getMenuByCategoryResProps[]> => {
  try {
    const {
      data: { statusCode, message, data },
    } = await client.get(`/menu/category/${categoryCode}`);
    if (statusCode !== 200) {
      console.log(message);
      throw new Error(message);
    }
    return data;
  } catch (e) {
    console.log("[FAIL] get menu by category");
    throw new Error("[FAIL] get menu by category");
  }
};

const menuApi = {
  getMenuByCategory,
};

export default menuApi;
