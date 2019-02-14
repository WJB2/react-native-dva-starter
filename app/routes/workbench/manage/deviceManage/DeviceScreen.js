import React, {Component} from 'react'; 
import {StyleSheet, View, Text,ScrollView,TouchableOpacity,Image} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,SearchBar,NoticeBar,InputItem } from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';

const ListItem = List.Item;

class DeviceScreen extends Component {

    viewDetail(){
        console.log('查看细节');
        this.props.navigation.navigate('DeviceForm');
    }

    render(){
        return (
            <View style={styles.container}>
                <NavBar title={"设备管理"} navigation={this.props.navigation} pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <SearchBar defaultValue="" placeholder="搜索" />

                <ScrollView>
                    <TouchableOpacity onPress={()=>{this.viewDetail()}}>
                    <View style={styles.cardContainer} >
                    <Card>
                    <Card.Header title={(
                        <InputItem>设备编码:</InputItem>
                    )}/>
                    <Card.Body>
                        <InputItem>客户名称:</InputItem>
                        <InputItem>客户地址:</InputItem>
                        <InputItem>科室门牌:</InputItem>
                        <InputItem>分类:</InputItem>
                        <InputItem>品牌:</InputItem>
                        <InputItem>型号:</InputItem>
                    </Card.Body>
                    </Card>
                    </View>
                    </TouchableOpacity>
    
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer:{
        margin:20,
    },
    workOrder:{
        backgroundColor:'skyblue',
        marginLeft:10,
        marginRight:10,
    }
});


export default DeviceScreen;