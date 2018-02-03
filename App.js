/*import React, {Component} from 'react';
import { AppRegistry, Text, View, StackNavigator } from 'react-native';
import FirstPage from './app/components/FirstPage/FirstPage';
//import NavigationExperimental from 'react-native-deprecated-custom-components';
//import { Button, Card } from 'react-native-material-design';
//import DisplayAnImage from './app/components/DisplayAnImage/DisplayAnImage';
import Login from './app/components/Login/Login';

export default class MyProject extends Component {

  renderScene(route, navigator){
    switch(route.id){
       case 'firstpage':
         return (<FirstPage navigator = {navigator} title = 'firstpage' />)
       case 'login':
                return (<Login navigator = {navigator} title = 'login' />)
    }
  }
  render() {
    return (
      <StackNavigator
        initialRoute = {{id: 'firstpage'}}
        renderScene = {this.renderScene}
        configureScreen = {(route,routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
    );
  }
}

AppRegistry.registerComponent('MyProject', () => MyProject);
*/

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import FirstPage from './app/components/FirstPage/FirstPage';
import Login from './app/components/Login/Login';

/*
const FirstPage = ({ navigation }) => (
  <View>
  <FirstPage />
    <Button
      onPress={() => navigation.navigate('Login')}
      title="Go to login"
    />
  </View>
);

const login = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  FirstPage: {
    screen: FirstPage,
    navigationOptions: {
      headerTitle: 'FirstPage',
    },
  },
  Login: {
    screen: login,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
});

export default RootNavigator;
*/
const HomeScreen = ({ navigation }) => (
  <View>
    <FirstPage />
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Go to Log in"
    />
  </View>
);

const DetailsScreen = () => (
  <Login />
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Log in',
    },
  },
});

export default RootNavigator;