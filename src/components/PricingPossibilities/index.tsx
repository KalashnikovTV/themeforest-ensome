import { memo } from 'react';

import { IPricingPossibilitiesProps } from './interfaces';
import { List, Item } from './styles';

const PricingPossibilities: React.FC<IPricingPossibilitiesProps> = ({ possibilities }: IPricingPossibilitiesProps) => {
  return (
    <List>
      {possibilities?.map((item, index) => {
        return <Item key={index}>{item}</Item>;
      })}
    </List>
  );
};

export default memo(PricingPossibilities);
