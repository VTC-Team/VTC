import React, {Component} from 'react';
import {View, TextInput } from 'react-native';
import {Button} from 'react-native-elements';

class SearchBar extends Component{
	state={term:''};
	render(){
	/*const {containerStyle,
          searchTextStyle,
          buttonStyle
    } =styles;*/

    return(
    <View style={styles.containerStyle}>
    <TextInput 
    	style={styles.searchTextStyle}
    	underlineColorAndroid='rgba(0,0,0,0)'
      onChangeText={term=>this.setState({term})} //this sets state to term
      value={this.state.term}
    />
    <Button 
        buttonStyle={styles.buttonStyle}
        title="Search"
        onPress={() => this.props.onPressSearch(this.state.term)}
    />
    </View>

    	);
	}
}

const styles = {
  containerStyle:{
    flexDirection: 'row',
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    width:340,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingHorizontal:3,
    paddingVertical:2,
  },

  searchTextStyle:{
    flex:1,
    color: "white"
  },

  buttonStyle:{
  	backgroundColor:'#1c313a',
    height:30,
    marginBottom:3,
    marginTop:3,
    width:75,
    borderRadius: 20,
    marginVertical: 10,
    paddingVertical:2
  }
}

export default SearchBar;
