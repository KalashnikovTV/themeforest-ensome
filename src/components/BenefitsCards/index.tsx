import { BENEFITS_CARDS_DATA } from '@constants/benefits-cards-data';

import { List, Item, Image, Title, Text } from './styles';

const BenefitsCards: React.FC = () => {
  return (
    <List>
      {BENEFITS_CARDS_DATA.map(({ id, path, alt, title, text }) => {
        return (
          <Item key={id}>
            <Image src={path} alt={alt} />
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Item>
        );
      })}
    </List>
  );
};

export default BenefitsCards;
