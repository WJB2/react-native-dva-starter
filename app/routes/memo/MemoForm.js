import React from 'react';
import {Text,View,StyleSheet,Alert} from 'react-native';
import {Card, WingBlank,List,InputItem,Button,WhiteSpace} from '@ant-design/react-native';
import {createForm} from 'rc-form';
import NavBar from './../../components/navbar/NavBar';

class MemoForm extends React.PureComponent{

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

                <NavBar title={"添加备忘录"} navigation={this.props.navigation}/>

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
                                >标题:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >备忘录信息:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >未完成事项:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >完成说明:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('visualAdress')}
                                >公开:</InputItem>
                                
                                
                            </List>
                            </View>
                        </Card.Body>
                    </Card>
                    <Button type="primary" onPress={()=>{this.props.navigation.navigate('Result',{
                        title:'memo'
                    })}}>提交</Button>
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

export default createForm()(MemoForm);
