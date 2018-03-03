import React from 'react';
import { AppRegistry, Button, Text, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons';

export default class ProfilePage extends React.Component{
blah = () => {
    console.log("props is here");
}
		static navigationOptions={
			tabBarLabel:'Profile',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="card-membership"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}
		render(){
			return <View style={
				{
					flex:1,
					justifyContent:'center',
					alignItems:'center'
				}
			}>
				<Text style={{fontSize:30, color:'green'}}>
					Profile Page
				</Text>
				<Button
					onPress={()=> this.props.navigation.navigate('DrawerOpen')}
					title="Open DrawNavigator"
				/>
			</View>

	}
}

AppRegistry.registerComponent('ProfilePage', () => ProfilePage);