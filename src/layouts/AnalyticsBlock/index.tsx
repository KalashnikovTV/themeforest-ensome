import { memo } from 'react';

import AnalyticsCardList from '@components/AnalyticsCardList';
import { Container } from '@theme/theme';

import { IAnalyticsBlockProps } from './interfaces';

const AnalyticsBlock: React.FC<IAnalyticsBlockProps> = ({ items }: IAnalyticsBlockProps) => {
  return (
    <Container>
      <AnalyticsCardList items={items} />
    </Container>
  );
};

export default memo(AnalyticsBlock);
