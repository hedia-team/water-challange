import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import {COLORS} from '../styles';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Crown from '../assets/icons/Crown';
import Shit from '../assets/icons/Shit';
import {useStore} from '../store/storage';
import {Team} from '../data';

const getIcon = (index: number, maxIndex: number) => {
  const isFirst = index === 0;
  const isLast = index === maxIndex;
  const {emptyIcon} = styles;
  return isFirst ? <Crown /> : isLast ? <Shit /> : <View style={emptyIcon} />;
};

const TeamListData = () => {
  const {teams, drinks} = useStore();

  const sortTeamsByTotalAmount = (): Team[] => {
    const teamsWithTotalAmount =
      teams?.map(team => ({
        team,
        totalAmount: drinks
          ?.filter(d => d.teamId === team.id)
          .reduce((total, d) => total + d.amount, 0),
      })) ?? [];

    teamsWithTotalAmount.sort((a, b) => b?.totalAmount - a?.totalAmount);

    return teamsWithTotalAmount?.map(t => t.team) ?? [];
  };

  const listTeamItem = (team: Team, index: number) => {
    const calculateTotalAmountByTeamId = (teamId: string): number => {
      const filteredDrinks = drinks?.filter(d => d.teamId === teamId) ?? [];
      return (
        filteredDrinks.reduce((total, drink) => total + drink.amount, 0) ?? []
      );
    };

    return (
      <View style={styles.listItem} key={index}>
        <View style={styles.row}>
          {getIcon(index, 4)}
          <Text style={styles.title}>{team.name}</Text>
        </View>
        <Text style={styles.units}>
          <Text>{calculateTotalAmountByTeamId(team.id)}</Text>
          <Text> ml</Text>
        </Text>
      </View>
    );
  };
  return sortTeamsByTotalAmount()?.map(listTeamItem);
};

const DrinkerListData = () => {
  const {drinks} = useStore();
  interface TotalByDrinker {
    [drinkerId: string]: number;
  }

  const totalByDrinker: TotalByDrinker = drinks?.reduce(
    (acc: TotalByDrinker, curr) => {
      const {drinkerId, amount} = curr;
      acc[drinkerId] = acc[drinkerId] ? acc[drinkerId] + amount : amount;
      return acc;
    },
    {},
  );

  const sortedDrinkers = Object.entries(totalByDrinker)
    .sort(([, a], [, b]) => b - a)
    .map(([drinkerId, total]) => ({drinkerId, total}));
  const sortedDrinkersLength = sortedDrinkers?.length ?? 0;

  const listDrinkerItem = (
    {drinkerId, total}: {drinkerId: string; total: number},
    index: number,
  ) => {
    console.log({drinkerId, total});
    return (
      <View style={styles.listItem} key={index}>
        <View style={styles.row}>
          {getIcon(index, sortedDrinkersLength - 1)}
          <Text style={styles.title}>{drinkerId}</Text>
        </View>
        <Text style={styles.units}>
          <Text>{total}</Text>
          <Text> ml</Text>
        </Text>
      </View>
    );
  };

  return sortedDrinkers?.map(listDrinkerItem);
};

const ScoreboardScreen = () => {
  const [headerIndex, setHeaderIndex] = useState(0);
  const {drinker, teams} = useStore();

  const userTeam = teams?.find(team =>
    team.drinkers?.includes(drinker?.id?.toLowerCase() ?? ''),
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>{drinker?.name}</Text>
          <Text style={styles.team}>{` // ${userTeam?.name}`}</Text>
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
          {headerIndex === 0 ? TeamListData() : DrinkerListData()}
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
