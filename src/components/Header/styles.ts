import styled from 'styled-components';

export const HeaderBlock = styled('header')`
  background-color: ${({ theme }): string => theme.colors.tertiary};
`;

export const Wrapper = styled('div')`
  align-items: center;
  display: flex;
  height: ${({ theme }): number => theme.spaces[27] + theme.spaces[23]}px;
  justify-content: space-between;
`;

export const Button = styled('button')`
  background-color: ${({ theme }): string => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  color: ${({ theme }): string => theme.colors.white};
  cursor: pointer;
  height: ${({ theme }): number => theme.spaces[22]}px;
  max-width: ${({ theme }): number => theme.maxWidth[3] + theme.spaces[4]}px;
  outline: none;
  padding: ${({ theme }): number => theme.spaces[5]}px ${({ theme }): number => theme.spaces[6]}px
    ${({ theme }): number => theme.spaces[5]}px ${({ theme }): number => theme.spaces[18]}px;
  position: relative;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }

  &::before {
    background-image: url('/images/icon-play.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    display: flex;
    height: ${({ theme }): number => theme.spaces[12]}px;
    left: ${({ theme }): number => theme.spaces[6]}px;
    margin-right: ${({ theme }): number => theme.spaces[5]}px;
    position: absolute;
    top: ${({ theme }): number => theme.maxWidth[0] / 2}%;
    transform: ${({ theme }): string => `translateY(-${theme.maxWidth[0] / 2}%)`};
    width: ${({ theme }): number => theme.spaces[12]}px;
  }

  @media (max-width: 440px) {
    display: none;
  }
`;
