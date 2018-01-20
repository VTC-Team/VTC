import React, {Component} from 'react';
import { AppRegistry, Text, View } from 'react-native';
//import FirstPage from './app/components/FirstPage/FirstPage';
import DisplayAnImage from './app/components/DisplayAnImage/DisplayAnImage';

export default class MyProject extends Component {
  render() {
    return (
      <View>
        <DisplayAnImage />
      </View>
    );
  }
}
AppRegistry.registerComponent('MyProject', () => MyProject);
