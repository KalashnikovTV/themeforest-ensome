import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled('div')`
  display: flex;
  gap: ${({ theme }): number => theme.spaces[15]}px;
  justify-content: space-between;
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[5]}px;
  padding-top: ${({ theme }): number => theme.spaces[26] + theme.spaces[3]}px;
`;

export const WrapperTitle = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[13] - theme.spaces[5]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h1')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[9] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[17]}px;
  margin: ${({ theme }): number => theme.spaces[0]}px;
`;

export const Span = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
`;

export const WrapperContent = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[10] + theme.spaces[20]}px;
  position: relative;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
`;

export const LinkLearn = styled(Link)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  border: ${({ theme }): number => theme.spaces[1]}px solid ${({ theme }): string => theme.colors.lightBlue};
  border-radius: ${({ theme }): number => theme.maxWidth[0]}%;
  color: ${({ theme }): string => theme.colors.white};
  display: flex;
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  height: ${({ theme }): number => theme.maxWidth[0] + theme.spaces[2]}px;
  justify-content: center;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  position: absolute;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[0] + theme.spaces[2]}px;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;

export const LinkWrapper = styled('div')`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.white};
  border-radius: ${({ theme }): number => theme.maxWidth[0]}%;
  display: flex;
  height: ${({ theme }): number => theme.maxWidth[2]}px;
  justify-content: center;
  left: ${({ theme }): number => theme.spaces[0]}px;
  position: absolute;
  top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[2]}px;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;

export const Border = styled('div')`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  border-radius: ${({ theme }): number => theme.maxWidth[0]}%;
  display: flex;
  height: ${({ theme }): number => theme.maxWidth[1]}px;
  justify-content: center;
  position: absolute;
  width: ${({ theme }): number => theme.maxWidth[1]}px;
`;

export const Image = styled.img.attrs({
  src: '/images/power-img.webp',
  alt: 'Power image',
})`
  height: ${({ theme }): number => theme.maxWidth[13] - theme.spaces[5]}px;
  object-fit: cover;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
  display: block;
`;
