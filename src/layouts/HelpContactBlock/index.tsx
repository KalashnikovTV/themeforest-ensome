import ContactForm from '@forms/ContactForm';
import { Container } from '@theme/theme';

import { Wrapper } from './styles';

const HelpContactBlock: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        {/* <WrapperContent> */}
        <ContactForm />
        {/* </WrapperContent> */}
      </Container>
    </Wrapper>
  );
};

export default HelpContactBlock;
