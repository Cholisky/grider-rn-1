import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  const screens = [
    { screen: 'Components', btnText: 'Go to Components Demo' },
    { screen: 'List', btnText: 'Go to List Demo' },
    { screen: 'Image', btnText: 'Go to Image Demo' },
    { screen: 'CounterFirst', btnText: 'Go to First Counter Demo' },
    { screen: 'Colour', btnText: 'Go to Colour Demo' },
    { screen: 'SquareFirst', btnText: 'Go to First Square Demo' },
    { screen: 'SquareSecond', btnText: 'Go to Second Square Demo' },
    { screen: 'CounterSecond', btnText: 'Go to Second Counter Demo' },
    { screen: 'Text', btnText: 'Go to Text Demo' },
    { screen: 'Box', btnText: 'Go to Box Demo' },
  ];

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <FlatList
        keyExtractor={screen => screen.screen}
        data={screens}
        renderItem={({ item }) => (
          <Button
            title={item.btnText}
            onPress={() => navigation.navigate(item.screen)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
