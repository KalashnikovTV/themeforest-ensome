import LogoLink from '@components/LogoLink';
import NavBar from '@components/NavBar';
import { Container } from '@theme/theme';

const Header: React.FC = () => {
  return (
    <header>
      <Container>
        <LogoLink isWhiteLogo={false} />
        <NavBar />
        {/* video btn */}
      </Container>
    </header>
  );
};

export default Header;
