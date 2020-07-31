import React, { useReducer } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

// reducer - function that manages changes to an object
// action - object that describes the update we want to make.  Typically {type, payload} with type describing the action and payload being the value(s) to use
// dispatch - run my reducer using this action object

// dispatch and state are connected by useReducer

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_red':
      return (state.red + action.payload > 255 || state.red + action.payload < 0) ? state : { ...state, red: state.red + action.payload };
    case 'change_green':
      return (state.green + action.payload > 255 || state.green + action.payload < 0) ? state : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return (state.blue + action.payload > 255 || state.blue + action.payload < 0) ? state : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
}

const SquareScreenSecond = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <Text style={styles.headerStyle}>Square Screen 2</Text>
      <ColorCounter
        color="Red" value={red}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Green" value={green}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -COLOR_INCREMENT })}
      />
      <ColorCounter
        color="Blue" value={blue}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -COLOR_INCREMENT })}
      />
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
      <Text>rgb {red}, {green}, {blue}</Text>
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

export default SquareScreenSecond;
