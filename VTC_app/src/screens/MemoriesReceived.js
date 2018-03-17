//Retrieves photos from the database upon loading the page, but only if the associated datetime
//has already passed

import React from 'react';
import { Button, Text, View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";
const { width } = Dimensions.get('window');

import MyFriends from '../screens/MyProfile';
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
			this.state = {
				photoArray : [],
				friends : ""
			};

			this.deliverData = this.deliverData.bind(this);
			this.deliverData();
			
		}
		
		async deliverData() {
		
			const database = await firebase.database();
			const uid = await firebase.auth().currentUser.uid;
			
			//const imageRef = storageRef.child(uid);
	
			try {

				var temp_array = [];
				database.ref('users/' + uid + '/photos/').limitToFirst(10).once('value', async (snap) =>  {
			
					var current_date = new Date();
					var index = 0;
					console.log(current_date);
					console.log(this.state.friends);
					
					
				try {

					var data = snap.val();
					var keys = Object.keys(data);
					for(key in data) {
						if (data.hasOwnProperty(key)) {
							stored_json_date = data[key]['datetime'];
							stored_date = new Date(stored_json_date);
							if (current_date > stored_date) {
								var url = await storageRef.child(uid + '/' + key + '.jpg').getDownloadURL();
								this.state.photoArray.push(url);
								console.log(url);
								console.log(index);
							}
						}
					}
				console.log(this.state.photoArray);
				} catch ({code, message}){
					console.warn('No photos available (inner)', message);
				}
				});
			} catch ({code, message}){
				console.warn('No photos available', message);
			}
		}

		render(){
			console.log(this.state.photoArray);
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
                        this.state.photoArray.map((p,i) => {
							return(
		
								<Image
										style={{
											width: width/2,
											height: width/2,
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