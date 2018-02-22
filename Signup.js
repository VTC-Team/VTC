import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';


//importing Actions
//seems  like this is not being imported because react native router flux 
//isnt supported??? not sure. May have to install packages for it to work
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component<{}>{
	//function for when clicking Sign in, it goes back to the sign in page
	goBack(){
		Actions.pop();
	}

	render(){
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account? </Text>
					<TouchableOpacity onPress={this.goBack}>
						<Text style={styles.signupButton}>Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#455a64',
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

}

});
