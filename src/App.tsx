import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { Router } from './routes';
import theme from '@styles/theme';
import GlobalStyle from '@styles/global';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
