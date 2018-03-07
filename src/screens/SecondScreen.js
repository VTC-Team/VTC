import React from 'react';
import { Button, Text, View, Image } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import SearchBar from '../components/SearchBar';
import FirstScreen from '../screens/FirstScreen';

export default class SecondScreen extends React.Component{
	onPressSearch = term => {
    	alert(term);
  	}

	
		/*static navigationOptions={
			drawerLabel:'My Friends',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="account-circle"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}*/
		render(){
			return <View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header 
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'My Friends', 
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "FirstScreen"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#455a64'}}
    		/>
    		<SearchBar onPressSearch={this.onPressSearch}/>
			</View>

	}
}