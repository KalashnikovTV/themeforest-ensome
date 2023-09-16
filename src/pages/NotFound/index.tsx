import { useNavigate } from 'react-router-dom';

import { Container } from '@theme/theme';

import { Button, Paragraph, Span, TitleError, Wrapper } from './styles';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
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

export default NotFound;
