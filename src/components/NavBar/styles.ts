import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  color: ${({ theme }): string => theme.colors.grey};
  font-weight: ${({ theme }): number => theme.fontWeight[4]};
  letter-spacing: -0.01px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;

  &.active {
    color: ${({ theme }): string => theme.colors.primary};
  }

  &:hover,
  &:active {
    color: ${({ theme }): string => theme.colors.secondary};
  }
`;

export const BurgerButton = styled('div')`
  display: none;
  width: ${({ theme }): number => theme.spaces[12]}px;
`;

export const BurgerRow = styled('div')`
  background-color: ${({ theme }): string => theme.colors.primary};
  height: ${({ theme }): number => theme.spaces[2]}px;
  width: 100%;

  & + & {
    margin-top: ${({ theme }): number => theme.spaces[2]}px;
  }
`;

export const NavBarList = styled('ul')`
  display: flex;
`;

export const NavBarItem = styled('li')`
  margin-left: ${({ theme }): number => theme.spaces[11]}px;

  &:first-child {
    margin-left: ${({ theme }): number => theme.spaces[0]}px;
  }
`;
