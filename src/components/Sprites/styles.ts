import styled from 'styled-components';

export const SpritesList = styled('ul')`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }): number => theme.spaces[10]}px;
  max-width: ${({ theme }): number => theme.maxWidth[5] + theme.spaces[13] - 1}px;
`;

export const SpritesItem = styled('li')`
  display: inline-block;
  height: ${({ theme }): number => theme.spaces[13] - 1}px;
`;

export const SpritesLink = styled('a')`
  border-radius: ${({ theme }): number => theme.maxWidth[0] / 2}%;
  height: ${({ theme }): number => theme.spaces[13] - 1}px;
  width: ${({ theme }): number => theme.spaces[13] - 1}px;
`;
