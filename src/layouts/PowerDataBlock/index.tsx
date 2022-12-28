import { AppRoutes } from '@constants/app-routes';
import { Container } from '@theme/theme';

import {
  Wrapper,
  WrapperTitle,
  WrapperContent,
  Title,
  Span,
  Paragraph,
  LinkLearn,
  LinkWrapper,
  Border,
  Image
} from './styles';

const PowerDataBlock: React.FC = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperTitle>
            <Title>
              Find true power in your data with <Span>Ensome</Span>
            </Title>
          </WrapperTitle>
          <WrapperContent>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauda, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
            </Paragraph>
            <LinkWrapper>
              <Border>
                <LinkLearn to={AppRoutes.services}>Learn More</LinkLearn>
              </Border>
            </LinkWrapper>
          </WrapperContent>
        </Wrapper>
      </Container>
      <Image />
    </>
  );
};

export default PowerDataBlock;
