import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput,StyleSheet,TouchableOpacity,Button } from 'react-native';
import { Pages } from 'react-native-pages';
import CheckBox from 'react-native-checkbox';

export default class CreateAccount extends Component {

    onPress(){
        console.log("area is pressed");
    }
  render() {
    return(
        <Pages>
        <View>
            <Text style = {styles.h1}>Create Account</Text>
            <CheckBox
                label='Agree to user conditions'
                checked={false}
                onChange={(checked) => console.log('I am checked', checked)}
            />
            <TextInput
                placeholder="Enter name"
            />
            <TextInput
                placeholder="Enter email"
            />
            <TextInput
                placeholder="Enter username"
            />
            <TextInput
                placeholder="Enter password"
            />
            <TextInput
                placeholder="Confirm password"
            />
            <TextInput
                placeholder="Enter birthday"
            />
            <TouchableOpacity>
                <Button
                  onPress={this.onPress}
                  title="Create Account"
                  color = "green"
                />
            </TouchableOpacity>
        </View>
        </Pages>
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
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 90
    },
});


AppRegistry.registerComponent('CreateAccount' , () => CreateAccount );