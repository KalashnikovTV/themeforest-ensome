import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@components/AppRouter';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorFallback from '@components/ErrorFallback';
import Footer from '@components/Footer';
import Header from '@components/Header';
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
          <Footer />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
