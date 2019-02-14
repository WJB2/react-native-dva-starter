import React, {Component} from 'react'; 
import {StyleSheet, View, Text,ScrollView,TouchableOpacity,Image} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,SearchBar,NoticeBar,InputItem } from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';

const ListItem = List.Item;

class TechnicalScreen extends Component {

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"在线报修系统"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <SearchBar defaultValue="" placeholder="客户名称/编码" />

                <ScrollView>
                    
                    <View style={styles.cardContainer} >
                    <Card>
                    <Card.Header title={(
                        <Text>2018-01-01</Text>
                    )}/>
                    <Card.Body>
                        <InputItem>分类:</InputItem>
                        <InputItem>型号:</InputItem>
                        <InputItem>故障现象:</InputItem>
                        <InputItem>处理方法:</InputItem>
                    </Card.Body>
                    </Card>
                    </View>
    
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


export default TechnicalScreen;