import Customers from '@components/Customers';
import SuccessData from '@components/SuccessData';
import { Container } from '@theme/theme';

import { Wrapper, WrapperContent, Title, Paragraph } from './styles';

const SuccessBlock: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>We provide services that guarantee your success</Title>
        <WrapperContent>
          <SuccessData />
          <Paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quaeab illo inventore. Donec tincidunt tempor quam, non mollis quam finibus nec.
          </Paragraph>
        </WrapperContent>
        <Customers />
      </Wrapper>
    </Container>
  );
};

export default SuccessBlock;
