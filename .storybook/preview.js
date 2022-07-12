import { addDecorator } from "@storybook/react";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
// import { theme } from "src/styles/theme";
import { GlobalStyle } from "../src/styles/GlobalStyle";
import { RecoilRoot } from "recoil";
import { initialize, mswDecorator } from "msw-storybook-addon";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// msw 초기화 함수 실행
initialize();

// msw 데코레이터를 전역으로 적용
export const decorators = [
  (Story) => (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <Story />
      </RecoilRoot>
    </>
  ),
  mswDecorator,
];

// const Themes = [theme];
// addDecorator(withThemesProvider(Themes), ThemeProvider);
