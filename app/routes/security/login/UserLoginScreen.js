import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { createForm } from 'rc-form';
import NavBar from './../../../components/navbar/NavBar';
import { InputItem, WingBlank, WhiteSpace, Card, Button,Toast,List } from '@ant-design/react-native';
import {connect} from 'react-redux';

@connect(models=>({
    globalModel:models.global,
}))
class UserLoginForm extends Component {

    handleSubmit(){
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Toast.info('登陆成功');
                this.props.navigation.navigate('Home')
            }
        })
    }

    componentWillMount(){
        const {dispatch}=this.props;
        dispatch({
            type:'global/queryDictList',
            payload:{}
        })
    }

    componentDidMount(){
        console.log(this.props);
    }

    handleChangeTest(){

        const {dispatch}=this.props;
        dispatch({
            type:'global/updateState',
            payload:{
                test:"改变后的测试"
            }
        })
    }

    render() {

        const {getFieldProps}=this.props.form;

        const { globalModel }=this.props;

        const {test}=globalModel;

        return (
            <View>
                <NavBar title={"用户登录"} navigation={this.props.navigation } />
                <List>
                <WingBlank size={'lg'}>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入用户名'}
                        {...getFieldProps('username')}
                    >用户名</InputItem>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入密码'} 
                        type={'password'}
                        {...getFieldProps('password')}
                    >输入密码:</InputItem>
                    <WhiteSpace size='lg' />
                    <Button style={styles.login} type={'primary'} onPress={
                        ()=>{this.handleSubmit()}
                    }>登录</Button>
                    <Button style={styles.login} type={'primary'} onPress={
                        ()=>{this.handleChangeTest()}
                    }>{test}</Button>
                </WingBlank>
                </List>
            </View>
        );
    }
}

const LoginFormWrapper = createForm()(UserLoginForm);

class UserLoginScreen extends Component {

    static navigationOptions={
        title:'用户登录'
    };

    render() {
        return (
            <View style={styles.container}>
                <LoginFormWrapper {...this.props} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        borderRadius: 0,
    }
});

export default UserLoginScreen;