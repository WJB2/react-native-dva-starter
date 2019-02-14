import React from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import {Card, WingBlank,List,InputItem,Button,WhiteSpace} from '@ant-design/react-native';
import {createForm} from 'rc-form';
import NavBar from './../../../../components/navbar/NavBar';
class MaintainSupply extends React.PureComponent{

    static navigationOptions={
        title:'接单'
    }

    handleConfirm(){//点击确认工单
        console.log('点击了确认工单');
        Alert.alert(
            '客户名称',
            '联系电话',
            [
                {text:'否',onPress:()=>{console.log('取消')}},
                {text:'是',onPress:()=>{console.log('确定')}}
            ]
        );
    }

    handleCancel(){//点击取消工单
        console.log('点击了取消工单');
        this.props.navigation.navigate('GrabCancel');
    }

    handleRedeploy(){//订单转派
        console.log('点击了转派工单');
        this.props.navigation.navigate('GrabRedeploy');
    }

    render(){

        const {getFieldProps}=this.props.form;

        return(
            <View style={styles.container}>
                <NavBar title={"接单"} navigation={this.props.navigation} />
                    <Card>
                         
                        <Card.Body>
                            <View>
                            <List>
                                <InputItem
                                {...getFieldProps('equipCode')}
                                >设备编号:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >工单种类:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >客户名称:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >客户地址:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('visualAdress')}
                                >设备分类:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >品牌:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('failDescription')}
                                >型号: </InputItem>
                               
                                <InputItem
                                {...getFieldProps('linkMan')}
                                >接单时间:</InputItem>

                                <InputItem
                                {...getFieldProps('phone')}
                                >问题描述:</InputItem>

                                <InputItem
                                {...getFieldProps('phone')}
                                >手机号:</InputItem>

                                <InputItem
                                {...getFieldProps('phone')}
                                >开单金额:</InputItem>
                                
                            </List>
                            </View>
                        </Card.Body>
                    </Card>
                    <Button type="primary" onPress={()=>{this.props.navigation.navigate('MaintainForm')}}>保存</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    cardFooterWrapper:{
        height:40
    },
    cardFooter: {
        height:200,
        flex:1,
        flexDirection:'row',
        paddingBottom:10
    }
});

export default createForm()(MaintainSupply);
