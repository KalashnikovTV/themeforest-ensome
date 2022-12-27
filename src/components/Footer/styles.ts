import styled from 'styled-components';

export const FooterBlock = styled('footer')`
  background-color: ${({ theme }): string => theme.colors.secondary};
`;

export const Wrapper = styled('div')`
  align-items: start;
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }): number => theme.spaces[24]}px ${({ theme }): number => theme.spaces[0]}px;

  .social-link {
    margin-right: ${({ theme }): number => theme.spaces[27] + theme.spaces[27] + theme.spaces[15]}px;
    max-width: ${({ theme }): number => theme.maxWidth[9] + theme.spaces[2]}px;
  }

  .quick-link {
    margin-right: ${({ theme }): number => theme.spaces[27] + theme.spaces[15]}px;
    max-width: ${({ theme }): number => theme.maxWidth[0] - theme.spaces[10]}px;
  }

  .service-link {
    margin-right: ${({ theme }): number => theme.spaces[27] + theme.spaces[24]}px;
    max-width: ${({ theme }): number => theme.maxWidth[0] - theme.spaces[20]}px;
  }

  .contact-link {
    max-width: ${({ theme }): number => theme.maxWidth[6] + theme.spaces[7]}px;
  }
`;

export const Column = styled('div')`
  color: ${({ theme }): string => theme.colors.grey};
  font-weight: ${({ theme }): number => theme.fontWeight[3]};
  width: ${({ theme }): number => theme.maxWidth[0]}%;
`;

export const Title = styled('h3')`
  color: ${({ theme }): string => theme.colors.white};
  font-size: ${({ theme }): number => theme.fontSizes[2]}px;
  font-weight: ${({ theme }): number => theme.fontWeight[6]};
  margin-bottom: ${({ theme }): number => theme.spaces[13]}px;
`;

export const LinkInfo = styled('a')`
  color: ${({ theme }): string => theme.colors.grey};
  font-weight: ${({ theme }): number => theme.fontWeight[4]};
  margin-bottom: ${({ theme }): number => theme.spaces[6]}px;

  &:last-child {
    margin-bottom: ${({ theme }): number => theme.spaces[0]}px;
  }

  &:hover,
  &:active {
    color: ${({ theme }): string => theme.colors.white};
  }
`;

export const WrapperInfo = styled('div')`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled('p')``;
