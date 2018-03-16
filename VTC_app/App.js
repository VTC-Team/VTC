console.disableYellowBox = true;
import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FirstPage from './src/FirstPage/FirstPage';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

import ProfilePage from './src/screens/ProfilePage';
import MyFriends from './src/screens/MyFriends';
import AddFriends from './src/screens/AddFriends';
import MemoriesReceived from './src/screens/MemoriesReceived';
import UploadMemory from './src/screens/UploadMemory';
import Camera from './src/screens/Camera';
import SeventhScreen from './src/screens/SeventhScreen';
import SearchBar from './src/components/SearchBar';

const InnerNavigator = DrawerNavigator (
{
  menu: {
     screen: ProfilePage,
  },
  MyFriends:{
     path:'/',
     screen:MyFriends,
  },
  AddFriends:{
     path:'/',
     screen:AddFriends,
  },
  MemoriesReceived:{
     path:'/',
     screen:MemoriesReceived,
  },
  SignOut:{
     screen:FirstPage,
  },
},
    {
       initialRouteName: 'menu',
       drawerPosition:'left',
          drawerWidth: 250,
          contentOptions:{
          activeTintColor:'#521452',
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
