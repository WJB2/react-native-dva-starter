import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,DatePicker} from '@ant-design/react-native';
import {createForm} from 'rc-form';
import NavBar from './../../components/navbar/NavBar';
const InputItem=List.Item;

class ProfileBill extends React.Component{
    render(){

        const {getFieldProps}=this.props.form;

        return(
            <View style={styles.container}>

                <NavBar title={"单据查询"} navigation={this.props.navigation}/>

            <ScrollView>
                 <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'blue', height: 110}}>
                        {/* <View ><Icon name={'assignment'} size={50}/></View> */}
                        <Text>7</Text>
                        <Text>已接工单</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'red', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>805</Text>
                        <Text>累计金额</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'yellow', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>20</Text>
                        <Text>累计积分</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'skyblue', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>0</Text>
                        <Text>累计积分2</Text>
                    </View>
                </View>
                <View style={styles.greySearch}>
                
                <List>
                    <DatePicker
                        value={new Date()}
                        mode="date"
                        minDate={new Date(2015, 7, 6)}
                        maxDate={new Date(2026, 11, 3)}
                        format="YYYY-MM-DD"
                    > 
                    <List.Item arrow="horizontal">选择开始时间</List.Item>
                    </DatePicker>
                    <DatePicker
                        value={new Date()}
                        mode="date"
                        minDate={new Date(2015, 7, 6)}
                        maxDate={new Date(2026, 11, 3)}
                        format="YYYY-MM-DD"
                    > 
                    <List.Item arrow="horizontal">选择结束时间</List.Item>
                    </DatePicker>
                    <InputItem >工单种类</InputItem>
                </List>
                <WingBlank size={"lg"}>
                <Card>
                        <Card.Header 
                            title="2018-12-27"
                        />
                        <Card.Body>
                            <View>
                            <List>
                                <InputItem
                                {...getFieldProps('equipCode')}
                                >接单时间:</InputItem>
                                <InputItem
                                {...getFieldProps('failEquip')}
                                >客户名称:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customName')}
                                >客户地址:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('customAddress')}
                                >工单种类:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('visualAdress')}
                                >设备:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('formInstruction')}
                                >开单金额:</InputItem>
                                
                                <InputItem
                                {...getFieldProps('failDescription')}
                                >积分1: </InputItem>
                               
                                <InputItem
                                {...getFieldProps('linkMan')}
                                >积分2:</InputItem>
                                
                            </List>
                            </View>
                        </Card.Body>
                </Card>
                </WingBlank>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    greySearch:{
        flex:4,
        backgroundColor:'#E4E4E4'
    }
});

export default createForm()(ProfileBill);