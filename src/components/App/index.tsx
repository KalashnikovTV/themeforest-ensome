import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@components/AppRouter';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorFallback from '@components/ErrorFallback';
import Header from '@components/Header/Header';
import GlobalStyles from '@theme/globalStyles';
import { theme } from '@theme/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header />
          <AppRouter />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
