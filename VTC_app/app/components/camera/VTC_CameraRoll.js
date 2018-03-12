// Gets photos from camera roll


import React, { Component } from 'react';
import {
    Text, CameraRoll, Image, StyleSheet, TouchableHighlight, View, AppRegistry, Modal,  Button, ScrollView, Dimensions, DatePickerAndroid, TimePickerAndroid
} from 'react-native';

import * as firebase from "firebase";
import Firebase from "../../../includes/firebase/firebase";

import RNFetchBlob from 'react-native-fetch-blob';
import {Header} from 'react-native-elements';
const { width } = Dimensions.get('window');

// Prepare Blob support
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob



export default class VTC_CameraRoll extends Component {

    constructor(props) {
        super(props);
        
        try{
            Firebase.initialise();
        }
        catch (err) {
            if (!/already exists/.test(err.message)) {
            console.error('Firebase initialization error', err.stack)
            }
        }
        storageRef = firebase.storage().ref();
      }


    state = {
        photoArray: [],
        modalVisible: false,
        selectArray: [],
        uriIndex: []
    }

    uploadImage = (uri, mime = 'application/octet-stream') => {
        return new Promise((resolve, reject) => {
            const sessionId = new Date().getTime()
            const database = firebase.database();
            const uid = firebase.auth().currentUser.uid;
            let uploadBlob = null
            const imageRef = storageRef.child(uid).child(`${sessionId}` + '.jpg')
        
            
            database.ref('users/' + uid + '/photos/').on('value', (snap) =>  {
            
            var updates = {};
            updates['users/' + uid + '/photos/' + `/${sessionId}/` + 'datetime'] = new Date(this.state.year, this.state.month, this.state.day, this.state.hour, this.state.minute);
            firebase.database().ref().update(updates);
        });
            
            fs.readFile(uri, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` })
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, { contentType: mime })
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
        })

        

    }
    

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

    uploadPhotos(){
        for(i=0; i<this.state.uriIndex.length; i++){
            this.uploadImage(this.state.uriIndex[i]);
        }
        alert("uploaded!")
    }

    openDatePicker = async (term) => {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
              date: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
              //This is where you get the date from.
              this.state.year = year;
              this.state.month = month;
              this.state.day = day;
            }
          } catch ({code, message}) {
            console.warn('Cannot open date picker', message);
          }
    }

    openTimePicker = async (term) => {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
              hour: 8,
              minute: 0,
              is24Hour: false,
            });
            if (action !== TimePickerAndroid.dismissedAction) {
              // This is where you get the time from.
              this.state.hour = hour;
              this.state.minute = minute;
            }
          } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
          }
    }

    render() {
        this.getPhotosFromGallery();
        return(
            <View style={styles.container}>
                <Header 
                    rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
                    centerComponent={{ text: 'Upload', style:{fontSize: 18, color:'white'} }}			  
                    outerContainerStyles={{backgroundColor:'#455a64'}}
                />
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
                                            height: width/3,
                                            borderRadius: 2,
                                            borderColor: 'black'
                                        }}
                                        source={{uri:p.node.image.uri}}
                                    />
                                    
                                </TouchableHighlight>
                                
                            )
                        })
                        
                    }
                </ScrollView>
                <Button
				    style={styles.button}
				    onPress={() => {this.openDatePicker()}}
  				    title="Choose Date"/>
			    <Button
				    style={styles.button}
				    onPress={() => {this.openTimePicker()}}
  				    title="Choose Time"/>
                <TouchableHighlight
                    underlayColor='transparent'
                    onPress={() => this.uploadPhotos()}>
                    <Text style = {styles.upload}>Upload</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        backgroundColor: '#000a12'
    },
    scrollView: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    button:{
        backgroundColor: '#1c313a',
        width:280,
        borderRadius: 50,
        marginVertical: 10,
        paddingVertical:10
	},
    upload: {
        flex: 0,
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        margin: 15,
    }
});

AppRegistry.registerComponent('VTC_CameraRoll', () => VTC_CameraRoll);