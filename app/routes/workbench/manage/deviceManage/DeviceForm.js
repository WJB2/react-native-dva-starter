import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Card,WingBlank,WhiteSpace,InputItem,ImagePicker,Button,List} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
class DeviceForm extends React.Component{

    // static navigationOptions=({navigation})=>{
    //     return{
    //         headerTitle:'添加设备'
    //     }
    // }
    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"添加设备"} navigation={this.props.navigation} />
            <WhiteSpace></WhiteSpace>
            <WingBlank>
                <List>
                <Card>
                    <Card.Header title="设备管理"></Card.Header>
                    <Card.Body>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>客户名称:</InputItem>
                        <InputItem>客户地址:</InputItem>
                        <InputItem>设备分类:</InputItem>
                        <InputItem>品牌:</InputItem>
                        <InputItem>型号:</InputItem>
                        <InputItem>科室门牌:</InputItem>
                        <InputItem>资产编号:</InputItem>
                        <InputItem>备注:</InputItem>
                        <WhiteSpace />
                        <WingBlank><Button type="primary" onPress={()=>{
                            this.props.navigation.navigate('Result',{
                                title:'device'
                            });
                        }}>添加</Button></WingBlank>
                    </Card.Body>
                </Card>
                </List>
            </WingBlank>
            </View>
        )
    }
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E4E4E4",
    }
});

export default DeviceForm;
