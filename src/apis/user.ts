import { userTypes } from "src/types";
import { apiRequest } from "src/utils";
import client from "./client";

const postProfileList = async (
  body: userTypes.postProfileListReqProps
): Promise<userTypes.postProfileListResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/user/profile/list`,
    type: "post",
    body,
  });
  return data;
};

const getProfileList = async (): Promise<userTypes.postProfileListResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/user/profile/list`,
    type: "get",
    params: { type: "favorite" },
  });
  return data;
};

const patchProfileListById = async (
  menuId: number
): Promise<userTypes.postProfileListResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/user/profile/list/${menuId}`,
    type: "patch",
  });
  return data;
};

const getMyComments = async (): Promise<userTypes.getMyCommentsResProps> => {
  const data = await apiRequest({
    axios: client,
    url: `/user/profile/list`,
    type: "get",
    params: { type: "comment" },
  });
  return data;
};

const postMyProfile = async (
  body: userTypes.postMyProfileReqProps
): Promise<userTypes.postMyProfileResProps> => {
  const reqBody = new FormData();
  reqBody.append("nickname", body.nickname);
  reqBody.append("imageUrl", body.imageUrl);
  const data = await apiRequest({
    axios: client,
    url: `/user/profile`,
    type: "post",
    body: reqBody,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data;
};

const userApi = {
  postProfileList,
  getProfileList,
  patchProfileListById,
  getMyComments,
  postMyProfile,
};

export default userApi;
