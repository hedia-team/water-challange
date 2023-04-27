import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigation';
import WelcomeScreen from './src/screens/Welcome';

const isLoggedIn = true;
function App(): JSX.Element {
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <WelcomeScreen />}
    </NavigationContainer>
  );
}

export default App;
