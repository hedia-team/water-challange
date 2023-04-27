import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../styles';

type DataProps = {
  data: {
    id: string;
    title: string;
  }[];
  selectItem(): void;
};

const List = ({data, selectItem}: DataProps) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Item title={item.title} selectItem={selectItem} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

type ItemProps = {
  title: string;
  selectItem(): void;
};

const Item = ({title, selectItem}: ItemProps) => (
  <TouchableOpacity style={styles.item} onPress={selectItem}>
    <Text style={styles.name}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listContainer: {
    borderRadius: 14,
    overflow: 'hidden',
  },
  item: {
    backgroundColor: COLORS.black,
    borderBottomColor: '#38383A',
    borderBottomWidth: 0.5,
  },
  name: {
    color: COLORS.white,
    fontSize: 17,
    lineHeight: 22,
    paddingHorizontal: 16,
    paddingVertical: 11,
  },
});

export default List;
