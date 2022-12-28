import { SUCCESS_DATA } from '@constants/success-data';

import { List, Item, Count, Product } from './styles';

const SuccessData: React.FC = () => {
  return (
    <List>
      {SUCCESS_DATA.map(({ id, count, text }) => {
        return (
          <Item key={id}>
            <Count>{count}</Count>
            <Product>{text}</Product>
          </Item>
        );
      })}
    </List>
  );
};

export default SuccessData;
