import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { AppRegistry, Text, View, StyleSheet,TouchableHighlight,StatusBar} from 'react-native';
import { Button } from 'react-native';
//import Login from '../pages/Login';

export default class FirstPage extends Component {
  static navigationOptions = {
      title: "Welcome"
  }

  blah = () => {
    console.log("props is here");
    navigate("Login", {screen: "Login"})
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props ahiyan che");
    return (
    <View>
    <Text style = {styles.welcome}>Welcome to the Virtual Time Capsule App </Text>
    <View>
       <TouchableHighlight
          onPress={() => navigate("login", {screen: "Login"})}
          style={styles.button}>
          <Text
             style={styles.buttonText}>Login </Text>
       </TouchableHighlight>
       <TouchableHighlight
           onPress={() => navigate("createaccount", {screen: "Create Account"})}
           style={styles.button1}>
           <Text
             style={styles.buttonText}>Sign Up </Text>
       </TouchableHighlight>
    </View>
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
        marginBottom: 40
    },
    button: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        backgroundColor: '#ADD8E6',
        justifyContent: 'center'
    },
    button1: {
        alignSelf: 'stretch',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        height: 40,
        backgroundColor: '#32CD32',
        justifyContent: 'center'
    },
    buttonText: {
        color: 'blue',
        fontSize: 22,
        alignSelf: 'center'
    },
});

AppRegistry.registerComponent('FirstPage', () => FirstPage);