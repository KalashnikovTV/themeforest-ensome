import styled, { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';

type ObjectMap<T> = { [key: string]: T };

const SCREEN_SIZES: ObjectMap<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1140,
  laptopL: 1440,
  desktop: 2560
};

const above = Object.keys(SCREEN_SIZES).reduce(
  (
    acc: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    },
    key
  ) => {
    acc[key] = (...args): FlattenSimpleInterpolation => css`
      @media (min-width: ${SCREEN_SIZES[key]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {}
);

const below = Object.keys(SCREEN_SIZES).reduce(
  (
    acc: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    },
    key
  ) => {
    acc[key] = (...args): FlattenSimpleInterpolation => css`
      @media (max-width: ${SCREEN_SIZES[key]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  },
  {}
);

export const theme = {
  above,
  below,
  spaces: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 50, 60, 70, 80],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 66, 72],
  fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  maxWidth: [100, 140, 160, 180, 200, 220, 240, 260, 280, 300, 400, 450, 500, 600, 700, 800, 1000, 1200, 1400],
  lineHeight: [12, 14, 18, 22, 26, 30, 34, 38, 42, 44, 48, 52, 56, 60, 64, 68, 72],
  colors: {
    primary: 'rgb(63, 81, 181)',
    secondary: 'rgb(79, 97, 194)',
    black: 'rgb(0, 0, 0)',
    darkBlue: 'rgb(44, 52, 70)',
    white: 'rgb(255, 255, 255)',
    lightGray: 'rgb(244, 244, 244)'
  }
};

export const Container = styled('div')`
  margin: ${theme.spaces[0]}px auto;
  max-width: ${theme.maxWidth[18]}px;
  padding: ${theme.spaces[0]}px ${theme.spaces[7]}px;
  /* position: relative; */
`;
