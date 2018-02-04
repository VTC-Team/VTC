import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput,StyleSheet,Switch,Button,TouchableOpacity } from 'react-native';

export default class Login extends Component {

  constructor(){
    super();
    this.state={
    switchValue: false
    }
  }

  onSwitchChange(value){
    this.setState({
    switchValue:value
    });
  }

  onPress(){
    console.log("area is pressed");
  }

  render() {
    return(
        <View>
            <Text style={styles.h1}>Log in</Text>
            <TextInput
                placeholder="Enter username"
            />
            <TextInput
                placeholder="Enter password"
            />
            <TouchableOpacity>
                <View>
                <Button
                   onPress={this.onPress}
                   title="Login"
                   color = "green"
                />
                </View>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    h1: {
        fontFamily: "Iowan Old Style",
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
    h2: {
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

AppRegistry.registerComponent('Login' , () => Login );