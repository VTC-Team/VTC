import React from 'react';
import { Button, Text, View, Image, StyleSheet, DatePickerAndroid, TimePickerAndroid } from 'react-native';
//import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Header} from 'react-native-elements';

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

		openDatePicker = async (term) => {
			try {
				const {action, year, month, day} = await DatePickerAndroid.open({
				  date: new Date()
				});
				if (action !== DatePickerAndroid.dismissedAction) {
				  //This is where you get the date from.
				  var date = new Date(year, month, day);
				  //this.year = year;
				  //this.month = month;
				  //this.day = day;
				}
			  } catch ({code, message}) {
				console.warn('Cannot open date picker', message);
			  }
		}
	
		openTimePicker = async (term) => {
			try {
				const {action, hour, minute} = await TimePickerAndroid.open({
				  hour: 8,
				  minute: 0,
				  is24Hour: false,
				});
				if (action !== TimePickerAndroid.dismissedAction) {
				  // This is where you get the time from.
				  var time = new Date(hour, minute);
				  //this.hour = hour;
				  //this.minute = minute;
				}
			  } catch ({code, message}) {
				console.warn('Cannot open time picker', message);
			  }
		}
	
			//look at login.js for firebase code, the firebase initialization try catch,
			//but maybe don't need this, given the state part for the login
			//profilepage.js is the page you get when you log in?
			//need to run a firebase get request for said image, but the get request
			//needs to occur at a time set by user
			//have a menu where user can set datetime, upload to database
			//when the datetime matches the current datetime, database (app?) sends the user
	
			//need to tie it with the image uploading: choose an image to upload, choose date/time, upload
			//those settings to the database
			//an email with the image/text -> better design
			//notification -> firebase notifications simpler to implement

		render(){
			return <View style={{flex:1,backgroundColor: '#000a12'}}>
			<Header 
			rightComponent={{ icon: 'menu', onPress: () => this.props.navigation.navigate('DrawerOpen'), color: '#fff' }}
	        centerComponent={{ text: 'Memories Received',
	        						  style:{fontSize: 18, color:'white'} }}
	        leftComponent={{ icon: 'home', onPress: () => this.props.navigation.navigate("menu", {screen: "FirstScreen"}), color: '#fff' }}
	        outerContainerStyles={{backgroundColor:'#455a64'}}
    		/>
			<Button
				style={styles.button}
				onPress={() => {this.openDatePicker()}}
  				title="Choose Date"/>
			<Button
				style={styles.button}
				onPress={() => {this.openTimePicker()}}
  				title="Choose Time"/>
			
			</View>

	}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000a12',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        backgroundColor: '#1c313a',
        width:280,
        borderRadius: 50,
        marginVertical: 10,
        paddingVertical:10
      },

      buttonText:{
        fontSize:16,
        fontWeight:'500',
        color: '#ffffff',
        textAlign:'center'

      },
});