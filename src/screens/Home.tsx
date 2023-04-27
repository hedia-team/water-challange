import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import {COLORS} from '../styles';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>User</Text>
          <Text style={styles.team}> // Team</Text>
        </Text>
        <Text style={styles.header}>My intake</Text>

        <SegmentedControl
          values={['Today', 'Overall']}
          selectedIndex={index}
          onChange={event => {
            setIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          tintColor="#636366"
          backgroundColor="#39393c"
          fontStyle={styles.whiteText}
          activeFontStyle={styles.whiteText}
        />
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
});

export default HomeScreen;
