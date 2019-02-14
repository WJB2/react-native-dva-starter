import React,{Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {List,InputItem,Button, WingBlank} from '@ant-design/react-native';
import NavBar from './../../components/navbar/NavBar';
class ProfilePassword extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"修改密码"} navigation={this.props.navigation}/>
            <WingBlank size="lg">
            <List>
                <InputItem>原密码:</InputItem>
                <InputItem>新密码:</InputItem>
                <InputItem>确认密码:</InputItem>
                <Button type="primary">保存</Button>
            </List>
            </WingBlank>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    }
});

export default ProfilePassword;