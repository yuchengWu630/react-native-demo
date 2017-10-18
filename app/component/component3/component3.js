import React,{Component} from 'react';
import {FlatList,View,Text} from 'react-native';

export default class Component3 extends Component{
    //初始化一个数组
    constructor(){
        super();
        this.list = [
            {key:'1',name:'Michael'},
            {key:'2',name:'TBag'},
            {key:'3',name:'Sara'},
            {key:'4',name:'Lincoln'},
            {key:'5',name:'Fincha'}
        ];
    }

    displayListItem(obj){
        console.log('it is a test');
        return <Text>{obj.item.name}</Text>

    }

    //将数组中的内容 渲染到列表中 
    //data属性是用来指定数组背后的数据源
    //renderItem属性是用来渲染的列表项的
    render(){
        return <FlatList 
        renderItem={(itemInfo)=>{return this.displayListItem(itemInfo)}} 
        data={this.list}>

        </FlatList>
    }
}