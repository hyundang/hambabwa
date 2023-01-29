import { rest } from "msw";
import { userTypes } from "src/types";
import { menuData, userData } from "../data";

const postProfileList = rest.post<userTypes.postProfileListResProps>(
  `${API_DOMAIN}/api/user/profile/list`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: {
          ...userData.getUserProfile,
          favorite: menuData.getMenuByCategory,
        },
      })
    );
  }
);

const getProfileOrComment = rest.get<userTypes.postProfileListResProps>(
  `${API_DOMAIN}/api/user/profile/list`,
  (req, res, ctx) => {
    const type = req.url.searchParams.get("type");

    // 내가 작성한 리뷰 가져오기
    if (type === "comment") {
      return res(
        ctx.json({
          statusCode: 200,
          message: "success",
          data: {
            ...userData.getUserProfile,
            comments: userData.getMyComments,
          },
        })
      );
    }

    // 프로필 정보 가져오기
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: {
          ...userData.getUserProfile,
          favorites: menuData.getMenuByCategory,
        },
      })
    );
  }
);

const patchProfileListById = rest.patch<userTypes.postProfileListResProps>(
  `${API_DOMAIN}/api/user/profile/list/`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: {
          ...userData.getUserProfile,
          favorite: menuData.getMenuByCategory,
        },
      })
    );
  }
);

const postMyProfile = rest.post<userTypes.postMyProfileResProps>(
  `${API_DOMAIN}/api/user/profile`,
  (req, res, ctx) => {
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: {
          ...userData.getUserProfile,
          favorite: menuData.getMenuByCategory,
        },
      })
    );
  }
);

export const userHandler = [
  postProfileList,
  getProfileOrComment,
  patchProfileListById,
  postMyProfile,
];
