import { rest } from "msw";
import { authTypes } from "src/types";
import { menuData, userData } from "../data";

const getRefresh = rest.get(`${API_DOMAIN}/api/auth/refresh`, (req, res, ctx) => {
  console.log("refresh");
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
});

const postSignUp = rest.post<authTypes.postSignUpResProps>(
  `${API_DOMAIN}/api/auth/signup`,
  (req, res, ctx) => {
    const { email, nickname } = req.body;
    return res(
      ctx.json({
        statusCode: 200,
        message: "success",
        data: {
          id: 3,
          createdAt: "2022-07-20T11:45:07.482Z",
          updatedAt: "2022-07-20T18:07:25.000Z",
          email,
          nickname,
          currentHashedRefreshToken: "$2b$10$EX0uv/vV1/T2lHcvVzS/zuHDYPHF6WENRL7dXMbOLD9T7mAsMSNTi",
        },
      })
    );
  }
);

const postSignIn = rest.post<authTypes.postSignInResProps>(
  `${API_DOMAIN}/api/auth/login`,
  (req, res, ctx) => {
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

export const authHandler = [getRefresh, postSignUp, postSignIn];
