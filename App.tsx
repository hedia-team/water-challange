import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import GetStarted from './src/screens/GetStarted';
import {COLORS} from './src/screens/styles';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: COLORS.background,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GetStarted />
    </SafeAreaView>
  );
}

export default App;
