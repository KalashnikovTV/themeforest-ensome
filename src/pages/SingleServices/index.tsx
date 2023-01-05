import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { SERVICES_DATA } from '@mocks/data';
import { Container } from '@theme/theme';

import { Wrapper } from './styles';

const SingleServices: React.FC = () => {
  const { id: serviceId } = useParams();

  const getServicesItem = useMemo(() => SERVICES_DATA?.find(({ id }) => id === Number(serviceId)), [serviceId]);

  if (!getServicesItem) return <Navigate to={AppRoutes.notFound} />;

  const { id, path, alt, title, text } = getServicesItem;

  return (
    <Container>
      <Wrapper>
        Single services page
        <div>id: {id}</div>
        <img src={path} alt={alt} />
        <div>title: {title}</div>
        <div>text: {text}</div>
      </Wrapper>
    </Container>
  );
};

export default SingleServices;
