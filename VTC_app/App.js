

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Camera from 'react-native-camera'

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) =>{
            this.camera = cam
          }}
          style = {styles.view}
          aspect = {Camera.constants.Aspect.fill}>
            <Text
            style = {styles.capture}
            onPress={this.takePicture.bind(this)}>
              Capture
            </Text>
        </Camera>

      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({metadata: options})
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: 'steelblue',
    borderRadius: 10,
    color: 'red',
    padding: 15,
    margin: 45
  }

});

AppRegistry.registerComponent('VTC_app', () => VTC_app);