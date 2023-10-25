import styled, {
  css,
  CSSObject,
  DefaultTheme,
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

type ObjectMap<T> = { [key: string]: T };

export const SCREEN_SIZES: ObjectMap<number> = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopM: 1140,
  laptopL: 1440,
  desktop: 2560,
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

export const theme: DefaultTheme = {
  above,
  below, //0, 1, 2, 3, 4, 5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
  spaces: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 50, 60, 70, 80],
  //          0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 66, 72],
  //            0,   1,   2,   3,   4,   5,   6,   7,   8
  fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  //          0,   1,   2,   3,   4,   5,   6,   7,   8,   9,   10, 11,  12,  13,  14,  15,  16,   17,   18,   19
  maxWidth: [100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
  //           0,  1,  2,  3,  4,  5,  6,  7,  8,  9,  10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
  lineHeight: [12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 34, 38, 42, 44, 48, 52, 56, 60, 64, 68, 72],
  colors: {
    primary: 'rgb(24, 92, 255)',
    secondary: 'rgb(0, 43, 78)',
    tertiary: 'rgb(240, 249, 255)',
    darknessBlue: 'rgb(25, 64, 96)',
    darkBlue: 'rgb(96, 125, 148)',
    lightBlue: 'rgb(201, 220, 236)',
    black: 'rgb(41, 45, 51)',
    grey: 'rgb(148, 151, 161)',
    lightGray: 'rgb(241, 246, 250)',
    red: 'rgb(193, 64, 64)',
    white: 'rgb(255, 255, 255)',
  },
  shadows: {
    darknessBlue: '0px 12px 30px rgba(24, 92, 255, 0.18)',
    darkBlue: '0px 2px 20px 17px rgba(24, 92, 255, 0.04)',
    lightBlue: '0px 12px 30px 17px rgba(24, 92, 255, 0.04)',
    grey: '0px 2px 6px rgba(0, 43, 78, 0.15), 0px 1px 2px rgba(0, 43, 78, 0.3)',
    lightGray: '0px 4px 12px rgba(12, 68, 204, 0.1)',
  },
};

export const Container = styled('div')`
  margin: ${theme.spaces[0]}px auto;
  max-width: ${theme.maxWidth[18] + theme.spaces[16]}px;
  padding: ${theme.spaces[0]}px ${theme.spaces[8]}px;
  position: relative;
`;

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
