import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {COLORS} from './styles';
import {USERS} from '../data';
import List from '../components/List';

const GetStarted = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Who are you?</Text>
      <List data={USERS} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: Dimensions.get('window').height,
    paddingHorizontal: 25,
  },
  header: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
    color: COLORS.pink,
    marginBottom: 35,
    marginTop: 25,
  },
});

export default GetStarted;
