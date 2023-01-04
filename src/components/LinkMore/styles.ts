import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ILinkStyleProps } from './interfaces';

export const Link = styled(LinkRouter)<ILinkStyleProps>`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  box-shadow: ${({ theme }): string => theme.shadows.darknessBlue};
  color: ${({ theme }): string => theme.colors.white};
  display: flex;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  height: ${({ height }): number => height}px;
  justify-content: center;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  max-width: ${({ width }): number => width}px;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;
