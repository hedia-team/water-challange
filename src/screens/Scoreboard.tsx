import React, {useState, useCallback} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {COLORS} from '../styles';
import Crown from '../assets/icons/Crown';
import Shit from '../assets/icons/Shit';
import {useStore} from '../store/storage';
import {useFocusEffect} from '@react-navigation/native';
import {getRecords} from '../api/records/getRecords';
import {getScoreList} from './utils';
import {LinearGradientText} from 'react-native-linear-gradient-text';

const getIcon = (index: number, maxIndex: number) => {
  const isFirst = index === 0;
  const isLast = index === maxIndex;
  const {emptyIcon} = styles;
  return isFirst ? <Crown /> : isLast ? <Shit /> : <View style={emptyIcon} />;
};

const DrinkerListData = () => {
  const {records} = useStore();
  const scoreList = getScoreList(records);
  // implement sorting for scoreList
  const scoreListLength = scoreList?.length ?? 0;

  const listDrinkerItem = (
    {drinkerId, total}: {drinkerId: string; total: number},
    index: number,
  ) => {
    drinkerId = drinkerId?.charAt(0).toUpperCase() + drinkerId?.slice(1);

    return (
      <View style={styles.listItem} key={index}>
        <View style={styles.row}>
          {getIcon(index, scoreListLength - 1)}
          <View>
            <Text style={styles.title}>{drinkerId}</Text>
          </View>
        </View>
        <Text style={styles.units}>
          <Text>{total}</Text>
          <Text> ml</Text>
        </Text>
      </View>
    );
  };

  return scoreList?.map(listDrinkerItem);
};

const ScoreboardScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {drinker, setRecords} = useStore();

  useFocusEffect(
    useCallback(() => {
      const fetchUser = async () => {
        const records = await getRecords().catch();
        setRecords(records);
      };
      fetchUser();
    }, [setRecords]),
  );

  const refreshControl = () => {
    const onRefresh = async () => {
      setRefreshing(true);
      setRecords(await getRecords());
      setRefreshing(false);
    };

    return (
      <RefreshControl
        tintColor={COLORS.pink}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>{drinker?.name}</Text>
        </Text>
        <LinearGradientText
          colors={[COLORS.pink, COLORS.blue]}
          text="Scoreboard"
          start={{x: 0.0, y: 0}}
          end={{x: 0.4, y: 0}}
          textStyle={styles.header}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={refreshControl()}>
          {DrinkerListData()}
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
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 22,
    borderBottomColor: '#38383A',
    borderBottomWidth: 0.5,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '65%',
  },
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 17,
    lineHeight: 22,
    color: COLORS.white,
    marginLeft: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: '#BEBEBE',
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
