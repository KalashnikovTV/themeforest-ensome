import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

export const Spinner = styled('div')`
  animation: ${rotate} 1.2s infinite linear;
  border: ${({ theme }): number => theme.spaces[2]}px solid;
  border-color: ${({ theme }): string => theme.colors.secondary};
  border-radius: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  border-right-color: ${({ theme }): string => theme.colors.primary};
  height: ${({ theme }): number => theme.spaces[24]}px;
  margin: ${({ theme }): number => theme.spaces[0]}px auto;
  width: ${({ theme }): number => theme.spaces[24]}px;
`;
