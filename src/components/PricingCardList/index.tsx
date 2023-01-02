import { memo } from 'react';

import PricingCardItem from '@components/PricingCardItem';
import { PRICING_DATA } from '@mocks/data';

import { Wrapper } from './styles';

const PricingCardList: React.FC = () => {
  return (
    <Wrapper>
      {PRICING_DATA.map((item) => {
        return <PricingCardItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default memo(PricingCardList);
