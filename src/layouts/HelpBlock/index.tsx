import LinkMore from '@components/LinkMore';
import { AppRoutes } from '@constants/app-routes';
import { Container } from '@theme/theme';

import { WrapperContent, Paragraph, Title, Wrapper } from './styles';

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
          <LinkMore path={AppRoutes.contacts} width={190} height={54}>
            Contact Us
          </LinkMore>
        </WrapperContent>
      </Container>
    </Wrapper>
  );
};

export default HelpBlock;
