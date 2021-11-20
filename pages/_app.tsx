import React from 'react';
import { ThemeProvider, theme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

const App = function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
