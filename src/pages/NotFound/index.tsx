import { useNavigate } from 'react-router-dom';

import { Routes } from '@router/routes';
import { Container } from '@theme/theme';

import { Button, Paragraph, Span, TitleError, Wrapper } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate(Routes.HOME);
  };

  return (
    <Container>
      <Wrapper>
        <TitleError>Error: 404</TitleError>
        <Paragraph>
          <Span>Ooops!</Span> Such page is not found..
        </Paragraph>
        <Button onClick={handleOnClick}>Click to return to the Home page..</Button>
      </Wrapper>
    </Container>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
