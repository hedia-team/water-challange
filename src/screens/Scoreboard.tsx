import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {COLORS} from '../styles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Crown from '../assets/icons/Crown';
import Shit from '../assets/icons/Shit';

const ScoreboardScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>User</Text>
          <Text style={styles.team}> // Team</Text>
        </Text>
        <Text style={styles.header}>Scorebord</Text>

        <SegmentedControl
          values={['Team', 'User']}
          selectedIndex={index}
          onChange={event => {
            setIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          tintColor="#636366"
          backgroundColor="#39393c"
          fontStyle={styles.whiteText}
          activeFontStyle={styles.whiteText}
        />

        <ScrollView style={styles.list}>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Crown />
              <Text style={styles.title}>1. Team 1</Text>
            </View>
            <Text style={styles.units}>
              <Text>5000</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <View style={styles.emptyIcon} />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>3000</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <View style={styles.emptyIcon} />
              <Text style={styles.title}>3. Team 3</Text>
            </View>
            <Text style={styles.units}>
              <Text>2000</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
          <View style={styles.listItem}>
            <View style={styles.row}>
              <Shit />
              <Text style={styles.title}>2. Team 2</Text>
            </View>
            <Text style={styles.units}>
              <Text>500</Text>
              <Text> ml</Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 25,
  },
  page: {
    flex: 1,
    paddingHorizontal: 25,
  },
  user: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    lineHeight: 19,
    color: COLORS.white,
    marginBottom: 7,
  },
  team: {
    color: '#BEBEBE',
  },
  header: {
    fontFamily: 'Inter-Bold',
    fontSize: 34,
    lineHeight: 41,
    color: COLORS.pink,
    marginBottom: 24,
  },
  button: {
    backgroundColor: COLORS.pink,
    borderRadius: 16,
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
  whiteText: {
    color: COLORS.white,
  },
  list: {
    marginTop: 24,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 22,
    borderBottomColor: '#38383A',
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.white,
    marginLeft: 8,
  },
  units: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 22,
    color: COLORS.white,
  },
  emptyIcon: {
    width: 24,
    height: 24,
  },
});
export default ScoreboardScreen;
