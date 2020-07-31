import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterScreenFirst = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text style={styles.headerStyle}>Counter Screen</Text>
      <Text style={styles.subHeaderStyle}>Counter: {counter}</Text>
      <Button
        title="Increase"
        onPress={() => setCounter(counter + 1)}
      />
      <Button
        title="Decrease"
        onPress={() => setCounter(counter - 1)}
        disabled={counter < 1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 30,
    marginLeft: 15,
  },
});

export default CounterScreenFirst;
