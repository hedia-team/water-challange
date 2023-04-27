import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../styles';
import {USERS} from '../data';
import List from '../components/List';
import {useStore} from '../store/storage';

const GetStarted = () => {
  const {setAuth} = useStore();

  const selectUser = () => {
    console.log('🔥 User selected');
  };

  const completeSetup = () => {
    console.log('🔥 completeSetup');
    setAuth({isLoggedIn: true});

  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <View>
          <Text style={styles.header}>Who are you?</Text>
          <List data={USERS} selectItem={selectUser} />
        </View>

        <TouchableOpacity style={styles.button} onPress={completeSetup}>
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
