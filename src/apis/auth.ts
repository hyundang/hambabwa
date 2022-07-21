import {
  postSignInReqProps,
  postSignInResProps,
} from "src/types/user";
import client from "./client";

const postSignIn = async (
  body: postSignInReqProps
): Promise<postSignInResProps | undefined> => {
  try {
    const { data } = await client.post(`/auth/login`, body);
    return data;
  } catch (e) {
    console.log("fail post signin");
    return undefined;
  }
};

const authApi = {
  postSignIn,
};

export default authApi;
