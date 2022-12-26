import { useNavigate } from 'react-router-dom';

import { IErrorBoundaryState } from '@components/ErrorBoundary/interfaces';

import { Wrapper, Button } from './styles';

const ErrorFallback: React.FC<IErrorBoundaryState> = ({ error }: IErrorBoundaryState) => {
  const navigate = useNavigate();

  const handleOnClick = (): void => {
    navigate(-1);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <Wrapper>
      <h1>An error has occurred:</h1>
      <pre>{error?.message}</pre>
      <Button onClick={handleOnClick}>Click to return to the previous page in 1 second...</Button>
    </Wrapper>
  );
};

export default ErrorFallback;
