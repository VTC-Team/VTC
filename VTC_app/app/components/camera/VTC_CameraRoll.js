// Gets photos from camera roll


import React, { Component } from 'react';
import {
    CameraRoll, Image, StyleSheet, TouchableHighlight, View, AppRegistry
} from 'react-native';
import ViewPhotos from './ViewPhotos';


export default class VTC_CameraRoll extends Component {


    state = {
        photoArray: []
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 })
            .then(res => {
                let photoArray = res.edges;
                this.setState({ photoArray: photoArray })
            })
    }

    render() {
        this.getPhotosFromGallery();
        return(
            
            <ViewPhotos
                    photoArray={this.state.photoArray} />
        );
    }

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    add: {
        width: 100,
        height: 100
    }
});

AppRegistry.registerComponent('VTC_CameraRoll', () => VTC_CameraRoll);