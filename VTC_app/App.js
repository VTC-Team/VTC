console.disableYellowBox = true;
import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FirstPage from './src/FirstPage/FirstPage';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';

// import FirstScreen from './src/screens/FirstScreen';
// import SecondScreen from './src/screens/SecondScreen';
// import ThirdScreen from './src/screens/ThirdScreen';
// import FourthScreen from './src/screens/FourthScreen';
// import FifthScreen from './src/screens/FifthScreen';
// import SixthScreen from './src/screens/SixthScreen';
// import SeventhScreen from './src/screens/SeventhScreen';
// import SearchBar from './src/components/SearchBar';

import ProfilePage from './src/screens/ProfilePage';
import MyFriends from './src/screens/MyFriends';
import AddFriends from './src/screens/AddFriends';
import MemoriesReceived from './src/screens/MemoriesReceived';
import UploadMemory from './src/screens/UploadMemory';
import Camera from './src/screens/Camera';
import SeventhScreen from './src/screens/SeventhScreen';
import SearchBar from './src/components/SearchBar';

import VTC_Camera from './app/components/camera/VTC_Camera'
import VTC_CameraRoll from './app/components/camera/VTC_CameraRoll'


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
  Camera: {
    path:'/',
    screen: VTC_Camera,
  },
  UploadMemory: {
    path:'/',
    screen: VTC_CameraRoll,
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
