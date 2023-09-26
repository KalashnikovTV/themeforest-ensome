import styled, { keyframes } from 'styled-components';

import { ILoadingProps, IStyledWrapperProps } from './interfaces';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Wrapper = styled('div')<IStyledWrapperProps>`
  margin: ${({ margin }): string => margin as string};
  text-align: center;
`;

export const Spinner = styled('div')<ILoadingProps>`
  animation: ${rotate} 1.2s infinite linear;
  border: ${({ theme }): number => theme.spaces[2]}px solid;
  border-color: ${({ theme }): string => theme.colors.secondary};
  border-radius: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  border-right-color: ${({ theme }): string => theme.colors.primary};
  display: inline-block;
  height: ${({ height }): number => height as number}px;
  width: ${({ width }): number => width as number}px;
`;
