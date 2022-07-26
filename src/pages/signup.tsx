import { useRouter } from "next/router";
import { authApi } from "src/apis";
import { SignUp } from "src/components/templates";
import { authTypes } from "src/types";

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (
    params: authTypes.postSignUpReqProps | authTypes.postSignInReqProps
  ) => {
    if ("nickname" in params) {
      const res = await authApi.postSignUp(params);
      if (typeof res === undefined) {
        alert("fail");
      }
      router.replace("/");
    }
  };

  return <SignUp onSignUp={handleSignUp} />;
};

export default SignUpPage;
