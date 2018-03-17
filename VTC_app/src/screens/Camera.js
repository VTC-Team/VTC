import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import MyFriends from '../screens/MyProfile';
export default class SixthScreen extends React.Component{
		static navigationOptions={
			drawerLabel:'Camera',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="camera"
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
	        centerComponent={{ text: 'Camera',
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "ProfilePage"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#002633'}}
    		/>
			</View>

	}
}
