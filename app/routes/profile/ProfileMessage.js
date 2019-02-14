import React,{Component} from 'react';
import {StyleSheet,View ,Text} from 'react-native';
import {List, WingBlank,Button} from '@ant-design/react-native';
import NavBar from './../../components/navbar/NavBar';
const ListItem=List.Item;

class ProfileMessage extends React.Component{
    render(){
        return(
            <View style={styles.container}>

                <NavBar title={"个人信息"} navigation={this.props.navigation}/>

                <ListItem arrow="horizontal">更改手机号</ListItem>
                <WingBlank size={"lg"}>
                    <Button type={"primary"}>保存</Button>
                </WingBlank>
            </View>
        );
    }
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    }
});

export default ProfileMessage;