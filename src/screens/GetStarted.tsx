import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Who are you?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
  text: {
    color: '#FFFFFF',
  },
});

export default GetStarted;
