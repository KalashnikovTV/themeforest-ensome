import styled, { keyframes } from 'styled-components';

import { ILoadingProps } from './interfaces';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled('div')<ILoadingProps>`
  animation: ${rotate} 1.2s infinite linear;
  border: ${({ theme }): number => theme.spaces[2]}px solid;
  border-color: ${({ theme }): string => theme.colors.secondary};
  border-radius: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  border-right-color: ${({ theme }): string => theme.colors.primary};
  height: ${({ height }): number => height}px;
  margin: ${({ theme, margin }): string => (margin ? margin : `${theme.spaces[0]}px auto`)};
  width: ${({ width }): number => width}px;
`;
