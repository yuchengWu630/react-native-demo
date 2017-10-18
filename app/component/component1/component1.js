import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';


export default class Component1 extends Component{
    //在构造函数中，初始化一些数据
    constructor(){
        super();
        //初始化状态，要在构造函数中
        this.state = {
            showName:true,
            nickName:'Jack'
        };
    }
    render(){
        return <View>
            <Text  style={styles.myText}>{
                this.state.showName
                ?this.state.nickName
                :'不显示名称'}
                </Text>
            <Text>This is our first component</Text>
            <Text>{this.props.myName}</Text>
        </View>
    }
}
    const styles = StyleSheet.create({
        myText:{
            color:'red',
            fontSize:30
        }
    });
