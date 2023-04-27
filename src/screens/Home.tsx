import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import LinearGradient from 'react-native-linear-gradient';
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

        <LinearGradient
          colors={['#F988FF', '#3D9AFF']}
          style={styles.gradient}
          useAngle
          angle={98.41}>
          <View style={styles.row}>
            <Text style={styles.amount}>2000</Text>
            <Text style={styles.units}>ml</Text>
          </View>
          <Text style={styles.rank}>You are rank 1 today</Text>
        </LinearGradient>
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
  gradient: {
    marginTop: 37,
    marginBottom: 34,
    paddingVertical: 13,
    borderRadius: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  amount: {
    fontFamily: 'Inter-Bold',
    fontSize: 56,
    lineHeight: 68,
    marginRight: 4,
    color: '#262626',
  },
  units: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#262626',
    opacity: 0.7,
    alignSelf: 'center',
  },
  rank: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: '#262626',
    opacity: 0.7,
  },
});

export default HomeScreen;
