import { authTypes, userTypes } from "src/types";
import axios from "axios";
import { apiRequest } from "src/utils";

export const auth = axios.create({
  baseURL: `${API_DOMAIN}/api`,
  withCredentials: true,
});

const getRefresh = async (): Promise<userTypes.postProfileListResProps> => {
  const data = await apiRequest({
    axios: auth,
    url: `/auth/refresh`,
    type: "get",
  });
  return data;
};

const postSignUp = async (
  body: authTypes.postSignUpReqProps
): Promise<authTypes.postSignUpResProps> => {
  const data = await apiRequest({
    axios: auth,
    url: `/auth/signup`,
    type: "post",
    body,
  });
  return data;
};

const postSignIn = async (
  body: authTypes.postSignInReqProps
): Promise<authTypes.postSignInResProps> => {
  const data = await apiRequest({
    axios: auth,
    url: `/auth/login`,
    type: "post",
    body,
  });
  await getRefresh();
  return data;
};

const authApi = {
  getRefresh,
  postSignUp,
  postSignIn,
};

export default authApi;
