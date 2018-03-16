import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import ProfilePage from '../screens/ProfilePage';
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
