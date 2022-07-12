import React from 'react';

import { View, Text, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../presentation/global/theme';
import Home from '../presentation/screens/Home';

// import { Container } from './styles';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme && deviceTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
