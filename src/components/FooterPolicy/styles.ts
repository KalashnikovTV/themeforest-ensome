import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  border-top: ${({ theme }): string => `${theme.spaces[1]}px solid ${theme.colors.darkBlue}`};
  display: flex;
  height: ${({ theme }): number => theme.spaces[27] + theme.spaces[4]}px;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    height: initial;
    padding: ${({ theme }): number => theme.spaces[7]}px ${({ theme }): number => theme.spaces[0]}px;
    gap: ${({ theme }): number => theme.spaces[3]}px;
  }
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.darkBlue};
`;

export const LinkPolicyWrapper = styled('div')``;

export const LinkPolicy = styled(Link)`
  color: ${({ theme }): string => theme.colors.darkBlue};
  margin-left: ${({ theme }): number => theme.spaces[27] + theme.spaces[7]}px;
  transition: all 0.3s;

  &:first-child {
    margin-left: ${({ theme }): number => theme.spaces[0]}px;
  }

  &:hover,
  &:active {
    color: ${({ theme }): string => theme.colors.white};
  }

  @media (max-width: 600px) {
    margin-left: ${({ theme }): number => theme.spaces[8]}px;
  }
`;
