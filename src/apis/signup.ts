import axios from "axios";
import { postSignUpReqProps, postSignUpResProps } from "src/types/user";

const postRefresh = async (): Promise<undefined> => {
  try {
    await axios.post(`${API_DOMAIN}/api/auth/refresh`);
    return undefined;
  } catch (e) {
    console.log("fail refresh");
    return undefined;
  }
};

const postSignUp = async (
  body: postSignUpReqProps
): Promise<postSignUpResProps | undefined> => {
  try {
    const { data } = await axios.post(`${API_DOMAIN}/api/auth/signup`, body);
    return data;
  } catch (e) {
    console.log("fail post signup");
    return undefined;
  }
};

const signupApi = {
  postRefresh,
  postSignUp,
};

export default signupApi;
