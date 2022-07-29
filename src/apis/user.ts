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

const userApi = {
  postProfileList,
  patchProfileListById,
};

export default userApi;
