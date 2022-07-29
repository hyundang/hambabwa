import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { authApi } from "src/apis";
import { SignIn } from "src/components/templates";
import { authTypes } from "src/types";
import nextCookie from "next-cookies";
import { ToastMsg } from "src/components/molecules";
import { useToastMsg } from "src/hooks";
import { auth } from "src/apis/auth";
import { saveDataInCookie } from "src/utils";

const SignInPage = () => {
  const { isToastMsgActive, handleToastMsg } = useToastMsg("signinError");

  const router = useRouter();
  const handleSignIn = async (params: authTypes.postSignInReqProps) => {
    try {
      const data = await authApi.postSignIn(params);
      saveDataInCookie("nickname", data.nickname);
      saveDataInCookie("imageUrl", data.imageUrl);
      saveDataInCookie("email", data.email);
    } catch (e) {
      handleToastMsg(true);
      return;
    }
    router.replace("/profile");
  };

  return (
    <>
      <SignIn onSignIn={handleSignIn} />
      <ToastMsg
        isActive={isToastMsgActive.signinError}
        setIsActive={handleToastMsg}
        isError
        text="😢 로그인에 실패했어요!"
      />
    </>
  );
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookie(ctx);
  const { isProfileWritten, Refresh } = allCookies;

  if (Refresh) {
    try {
      if (ctx.req.headers.cookie)
        auth.defaults.headers.common.Cookie = ctx.req.headers.cookie;

      await authApi.getRefresh();
    } catch (e) {
      // 로그인 풀렸을 때
      auth.defaults.headers.common.Cookie = "";
      return {
        props: {},
      };
    }
    // 음식 선호 작성 했을 때
    if (isProfileWritten)
      return {
        redirect: {
          destination: "/map",
          permanent: false,
        },
      };
    // 음식 선호 작성 안했을 때
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    };
  }

  // 로그인 풀렸을 때 or 로그인 안되어 있을 때
  auth.defaults.headers.common.Cookie = "";
  return {
    props: {},
  };
};
