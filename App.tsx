import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigation';
import GetStarted from './src/screens/GetStarted';
import {isLoggedIn} from './src/storage/storage';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <GetStarted />}
    </NavigationContainer>
  );
}

export default App;
