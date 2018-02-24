// Gets photos from camera roll


import React, { Component } from 'react';
import {
    CameraRoll, Image, StyleSheet, TouchableHighlight, View, AppRegistry, Modal,  Button, ScrollView, Dimensions
} from 'react-native';

import * as firebase from "firebase";
//import Firebase from "./includes/firebase/firebase";

const { width } = Dimensions.get('window');
//src = "https://www.gstatic.com/firebasejs/4.10.1/firebase.js"

export default class VTC_CameraRoll extends Component {

    

    state = {
        photoArray: [],
        modalVisible: false,
        selectArray: [],
        uriIndex: []
    }
    //constructor(props) {
        //Firebase.initialise();
    //}

    //IMAGES
    //Firebase

    

    getPhotosFromGallery() {
        CameraRoll.getPhotos({ first: 20})
            .then(res => {
                let photoArray = res.edges;
                this.setState({ photoArray: photoArray })
            })
    }

    locationIfSelected(index){
        for(var i = 0; i < this.state.selectArray.length; i++){
            if(this.state.selectArray[i] === index){
                return i;
            }
        }
        return -1;
    }

    selectOrUnselect(index, uri){
        var photoIndex = this.locationIfSelected(index);
        if(photoIndex >= 0){
            this.state.selectArray.splice(photoIndex, 1);
            this.state.uriIndex.splice(photoIndex, 1);
        }
        else{
            this.state.selectArray.push(index);
            this.state.uriIndex.push(uri);
        }
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
                                style={{opacity: (this.locationIfSelected(i) >= 0) ? 0.5 : 1}}
                                key={i}
                                underlayColor='transparent'
                                onPress={() => this.selectOrUnselect(i, p.node.image.uri)}
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

        <Text
            >
            Upload
        </Text>
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
    },
    button: {
        marginBottom: 20,
        paddingHorizontal: 10
    }
});

AppRegistry.registerComponent('VTC_CameraRoll', () => VTC_CameraRoll);