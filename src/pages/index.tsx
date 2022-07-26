import { useRouter } from "next/router";
import { authApi } from "src/apis";
import { SignIn } from "src/components/templates";
import { authTypes } from "src/types";

const SignInPage = () => {
  const router = useRouter();
  const handleSignIn = async (params: authTypes.postSignInReqProps) => {
    const res = await authApi.postSignIn(params);
    if (typeof res === undefined) {
      alert("fail");
    }
    // router.replace("/profile");
  };

  return <SignIn onSignIn={handleSignIn} />;
};

export default SignInPage;
