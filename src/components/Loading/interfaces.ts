import { CSSProperties } from 'react';

export interface ILoadingProps {
  height?: number;
  width?: number;
  margin?: CSSProperties['margin'];
}

export type IStyledLoadingProps = Omit<ILoadingProps, 'margin'>;

export type IStyledWrapperProps = Pick<ILoadingProps, 'margin'>;
