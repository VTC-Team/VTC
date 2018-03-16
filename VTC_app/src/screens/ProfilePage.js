import React, { Component } from 'react';
import { StyleSheet, Button, Text, TextInput, View, Image, ImageBackground,ScrollView } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";

export default class FirstScreen extends React.Component{
		static navigationOptions={
			drawerLabel:'Profile',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="home"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}
		constructor(props) {
            super(props);
            this.state = { name: "", username: ""};
            this.onload();
    }
    async onload () {
               const database = await firebase.database();
               const uid = await firebase.auth().currentUser.uid;
               database.ref('users/' + uid + '/').limitToFirst(10).on('value', (snap) =>  {
                            var data = snap.val();
                            var keys = Object.keys(data);
                            for(key in data) {
                                if (data.hasOwnProperty(key)) {
                                  if (key == "name"){
                                    this.setState({name:data[key]});
                                  } else if (key == "username"){
                                    this.setState({username:data[key]});
                                  }
                                }
                            }
               });
    }
		render(){
			return(
			<View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'My Profile',
	        						  style:{fontSize: 18, color:'white'} }}
	        outerContainerStyles={{backgroundColor:'#002633'}}
    		/>
        <View style={styles.profilepic}>
        <Image
            style={{width:180, height:180}}
            source={require('../../img/profilepic.png')}/>
        </View>
        <Text style={styles.fortext}> Name: {this.state.name} </Text>
        <Text style={styles.fortext}> Username: {this.state.username} </Text>
			</View>
		);

	}
}
const styles = StyleSheet.create({
    // headerBackground: {
    //     flex: 1,
    //     width: null,
    //     alignSelf: 'stretch'
    //     },
        // header: {
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     padding: 100,
        //     backgroundColor: 'rgba(0,0,0,0.5)',
        // },
        // profilepicWrap: {
        // width: 180,
        // height: 180,
        // // borderRadius: 100,
        // borderColor: 'rgba(0,0,0,0.4)',
        // borderWidth: 16,
				// marginTop: -50,
        //
        // },
        profilepic: {
            alignItems: 'center',
            borderColor: '#fff',
            borderWidth: 1,
        },

        fortext: {
            fontSize: 16,
            color: '#ffffff',
            fontWeight: 'bold',
            alignItems:'center',
            marginLeft:20,
            marginTop: 20,
        },
        // email: {
        //     fontSize: 14,
        //     color: '#0394c0',
        //     fontWeight: '300',
        //     },
        // phone: {
        //     fontSize: 14,
        //     color: '#0394c0',
        //     fontWeight: '300',
        //     }

});
