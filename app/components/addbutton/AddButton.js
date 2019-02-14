import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { Result, Icon, WhiteSpace } from '@ant-design/react-native';

class AddButton extends React.Component{
    render(){
   
        return(
            <View style={styles.container}>
                <Text style={{fontSize:30,color:'#E4E4E4',textAlign:'center',position:'relative',bottom:10}}>+</Text>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        width:30,
        height:30,
        borderRadius:10,
        borderWidth:3,
        borderColor:"#E4E4E4",
        backgroundColor:"transparent",
        marginRight:20
    }
});

export default AddButton;