import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

const CounterScreenSecond = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Text style={styles.headerStyle}>Counter Screen</Text>
      <Text style={styles.subHeaderStyle}>Counter: {count}</Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: 'increment', payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement', payload: 1 })}
        disabled={count < 1}
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

export default CounterScreenSecond;
