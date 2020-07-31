import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ColorCounter = ({ color, value, onIncrease, onDecrease, minVal = 0, maxVal = 255 }) => {
  return (
    <View style={styles.cardStyle}>
      <Text style={styles.textStyle}>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={onIncrease}
        disabled={value >= maxVal}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={onDecrease}
        disabled={value <= minVal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginLeft: 15,
  },
  cardStyle: {
    marginBottom: 10,
  },
});

export default ColorCounter;
