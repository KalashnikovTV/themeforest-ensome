import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    above: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    };
    below: {
      [key: string]: (
        first: TemplateStringsArray | CSSObject,
        ...interpolations: SimpleInterpolation[]
      ) => FlattenSimpleInterpolation;
    };

    spaces: number[];
    fontSizes: number[];
    fontWeight: number[];
    maxWidth: number[];
    lineHeight: number[];

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      darknessBlue: string;
      darkBlue: string;
      lightBlue: string;
      black: string;
      grey: string;
      lightGray: string;
      red: string;
    };

    shadows: {
      darknessBlue: string;
      darkBlue: string;
      lightBlue: string;
      grey: string;
      lightGray: string;
    };
  }
}
