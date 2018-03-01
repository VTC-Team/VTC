import React from 'react';
import { Button, Text, Platform, ScrollView, StyleSheet } from 'react-native';
import{DrawerNavigator} from 'react-navigation'

import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/FirstScreen';



const DrawerExample= DrawerNavigator(
  {

    Profile:{
      path:'/',
      screen:FirstScreen,
    },
    Friends:{
      path:'/sent',
      screen:SecondScreen,
    },
  },

  {
      initialRouteName:'Profile',
      drawerPosition:'left',
      drawerWidth: 250,
      contentOptions:{
        activeTintColor:'red',
  }

  }

);
export default DrawerExample;

