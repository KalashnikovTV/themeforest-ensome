import styled from 'styled-components';

import { ITestimonialsItemProps } from './interfaces';

export const Wrapper = styled('div')`
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

export const TestimonialItem = styled('div')<ITestimonialsItemProps>`
  box-shadow: ${({ theme }): string => theme.shadows.lightGray};
  min-width: ${({ itemWidth }): number => itemWidth}px;
  padding: ${({ theme }): number => theme.spaces[18]}px;
`;

export const TestimonialHeader = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: ${({ theme }): number => theme.spaces[12]}px;
  justify-content: flex-start;
`;

export const TestimonialContent = styled('div')``;

export const TestimonialTitle = styled('h3')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
`;

export const TestimonialSubtitle = styled('h4')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[4]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-top: ${({ theme }): number => theme.spaces[2]}px;
`;

export const TestimonialImage = styled('img')`
  border-radius: ${({ theme }): number => theme.maxWidth[0]}%;
  height: ${({ theme }): number => theme.spaces[27]}px;
  object-fit: cover;
  width: ${({ theme }): number => theme.spaces[27]}px;
`;

export const TestimonialText = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
  margin-top: ${({ theme }): number => theme.spaces[13]}px;
`;
