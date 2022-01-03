

import { createGlobalStyle } from 'styled-components';
import { finTheme as $ } from './variables';


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

`