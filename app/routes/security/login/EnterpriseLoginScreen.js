import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { createForm } from 'rc-form';
import NavBar from './../../../components/navbar/NavBar';
import { InputItem, WingBlank, WhiteSpace, Card, Button,List,Toast} from '@ant-design/react-native';

class EnterpriseLoginForm extends Component {

    handleSubmit(){
        console.log("a")
        this.props.form.validateFields((err,values)=>{
            if(!err){
                Toast.info('登陆成功');
                console.log(values);
                console.log(this.props);
                this.props.navigation.navigate('UserLogin')
            }
        })
    }

    render() {

        const {getFieldProps}=this.props.form;

        return (
            <View>
                <NavBar title={"企业登录"} navigation={this.props.navigation } />
                <List>
                <WingBlank size={'lg'}>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入企业编码'}
                        {...getFieldProps('enterpriseCode')}
                    >企业编码:</InputItem>
                    <WhiteSpace size='lg' />
                    <InputItem 
                        placeholder={'请输入密码'} 
                        type={'password'}
                        {...getFieldProps('password')}
                    >输入密码:</InputItem>
                    <WhiteSpace size='lg' />
                    <Button style={styles.loginButton} type={'primary'} onPress={
                        ()=>{this.handleSubmit()}
                    }>登录</Button>
                </WingBlank>
                </List>
            </View>
        );
    }
}



const LoginFormWrapper = createForm()(EnterpriseLoginForm);

class EnterpriseLoginScreen extends Component {

    static navigationOptions={
        title:'企业登录'
    };

    render() {
        return (
            <View style={styles.container}>
                <LoginFormWrapper {...this.props} />
                <Button type="primary" onPress={()=>{this.props.navigation.navigate('Home')}}>直接登录主页</Button>
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

export default EnterpriseLoginScreen;