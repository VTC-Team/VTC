// code taken from https://github.com/react-native-community/react-native-camera README.md

'use strict';

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, BackHandler, TouchableHighlight, Image, Dimensions} from 'react-native';
import Camera from 'react-native-camera';
const { width } = Dimensions.get('window');

let startVideo = false;
export default class Camera_record extends Component{

  constructor() {
    super();
    this.render = this.render.bind(this)
    this.state = { cameraType: Camera.constants.Type.back }
  }
    state = {
      recording: false,
      path: ''
    }

    render(){
        
        return(
          <View style={styles.container}>
          <Camera
            ref={(cam) => {
              this.camera = cam;
            }}
            style={styles.view}
            aspect={Camera.constants.Aspect.fill}
            //type = {Camera.constants.Type.front}
            captureMode = {Camera.constants.CaptureMode.video}
  
            keepAwake={true}
          >
            <Text style={styles.capture} onPress={this.takeVid.bind(this)}> Start recording </Text>
          <Text style={styles.capture} onPress={this.stopVid.bind(this)}> Stop recording </Text>
          </Camera>
        </View>
        );
    }

    takeVid() {
      const option = {};
      //options.location = ...
      this.camera.capture({
        mode: Camera.constants.CaptureMode.video
      })
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
    }
  
    stopVid(){
     //console.log("I am pressed");
      this.camera.stopCapture();
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
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

  AppRegistry.registerComponent('Camera_record', () => Camera_record);