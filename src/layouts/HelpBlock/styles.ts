import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled('div')`
  background-color: ${({ theme }): string => theme.colors.lightGray};
  padding-bottom: ${({ theme }): number => theme.spaces[27] + theme.spaces[10]}px;
  padding-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[10]}px;
`;

export const WrapperContent = styled('div')`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: ${({ theme }): number => theme.spaces[0]}px auto;
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  text-align: center;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
`;

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[15]}px;
  margin-top: ${({ theme }): number => theme.spaces[15]}px;
`;

export const LinkContact = styled(Link)`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.primary};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  box-shadow: ${({ theme }): string => theme.shadows.darknessBlue};
  color: ${({ theme }): string => theme.colors.white};
  display: flex;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  height: ${({ theme }): number => theme.spaces[24] + theme.spaces[2]}px;
  justify-content: center;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  max-width: ${({ theme }): number => theme.maxWidth[4] + theme.spaces[5]}px;
  transition: all 0.3s;
  width: ${({ theme }): number => theme.maxWidth[0]}%;

  &:hover,
  &:active {
    background-color: ${({ theme }): string => theme.colors.secondary};
  }
`;
