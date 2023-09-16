import styled from 'styled-components';

export const Wrapper = styled('div')`
  background-color: ${({ theme }): string => theme.colors.lightGray};
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[10]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[10]}px;
  text-align: center;
`;

export const Title = styled('h1')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[9] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[17]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[7]}px;
  margin-top: ${({ theme }): number => theme.spaces[7]}px;
`;

export const WrapperDetailed = styled('div')`
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  padding-top: ${({ theme }): number => theme.spaces[10]}px;
`;

export const WrapperContent = styled('div')`
  margin: ${({ theme }): number => theme.spaces[0]}px auto;
  max-width: ${({ theme }): number => theme.maxWidth[16] + theme.spaces[20]}px;
  padding-top: ${({ theme }): number => theme.spaces[24] + theme.spaces[3]}px;
  text-align: center;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Subtitle = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
`;

export const Description = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  margin: ${({ theme }): number => theme.spaces[0]}px auto;
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;
