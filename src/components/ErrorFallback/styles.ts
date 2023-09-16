import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ theme }): number => theme.maxWidth[0]}vh;
`;

export const Title = styled('h1')``;

export const CodeMessage = styled('pre')``;

export const Button = styled('button')`
  background-color: ${({ theme }): string => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[6]}px;
  color: ${({ theme }): string => theme.colors.tertiary};
  cursor: pointer;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[15]}px;
  margin-top: ${({ theme }): number => theme.spaces[15]}px;
  max-width: ${({ theme }): number => theme.maxWidth[0]}%;
  min-height: ${({ theme }): number => theme.spaces[20]}px;
  outline: none;
  padding: ${({ theme }): number => theme.spaces[6]}px ${({ theme }): number => theme.spaces[9]}px;
  text-align: center;
  transition: all 0.3s;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;
