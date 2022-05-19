import React, {useState} from "react";
import { View, SafeAreaView, TextInput, StyleSheet, Dimensions } from 'react-native';

import {OlhoExterno} from './styles'

function Login() {

  const [value, setValue] = useState('');
  var width = Dimensions.get('window').width;

  return (

    <View style={styles.container}>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={value}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>

  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FF6666',
    flex: 1,
    justifyContent: 'center',
    padding: 20
  },
  input: {
    height: 10,
    margin: 12,
    flex: 2,

    borderWidth: 1,
    padding: 10,
  },
});