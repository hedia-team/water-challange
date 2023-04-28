import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../styles';
import {USERS, User} from '../data';
import List from '../components/List';
import {useStore} from '../store/storage';

const GetStarted = () => {
  const {setAuth} = useStore();
  const [name, setName] = useState('');

  const selectUser = (user: User) => {
    setName(user.title);
  };

  const completeSetup = () => {
    setAuth({isLoggedIn: true});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <View>
          <Text style={styles.header}>Who are you?</Text>
          <List
            data={USERS}
            selectItem={user => selectUser(user)}
            nameSelected={name}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, name === '' && styles.disabled]}
          onPress={completeSetup}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.dark,
  },
  page: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: 'Inter-Bold',
    fontSize: 34,
    lineHeight: 41,
    color: COLORS.pink,
    marginBottom: 35,
  },
  button: {
    backgroundColor: COLORS.pink,
    borderRadius: 16,
    marginBottom: 16,
  },
  disabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    lineHeight: 24,
    color: COLORS.black,
    textAlign: 'center',
    marginVertical: 16,
  },
});

export default GetStarted;
