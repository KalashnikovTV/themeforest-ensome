import styled from 'styled-components';

export const Wrapper = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[11] + theme.spaces[22]}px;
  position: relative;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Form = styled('form')``;

export const InputWrapper = styled('div')`
  height: ${({ theme }): number => theme.spaces[26] + theme.spaces[3]}px;
`;

export const Input = styled('input')`
  background-color: ${({ theme }): string => theme.colors.lightBlue};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  display: block;
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  height: ${({ theme }): number => theme.spaces[23]}px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  outline: none;
  padding-left: ${({ theme }): number => theme.spaces[12]}px;
  padding-right: ${({ theme }): number => theme.spaces[27] + theme.spaces[26]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &::placeholder {
    color: ${({ theme }): string => theme.colors.black};
  }
`;

export const Button = styled('button')`
  background-color: ${({ theme }): string => theme.colors.white};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  color: ${({ theme }): string => theme.colors.black};
  cursor: pointer;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  height: ${({ theme }): number => theme.spaces[23]}px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  outline: none;
  position: absolute;
  right: ${({ theme }): number => theme.spaces[0]}px;
  top: ${({ theme }): number => theme.spaces[0]}px;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[2] + theme.spaces[1]}px;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.primary};
  }

  &:disabled {
    background-color: ${({ theme }): string => theme.colors.grey};
  }
`;

export const Span = styled('span')`
  color: ${({ theme }): string => theme.colors.red};
  display: block;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  margin-top: ${({ theme }): number => theme.spaces[2]}px;
  padding-left: ${({ theme }): number => theme.spaces[12]}px;
`;
