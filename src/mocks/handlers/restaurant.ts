import { rest } from "msw";
import { restaurantTypes } from "src/types";
import restaurantData from "../data/restaurant";

const getRestaurants = rest.get<restaurantTypes.defaultRestaurntProps[]>(
  `${API_DOMAIN}/api/restaurant`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: restaurantData.getDefaultRestaurants,
      })
    );
  }
);

const getRestaurantById = rest.get<restaurantTypes.restaurantProps>(
  `${API_DOMAIN}/api/restaurant/:id`,
  (req, res, ctx) => {
    const { id } = req.params;
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: restaurantData.getRestaurant,
      })
    );
  }
);

const postComment = rest.post<restaurantTypes.postCommentResProps>(
  `${API_DOMAIN}/api/restaurant/comment`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: restaurantData.getPostCommentRes,
      })
    );
  }
);

const patchComment = rest.patch<restaurantTypes.postCommentResProps>(
  `${API_DOMAIN}/api/restaurant/comment`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: restaurantData.getPostCommentRes,
      })
    );
  }
);

const deleteComment = rest.delete<restaurantTypes.postCommentResProps>(
  `${API_DOMAIN}/api/restaurant/comment`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: restaurantData.getPostCommentRes,
      })
    );
  }
);

export const restaurantHandler = [
  getRestaurants,
  getRestaurantById,
  postComment,
  patchComment,
  deleteComment,
];
