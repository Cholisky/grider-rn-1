import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const MIN_PASSWORD_LENGTH = 5;

const TextScreen = () => {
  const [password, setPassword] = useState('')

  return (
    <View>
      <Text style={styles.headerStyle}>Text Screen</Text>
      <Text style={styles.subHeaderStyle}>Enter Password:</Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {(password.length <= MIN_PASSWORD_LENGTH) && <Text style={styles.errorText}>Password must be longer than {MIN_PASSWORD_LENGTH} characters</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  },
  textInput: {
    margin: 15,
    borderWidth: 1,
    borderColor: 'black',
  },
  errorText: {
    color: 'red',
  }
});

export default TextScreen;
