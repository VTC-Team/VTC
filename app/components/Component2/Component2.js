import React, {Component} from 'react';
import { AppRegistry, Text, View,StyleSheet} from 'react-native';

export default class Component2 extends Component {
  render() {
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.myText}>Component 2 stuff?!!</Text>
        </View>
        <View style={styles.container}>
        <View style={styles.v1}>
          <Text>View1</Text>
        </View>
        <View style={styles.v2}>
          <Text>View2</Text>
        </View>
        <View style={styles.v3}>
          <Text style={{color:'white'}}>View3</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: 'yellow'
  },
  myText: {
    color: 'red'
  },
  container: {
    flexDirection: 'row',
    height: 100
  },
  v1:{
    flex:1,
    backgroundColor:'red',
    padding:10
  },
  v2:{
    flex:1,
    backgroundColor:'green',
    padding:10
  },
  v3:{
    flex:1,
    backgroundColor:'black',
    padding:10
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
