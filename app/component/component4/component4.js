import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'

export default class Component4 extends Component {
    handlePress() {
        alert('my text  is pressed');
    }
    render() {
        return <View>
                 <TouchableOpacity onPress={ this.handlePress }>
                   <Text>test01</Text>
                 </TouchableOpacity>
                 <Text>test02</Text>
                 <Text>test03</Text>
               </View>

    }

}