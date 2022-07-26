import { authTypes } from "src/types";
import client from "./client";

const postSignIn = async (
  body: authTypes.postSignInReqProps
): Promise<authTypes.postSignInResProps | undefined> => {
  try {
    const {
      data: { statusCode, message, data },
    } = await client.post(`/auth/login`, body);
    if (statusCode !== 200) {
      console.log(message);
      return undefined;
    }
    return data;
  } catch (e) {
    console.log("[FAIL] post signin");
    return undefined;
  }
};

const authApi = {
  postSignIn,
};

export default authApi;
