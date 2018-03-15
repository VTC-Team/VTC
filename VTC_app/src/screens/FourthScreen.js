//Retrieves photos from the database upon loading the page, but only if the associated datetime
//has already passed

import React from 'react';
import { Button, Text, View, Image, ScrollView, StyleSheet } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";

import FirstScreen from '../screens/FirstScreen';
export default class FourthScreen extends React.Component{
		/*static navigationOptions={
			drawerLabel:'Memories Sent',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="image"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}*/

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
		
		async deliverData() {
		
			const database = await firebase.database();
			const uid = await firebase.auth().currentUser.uid;
			const imageRef = storageRef.child(uid);
			
			this.setState((photoArray) => {
				return { photoArray:  }
			});
	
			try {
			
				database.ref('users/' + uid + '/photos/').limitToFirst(10).on('value', (snap) =>  {
				
				var current_date = new Date();
				
				var index = 0;
				snap.forEach(function(childSnapshot) {
					stored_date = childSnapshot.child("datetime").val();
					if (current_date > stored_date) {
						storageRef.child(uid + '/' + childSnapshot.key + '.jpg').getDownloadURL().then(function(url) {
							photoArray[index] = url;
							index++;
						})
					}
				});
		
				/*var updates = {};
				updates['users/' + uid + '/photos/' + `/${sessionId}/` + date] = this.state.date;
				updates['users/' + uid + '/photos/' + `/${sessionId}/` + time] = this.state.time;
				firebase.database().ref().update(updates);*/
			 
		
			});
		} catch ({code, message}){
			console.warn('No photos available', message);
		}
		}	

		render(){
			this.deliverData();
			return <View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header 
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'Memories Received',
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "FirstScreen"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#455a64'}}
			/>
			
			<ScrollView
			contentContainerStyle={styles.scrollView}>
			{
				this.state.photoArray.map((p, i) => {
					return(
						
							<Image
								style={{
									borderRadius: 2,
									borderColor: 'black'
								}}
								source={{uri:p}}
							/>
					)
				})
				
			}

			</ScrollView>
			
			
			</View>

	}
}


const styles = StyleSheet.create({
	scrollView: {
	flexWrap: 'wrap',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	marginBottom: 40
	}
});