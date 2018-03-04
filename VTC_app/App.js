console.disableYellowBox = true;

import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

import VTC_Camera from './app/components/camera/VTC_Camera'
import VTC_CameraRoll from './app/components/camera/VTC_CameraRoll'
import Camera_record from './app/components/camera/Camera_record'


const PhotoScreen = ({ navigation }) => (
    <View style={styles.container}>
            
      <Text
          style = {styles.button}
          onPress={() => navigation.navigate('camera')}
          >
          Camera
      </Text>
      
      <Text
          style = {styles.button}
          onPress={() => navigation.navigate('cameraroll')}
          >
          Camera Roll
      </Text>

       <Text
          style = {styles.button}
          onPress={() => navigation.navigate('camerarecord')}
          >
          Record Video
      </Text>
    </View>

);

const CameraScreen = () => (
  <VTC_Camera />
);

const CameraRollScreen = () => (
  <VTC_CameraRoll />
);

const CameraRecord = () => (
  <Camera_record />
)

const photoscreens = StackNavigator({
  Home: {
    screen: PhotoScreen,
      navigationOptions: {
        headerTitle: 'Photos',
      },
  },
  camera: {
    screen: CameraScreen,
      navigationOptions: {
        headerTitle: '',
      },
  },
  cameraroll: {
    screen: CameraRollScreen,
      navigationOptions: {
        headerTitle: 'Choose photos',
      },
  },
  camerarecord: {
    screen: CameraRecord,
      navigationOptions: {
        headerTitle: 'Record a video',
      },
  },
});

const styles = StyleSheet.create({
  container:{
      padding: 20
  },
  button: {
      height: 40,
      marginBottom: 20,
      paddingHorizontal: 10
  }
});


export default photoscreens;
