import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={styles.container}>
				<Image style={{width:170, height: 100}}
                	source={require('../images/logo.png')}/>
           		<Text style={styles.logoText}>Virtual Time Capsule</Text>
            </View>
		)
	}
}

const styles = StyleSheet.create({
 container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  },
  logoText : {
    marginVertical: 10,
    fontSize:28,
    color:'rgba(255, 255, 255, 0.7)'
  }
});