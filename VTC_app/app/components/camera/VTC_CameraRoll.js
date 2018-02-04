// Code from https://www.codementor.io/blessingoraz/access-camera-roll-with-react-native-9uwupuuy0


import React, { Component } from 'react';
import {
    CameraRoll, Image, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import ViewPhotos from './ViewPhotos';


class VTC_CameraRoll extends Component {

    state = {
        showPhotoGallery: false,
        photoArray: []
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 1000000 })
            .then(res => {
                let photoArray = res.edges;
                this.setState({ showPhotoGallery: true, photoArray: photoArray })
            })
    }

    render() {
        if (this.state.showPhotoGallery){
            return (
                <ViewPhotos
                    photoArray={this.state.photoArray} />
            )
        }
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.getPhotosFromGallery()}>
                    <Image 
                        style={styles.add}
                        source={require('./assets/add.png')} />
                </TouchableHighlight>
            </View>
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

export default VTC_CameraRoll;