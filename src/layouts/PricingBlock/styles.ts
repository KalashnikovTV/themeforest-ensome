import styled from 'styled-components';

export const Wrapper = styled('div')``;

export const WrapperContent = styled('div')`
  margin-bottom: ${({ theme }): number => theme.spaces[24]}px;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
`;
