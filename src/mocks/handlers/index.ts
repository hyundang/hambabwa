import { rest } from "msw";
import { postSignInReqProps, postSignUpReqProps } from "src/types/user";

const postRefresh = rest.post(
  `${API_DOMAIN}/api/auth/refresh`,
  (req, res, ctx) => {
    console.log("refresh")
    return res(
      ctx.json({
        id: 3,
        createdAt: "2022-07-20T11:45:07.482Z",
        updatedAt: "2022-07-20T18:07:25.000Z",
        email: "test@example.com",
        nickname: "함바",
        currentHashedRefreshToken:
          "$2b$10$EX0uv/vV1/T2lHcvVzS/zuHDYPHF6WENRL7dXMbOLD9T7mAsMSNTi",
      })
    );
  }
);

const postSignUp = rest.post<postSignUpReqProps>(
  `${API_DOMAIN}/api/auth/signup`,
  (req, res, ctx) => {
    const { email, nickname } = req.body;
    return res(
      ctx.json({
        id: 3,
        createdAt: "2022-07-20T11:45:07.482Z",
        updatedAt: "2022-07-20T18:07:25.000Z",
        email,
        nickname,
        currentHashedRefreshToken:
          "$2b$10$EX0uv/vV1/T2lHcvVzS/zuHDYPHF6WENRL7dXMbOLD9T7mAsMSNTi",
      })
    );
  }
);

const postSignIn = rest.post<postSignInReqProps>(
  `${API_DOMAIN}/api/auth/login`,
  (req, res, ctx) => {
    const { email } = req.body;
    return res(
      ctx.json({
        id: 3,
        createdAt: "2022-07-20T11:45:07.482Z",
        updatedAt: "2022-07-20T18:07:25.000Z",
        email,
        nickname: "함바",
        currentHashedRefreshToken:
          "$2b$10$EX0uv/vV1/T2lHcvVzS/zuHDYPHF6WENRL7dXMbOLD9T7mAsMSNTi",
      })
    );
  }
);

export const handlers = [postRefresh, postSignUp, postSignIn];
