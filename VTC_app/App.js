

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
} from 'react-native';


//import Camera from 'react-native-camera'
//import VTC_Camera from './app/components/camera/VTC_Camera'
//import VTC_CameraRoll from './app/components/camera/VTC_CameraRoll'
import PhotosMenu from './app/components/camera/PhotosMenu'


export default class App extends Component {
  render() {
    return (
        //<VTC_Camera />
        //<VTC_CameraRoll />
        <PhotosMenu />
    );
  }
}


AppRegistry.registerComponent('vtc_app', () => vtc_app);
