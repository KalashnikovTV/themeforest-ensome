import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }): number => theme.spaces[15]}px;
  justify-content: center;
`;
