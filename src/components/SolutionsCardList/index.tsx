import { memo } from 'react';

import SolutionsCardItem from '@components/SolutionsCardItem';
import { SOLUTIONS_DATA } from '@mocks/data';

import { Wrapper } from './styles';

const SolutionsCardList: React.FC = () => {
  return (
    <Wrapper>
      {SOLUTIONS_DATA.map((item, index) => {
        return <SolutionsCardItem key={index} {...item} />;
      })}
    </Wrapper>
  );
};

export default memo(SolutionsCardList);
