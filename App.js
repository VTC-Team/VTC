import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity, StatusBar } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import FirstPage from './src/FirstPage/FirstPage';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import ProfilePage from './src/ProfilePage/ProfilePage';

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

const InnerNavigator = DrawerNavigator (
{
  menubar: {
     screen: ProfilePage,
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
    screen: ProfilePage,
  },

});

export default RootNavigator;
