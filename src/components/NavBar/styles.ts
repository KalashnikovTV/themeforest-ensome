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
    color: ${({ theme, direction }): string => (direction === 'row' ? theme.colors.secondary : theme.colors.white)};
    font-weight: ${({ theme }): number => theme.fontWeight[5]};
  }

  &:hover,
  &:active {
    color: ${({ theme, direction }): string => (direction === 'row' ? theme.colors.secondary : theme.colors.white)};
  }

  @media (max-width: 960px) {
    ${({ $withMobileBurgerMenu, theme }): string =>
      $withMobileBurgerMenu
        ? `
        padding: ${theme.spaces[7]}px 0px;
        display: block;
        color: ${theme.colors.white};
        border-bottom: 1px solid ${theme.colors.black};

        &.active {
          color: ${theme.colors.secondary};
        }

        &:active {
          color: ${theme.colors.secondary};
        }

        &:hover {
          color: ${theme.colors.secondary};
        }
    `
        : ''};
  }
`;

export const BurgerButton = styled('div')`
  cursor: pointer;
  display: none;
  width: ${({ theme }): number => theme.spaces[12]}px;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    top: ${({ theme }): number => theme.spaces[24] + theme.spaces[2]}px;
    right: ${({ theme }): number => theme.spaces[27] + theme.spaces[27] + theme.spaces[20]}px;
  }

  @media (max-width: 440px) {
    right: ${({ theme }): number => theme.spaces[8]}px;
  }
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

export const List = styled('ul')<INavBarProps>`
  display: flex;
  flex-direction: ${({ direction }): string => direction};

  @media (max-width: 960px) {
    ${({ withMobileBurgerMenu, isOpenBurger, theme }): string =>
      withMobileBurgerMenu
        ? `
      display: ${isOpenBurger ? 'block' : 'none'};
      position: absolute;
      z-index: 1;
      width: ${theme.maxWidth[0]}%;
      top: ${theme.spaces[27] + theme.spaces[23]}px;
      left: ${theme.spaces[0]}px;
      right: ${theme.spaces[0]}px;
      background-color: ${theme.colors.primary};
    `
        : ''};
  }
`;

export const Item = styled('li')<INavBarProps>`
  margin-left: ${({ theme, direction }): number => (direction === 'row' ? theme.spaces[11] : theme.spaces[0])}px;
  margin-top: ${({ theme, direction }): number => (direction === 'row' ? theme.spaces[0] : theme.spaces[6])}px;

  &:first-child {
    margin-left: ${({ theme }): number => theme.spaces[0]}px;
    margin-top: ${({ theme }): number => theme.spaces[0]}px;
  }

  @media (max-width: 960px) {
    ${({ withMobileBurgerMenu, theme }): string =>
      withMobileBurgerMenu
        ? `
        text-align: center;
        margin-left: ${theme.spaces[0]}px;
    `
        : ''};
  }
`;
