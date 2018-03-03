import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
import FormSignup from '../components/FormSignup';
import FirstPage from '../FirstPage/FirstPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import { StackNavigator } from 'react-navigation';
import Firebase from "../../includes/firebase/firebase.js";
import * as firebase from "firebase";

export default class Login extends Component<{}>{

    constructor(props) {
        super(props);
        try {
            Firebase.initialise();
        } catch(err) {
            if (!/already exists/.test(err.message)) {
                console.error('Firebase initialization error', err.stack)
            }
        }
        this.state = {
            email: "",
            password:""
        }
    }
blah = () => {
    console.log("props is here");
}
async login() {
    try {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
        this.props.navigation.navigate("createaccount", {screen: "Signup"})
        // Navigate to home screen
    } catch (error) {
        alert(error.toString())
        // Navigate to login screen
    }
}
	render(){
	const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
            <TextInput style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Email'
                placeholderTextColor='#ffffff'
                selectionColor='#fff'
                keyboardType="email-address"
                onChangeText={(text) => this.setState({email:text})}
            />

            <TextInput style={styles.inputBox1}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                secureTextEntry={true}
                placeholderTextColor='#ffffff'
                onChangeText={(text) => this.setState({password:text})}
            />
                <View style={styles.signupTextCont}>
         	    <TouchableOpacity
         	            style={styles.button}
         	            onPress={() => {this.login()}}
         	            >
                       <Text style= {styles.buttonText}>Log in</Text>
                </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => navigate("createaccount", {screen: "Signup"})}
                    >
                    <Text style={styles.signupText}>Don't have an account yet? </Text>
                </TouchableOpacity>
            </View>
		)
	}
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000a12',
    alignItems: 'center',
    justifyContent: 'center',
  },
signupTextCont:{
	flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row'
},
signupText:{
	color:'rgba(255, 255, 255, 0.7)',
	fontSize:16
},
signupButton:{
	color:'#ffffff',
	fontSize:16,
	fontWeight:'500'
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
  inputBox:{
      width:280,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: 50,
      paddingHorizontal:13,
      paddingVertical:12,
      fontSize:16,
      color: '#ffffff',
      marginVertical: 90
    },
      inputBox1:{
          width:280,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderRadius: 50,
          paddingHorizontal:13,
          paddingVertical:12,
          fontSize:16,
          color: '#ffffff',
          marginVertical: 0
        },
});

//<Form type="Login"/>
//<Text style={styles.signupButton}>Signup</Text>
//<View style={styles.signupTextCont}>