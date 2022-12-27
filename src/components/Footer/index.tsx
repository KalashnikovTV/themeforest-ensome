import { Container } from '@theme/theme';

import { FooterBlock } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterBlock>
      <Container>
        {/* <NavBar withMobileBurgerMenu={true} /> */}
        {/* <LogoLink isWhiteLogo={false} /> */}
      </Container>
    </FooterBlock>
  );
};

export default Footer;
