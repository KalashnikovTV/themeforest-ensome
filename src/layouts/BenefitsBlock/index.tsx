import BenefitsCards from '@components/BenefitsCards';
import { Container } from '@theme/theme';

import { Wrapper, WrapperInner, Content, Title, Paragraph } from './styles';

const BenefitsBlock: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperInner>
          <Content>
            <Title>The benefits of Ensome</Title>
            <Paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo.
            </Paragraph>
          </Content>
          <BenefitsCards />
        </WrapperInner>
      </Container>
    </Wrapper>
  );
};

export default BenefitsBlock;
