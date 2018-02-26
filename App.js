import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import FirstPage from './src/FirstPage/FirstPage';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

/*const HomeScreen = ({ navigation }) => (
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

const LoginScreen = ({ navigation }) => (
  <Login />
);

const CreateAccountScreen = ({ navigation }) => (
  <Signup />
  //<AddFriends />
);*/

const RootNavigator = StackNavigator({
  Home: {
    screen: FirstPage,//HomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  login: {
    screen: Login,//LoginScreen,
    navigationOptions: {
      headerTitle: 'Log in',
    },
  },
  createaccount: {
    screen: Signup,//CreateAccountScreen,
    navigationOptions: {
      headerTitle: 'Create Account',
    },
  },
});

export default RootNavigator;