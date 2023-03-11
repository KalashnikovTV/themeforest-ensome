import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@components/AppRouter';
import ErrorBoundary from '@components/ErrorBoundary';
import ErrorFallback from '@components/ErrorFallback';
import Footer from '@components/Footer';
import Header from '@components/Header';
import GlobalStyles from '@theme/globalStyles';
import { theme, Content } from '@theme/theme';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ToastContainer />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Content>
            <Header />
            <AppRouter />
            <Footer />
          </Content>
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
