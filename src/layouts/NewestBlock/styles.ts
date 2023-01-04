import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  gap: ${({ theme }): number => theme.spaces[15]}px;
  justify-content: space-between;
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
`;

export const WrapperTitle = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[13] - theme.spaces[8]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[10]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[18]}px;
  margin: ${({ theme }): number => theme.spaces[0]}px;
`;

export const Span = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
`;

export const WrapperContent = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[11] + theme.spaces[22]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[15]}px;
`;
