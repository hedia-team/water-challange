import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles';
import Checkmark from '../assets/icons/Checkmark';
import {Drinker, WaterContainer} from '../data';

type DataProps<T> = {
  data: Array<T>;
  selectItem(item: T): void;
  nameSelected: string;
};

const List = <T extends Drinker | WaterContainer>({
  data,
  selectItem,
  nameSelected,
}: DataProps<T>) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={({item}) => (
          <Item
            name={item.name}
            selectItem={() => selectItem(item)}
            nameSelected={nameSelected}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

type ItemProps = {
  name: string;
  selectItem(): void;
  nameSelected: string;
};

const Item = ({name, selectItem, nameSelected}: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={selectItem}>
    <Text style={styles.name}>{name}</Text>
    {name === nameSelected && <Checkmark style={styles.icon} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.black,
    borderBottomColor: '#38383A',
    borderBottomWidth: 0.5,
  },
  name: {
    fontFamily: 'Inter-Regular',
    color: COLORS.white,
    fontSize: 17,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
  icon: {
    marginRight: 20,
  },
});

export default List;
