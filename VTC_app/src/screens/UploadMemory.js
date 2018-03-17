import React from 'react';
import { Button, Text, View, Image, StyleSheet, DatePickerAndroid, TimePickerAndroid } from 'react-native';
import {Header} from 'react-native-elements';

import MyFriends from '../screens/MyProfile';
export default class FifthScreen extends React.Component{
		static navigationOptions={
			drawerLabel:'Upload Memory',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="cloud-upload"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}
		render(){
			return <View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'Upload Memory',
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "ProfilePage"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#002633'}}
    		/>
			</View>

	}
}
