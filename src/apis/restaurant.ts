import { restaurantTypes } from "src/types";
import { apiRequest } from "src/utils";
import client from "./client";

const getRestaurantById = async (
  restaurantId: string
): Promise<restaurantTypes.restaurantProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/restaurant/${restaurantId}`,
    type: "get",
  });
  return data;
};

const restaurantApi = {
  getRestaurantById,
};

export default restaurantApi;
