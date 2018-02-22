import React, {Component} from 'react';
import {Router, Stack, Scene}from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

//this is made to link both the login and signup page to the home screen but 
//'react-native-router-flux' doesnt seem to be importing

export default class Routes extends Component<{}> {
	render(){
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="signup" component={Signup} title="Register"/>
			    </Stack>
			</Router>
			)
	}
}
