import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@theme/globalStyles';

import { Container, theme } from '@theme/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Container>AppPage</Container>
    </ThemeProvider>
  );
};

export default App;
