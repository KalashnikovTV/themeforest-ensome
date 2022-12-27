import { useState } from 'react';

import LogoLink from '@components/LogoLink';
import { Modal } from '@components/Modal';
import NavBar from '@components/NavBar';
import { VideoDialog } from '@components/VideoDialog';
import { Container } from '@theme/theme';

import { Wrapper, HeaderBlock, Button } from './styles';

const Header: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOnClickButton = (): void => {
    setIsOpenModal(true);
  };

  return (
    <HeaderBlock>
      <Container>
        <Wrapper>
          <LogoLink isWhiteLogo={false} />
          <NavBar withMobileBurgerMenu={true} />

          <Button onClick={handleOnClickButton}>Watch the demo</Button>
          <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
            <VideoDialog />
          </Modal>
        </Wrapper>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
