import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

import VTC_Camera from './app/components/camera/VTC_Camera'
import VTC_CameraRoll from './app/components/camera/VTC_CameraRoll'


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
    </View>

);

const CameraScreen = () => (
  <VTC_Camera />
);

const CameraRollScreen = () => (
  <VTC_CameraRoll />
);

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
