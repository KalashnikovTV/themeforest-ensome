import styled from 'styled-components';

export const WrapperBreadcrumbs = styled('div')`
  padding-bottom: ${({ theme }): number => theme.spaces[24] + theme.spaces[3]}px;
  padding-top: ${({ theme }): number => theme.spaces[10]}px;
`;
