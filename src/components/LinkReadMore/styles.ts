import { Link as LinkRouter } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(LinkRouter)`
  color: ${({ theme }): string => theme.colors.primary};
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-top: ${({ theme }): number => theme.spaces[6]}px;
  padding-right: ${({ theme }): number => theme.spaces[12]}px;
  position: relative;

  &::after {
    background-image: url('/images/icon-arrow-blue-right.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: ${({ theme }): number => theme.spaces[3]}px;
    content: '';
    height: ${({ theme }): number => theme.spaces[5]}px;
    position: absolute;
    right: ${({ theme }): number => theme.spaces[0]}px;
    width: ${({ theme }): number => theme.spaces[9]}px;
  }
`;
