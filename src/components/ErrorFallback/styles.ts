import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ theme }): number => theme.maxWidth[0]}vh;
`;

//TODO вынести в отдельный компонент
export const Button = styled('button')`
  background-color: ${({ theme }): string => theme.colors.primary};
  border: none;
  color: ${({ theme }): string => theme.colors.tertiary};
  cursor: pointer;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  margin-top: ${({ theme }): number => theme.spaces[10]}px;
  max-width: ${({ theme }): number => theme.maxWidth[0]}%;
  min-height: ${({ theme }): number => theme.spaces[20]}px;
  outline: none;
  padding: ${({ theme }): number => theme.spaces[6]}px ${({ theme }): number => theme.spaces[9]}px;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;
