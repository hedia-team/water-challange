import React, {useState} from 'react';
import moment from 'moment';
import {Text, SafeAreaView, SectionList, StyleSheet, View} from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../styles';
import Calendar from '../assets/icons/Calendar';
import {useStore} from '../store/storage';
import {Drink} from '../data';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const {drinker, drinks, teams} = useStore();

  const userTeam = teams?.find(team =>
    team.drinkers?.includes(drinker?.id.toLowerCase() ?? ''),
  );

  const SectionListExample = () => {
    const drinkersDrinks = drinks?.filter(
      drink => drink.drinkerId === drinker?.id.toLowerCase(),
    );

    const todayDrinks = drinkersDrinks?.filter(drinks => {
      const date = new Date(drinks.createdAt);
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    });

    const DRINKS = index === 0 ? todayDrinks : drinkersDrinks;

    return DRINKS?.sort().reduce((acc, item) => {
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
    }, []);
  };

  const renderListHeader = () => (
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

  const renderItem = ({item}: {item: Drink}) => (
    <View style={styles.item}>
      <Text style={styles.time}>{moment(item.createdAt).format('HH:mm')}</Text>
      <Text style={styles.value}>{item.amount} ml</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.page}>
        <Text style={styles.user}>
          <Text>{drinker?.name}</Text>
          <Text style={styles.team}> // {userTeam?.name}</Text>
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

        <SectionList
          sections={SectionListExample()}
          keyExtractor={item => item.createdAt}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderListHeader}
          renderSectionFooter={() => <View style={styles.separator} />}
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
  gradient: {
    marginTop: 37,
    marginBottom: 24,
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
