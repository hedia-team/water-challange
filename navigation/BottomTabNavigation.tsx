import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScoreboardScreen from '../src/screens/Scoreboard';
import HomeScreen from '../src/screens/Home';
import BottomTab from './BottomTab';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={BottomTab}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Scoreboard" component={ScoreboardScreen} />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
