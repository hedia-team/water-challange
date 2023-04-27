import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from './styles';
import {USERS} from '../data';
import List from '../components/List';

const GetStarted = () => {
  const onPress = () => {
    console.log('🔥 Pressed');
  };

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.header}>Who are you?</Text>
        <List data={USERS} />
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 34,
    lineHeight: 41,
    fontWeight: '700',
    color: COLORS.pink,
    marginBottom: 35,
    marginTop: 25,
  },
  button: {
    backgroundColor: COLORS.pink,
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '700',
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default GetStarted;
