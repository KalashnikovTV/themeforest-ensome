import styled from 'styled-components';

export const Wrapper = styled('div')`
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  text-align: center;
`;
