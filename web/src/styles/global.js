import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.css';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
  }
  body {
    background-color: #081229;
    color: #d9d9d9;
  }
`;