import React from 'react';
import { StyleSheet, Button, Text, View, Image, ScrollView } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import SearchBar from '../components/SearchBar';
import FirstScreen from '../screens/FirstScreen';

import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";

export default class SecondScreen extends React.Component{
        constructor(props) {
           super(props);
           this.state = {
                friends:""
           }
           this.onload;
        }

        async onload () {
                   const database = await firebase.database();
                   const uid = await firebase.auth().currentUser.uid;
                   database.ref('users/' + uid + '/friends/').limitToFirst(10).on('value', (snap) =>  {
                                var data = snap.val();
                                var keys = Object.keys(data);
                                for(key in data) {
                                    if (data.hasOwnProperty(key)) {
                                        var append = this.state.friends + data[key] + '\n';
                                        this.setState({friends:append});
                                    }
                                }
                   });

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

    		<Text style={{color: "#ffffff"}}>{this.state.friends}</Text>


			</View>

	    }
}

const styles = StyleSheet.create({
    welcome: {
            textAlign: "center",
            color: "#ffffff",
    }
});
