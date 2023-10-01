import { useNavigate } from 'react-router-dom';

import { IErrorBoundaryState } from '@components/ErrorBoundary/interfaces';

import { Routes } from '@router/routes';

import { Wrapper, Button, Title, CodeMessage } from './styles';

const ErrorFallback: React.FC<IErrorBoundaryState> = ({ error }: IErrorBoundaryState) => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate(Routes.HOME);

    setTimeout(() => {
      window.location.reload();
    }, 700);
  };

  return (
    <Wrapper>
      <Title>An error has occurred:</Title>
      <CodeMessage>{error?.message}</CodeMessage>
      <Button onClick={handleOnClick}>Click to return to the Home page..</Button>
    </Wrapper>
  );
};

export default ErrorFallback;
