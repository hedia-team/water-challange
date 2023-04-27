import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles';
import Checkmark from '../assets/icons/Checkmark';
import {User} from '../data';

type DataProps = {
  data: Array<User>;
  selectItem(item: User): void;
  nameSelected: string;
};

const List = ({data, selectItem, nameSelected}: DataProps) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item
            title={item.title}
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
  title: string;
  selectItem(): void;
  nameSelected: string;
};

const Item = ({title, selectItem, nameSelected}: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={selectItem}>
    <Text style={styles.name}>{title}</Text>
    {title === nameSelected && <Checkmark style={styles.icon} />}
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
