import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IBreadcrumbItemProps } from './interfaces';

export const Nav = styled('nav')``;

export const List = styled('ul')`
  display: inline-flex;
  gap: ${({ theme }): number => theme.spaces[4]}px;
`;

export const Item = styled('li')`
  padding-left: ${({ theme }): number => theme.spaces[6]}px;
  position: relative;

  &:first-child {
    padding-left: ${({ theme }): number => theme.spaces[0]}px;
  }

  &:not(:nth-child(1))::before {
    color: ${({ theme }): string => theme.colors.grey};
    content: '|';
    font-size: ${({ theme }): number => theme.fontSizes[3]}px;
    left: ${({ theme }): number => theme.spaces[0]}px;
    position: absolute;
  }
`;

export const LinkBreadcrumb = styled(Link)<IBreadcrumbItemProps>`
  color: ${({ isActiveItem, theme }): string => (isActiveItem ? theme.colors.secondary : theme.colors.grey)};
  font-weight: ${({ isActiveItem, theme }): number => (isActiveItem ? theme.fontWeight[5] : theme.fontWeight[4])};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  pointer-events: ${({ isActiveItem }): string => (isActiveItem ? 'none' : 'auto')};
  transition: all 0.3s;

  &:hover,
  &:active {
    color: ${({ theme }): string => theme.colors.secondary};
  }
`;
