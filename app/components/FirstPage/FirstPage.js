import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { AppRegistry, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native';

export default class FirstPage extends Component {

  render() {
    return (
    <View>
      <Text style = {styles.welcome}>Welcome to the Virtual Time Capsule App </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontFamily: "Times New Roman",
    fontSize: 45,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: "center",
    color: "#B1B1B1",
    marginTop: 120,
    marginRight: 50,
    marginLeft: 50,
    marginBottom: 150
  },
  container: {
      marginTop: 50,
      marginRight: 50,
      marginLeft: 50,
      marginBottom: 60,
      backgroundColor: "white"
  },
  container1: {
      marginTop: 50,
      marginRight: 50,
      marginLeft: 50,
      marginBottom: 40,
      backgroundColor: "white"
    },
  instructions: {
    fontFamily: "Iowan Old Style",
    fontSize: 30,
    textAlign: "center",
    color: "white",
    backgroundColor: "#4f8e34",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5
  }
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);