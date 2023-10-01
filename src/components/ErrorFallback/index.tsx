import { useNavigate } from 'react-router-dom';

import { IErrorBoundaryState } from '@components/ErrorBoundary/interfaces';

import { Routes } from '@router/routes';

import { Wrapper, Button, Title, CodeMessage } from './styles';

const ErrorFallback: React.FC<IErrorBoundaryState> = ({ error }: IErrorBoundaryState) => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    const nextPage = window.history.length <= 1 ? Routes.HOME : -1;
    navigate(nextPage.toString());

    // setTimeout(() => {
    //   window.location.reload();
    // }, 700);
  };

  return (
    <Wrapper>
      <Title>An error has occurred:</Title>
      <CodeMessage>{error?.message}</CodeMessage>
      <Button onClick={handleOnClick}>Click to return to the previous page in 1 second...</Button>
    </Wrapper>
  );
};

export default ErrorFallback;
