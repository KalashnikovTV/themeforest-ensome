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
      black: string;
      darkBlue: string;
      white: string;
      lightGray: string;
    };
  }
}
