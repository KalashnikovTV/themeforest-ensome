import styled from 'styled-components';

import { ISliderTrackProps } from './interfaces';

export const Wrapper = styled('div')`
  position: relative;
`;

export const SliderContainer = styled('div')`
  box-shadow: ${({ theme }): string => theme.shadows.lightGray};
  overflow-x: hidden;
`;

export const SliderTrack = styled('div')<ISliderTrackProps>`
  display: flex;
  gap: ${({ gap }): number => gap}px;
  transform: ${({ position }): string => `translateX(${position}px)`};
  transition: all 0.3s;
`;

export const SliderButtons = styled('div')`
  align-items: center;
  display: flex;
  gap: ${({ theme }): number => theme.spaces[5]}px;
  justify-content: space-between;
  max-width: ${({ theme }): number => theme.maxWidth[7] - theme.spaces[3]}px;
  position: absolute;
  right: ${({ theme }): number => theme.spaces[0]}px;
  text-align: center;
  top: -${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const SliderButton = styled('button')`
  background-color: ${({ theme }): string => theme.colors.lightGray};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[10]}px;
  cursor: pointer;
  height: ${({ theme }): number => theme.spaces[25]}px;
  outline: none;
  position: relative;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[1] + theme.spaces[5]}px;

  &:disabled {
    opacity: 0.3;
  }

  &::before {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    content: '';
    height: ${({ theme }): number => theme.spaces[18]}px;
    left: ${({ theme }): number => theme.maxWidth[0] / 2}%;
    position: absolute;
    top: ${({ theme }): number => theme.maxWidth[0] / 2}%;
    transform: ${({ theme }): string => `translate(-${theme.maxWidth[0] / 2}%, -${theme.maxWidth[0] / 2}%)`};
    width: ${({ theme }): number => theme.spaces[18]}px;
  }

  &:first-child::before {
    background-image: url('/images/icon-arrow-left.svg');
  }

  &:last-child::before {
    background-image: url('/images/icon-arrow-right.svg');
  }
`;
