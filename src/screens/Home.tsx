import React, {useState} from 'react';
import moment from 'moment';
import {
  Text,
  SafeAreaView,
  SectionList,
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect} from '@react-navigation/native';
import {COLORS} from '../styles';
import Calendar from '../assets/icons/Calendar';
import {useStore} from '../store/storage';
import {Drink} from '../types';
import {getDrinks} from '../api/drinks/getDrinks';
import {getRanking} from './utils';
import {LinearGradientText} from 'react-native-linear-gradient-text';
import Close from '../assets/icons/Close';
import {deleteDrink} from '../api/drinks/deleteDrinks';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const {drinker, drinks, teams, setDrinks} = useStore();

  useFocusEffect(
    React.useCallback(() => {
      const fetchUser = async () => setDrinks(await getDrinks().catch());
      fetchUser();
    }, [setDrinks]),
  );

  const userTeam = teams?.find(team =>
    team.drinkers?.includes(drinker?.id.toLowerCase() ?? ''),
  );

  const onPressDeleteDrink = async (id: string) => {
    await deleteDrink(id);
    const d = await getDrinks().catch();
    setDrinks(d);
  };

  const drinkersDrinks = drinks
    ?.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    ?.filter(drink => drink.drinkerId === drinker?.id.toLowerCase());

  const todayDrinkerDrinks = drinkersDrinks?.filter(d =>
    isSameDay(new Date(d.createdAt)),
  );
  const todayDrinks = drinks?.filter(d => isSameDay(new Date(d.createdAt)));
  const todayAmount = todayDrinkerDrinks?.reduce((acc, i) => acc + i.amount, 0);
  const rank = getRanking(todayDrinks, drinker?.id.toLowerCase() ?? '');

  const DRINKS = index === 0 ? todayDrinkerDrinks : drinkersDrinks;

  const sectionsData =
    DRINKS?.sort().reduce(
      (acc: Array<{title: string; data: Array<Drink>}>, item) => {
        const date = new Date(item.createdAt);
        const dateString = date.toDateString();
        const existingSectionIndex = acc.findIndex(
          section => section.title === dateString,
        );
        if (existingSectionIndex >= 0) {
          acc[existingSectionIndex].data.push(item);
        } else {
          acc.push({
            title: dateString,
            data: [item],
          });
        }
        return acc;
      },
      [],
    ) ?? [];

  const renderListHeader = () => (
    <LinearGradient
      colors={['#F988FF', '#3D9AFF']}
      style={styles.gradient}
      useAngle
      angle={98.41}>
      <View style={styles.row}>
        <Text style={styles.amount}>{todayAmount}</Text>
        <Text style={styles.units}>ml</Text>
      </View>
      <Text style={styles.rank}>{`You are rank ${rank} today`}</Text>
    </LinearGradient>
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => (
    <View style={styles.sectionHeaderItem}>
      <Calendar style={styles.calendarIcon} />
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );

  const renderItem = ({item}: {item: Drink}) => {
    const onPress = () =>
      Alert.alert('Hey!', 'Are you sure you want to remove your entry?', [
        {text: 'OK', onPress: async () => onPressDeleteDrink(item.id)},
        {text: 'Cancel'},
      ]);
    return (
      <View style={styles.item}>
        <Text style={styles.time}>
          {moment(item.createdAt).format('HH:mm')}
        </Text>
        <View style={{flexDirection: `row`}}>
          <Text style={styles.value}>{item.amount} ml</Text>
          <TouchableOpacity style={{marginLeft: 5}} onPress={onPress}>
            <Close />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const refreshControl = () => {
    const onRefresh = async () => {
      setRefreshing(true);
      setDrinks(await getDrinks());
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
          <Text style={styles.team}>{` // ${userTeam?.name}`}</Text>
        </Text>
        <LinearGradientText
          colors={[COLORS.pink, COLORS.blue]}
          text="My intake"
          start={{x: 0.0, y: 0}}
          end={{x: 0.4, y: 0}}
          textStyle={styles.header}
        />

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

        <SectionList
          sections={sectionsData}
          keyExtractor={item => item.createdAt}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderListHeader}
          renderSectionFooter={() => <View style={styles.separator} />}
          refreshControl={refreshControl()}
        />
      </View>
    </SafeAreaView>
  );
};

const isSameDay = (date: Date) => {
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
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
    marginBottom: 24,
    paddingVertical: 13,
    borderRadius: 30,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
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
  sectionHeaderItem: {
    flexDirection: 'row',
    borderBottomColor: '#515151',
    borderBottomWidth: 1,
    backgroundColor: COLORS.dark,
    paddingVertical: 14,
  },
  calendarIcon: {
    marginLeft: 8,
  },
  sectionHeader: {
    fontFamily: 'Inter-Medium',
    fontSize: 20,
    lineHeight: 24,
    color: '#bebebe',
    backgroundColor: COLORS.dark,
    marginLeft: 4,
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontFamily: 'Inter-Regular',
    fontSize: 17,
    lineHeight: 21,
    color: COLORS.white,
  },
  value: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    lineHeight: 24,
    color: COLORS.white,
  },
  separator: {
    height: 24,
  },
});

export default HomeScreen;
