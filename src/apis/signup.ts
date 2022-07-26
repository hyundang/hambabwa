import axios from "axios";
import { authTypes } from "src/types";

const postRefresh = async (): Promise<undefined> => {
  try {
    await axios.get(`${API_DOMAIN}/api/auth/refresh`);
    return undefined;
  } catch (e) {
    console.log("[FAIL] refresh");
    return undefined;
  }
};

const postSignUp = async (
  body: authTypes.postSignUpReqProps
): Promise<authTypes.postSignUpResProps | undefined> => {
  try {
    const {
      data: { statusCode, message, data },
    } = await axios.post(`${API_DOMAIN}/api/auth/signup`, body);
    if (statusCode !== 200) {
      console.log(message);
      return undefined;
    }
    return data;
  } catch (e) {
    console.log("[FAIL] post signup");
    return undefined;
  }
};

const signupApi = {
  postRefresh,
  postSignUp,
};

export default signupApi;
