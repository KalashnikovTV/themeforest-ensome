import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@theme/globalStyles';

import { theme } from '@theme/theme';

import { Test } from './styles';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Test>Test styled-components</Test>
    </ThemeProvider>
  );
};

export default App;
