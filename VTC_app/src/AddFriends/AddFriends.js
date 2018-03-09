import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput,StyleSheet,TouchableOpacity,Button } from 'react-native';
import { Pages } from 'react-native-pages';
import CheckBox from 'react-native-checkbox';
import { StackNavigator } from 'react-navigation';

export default class AddFriends extends Component {

    onPress(){
        console.log("area is pressed");
    }
  render() {
    return(
        <View>
            <Text style = {styles.h1}> Add Friends Page </Text>
            <TextInput
                placeholder="Friend Name or ID"
            />
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
        marginTop: 70,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 90
    },
});


AppRegistry.registerComponent('AddFriends' , () => AddFriends );
