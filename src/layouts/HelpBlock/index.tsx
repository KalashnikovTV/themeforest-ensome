import { AppRoutes } from '@constants/app-routes';
import { Container } from '@theme/theme';

import { WrapperContent, LinkContact, Paragraph, Title, Wrapper } from './styles';

const HelpBlock: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperContent>
          <Title>Do you need help?</Title>
          <Paragraph>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
            ea commodi.
          </Paragraph>
          <LinkContact to={AppRoutes.contacts}>Contact Us</LinkContact>
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default HelpBlock;
