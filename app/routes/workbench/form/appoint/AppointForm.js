import React from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import {Card, WingBlank,List,InputItem,Button,WhiteSpace} from '@ant-design/react-native';
import {createForm} from 'rc-form';
import NavBar from './../../../../components/navbar/NavBar';
class AppointForm extends React.PureComponent{

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
        this.props.navigation.navigate('Cancel');
    }

    handleRedeploy(){//订单转派
        console.log('点击了转派工单');
        this.props.navigation.navigate('Redeploy');
    }

    render(){

        const {getFieldProps}=this.props.form;

        return(
            <View style={styles.container}>
                <NavBar title={"接单"} navigation={this.props.navigation} />
                <WhiteSpace />
                <WingBlank size="lg">
                    <Card>
                        <Card.Header 
                            title="设备安装"
                        />
                        <Card.Body>
                            <View>
                            <List>
                                <InputItem
                                {...getFieldProps('equipCode')}
                                >设备编码:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >故障设备1:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >客户名称:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >客户地址:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('visualAdress')}
                                >可视门牌:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >工单说明:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('failDescription')}
                                >故障描述: </InputItem>
                               
                                <InputItem
                                {...getFieldProps('linkMan')}
                                >联系人:</InputItem>
                                <InputItem
                                {...getFieldProps('phone')}
                                >联系电话:</InputItem>
                                
                            </List>
                            </View>
                        </Card.Body>
                        <Card.Footer style={styles.cardFooterWrapper}
                        content={
                            (<View style={styles.cardFooter}>
                                <Button type="warning" size="small" style={{width:80,height:30,marginRight:20}} onPress={
                                    ()=>this.handleCancel()
                                }>取消工单</Button>
                                <Button type="primary" size="small" style={{width:80,height:30,marginRight:20}} onPress={
                                    ()=>this.handleRedeploy()
                                }>工单转派</Button>
                                <Button type="ghost" size="small" style={{width:80,height:30}} onPress={
                                    ()=>this.handleConfirm()
                                }>确认工单</Button>
                            </View>)
                        }
                        >
                        </Card.Footer>
                    </Card>
                </WingBlank>
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

export default createForm()(AppointForm);
