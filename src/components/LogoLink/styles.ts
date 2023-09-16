import styled from 'styled-components';

import { ILogoLinkProps } from './interfaces';

export const Image = styled.img.attrs(({ isWhiteLogo }: ILogoLinkProps): unknown => ({
  src: isWhiteLogo ? '/images/logo-white.svg' : '/images/logo-blue.svg',
  alt: isWhiteLogo ? 'Logo-white' : 'Logo-blue',
}))`
  border: none;
  height: ${({ theme }): number => theme.spaces[23]}px;
  object-fit: cover;
  outline: none;
  width: ${({ theme }): number => theme.maxWidth[2] + theme.spaces[1]}px;
`;
