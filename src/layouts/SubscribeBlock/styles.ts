import styled from 'styled-components';

import { ISubscribeBlockProps } from './interfaces';

export const Wrapper = styled('div')<ISubscribeBlockProps>`
  background-color: ${({ bgColor }): string => bgColor};
  border-bottom: ${({ theme }): number => theme.spaces[1]}px solid ${({ theme }): string => theme.colors.darkBlue};
  padding-bottom: ${({ theme }): number => theme.spaces[27]}px;
  padding-top: ${({ theme }): number => theme.spaces[27]}px;
`;

export const WrapperContent = styled('div')`
  align-items: center;
  display: flex;
  gap: ${({ theme }): number => theme.spaces[10]}px;
  justify-content: space-between;
`;

export const WrapperText = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.white};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.white};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  margin-top: ${({ theme }): number => theme.spaces[12]}px;
`;
