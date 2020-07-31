import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const ColourScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text style={styles.headerStyle}>Colour Screen</Text>
      <Button
        title="Add a Colour"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={color => color}
        data={colors}
        renderItem={({item}) => <View style={{ height: 100, width: 100, backgroundColor: item }} />}
      />

    </View>
  );
};

const randomRgb = () => {
  const red=Math.floor(Math.random() * 256);
  const green=Math.floor(Math.random() * 256);
  const blue=Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 30,
    marginLeft: 15,
  },
});

export default ColourScreen;
