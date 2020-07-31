import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
  const myName = 'Chris';
  const myNameText = <Text style={styles.subHeaderStyle}>My name is {myName}</Text>

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      {myNameText}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  }
});

export default BoxScreen;
