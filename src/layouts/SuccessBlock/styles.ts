import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): number => theme.spaces[24]}px;
  padding-bottom: ${({ theme }): number => theme.spaces[27]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
`;

export const WrapperContent = styled('div')`
  align-items: center;
  display: flex;
  gap: ${({ theme }): number => theme.spaces[20]}px;
  justify-content: space-between;
`;

export const Customers = styled('div')``;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
  text-align: center;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[4]}px;
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;
