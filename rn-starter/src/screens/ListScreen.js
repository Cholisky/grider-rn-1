import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  // const friends = [
  //   { name: 'Friend #1', key: '1' },
  //   { name: 'Friend #2', key: '2' },
  //   { name: 'Friend #3', key: '3' },
  //   { name: 'Friend #4', key: '4' },
  //   { name: 'Friend #5', key: '5' },
  //   { name: 'Friend #6', key: '6' },
  //   { name: 'Friend #7', key: '7' },
  //   { name: 'Friend #8', key: '8' },
  //   { name: 'Friend #9', key: '9' }
  // ];

  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 45 },
    { name: 'Friend #3', age: 32 },
    { name: 'Friend #4', age: 27 },
    { name: 'Friend #5', age: 53 },
    { name: 'Friend #6', age: 30 },
    { name: 'Friend #7', age: 19 },
    { name: 'Friend #8', age: 38 },
    { name: 'Friend #9', age: 43 },
  ];


  return (
    <View>
      <Text style={styles.headerStyle}>List Screen</Text>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          // renderItem starts with element
          // element === { item: { name: 'Friend #1' }, index: 0 }

          // we have destructured to just get the item property
          return <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  textStyle: {
    marginVertical: 50,
    marginLeft: 15,
  },
});

export default ListScreen;
