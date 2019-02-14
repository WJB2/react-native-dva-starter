import React, {Component} from 'react';
import {StyleSheet, View, Text,ScrollView,TouchableOpacity} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,SearchBar,NoticeBar } from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';

const ListItem = List.Item;

class DataScreen extends Component {

    viewDetail(){
        console.log('查看细节');
        this.props.navigation.navigate('DataDetail');
    }

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"技术资料"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <SearchBar defaultValue="" placeholder="搜索" />

                <NoticeBar onPress={() => alert('click')} >资料列表</NoticeBar>

                <ScrollView>
                    <TouchableOpacity onPress={
                        ()=>{this.viewDetail()}
                    } >
                        <View style={styles.cardContainer} >
                            <Card>
                                <Card.Header title="【技术资料】测试技术资料一"/>
                                <Card.Body>
                                    <View style={styles.workOrder}>
                                        <Text>
                                            你有新的工单,请注意查收
                                            你有新的工单,请注意查收
                                            你有新的工单,请注意查收
                                            你有新的工单,请注意查收
                                            你有新的工单,请注意查收
                                            你有新的工单,请注意查收
                                        </Text>
                                    </View>
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


export default DataScreen;