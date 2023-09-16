import styled from 'styled-components';

import { IContentStyleProps, IPanelStyleProps } from './interfaces';

export const Wrapper = styled('div')<IPanelStyleProps>`
  border: ${({ theme }): number => theme.spaces[1]}px solid ${({ theme }): string => theme.colors.grey};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  margin-top: ${({ theme }): number => theme.spaces[10]}px;

  &:first-child {
    margin-top: ${({ theme }): number => theme.spaces[0]}px;
  }
`;

export const Content = styled('div')<IContentStyleProps>`
  height: ${({ panelHeight }): number => panelHeight}px;
  overflow: hidden;
  transition: height 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  will-change: height;
`;

export const Label = styled('div')<IPanelStyleProps>`
  border: none;
  color: ${({ isActivePanel, theme }): string => (isActivePanel ? theme.colors.primary : theme.colors.black)};
  cursor: pointer;
  display: block;
  font-size: ${({ theme }): number => theme.fontSizes[4] + theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[9] + theme.spaces[1]}px;
  outline: none;
  padding: ${({ theme }): number => theme.spaces[18]}px ${({ theme }): number => theme.spaces[27]}px
    ${({ theme }): number => theme.spaces[18]}px ${({ theme }): number => theme.spaces[18]}px;
  position: relative;
  text-align: left;
  transition: color 0.3s linear;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &::after,
  &::before {
    background-color: ${({ isActivePanel, theme }): string =>
      isActivePanel ? theme.colors.primary : theme.colors.black};
    content: '';
    height: ${({ theme }): number => theme.spaces[1]}px;
    margin-top: -${({ theme }): number => theme.spaces[1]}px;
    position: absolute;
    right: ${({ theme }): number => theme.spaces[17]}px;
    top: ${({ theme }): number => theme.maxWidth[0] / 2}%;
    width: ${({ theme }): number => theme.spaces[11]}px;
  }

  &::before {
    transform: ${({ isActivePanel }): string => (isActivePanel ? `rotate(0deg)` : 'rotate(90deg)')};
    transition: transform 0.3s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;

export const Paragraph = styled('p')<IPanelStyleProps>`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  line-height: ${({ theme }): number => theme.lineHeight[9] + theme.spaces[1]}px;
  margin-top: -${({ theme }): number => theme.spaces[3]}px;
  opacity: ${({ isActivePanel }): number => (isActivePanel ? 1 : 0)};
  padding: ${({ theme }): number => theme.spaces[0]}px ${({ theme }): number => theme.spaces[27]}px
    ${({ theme }): number => theme.spaces[18]}px ${({ theme }): number => theme.spaces[18]}px;
  transition: opacity 0.3s linear 0.15s;
`;
