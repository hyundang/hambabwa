import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colorSystem from "./ColorSystem";

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${colorSystem};
  html,
  body {
    font-family: 'sans-serif';
    font-size: 10px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  * {
    box-sizing: border-box;
    font-family: 'sans-serif';
  }
`;
