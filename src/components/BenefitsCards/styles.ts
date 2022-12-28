import styled from 'styled-components';

export const List = styled('ul')`
  column-gap: ${({ theme }): number => theme.spaces[15]}px;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled('li')`
  background-color: ${({ theme }): string => theme.colors.white};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  box-shadow: ${({ theme }): string => theme.shadows.lightBlue};
  max-width: ${({ theme }): number => theme.maxWidth[8] - theme.spaces[2]}px;
  padding: ${({ theme }): number => theme.spaces[13]}px;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &:nth-of-type(even) {
    margin-top: ${({ theme }): number => theme.spaces[15]}px;
  }

  &:nth-of-type(odd) {
    margin-bottom: ${({ theme }): number => theme.spaces[15]}px;
  }

  &:hover {
    box-shadow: ${({ theme }): string => theme.shadows.darknessBlue};
  }
`;

export const Image = styled('img')`
  height: ${({ theme }): number => theme.spaces[23]}px;
  object-fit: contain;
  width: ${({ theme }): number => theme.spaces[23]}px;
`;

export const Title = styled('h3')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[9]}px;
  margin-top: ${({ theme }): number => theme.spaces[7]}px;
`;

export const Text = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  margin-top: ${({ theme }): number => theme.spaces[5]}px;
`;
