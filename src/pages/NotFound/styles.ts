import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: ${({ theme }): number => theme.maxWidth[11]}px;
`;

export const TitleError = styled('h1')`
  color: ${({ theme }): string => theme.colors.red};
  font-size: ${({ theme }): number => theme.fontSizes[9]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[17]}px;
  text-align: center;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[15]}px;
  text-align: center;
`;

export const Span = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
`;

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
