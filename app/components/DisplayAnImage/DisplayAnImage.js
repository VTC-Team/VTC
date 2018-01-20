import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';

export default class DisplayAnImage extends Component {
  render() {
    return (
      <View>
        <Image
          style={{height: 50, width: 50}}
          source={require('./volcano.jpg')}
        />
        <Text>Begin</Text>
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
