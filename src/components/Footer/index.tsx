import FooterPolicy from '@components/FooterPolicy';
import LogoLink from '@components/LogoLink';
import NavBar from '@components/NavBar';
import Sprites from '@components/Sprites';
import { SERVICE_LINKS } from '@constants/service-links';
import { Container } from '@theme/theme';

import { FooterBlock, Wrapper, Column, LinkInfo, Title, WrapperInfo, Paragraph } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterBlock>
      <Container>
        <Wrapper>
          <Column className="social-link">
            <LogoLink isWhiteLogo={true} />
            <Paragraph>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi.
            </Paragraph>

            <Sprites />
          </Column>

          <Column className="quick-link">
            <Title>Quick link</Title>
            <NavBar withMobileBurgerMenu={true} direction="column" />
          </Column>

          <Column className="service-link">
            <Title>Service</Title>
            <NavBar routes={SERVICE_LINKS} withMobileBurgerMenu={true} direction="column" isActiveLinkColor={false} />
          </Column>

          <Column className="contact-link">
            <Title>Contact info</Title>
            <WrapperInfo>
              <LinkInfo href="mailto:support@aazztech.com" rel="noreferrer noopener nofollow">
                ensome@info.co.us
              </LinkInfo>
              <LinkInfo href="tel:16012015580" rel="noreferrer noopener nofollow">
                +1 601-201-5580
              </LinkInfo>
              <Paragraph>1642 Washington Avenue, Jackson, MS, Mississippi, 39201</Paragraph>
            </WrapperInfo>
          </Column>
        </Wrapper>

        <FooterPolicy />
      </Container>
    </FooterBlock>
  );
};

export default Footer;
