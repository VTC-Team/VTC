import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
         backgroundColor="#1c313a"
         barStyle="light-content"
      />
      <Login/>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000a12',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
