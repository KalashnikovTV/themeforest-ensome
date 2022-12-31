import { AppRoutes } from '@constants/app-routes';
import { Container } from '@theme/theme';

import { Wrapper, WrapperTitle, WrapperContent, Title, Span, Paragraph, LinkDiscover } from './styles';

const NewestBlock: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>
          <Title>
            The <Span>newest</Span> business analytics platform
          </Title>
        </WrapperTitle>
        <WrapperContent>
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </Paragraph>
          <LinkDiscover to={AppRoutes.solutions} title={`Go to ${AppRoutes.solutions}`}>
            Discover more
          </LinkDiscover>
        </WrapperContent>
      </Wrapper>
    </Container>
  );
};

export default NewestBlock;
