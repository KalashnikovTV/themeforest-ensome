import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  gap: ${({ theme }): number => theme.spaces[15]}px;
  justify-content: space-between;
`;
