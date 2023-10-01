import { useNavigate } from 'react-router-dom';

import { Routes } from '@router/routes';
import { Container } from '@theme/theme';

import { Button, Paragraph, Span, TitleError, Wrapper } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    console.log(window.history.length);
    if (window.history.length <= 1) {
      navigate(Routes.HOME);
      return;
    }
    console.log('test');
    // const nextPage = window.history.length <= 1 ? Routes.HOME : -1;
    navigate(-1);
  };

  return (
    <Container>
      <Wrapper>
        <TitleError>Error: 404</TitleError>
        <Paragraph>
          <Span>Ooops!</Span> Such page is not found..
        </Paragraph>
        <Button onClick={handleOnClick}>Click to return to the previous page...</Button>
      </Wrapper>
    </Container>
  );
};

NotFound.displayName = 'NotFound';

export default NotFound;
