// displays photos from camera roll in grid

import React, { Component } from 'react';
import {
    Image, View, ListView, StyleSheet, Text, TouchableHighlight, AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import SelectedPhoto from './SelectedPhoto';


class ViewPhotos extends Component {



    static camroll = {
        title: 'Photo Listing',
    };

    state = {
        ds: new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }),
        showSelectedPhoto: false,
        uri: ''
    }
    
    renderRow(rowData) {
        const { uri } = rowData.node.image;
        const { navigate } = this.props.navigation;
        return (
            <TouchableHighlight
                onPress={() => navigate('PhotoPreview')}>
                <Image
                    source={{ uri: rowData.node.image.uri }}
                    style={styles.image} />
            </TouchableHighlight>
        )
    }

    render(){
        const { showSelectedPhoto, uri } = this.state;
        
        return (
            <View style={{ flex: 1}}>
                <View style={{ alignItems: 'center', marginTop: 15}}>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick a photo </Text>
                </View>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.ds.cloneWithRows(this.props.photoArray)}
                    renderRow={(rowData) => this.renderRow(rowData)}
                    enableEmptySections={true} />
            </View>
        );
    }
}

const camroll = StackNavigator({
    PhotoListing: {screen: ViewPhotos },
    PhotoPreview: {screen: SelectedPhoto }
})

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    image: {
        width: 110,
        height: 120,
        marginLeft: 20,
        marginTop: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#979797'
    }
})

export default camroll;