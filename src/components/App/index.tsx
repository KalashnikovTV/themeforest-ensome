import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@components/AppRouter';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorFallback from '@components/ErrorFallback';
import GlobalStyles from '@theme/globalStyles';
import { theme } from '@theme/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
