import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ISliderItemProps } from './interfaces';

export const Wrapper = styled('div')`
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
`;

export const WrapperContent = styled('div')`
  margin-bottom: ${({ theme }): number => theme.spaces[24]}px;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
`;

export const SliderItem = styled('div')<ISliderItemProps>`
  min-width: ${({ itemWidth }): number => itemWidth}px;
`;

export const SliderItemHeader = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const SliderItemContent = styled('div')``;

export const SliderItemLink = styled(Link)`
  color: inherit;
`;

export const SliderItemTitle = styled('h3')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[4] + theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[10]}px;
  margin-top: ${({ theme }): number => theme.spaces[6]}px;
`;

export const SliderItemSubtitle = styled('span')`
  color: ${({ theme }): string => theme.colors.grey};
  display: block;
  font-size: ${({ theme }): number => theme.fontSizes[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[4]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-top: ${({ theme }): number => theme.spaces[10]}px;
`;

export const SliderItemImage = styled('img')`
  display: block;
  height: ${({ theme }): number => theme.maxWidth[5]}px;
  object-fit: cover;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const SliderItemText = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
  margin-top: ${({ theme }): number => theme.spaces[6]}px;
`;
