import styled from 'styled-components';

export const List = styled('ul')`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }): number => theme.spaces[15]}px;
  justify-content: space-between;
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  text-align: left;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Item = styled('li')`
  display: flex;
  flex-direction: column;
`;

export const Count = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
  font-size: ${({ theme }): number => theme.fontSizes[9] + theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[19]}px;
`;

export const Product = styled('span')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
`;
