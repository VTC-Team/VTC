// code taken from https://github.com/react-native-community/react-native-camera README.md

'use strict';

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet, BackHandler} from 'react-native';
import Camera from 'react-native-camera';

export default class VTC_Camera extends Component{


    render(){
        return(
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

  AppRegistry.registerComponent('VTC_Camera', () => VTC_Camera);