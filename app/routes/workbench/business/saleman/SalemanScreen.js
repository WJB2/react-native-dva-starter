import React from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import {Card, WingBlank,List,InputItem,Button,WhiteSpace,Modal} from '@ant-design/react-native';
import {createForm} from 'rc-form';

import NavBar from './../../../../components/navbar/NavBar';

class SalemanScreen extends React.PureComponent{

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

    handleIn(){
        this.props.navigation.navigate('SalemanForm');
    }

    handleCancel(){//点击取消工单
        console.log('点击了取消工单');
        this.props.navigation.navigate('Cancel');
    }

    handleRedeploy(){//订单转派
        Modal.alert('确认转抢派', '紧急提示！', [
            { text: "否", onPress: () => console.log('cancel'), style: 'cancel' },
            { text: '是', onPress: () => console.log('ok') },
        ]);
    }

    handleSend(){
        this.props.navigation.navigate('Redeploy');
    }

    render(){

        const {getFieldProps}=this.props.form;

        return(
            <View style={styles.container}>
                <NavBar title={"业务员派单"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>
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
                                {...getFieldProps('customName')}
                                >客户名称:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >客户地址:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >时间:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >接单人:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('failDescription')}
                                >工单种类: </InputItem>
                               
                                 
                                <InputItem
                                {...getFieldProps('phone')}
                                >状态:</InputItem>
                                
                            </List>
                            </View>
                        </Card.Body>
                        <Card.Footer style={styles.cardFooterWrapper}
                        content={
                            (<View style={styles.cardFooter}>
                                <Button type="warning" size="small" style={{width:80,height:30,marginRight:20}} onPress={
                                    ()=>this.handleIn()
                                }>进入公单</Button>
                                <Button type="primary" size="small" style={{width:80,height:30,marginRight:20}} onPress={
                                    ()=>this.handleRedeploy()
                                }>转抢派</Button>
                                <Button type="ghost" size="small" style={{width:80,height:30}} onPress={
                                    ()=>this.handleSend()
                                }>派技术员</Button>
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

export default createForm()(SalemanScreen);
