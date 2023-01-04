import styled from 'styled-components';

export const Wrapper = styled('div')`
  align-items: center;
  background-color: ${({ theme }): string => theme.colors.lightGray};
  display: flex;
  gap: ${({ theme }): number => theme.spaces[20]}px;
  margin-top: ${({ theme }): number => theme.spaces[27] + theme.spaces[20]}px;
`;

export const Image = styled.img.attrs({
  src: '/images/why-img.png',
  alt: 'Why choose image'
})`
  object-fit: cover;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
  max-width: calc((100vw / 2) - 40px);
  height: ${({ theme }): number => theme.maxWidth[14] - theme.spaces[5]}px;
  display: block;
`;

export const WrapperContent = styled('div')`
  max-width: ${({ theme }): number => theme.maxWidth[12] + theme.spaces[20]}px;
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h2')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[8] - theme.spaces[1]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[7]};
  line-height: ${({ theme }): number => theme.lineHeight[16]}px;
`;

export const WrapperDescription = styled('div')`
  margin-top: ${({ theme }): number => theme.spaces[24]}px;
`;

export const Subtitle = styled('h4')`
  color: ${({ theme }): string => theme.colors.black};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  line-height: ${({ theme }): number => theme.lineHeight[6]}px;
  margin-top: ${({ theme }): number => theme.spaces[15]}px;
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

export const Paragraph = styled('p')`
  color: ${({ theme }): string => theme.colors.grey};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  line-height: ${({ theme }): number => theme.lineHeight[8]}px;
  margin-top: ${({ theme }): number => theme.spaces[7]}px;
`;
