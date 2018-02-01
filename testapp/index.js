import React, { Component } from 'react'

import { AppRegistry,StyleSheet, Text, View } from 'react-native';
import App from './App';
import Camera from 'react-native-camera'

export default class testapp extends Component{
    render() {
        return (
            <App />
        );
    }
}
AppRegistry.registerComponent('testapp', () => App);
