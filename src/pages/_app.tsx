import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "src/styles/GlobalStyle";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    import("src/mocks");
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Component {...pageProps} />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default MyApp;
