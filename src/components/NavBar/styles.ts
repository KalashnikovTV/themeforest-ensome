import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { INavBarProps } from './interfaces';

export const Link = styled(NavLink)<INavBarProps>`
  color: ${({ theme }): string => theme.colors.grey};
  font-weight: ${({ theme }): number => theme.fontWeight[4]};
  letter-spacing: -0.01px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  transition: all 0.3s;

  &.active {
    color: ${({ theme, direction, isActiveLinkColor }): string =>
      !isActiveLinkColor ? 'inherit' : direction === 'row' ? theme.colors.secondary : theme.colors.white};
  }

  &:hover,
  &:active {
    color: ${({ theme, direction }): string => (direction === 'row' ? theme.colors.secondary : theme.colors.white)};
  }
`;

export const BurgerButton = styled('div')`
  display: none;
  width: ${({ theme }): number => theme.spaces[12]}px;
`;

export const BurgerRow = styled('div')`
  background-color: ${({ theme }): string => theme.colors.primary};
  height: ${({ theme }): number => theme.spaces[2]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  & + & {
    margin-top: ${({ theme }): number => theme.spaces[2]}px;
  }
`;

export const Nav = styled('nav')``;

export const NavBarList = styled('ul')<INavBarProps>`
  display: flex;
  flex-direction: ${({ direction }): string => direction};
`;

export const NavBarItem = styled('li')<INavBarProps>`
  margin-left: ${({ theme, direction }): number => (direction === 'row' ? theme.spaces[11] : theme.spaces[0])}px;
  margin-top: ${({ theme, direction }): number => (direction === 'row' ? theme.spaces[0] : theme.spaces[6])}px;

  &:first-child {
    margin-left: ${({ theme }): number => theme.spaces[0]}px;
    margin-top: ${({ theme }): number => theme.spaces[0]}px;
  }
`;
