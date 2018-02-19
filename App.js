import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstPage from './app/components/FirstPage/FirstPage';
import Login from './app/components/Login/Login';
import CreateAccount from './app/components/CreateAccount/CreateAccount';
import AddFriends from './app/components/AddFriends/AddFriends';

const HomeScreen = ({ navigation }) => (
  <View>
    <FirstPage />
    <TouchableOpacity>
    <Button
      onPress={() => navigation.navigate('login')}
      title="Go to Log in"
      color = "green"
    />
    <Button
      onPress={() => navigation.navigate('createaccount')}
      title="Create Account"
    />
    </TouchableOpacity>
  </View>
);

const LoginScreen = () => (
  <Login />
);

const CreateAccountScreen = () => (
  <CreateAccount />
  //<AddFriends />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Log in',
    },
  },
  createaccount: {
    screen: CreateAccountScreen,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
});

export default RootNavigator;