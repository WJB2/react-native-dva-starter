import React from 'react';
import {Text,View,StyleSheet,Alert,TouchableOpacity} from 'react-native';
import {Card, WingBlank,List,InputItem,Button,WhiteSpace,Tabs} from '@ant-design/react-native';
import {createForm} from 'rc-form';
import NavBar from './../../../../components/navbar/NavBar';
class MaintainForm extends React.PureComponent{

    

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
                <NavBar title={"工单详情"} navigation={this.props.navigation} />
                <WingBlank size="lg">
                    <WhiteSpace />
                    <Card>
                        <Card.Header 
                            title="设备维修"
                        />
                        <Card.Body>
                            <View>
                            <List>
                                <InputItem
                                {...getFieldProps('equipCode')}
                                >设备编码:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >故障设备:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >客户名称:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >客户地址:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('visualAdress')}
                                >科室门牌:</InputItem>

                                 <InputItem
                                {...getFieldProps('visualAdress')}
                                >工单种类:</InputItem>

                                 <InputItem
                                {...getFieldProps('visualAdress')}
                                >分类:</InputItem>

                                 <InputItem
                                {...getFieldProps('visualAdress')}
                                >型号:</InputItem>

                                <InputItem
                                {...getFieldProps('linkMan')}
                                >接单时间:</InputItem>

                                <InputItem
                                {...getFieldProps('failDescription')}
                                >问题描述: </InputItem>

                                <InputItem
                                {...getFieldProps('failDescription')}
                                >工单说明: </InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >联系电话:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('linkMan')}
                                >开单金额:</InputItem>
                               
                                <InputItem
                                {...getFieldProps('phone')}
                                >工单状态:</InputItem>
                                
                            </List>
                            </View>
                        </Card.Body>
                        
                    </Card>
                    <WhiteSpace />
                    <Button type="primary" onPress={()=>{this.props.navigation.navigate('MaintainReport')}}>维修报告</Button>
                    <WhiteSpace />
                    <Card>
                        <Card.Header 
                            title="历史维修记录"
                        />
                        <Card.Body>
                            <View>
                            <List>
                                <InputItem
                                {...getFieldProps('equipCode')}
                                >时间:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >设备编码:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >故障现象:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >故障处理:</InputItem>
                                  
                            </List>
                            </View>
                        </Card.Body>
                        
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

export default createForm()(MaintainForm);
