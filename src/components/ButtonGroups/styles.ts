import styled from 'styled-components';

import { IButtonProps } from './interfaces';

export const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  gap: ${({ theme }): number => theme.spaces[5]}px;
`;

export const Button = styled('button')<IButtonProps>`
  background-color: ${({ isActiveButton, theme }): string =>
    isActiveButton ? theme.colors.darkBlue : theme.colors.white};
  border: ${({ theme }): number => theme.spaces[1]}px solid ${({ theme }): string => theme.colors.darkBlue};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  color: ${({ isActiveButton, theme }): string => (isActiveButton ? theme.colors.white : theme.colors.darkBlue)};
  cursor: pointer;
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  height: ${({ theme }): number => theme.spaces[16]}px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  width: ${({ theme }): number => theme.spaces[21]}px;
`;
