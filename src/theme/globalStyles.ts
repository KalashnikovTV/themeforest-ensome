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
    margin: ${({ theme }): number => theme.spaces[0]}px;
    padding: ${({ theme }): number => theme.spaces[0]}px;
  }

  body {
    margin: ${({ theme }): number => theme.spaces[0]}px;
    font-family: 'Manrope', sans-serif;
    font-size: ${({ theme }): number => theme.fontSizes[1]}px;
    line-height: ${({ theme }): number => theme.lineHeight[6]}px;
    letter-spacing: -0.2px;
    /* margin-right: calc(-1 * (100vw - 100%));
    overflow-x: hidden; */
  }

  ul {
    list-style-type: none;
  }

  a {
    display: inline-block;
    text-decoration: none;
  }
`;
