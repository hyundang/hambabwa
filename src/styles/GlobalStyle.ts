import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import colorSystem from "./ColorSystem";

export const GlobalStyle = createGlobalStyle`
  ${reset};
  ${colorSystem};
  html,
  body {
    font-family: "AppleSDGothicNeo", 'sans-serif';
    font-size: 10px;
    font-weight: 400;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 0;
    -webkit-border-radius: 0;
  }
  * {
    box-sizing: border-box;
    font-family:  "AppleSDGothicNeo", 'sans-serif';
    font-size: 10px;
    font-weight: 400;
    appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 0;
    -webkit-border-radius: 0;
  }
`;
