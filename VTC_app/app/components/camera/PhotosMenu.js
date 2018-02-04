import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

import VTC_Camera from './VTC_Camera'
import VTC_CameraRoll from './VTC_CameraRoll'

export default class PhotosMenu extends Component{

    state = {
        showCamera: false,
        showCameraRoll: false
    }

    beginCamera(){
        this.setState({ showCamera: true, showCameraRoll: false})
    }

    beginCameraRoll(){
        this.setState({showCamera: false, showCameraRoll: true});
    }

    render(){
        
        if(this.state.showCamera){
            return( 
                <VTC_Camera />
            );
        }
        else if(this.state.showCameraRoll){
            return( 
                <VTC_CameraRoll />
            );
        }
        
        return(
            
            <View style={styles.container}>
            
                <Text
                    style = {styles.button}
                    onPress={() => this.beginCamera()}
                    >
                    Camera
                </Text>
                
                <Text
                    style = {styles.button}
                    onPress={() => this.beginCameraRoll()}
                    >
                    Camera Roll
                </Text>
                
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20
    },
    button: {
        height: 40,
        marginBottom: 20,
        paddingHorizontal: 10
    }
})