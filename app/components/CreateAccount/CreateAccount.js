import React, { Component } from 'react';
import { AppRegistry, Text, View, TextInput,StyleSheet,TouchableOpacity,Button, ScrollView } from 'react-native';
import { Pages } from 'react-native-pages';
import CheckBox from 'react-native-checkbox';
//import { StackNavigator } from 'react-navigation';
import AddFriends from '../AddFriends/AddFriends';

export default class CreateAccount extends Component {
    /*static navigationOptions = {
        title: "Welcome"
    }*/
    onPress(){
        console.log("area is pressed");
    }
  render() {
    //const { navigation } = this.props.navigation
    //navigate = this.props.navigation
    return(
        //<Pages>
        <View>
        <ScrollView>
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
                  navigation={this.props.navigation}
                  onPress={this.onPress}
                  title="Create Account"
                  color = "green"
                  //onPress={() => this.props.navigation.navigate("AddFriends", {screen: "Add Friends"})}
                />
            </TouchableOpacity>
        </ScrollView>
        </View>
        //</Pages>
        //</ScrollView>
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
        marginBottom: 170
    },
});





AppRegistry.registerComponent('CreateAccount' , () => CreateAccount );