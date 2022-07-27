import { GlobalStyle } from "../src/styles/GlobalStyle";
import { RecoilRoot } from "recoil";
import { initialize, mswDecorator } from "msw-storybook-addon";
import * as nextImage from 'next/image';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
};

// next/Image 사용
Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

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
