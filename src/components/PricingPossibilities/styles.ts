import styled from 'styled-components';

export const List = styled('ul')``;

export const Item = styled('li')`
  color: inherit;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-top: ${({ theme }): number => theme.spaces[8]}px;
  padding-left: ${({ theme }): number => theme.spaces[16]}px;
  position: relative;

  &:first-child {
    margin-top: ${({ theme }): number => theme.spaces[0]}px;
  }

  &::before {
    background-image: url('/images/icon-arrow-blue-done.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: ${({ theme }): number => theme.spaces[8]}px;
    left: ${({ theme }): number => theme.spaces[0]}px;
    position: absolute;
    top: ${({ theme }): number => theme.maxWidth[0] / 2}%;
    transform: ${({ theme }): string => `translateY(-${theme.maxWidth[0] / 2}%)`};
    width: ${({ theme }): number => theme.spaces[12]}px;
  }
`;
