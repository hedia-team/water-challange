import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {COLORS} from '../styles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Crown from '../assets/icons/Crown';
import Shit from '../assets/icons/Shit';
import {useStore} from '../store/storage';
import {Team} from '../data';

const TeamListData = () => {
  const {teams} = useStore();

  const getIcon = (index: number) => {
    const isFirst = index === 0;
    const isLast = index === 4;
    const {emptyIcon} = styles;
    return isFirst ? <Crown /> : isLast ? <Shit /> : <View style={emptyIcon} />;
  };
  const listTeamItem = (team: Team, index: number) => {
    return (
      <View style={styles.listItem} key={index}>
        <View style={styles.row}>
          {getIcon(index)}
          <Text style={styles.title}>{team.name}</Text>
        </View>
        <Text style={styles.units}>
          <Text>5000</Text>
          <Text> ml</Text>
        </Text>
      </View>
    );
  };
  return teams?.map(listTeamItem);
};

const ScoreboardScreen = () => {
  const [headerIndex, setHeaderIndex] = useState(0);
  const {drinker} = useStore();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>{drinker?.name}</Text>
          <Text style={styles.team}> // Team</Text>
        </Text>
        <Text style={styles.header}>Scorebord</Text>

        <SegmentedControl
          values={['Team', 'User']}
          selectedIndex={headerIndex}
          onChange={event => {
            setHeaderIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          tintColor="#636366"
          backgroundColor="#39393c"
          fontStyle={styles.whiteText}
          activeFontStyle={styles.whiteText}
        />

        <ScrollView style={styles.list} showsVerticalScrollIndicator={false}>
          {TeamListData()}
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
    alignItems: 'flex-start',
    maxWidth: '60%',
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
    width: 28,
    height: 28,
  },
});
export default ScoreboardScreen;
