import { authTypes } from "src/types";

const postRefreshRes:authTypes.postSignUpResProps = {
  id: 3,
  createdAt: "2022-07-20T11:45:07.482Z",
  updatedAt: "2022-07-20T18:07:25.000Z",
  email: "test@example.com",
  nickname: "함바",
  currentHashedRefreshToken:
    "$2b$10$EX0uv/vV1/T2lHcvVzS/zuHDYPHF6WENRL7dXMbOLD9T7mAsMSNTi",
};

const authData = {
  postRefreshRes,
};
export default authData;
