import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import GetStarted from './src/screens/GetStarted';
import {useStore} from './src/store/storage';
import {COLORS} from './src/styles';
import AuthenticatedNavigation from './src/navigation/AuthenticatedNavigation';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.dark,
    border: '#38383A',
  },
};

function App(): JSX.Element {
  const {drinker} = useStore();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {drinker ? <AuthenticatedNavigation /> : <GetStarted />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
