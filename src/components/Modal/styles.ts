import styled from 'styled-components';

import { rgbToRgba } from '@utils/rgbToRgba';

export const ModalOverlay = styled('div')`
  background-color: ${({ theme }): string => rgbToRgba(theme.colors.black, '0.6')};
  bottom: ${({ theme }): number => theme.spaces[0]}px;
  left: ${({ theme }): number => theme.spaces[0]}px;
  position: fixed;
  right: ${({ theme }): number => theme.spaces[0]}px;
  top: ${({ theme }): number => theme.spaces[0]}px;
  z-index: 1;
`;

export const ModalContent = styled('div')`
  background-color: ${({ theme }): string => theme.colors.white};
  border-radius: ${({ theme }): number => theme.spaces[4]}px;
  left: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  padding: ${({ theme }): number => theme.spaces[5]}px ${({ theme }): number => theme.spaces[5]}px
    ${({ theme }): number => theme.spaces[1]}px ${({ theme }): number => theme.spaces[5]}px;
  position: fixed;
  top: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  transform: ${({ theme }): string => `translate(-${theme.maxWidth[0] / 2}%, -${theme.maxWidth[0] / 2}%)`};
  z-index: 1;
`;
