import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

//import Logo from '../components/Logo';
import CheckBox from 'react-native-checkbox';
import AddFriends from '../AddFriends/AddFriends.js';
import FirstPage from '../FirstPage/FirstPage.js';
import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";
import { StackNavigator } from 'react-navigation';

import ProfilePage from '../screens/ProfilePage';
export default class Signup extends Component<{}>{

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
            password:"",
            username:"",
            name:""
        }
    }

    async signup() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
            var database = firebase.database();
            var uid =firebase.auth().currentUser.uid;
            database.ref('users/' + uid).set({
                username: this.state.username,
                name: this.state.name
            });

            this.props.navigation.navigate("menu", {screen: "ProfilePage"});
        }
        catch (error) {
            alert(error.toString())
        }

    }

	render(){
	const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
			<ScrollView>
          <Text style={styles.createaccount}>Create Account</Text>
          <TextInput style={styles.inputBoxfirst}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Name'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onChangeText={(text) => this.setState({name:text})}
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Username'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onChangeText={(text) => this.setState({username:text})}
          />

	      <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Email'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onChangeText={(text) => this.setState({email:text})}
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder= 'Password'
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
          onChangeText={(text) => this.setState({password:text})}
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Confirm Password'
          secureTextEntry={true}
          placeholderTextColor='#ffffff'
          ref={(input)=> this.password=input}
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Enter Birthday'
          placeholderTextColor='#ffffff'
          ref={(input)=> this.password=input}
          />

			<View style={styles.signupTextCont}>
			<TouchableOpacity
			    style={styles.button}
			    onPress={() => {this.signup()}}
			    >
                <Text style= {styles.buttonText}>Sign up</Text>
			</TouchableOpacity>
			</View>
      <TouchableOpacity
          onPress={() => navigate("login", {screen: "Login"})}
          >
          <Text style={styles.signupText}>Already have an account? </Text>
      </TouchableOpacity>
			</ScrollView>
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
inputBoxfirst:{
  width:280,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 50,
  paddingHorizontal:13,
  paddingVertical:12,
  fontSize:16,
  color: '#ffffff',
  marginTop: 30,
  marginBottom: 12,
},
 signupTextCont:{
	flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:16,
    flexDirection:'row'
},
createaccount:{
   color:'#fff',
   textAlign:'center',
   fontSize:30,
   marginTop: 40,
   marginBottom: 0,
},
signupText:{
	color:'rgba(255, 255, 255, 0.7)',
	fontSize:16,
  textAlign:'center',
},

signupButton:{
	color:'#ffffff',
	fontSize:16,
	fontWeight:'500'

},
welcome: {
        fontFamily: "Times New Roman",
        fontSize: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: "center",
        color: "#B1B1B1",
        marginTop: 200,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 25
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
      marginVertical: 10
    },
});


//() => navigate("Home", {screen: "FirstPage"})}
/*<TouchableOpacity
                  onPress={this.signup()}
                  >
                  <Text style={styles.signupText}>Already have an account? </Text>
              </TouchableOpacity>*/
              //this.signup(this.state.email,this.state.password)}
