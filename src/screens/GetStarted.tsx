import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {COLORS} from '../styles';
import {Drinker} from '../types';
import List from '../components/List';
import {useStore} from '../store/storage';
import {getDrinkers} from '../api/drinkers/getDrinkers';

import {LinearGradientText} from 'react-native-linear-gradient-text';

const GetStarted = () => {
  const {setDrinker} = useStore();
  const [selectedUser, setSelectedUser] = useState<Drinker>();
  const [data, setData] = useState<Drinker[]>([]);

  useEffect(() => {
    const fetchDrinkers = async () => setData(await getDrinkers());
    fetchDrinkers();
  }, []);

  const selectUser = (user: Drinker) => {
    setSelectedUser(user);
  };

  const completeSetup = () => {
    if (selectedUser) {
      setDrinker(selectedUser);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <LinearGradientText
          colors={[COLORS.pink, COLORS.blue]}
          text="Who are you?"
          start={{x: 0.0, y: 0}}
          end={{x: 0.8, y: 0}}
          textStyle={styles.header}
        />
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <List
            data={data}
            selectItem={user => selectUser(user)}
            nameSelected={selectedUser?.name ?? ''}
          />
        </ScrollView>

        <TouchableOpacity
          style={[styles.button, selectedUser === undefined && styles.disabled]}
          disabled={selectedUser === undefined}
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
  scrollViewContent: {
    paddingBottom: 32,
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
    marginVertical: 16,
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
