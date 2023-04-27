import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../screens/styles';

type DataProps = {
  id: string;
  title: string;
};

const List = ({data}: DataProps) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.name}>{title}</Text>
  </View>
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
