import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput } from 'react-native';

//import Login from './src/screens/Login';
//import Secured from './src/screens/Secured';

export default class CreateAccount extends Component {
  render() {
    return(
        <View>
            <Text>Create Account</Text>
            <TextInput
                placeholder="Enter name"
            />
            <TextInput
                placeholder="Enter username"
            />
            <TextInput
                placeholder="Enter password"
            />
        </View>
    );
  }
}

AppRegistry.registerComponent('CreateAccount' , () => CreateAccount );