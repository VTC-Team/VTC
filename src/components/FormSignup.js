import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  //ScrollView,
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import AddFriends from '../AddFriends/AddFriends';
export default class Form extends Component<{}> {

    //const AppNavigation =()=>{  <AddFriends />}

	render(){
		return(
		<View>
		//<ScrollView>
		<View style={styles.container}>

		  <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder='Name'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
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
          onSubmitEditing={()=> this.password.focus()}
          />

          <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder= 'Password'
          placeholderTextColor='#ffffff'
          selectionColor='#fff'
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
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

          <TouchableOpacity style={styles.button}>
             <Text style= {styles.buttonText}>{this.props.type}</Text>
          </TouchableOpacity>

      </View>
      //</ScrollView>
      </View>
		)
	}
}

const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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

  }
});