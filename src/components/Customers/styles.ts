import styled from 'styled-components';

export const List = styled('ul')`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: ${({ theme }): number => theme.maxWidth[0] + theme.spaces[16]}px;
  justify-content: space-between;
  width: ${({ theme }): number => theme.maxWidth[4] + theme.spaces[2]}px;
`;

export const Item = styled('li')`
  height: ${({ theme }): number => theme.maxWidth[0] + theme.spaces[16]}px;
  width: ${({ theme }): number => theme.maxWidth[4] + theme.spaces[2]}px;
`;

export const Image = styled('img')`
  height: ${({ theme }): number => theme.maxWidth[0] + theme.spaces[16]}px;
  object-fit: contain;
  width: ${({ theme }): number => theme.maxWidth[4] + theme.spaces[2]}px;
`;
