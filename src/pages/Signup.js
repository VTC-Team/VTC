import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  //ScrollView,
  Button,
} from 'react-native';

//import Logo from '../components/Logo';
import CheckBox from 'react-native-checkbox';
import AddFriends from '../AddFriends/AddFriends';
import FirstPage from '../FirstPage/FirstPage';
import * as firebase from "firebase";
import Firebase from "../../includes/firebase/firebase.js";
import { StackNavigator } from 'react-navigation';

import FirstScreen from '../screens/FirstScreen';
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
            password:""
        }
    }

    async signup() {
        try {
            await firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password);
            this.props.navigation.navigate("menu", {screen: "FirstScreen"});
        }
        catch (error) {
            alert(error.toString())
        }

    }

	render(){
	const { navigate } = this.props.navigation;
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Name'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Username'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
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

          <CheckBox
          label='Agree to user conditions'
          checked={false}
          onChange={(checked) => console.log('I am checked', checked)}
          />
			<View style={styles.signupTextCont}>
			<TouchableOpacity
			    style={styles.button}
			    onPress={() => {this.signup()}}
			    >
                <Text style= {styles.buttonText}>Sign up</Text>
			</TouchableOpacity>
			</View>
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