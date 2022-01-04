import { createGlobalStyle } from "styled-components";
import { finTheme as $ } from "./variables";

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    outline:none;
  }

  body {
    padding: 0;
    margin: 0;
  }

  a {
      cursor: pointer;
  }

  .layoutContainer {
      padding:25px;
  
      @media screen and (min-width: 768px) {
          padding: calc((100% - 1180px)/2);
      }
  }


`;
