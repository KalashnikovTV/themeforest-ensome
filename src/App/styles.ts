import styled, { FlattenSimpleInterpolation } from 'styled-components';

export const Test = styled('div')`
  background-color: ${({ theme }): string => theme.colors.black};
  color: ${({ theme }): string => theme.colors.primary};
  font-size: ${({ theme }): number => theme.fontSizes[6]}px;

  ${({ theme }): FlattenSimpleInterpolation => theme.below.laptop`
    font-size: ${theme.fontSizes[9]}px;
  `}
`;
