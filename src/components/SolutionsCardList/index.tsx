import SolutionsCardItem from '@components/SolutionsCardItem';
import { SOLUTIONS_DATA } from '@mocks/data';

import { Wrapper } from './styles';

const SolutionsCardList: React.FC = () => {
  return (
    <Wrapper>
      {SOLUTIONS_DATA.map((item) => {
        return <SolutionsCardItem key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default SolutionsCardList;
