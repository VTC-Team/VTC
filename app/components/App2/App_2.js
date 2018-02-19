import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CreateAccount from './app/components/CreateAccount/CreateAccount';
import AddFriends from './app/components/AddFriends/AddFriends';

const Addfriends = ({ navigation }) => (
    <AddFriends />
);

const CreateAccountScreen = () => (
  <CreateAccount />
  <Button
    onPress={() => navigation.navigate('addfriends')}
    title="Add Friends!"
    color = "green"
  />
);

const RootNavigator = StackNavigator({
  createaccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
  addfriends: {
    screen: Addfriends,
    navigationOptions: {
      headerTitle: 'Add Friends:)',
    },
  },
});

export default RootNavigator;