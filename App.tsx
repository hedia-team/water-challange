import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigation';
import GetStarted from './src/screens/GetStarted';
import {isLoggedIn} from './src/storage/storage';
import {COLORS} from './src/styles';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.dark,
    border: '#38383A',
  },
};

function App(): JSX.Element {
  return (
    <NavigationContainer theme={theme}>
      {isLoggedIn ? <BottomTabNavigator /> : <GetStarted />}
    </NavigationContainer>
  );
}

export default App;
