import React from 'react';
import { Button, Text, View, Image } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

//import AppHeader from './components/AppHeader';
//import SearchBar from './components/SearchBar';

export default class FirstScreen extends React.Component{
		/*static navigationOptions={
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
		}*/
		render(){
			return(
			<View style={{flex:1, backgroundColor: '#000a12'}}>
			<Header 
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'My Profile', 
	        						  style:{fontSize: 18, color:'white'} }}			  
	        outerContainerStyles={{backgroundColor:'#455a64'}}
    		/>

			</View>
		);	

	}
}