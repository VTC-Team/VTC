/*import React, { Component } from 'react';
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
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);*/

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  ImageBackground,
  Text,
  View
} from 'react-native';

const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

export default class DisplayAnImage extends Component {
  render() {
    const resizeMode = 'center';
    const text = 'This is some text inlaid in an <Image />';

    return (
      <View>
      <Image
        style={{
          backgroundColor: '#ccc',
          flex: 1,
          resizeMode,
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center'
        }}
        source={{ uri: remote }}
      >
      </Image>
      </View>
    );
  }
}

AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
