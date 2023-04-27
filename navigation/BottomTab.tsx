import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Profile from '../src/assets/icons/Profile';
import Scoreboard from '../src/assets/icons/Scoreboard';
import {COLORS} from '../src/styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const BottomTab = ({state, navigation}: BottomTabBarProps): JSX.Element => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <View style={styles.iconWrapper}>
            <Profile color={state.index === 0 ? COLORS.pink : COLORS.white} />
          </View>
          <Text style={styles.text}>My Intake</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.addButton}>
          <Image source={require('../src/assets/images/Play.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Scoreboard')}>
          <View style={styles.iconWrapper}>
            <Scoreboard
              color={state.index === 1 ? COLORS.pink : COLORS.white}
            />
          </View>
          <Text style={styles.text}>Scoreboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  background: {backgroundColor: COLORS.dark, width: '100%'},
  container: {
    backgroundColor: '#323235CC',
    height: 73,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    paddingHorizontal: 32,
    borderRadius: 56,
    marginBottom: 16,
  },
  iconWrapper: {justifyContent: 'center', alignSelf: 'center'},
  button: {flexDirection: 'column', justifyContent: 'center'},
  addButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
  },
  text: {color: COLORS.white, fontSize: 12},
});
