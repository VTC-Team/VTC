import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import { AppRegistry, Text, View, StyleSheet,TouchableHighlight,StatusBar,Image} from 'react-native';
import { Button } from 'react-native';
//import Login from '../pages/Login';

//import logo from '../images/logo.png';

export default class FirstPage extends Component {
  blah = () => {
    console.log("props is here");
    navigate("Login", {screen: "Login"})
  }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props, "props ahiyan che");
    return (
    <View style = {styles.container}>
    <Image
        style={{width:220, height:150}}
        source={require('../images/logo.png')}/>
    <View>
       <TouchableHighlight
          onPress={() => navigate("login", {screen: "Login"})}
          style={styles.button}>
          <Text
             style={styles.buttonText}>Login </Text>
       </TouchableHighlight>
       <TouchableHighlight
           onPress={() => navigate("createaccount", {screen: "Create Account"})}
           style={styles.button}>
           <Text
             style={styles.buttonText}>Sign Up </Text>
       </TouchableHighlight>
    </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000a12',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: "center",
        color: "#B1B1B1",
        marginTop: 120,
        marginRight: 50,
        marginLeft: 50,
        marginBottom: 40
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

AppRegistry.registerComponent('FirstPage', () => FirstPage);