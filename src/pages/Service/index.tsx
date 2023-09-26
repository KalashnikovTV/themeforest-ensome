import { Navigate, useParams } from 'react-router-dom';

import LinkReadMore from '@components/LinkReadMore';
import { useFilter } from '@hooks/useFilter';
import { SERVICES_DATA } from '@mocks/data';
import { Routes } from '@router/routes';
import { Container } from '@theme/theme';

import { Wrapper } from './styles';

const Service: React.FC = () => {
  const { id: serviceId } = useParams();

  const { activeItem, filteredItems } = useFilter(SERVICES_DATA, serviceId);

  if (!activeItem) {
    return <Navigate to={Routes.NOT_FOUND} />;
  }

  const { id, path, alt, title, text } = activeItem;

  return (
    <Container>
      <Wrapper>
        Service page
        <div>id: {id}</div>
        <img src={path} alt={alt} />
        <div>title: {title}</div>
        <div>text: {text}</div>
      </Wrapper>
      <div>Other services:</div>
      <br />
      <div>
        {filteredItems.map((item) => {
          return (
            <div key={item.id}>
              <div>id: {item.id}</div>
              <img src={item.path} alt={item.alt} />
              <div>title: {item.title}</div>
              <div>text: {item.text}</div>
              <LinkReadMore path={`${item.link}/${item.id}`} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Service;
