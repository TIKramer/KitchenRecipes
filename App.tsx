import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { setAxiosCommonHeader } from './src/api';
import { store } from './state/store';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "green",
    accent: "blue",
  },
};

export type ThemeOverride = typeof theme
export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>

      <SafeAreaProvider>
        <PaperProvider theme={theme}>

        <Navigation  />
        <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
      </Provider>
    );
  }
}
