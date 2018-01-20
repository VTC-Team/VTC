import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class FirstPage extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Begin</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'yellow'
  },
  myText: {
    color: 'red'
  },
  container: {
    flexDirection: 'row',
    height: 100,
    width: 100
  }
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);
