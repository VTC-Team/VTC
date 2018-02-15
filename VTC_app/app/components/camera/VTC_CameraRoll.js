// Gets photos from camera roll


import React, { Component } from 'react';
import {
    CameraRoll, Image, StyleSheet, TouchableHighlight, View, AppRegistry, Modal,  Button, ScrollView, Dimensions
} from 'react-native';
import ViewPhotos from './ViewPhotos';

const { width } = Dimensions.get('window')

export default class VTC_CameraRoll extends Component {


    state = {
        photoArray: [],
        modalVisible: false,
        index: null
    }

    setIndex = (index) => {
        if(index === this.state.index){
            index = null
        }
        this.setState({ index })
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 20})
            .then(res => {
                let photoArray = res.edges;
                this.setState({ photoArray: photoArray })
            })
    }

    render() {
        this.getPhotosFromGallery();
        return(
           
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                {
                    this.state.photoArray.map((p, i) => {
                        return(
                            <TouchableHighlight
                                style={{opacity: i === this.state.index ? 0.5 : 1}}
                                key={i}
                                underlayColor='transparent'
                                onPress={() => this.setIndex(i)}
                            >
                                <Image
                                    style={{
                                        width: width/3,
                                        height: width/3
                                    }}
                                    source={{uri:p.node.image.uri}}
                                />
                            </TouchableHighlight>
                        )
                    })
                }
            </ScrollView>
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
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});

AppRegistry.registerComponent('VTC_CameraRoll', () => VTC_CameraRoll);