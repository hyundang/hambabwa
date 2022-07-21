import { useRouter } from "next/router";
import { authApi } from "src/apis";
import { SignIn } from "src/components/templates";
import { postSignInReqProps } from "src/types/user";

const SignInPage = () => {
  const router = useRouter();
  const handleSignIn = async (params: postSignInReqProps) => {
    const res = await authApi.postSignIn(params);
    if (typeof res === undefined) {
      alert("fail");
    }
    router.replace("/map");
  };

  return <SignIn onSignIn={handleSignIn} />;
};

export default SignInPage;
