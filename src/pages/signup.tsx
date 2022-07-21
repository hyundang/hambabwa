import { useRouter } from "next/router";
import { signupApi } from "src/apis";
import { SignUp } from "src/components/templates";
import { postSignInReqProps, postSignUpReqProps } from "src/types/user";

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (
    params: postSignUpReqProps | postSignInReqProps
  ) => {
    if ("nickname" in params) {
      const res = await signupApi.postSignUp(params);
      if (typeof res === undefined) {
        alert("fail");
      }
      router.replace("/signin");
    }
  };

  return <SignUp onSignUp={handleSignUp} />;
};

export default SignUpPage;
