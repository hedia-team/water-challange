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

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.dark,
    border: '#38383A',
  },
};

function App(): JSX.Element {
  const {drinker, setTeams} = useStore();

  useEffect(() => {
    //fetch more data here
    const fetchTeams = async () => setTeams(await getTeams());
    fetchTeams();
  }, [setTeams]);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        {drinker ? <AuthenticatedNavigation /> : <GetStarted />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
