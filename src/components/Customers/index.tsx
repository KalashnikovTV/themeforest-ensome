import { CUSTOMERS_LOGOS } from '@constants/customers-logos';

import { List, Item, Image } from './styles';

const Customers: React.FC = () => {
  return (
    <List>
      {CUSTOMERS_LOGOS.map(({ id, path, alt }) => {
        return (
          <Item key={id}>
            <Image src={path} alt={alt} />;
          </Item>
        );
      })}
    </List>
  );
};

export default Customers;
