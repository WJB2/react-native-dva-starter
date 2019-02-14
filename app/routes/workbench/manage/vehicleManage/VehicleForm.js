import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Card,WingBlank,WhiteSpace,InputItem,ImagePicker,Button,List} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
class VehicleForm extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"车辆管理"} navigation={this.props.navigation} />
            <WhiteSpace></WhiteSpace>
            <WingBlank>
                <List>
                <Card>
                    <Card.Header title="车辆管理"></Card.Header>
                    <Card.Body>
                        <WingBlank><Button type="warning">公里数统计</Button></WingBlank>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>车牌号:</InputItem>
                        <InputItem>出工前公里数:</InputItem>
                        <InputItem>上传图片:</InputItem>
                        <InputItem>出工前时间:</InputItem>
                        <InputItem>照片上传:</InputItem>
                        <WhiteSpace />
                        <WingBlank><Button type="primary" onPress={()=>{
                            this.props.navigation.navigate('Result',{
                                title:'device'
                            });
                        }}>提交</Button></WingBlank>
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

export default VehicleForm;
