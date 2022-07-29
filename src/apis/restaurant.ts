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

const postComment = async (
  body: restaurantTypes.postCommentReqProps
): Promise<restaurantTypes.postCommentResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/restaurant/comment`,
    type: "post",
    body,
  });
  return data;
};

const patchComment = async (
  id: number,
  body: restaurantTypes.patchCommentReqProps
): Promise<restaurantTypes.postCommentResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/restaurant/comment/${id}`,
    type: "patch",
    body,
  });
  return data;
};

const deleteComment = async (
  id: number
): Promise<restaurantTypes.postCommentResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/restaurant/comment/${id}`,
    type: "delete",
  });
  return data;
};

const restaurantApi = {
  getRestaurantById,
  postComment,
  patchComment,
  deleteComment,
};

export default restaurantApi;
