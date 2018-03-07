import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FirstPage from './src/FirstPage/FirstPage';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';
import FourthScreen from './src/screens/FourthScreen';
import FifthScreen from './src/screens/FifthScreen';
import SixthScreen from './src/screens/SixthScreen';
import SeventhScreen from './src/screens/SeventhScreen';
import SearchBar from './src/components/SearchBar';

const InnerNavigator = DrawerNavigator (
{
  menubar: {
     screen: FirstScreen,
  },
  MyFriends:{
     path:'/',
     screen:SecondScreen,
  },
  AddFriends:{
     path:'/',
     screen:ThirdScreen,
  },
  MemoriesReceived:{
     path:'/',
     screen:FourthScreen,
  },
  UploadMemory:{
     path:'/',
     screen:FifthScreen,
  },
  Camera:{
     path:'/',
     screen:SixthScreen,
  },
  SignOut:{
     path:'/',
     screen:SeventhScreen
  },
},
    {
       initialRouteName: 'menubar',
       drawerPosition:'left',
          drawerWidth: 250,
          contentOptions:{
          activeTintColor:'red',
       }
    }
);

const RootNavigator = StackNavigator({
  Home: {
    screen: FirstPage,//HomeScreen,
    navigationOptions: {
      header:null
    },
  },
  login: {
    screen: Login,//LoginScreen,
    navigationOptions: {
      header:null,
    },
  },
  createaccount: {
    screen: Signup,//CreateAccountScreen,
    navigationOptions: {
      header:null,
    },
  },
  menu: {
    screen: InnerNavigator,
    navigationOptions: {
          header:null,
    },
  },

});

export default RootNavigator;
