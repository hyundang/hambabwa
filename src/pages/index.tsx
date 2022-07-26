import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { authApi } from "src/apis";
import { SignIn } from "src/components/templates";
import { authTypes } from "src/types";
import nextCookie from "next-cookies";

const SignInPage = () => {
  const router = useRouter();
  const handleSignIn = async (params: authTypes.postSignInReqProps) => {
    const data = await authApi.postSignIn(params);
    router.replace("/profile");
  };

  return <SignIn onSignIn={handleSignIn} />;
};

export default SignInPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookie(ctx);
  const refreshToken = allCookies.Refresh;
  const { isProfileWritten } = allCookies;

  if (refreshToken) {
    // try {
    //   await authApi.getRefresh();
    // } catch (e) {
    //   // 로그인 풀렸을 때
    //   return {
    //     props: {},
    //   };
    // }
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
  return {
    props: {},
  };
};
