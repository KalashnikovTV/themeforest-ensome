import styled from 'styled-components';

export const Card = styled('div')`
  box-shadow: ${({ theme }): string => theme.shadows.lightGray};
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[17]}px;
  min-height: ${({ theme }): number => theme.maxWidth[8] + theme.spaces[5]}px;
  padding: ${({ theme }): number => theme.spaces[10]}px ${({ theme }): number => theme.spaces[17]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Image = styled('img')`
  height: ${({ theme }): number => theme.spaces[25]}px;
  object-fit: contain;
  width: ${({ theme }): number => theme.spaces[25]}px;
`;

export const Title = styled('h3')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[4] + theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[8]}px;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[4]}px;
`;
