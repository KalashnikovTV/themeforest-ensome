import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif; // add after check figma
  }

  ul {
    list-style-type: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
`;
