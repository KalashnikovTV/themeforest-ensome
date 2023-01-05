import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import { AppRoutes } from '@constants/app-routes';
import { SOLUTIONS_DATA } from '@mocks/data';
import { Container } from '@theme/theme';

import { Wrapper } from './styles';

const SingleSolutions: React.FC = () => {
  const { id: solutionId } = useParams();

  const getSolutionsItem = useMemo(() => SOLUTIONS_DATA?.find(({ id }) => id === Number(solutionId)), [solutionId]);

  if (!getSolutionsItem) return <Navigate to={AppRoutes.notFound} />;

  const { id, path, alt, title, text } = getSolutionsItem;

  return (
    <Container>
      <Wrapper>
        Single solutions page
        <div>id: {id}</div>
        <img src={path} alt={alt} />
        <div>title: {title}</div>
        <div>text: {text}</div>
      </Wrapper>
    </Container>
  );
};

export default SingleSolutions;
