import { memo } from 'react';

import PricingCardList from '@components/PricingCardList';

import { Container } from '@theme/theme';

import { WrapperContent, Wrapper, Title } from './styles';

const PricingBlock: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <WrapperContent>
          <Title>Our pricing</Title>
        </WrapperContent>

        <PricingCardList />
      </Container>
    </Wrapper>
  );
};

export default memo(PricingBlock);
