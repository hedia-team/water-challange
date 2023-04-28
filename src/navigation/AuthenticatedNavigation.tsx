import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddWater from '../screens/AddWater';
import BottomTabNavigator from './BottomTabNavigation';

const {Navigator, Screen, Group} = createNativeStackNavigator();

const AuthenticatedNavigation = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Group screenOptions={{presentation: 'card'}}>
        <Screen name={'BottomTab'} component={BottomTabNavigator} />
      </Group>
      {/* Modals */}
      <Group screenOptions={{presentation: 'modal'}}>
        <Screen
          name={'AddWater'}
          component={AddWater}
          options={{headerShown: false}}
        />
      </Group>
    </Navigator>
  );
};

export default AuthenticatedNavigation;
