import React, { Component } from 'react';
import { Text, View, FlatList } from 'react-native';

export default class Component5 extends Component {

    constructor() {
        super();
        this.myList = [{
            key: '1',
            name: 'Lincoln'
        }];
    }

    showListItem(obj) {
        console.log(obj.item);
        return <Text>
                 { obj.item.title }
               </Text>
    }

    componentWillMount() {
        fetch("http://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                this.myList = response;
            })
    }

    render() {
        return <FlatList
         renderItem={ (itemInfo) =>
          {return this.showListItem(itemInfo)} } 
         data={ this.myList }>
               </FlatList>
    }

}