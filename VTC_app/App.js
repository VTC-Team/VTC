

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


//import Camera from 'react-native-camera'
import VTC_Camera from './app/components/camera/VTC_Camera'


export default class App extends Component {
  render() {
    return (
        <VTC_Camera />
    );
  }
}


AppRegistry.registerComponent('vtc_app', () => vtc_app);