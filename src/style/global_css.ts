import { createGlobalStyle } from "styled-components";
import { finTheme as $ } from "./variables";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    outline:none;
    font-family: SF Pro Display;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
      cursor: pointer;
  }

  .layoutContainer {
      padding:0 25px;
  
      @media screen and (min-width: 768px) {
          padding: 0  calc((100% - 1180px)/2);
      }
  }


`;
