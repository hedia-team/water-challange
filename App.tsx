import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import GetStarted from './src/screens/GetStarted';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#1E1E1E',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <GetStarted />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
