import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTabNavigation';
import GetStarted from './src/screens/GetStarted';
import {useStore} from './src/store/storage';

function App(): JSX.Element {
  const {auth} = useStore();
  console.log('🔥 isLoggedIn', auth);
  return (
    <NavigationContainer>
      {auth?.isLoggedIn ? <BottomTabNavigator /> : <GetStarted />}
    </NavigationContainer>
  );
}

export default App;
