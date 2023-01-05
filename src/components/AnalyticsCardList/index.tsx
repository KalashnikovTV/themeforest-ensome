import { memo } from 'react';

import AnalyticsCardItem from '@components/AnalyticsCardItem';

import { IAnalyticsCardListProps } from './interfaces';
import { Wrapper } from './styles';

const AnalyticsCardList: React.FC<IAnalyticsCardListProps> = ({ items }: IAnalyticsCardListProps) => {
  return (
    <Wrapper>
      {items.map((item) => {
        return <AnalyticsCardItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default memo(AnalyticsCardList);
