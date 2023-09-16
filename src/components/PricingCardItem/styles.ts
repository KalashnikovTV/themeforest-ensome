import styled from 'styled-components';

export const Card = styled('div')`
  background-color: ${({ theme }): string => theme.colors.white};
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  box-shadow: ${({ theme }): string => theme.shadows.lightGray};
  color: ${({ theme }): string => theme.colors.black};
  padding: ${({ theme }): number => theme.spaces[18]}px ${({ theme }): number => theme.spaces[10]}px;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }): string => theme.colors.primary};
    color: ${({ theme }): string => theme.colors.white};
  }

  &:hover > button {
    background-color: ${({ theme }): string => theme.colors.white};
    color: ${({ theme }): string => theme.colors.primary};
  }

  &:hover > ul > li::before {
    background-image: url('/images/icon-arrow-white-done.svg');
  }
`;

export const CardTitle = styled('h3')`
  color: inherit;
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[8]}px;
`;

export const PriceWrapper = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Price = styled('span')`
  color: inherit;
  font-size: ${({ theme }): number => theme.fontSizes[6] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[11]}px;
`;

export const Button = styled('button')`
  background-color: ${({ theme }): string => theme.colors.primary};
  border: none;
  border-radius: ${({ theme }): number => theme.spaces[3]}px;
  color: ${({ theme }): string => theme.colors.white};
  cursor: pointer;
  font-weight: ${({ theme }): number => theme.fontWeight[5]};
  height: ${({ theme }): number => theme.spaces[22]}px;
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-bottom: ${({ theme }): number => theme.spaces[15]}px;
  margin-top: ${({ theme }): number => theme.spaces[15]}px;
  outline: none;
  width: ${({ theme }): number => theme.maxWidth[6] - theme.spaces[3]}px;
`;

export const PricingModalWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }): number => theme.spaces[8]}px;
  padding: ${({ theme }): number => theme.spaces[15]}px;
`;

export const PricingModalTitle = styled('h3')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;

  &:first-child {
    font-size: ${({ theme }): number => theme.fontSizes[5] - theme.spaces[1]}px;
    font-weight: ${({ theme }): number => theme.fontWeight[7]};
    line-height: ${({ theme }): number => theme.lineHeight[9]}px;
  }
`;

export const PricingModalSpan = styled('span')`
  color: ${({ theme }): string => theme.colors.primary};
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
`;
