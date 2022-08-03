import { useRouter } from "next/router";
import { useState } from "react";
import { authApi } from "src/apis";
import { ToastMsg } from "src/components/molecules";
import { Loading, SignUp } from "src/components/templates";
import { useToastMsg } from "src/hooks";
import { authTypes } from "src/types";

const SignUpPage = () => {
  const { isToastMsgActive, handleToastMsg } = useToastMsg("signupError");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleSignUp = async (
    params: authTypes.postSignUpReqProps | authTypes.postSignInReqProps
  ) => {
    if ("nickname" in params) {
      try {
        setLoading(true);
        await authApi.postSignUp(params);
      } catch (e) {
        handleToastMsg(true);
        return;
      }
      router.replace("/");
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <SignUp onSignUp={handleSignUp} />
      <ToastMsg
        isActive={isToastMsgActive.signupError}
        setIsActive={handleToastMsg}
        isError
        text="😢 회원가입에 실패했어요!"
      />
    </>
  );
};

export default SignUpPage;
