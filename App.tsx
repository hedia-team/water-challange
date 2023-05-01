import React, {useEffect} from 'react';
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
import {getTeams} from './src/api/teams/getTeams';
import {getDrinks} from './src/api/drinks/getDrinks';

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.dark,
    border: '#38383A',
  },
};

function App(): JSX.Element {
  const {drinker, setTeams, setDrinks} = useStore();
  useEffect(() => {
    //fetch more data here
    const fetchTeams = async () => setTeams(await getTeams());
    const fetchDrinks = async () => setDrinks(await getDrinks());
    fetchTeams();
    fetchDrinks();
  }, [setTeams, setDrinks]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {drinker ? <AuthenticatedNavigation /> : <GetStarted />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
