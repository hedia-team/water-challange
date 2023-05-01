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
import {Drinker} from '../data';
import List from '../components/List';
import {useStore} from '../store/storage';
import {getDrinkers} from '../api/drinkers/getDrinkers';

const GetStarted = () => {
  const {setDrinker} = useStore();
  const [name, setName] = useState('');
  const [data, setData] = useState<Drinker[]>([]);

  useEffect(() => {
    const fetchData = async () => setData(await getDrinkers());
    fetchData();
  }, []);

  const selectUser = (user: Drinker) => {
    setName(user.name);
  };

  const completeSetup = () => {
    setDrinker({name, id: `${name}`});
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.header}>Who are you?</Text>

        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          showsVerticalScrollIndicator={false}>
          <List
            data={data}
            selectItem={user => selectUser(user)}
            nameSelected={name}
          />
        </ScrollView>

        <TouchableOpacity
          style={[styles.button, name === '' && styles.disabled]}
          disabled={name === ''}
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
