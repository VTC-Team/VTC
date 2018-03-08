import React from 'react';
import { StyleSheet,Button, Text, View, Image, ScrollView } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

import SearchBar from '../components/SearchBar';
import FirstScreen from '../screens/FirstScreen';

import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";

export default class ThirdScreen extends React.Component{
    constructor(props) {
            super(props);
            this.state = {
                friend:"",
                frienduid:""
            }
    }

	onPressSearch = (term) => {
           var database = firebase.database();
           database.ref('users/').limitToFirst(10).on('value', (snap) =>  {
                        var data = snap.val();
                        var keys = Object.keys(data);
                        for(key in data) {
                            if (data.hasOwnProperty(key)) {
                                if(data[key].username == term){
                                    this.setState({friend:term, frienduid:key});
                                }
                            }
                        }
                        var updates = {};
                        var uid =firebase.auth().currentUser.uid;
                        updates['users/' + uid + '/friends/' + this.state.frienduid] = this.state.friend;
                        return firebase.database().ref().update(updates);
           });
    }
		/*static navigationOptions={
			drawerLabel:'Add Friends',
			drawerIcon:({tintColor})=>{
				return(
					<MaterialIcons
					name="person-add"
					size={24}
					style={{color: tintColor}}
					>
					</MaterialIcons>
				);
			}
		}*/
		render(){
			return (<View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header 
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'Add Friends', 
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "FirstScreen"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#455a64'}}
    		/>

            <SearchBar onPressSearch={this.onPressSearch}/>

            <ScrollView>
    		<Text style={styles.welcome}>waddup</Text>
    		<Text style={styles.welcome}>{this.state.friend}</Text>
            </ScrollView>
			</View>

			)

	}
}

const styles = StyleSheet.create({
welcome: {
        fontFamily: "Times New Roman",
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: "center",
        color: "#B1B1B1",
        marginTop:0,
        marginRight:0,
        marginLeft: 0,
        marginBottom:0
},
});



