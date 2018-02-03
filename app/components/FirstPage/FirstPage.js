import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import { Button } from 'react-native';

export default class FirstPage extends Component {

  onPress(){
    console.log("area is pressed");
  }

  render() {
    return (
    <View>
      <View>
      <Text style = {styles.welcome}>Welcome to the Virtual Time Capsule App </Text>
      <TouchableOpacity onPress={this.onPress} underlayColor="blue">
         <View>
            <Button
              onPress={this.onPress}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Text style = {styles.instructions}>Login</Text>
         </View>
      </TouchableOpacity>
      <Text style = {styles.instructions}>Create Account</Text>

      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue"
  },*/
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
