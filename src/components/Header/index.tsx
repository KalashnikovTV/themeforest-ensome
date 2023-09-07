import { useState } from 'react';

import LogoLink from '@components/LogoLink';
import Modal from '@components/Modal';
import NavBar from '@components/NavBar';
import { VideoDialog } from '@components/VideoDialog';
import { Container } from '@theme/theme';

import { Wrapper, HeaderBlock, Button } from './styles';

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = (): void => {
    setIsOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setIsOpenModal(false);
  };

  return (
    <HeaderBlock>
      <Container>
        <Wrapper>
          <LogoLink isWhiteLogo={false} />
          <NavBar withMobileBurgerMenu={true} direction="row" />

          <Button onClick={handleOpenModal}>Watch the demo</Button>
          <Modal opened={isOpenModal} onClose={handleCloseModal}>
            <VideoDialog />
          </Modal>
        </Wrapper>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
