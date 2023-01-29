import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "src/styles/GlobalStyle";
import Head from "next/head";
import { GetServerSideProps } from "next";
import nextCookie from "next-cookies";

const queryClient = new QueryClient();
if (process.env.NODE_ENV === "development") {
  require("src/mocks");
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <GlobalStyle />
          <Component {...pageProps} />
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allCookies = nextCookie(ctx);
  const { refreshToken } = allCookies;

  // 로그인 된 경우 맵으로 리다이렉트
  if (refreshToken) {
    return {
      redirect: {
        destination: "/map",
        permanent: false,
      },
    };
  }

  return { props: {} };
};
