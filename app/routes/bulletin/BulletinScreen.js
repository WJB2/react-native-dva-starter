import React, {Component} from 'react'; 
import {StyleSheet, View, Text,ScrollView,TouchableOpacity} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,SearchBar,NoticeBar } from '@ant-design/react-native';

const ListItem = List.Item;

import NavBar from './../../components/navbar/NavBar';

class BulletinScreen extends Component {

    viewDetail(){
        this.props.navigation.navigate('BulletinDetail');
    }

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"公告栏"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <SearchBar defaultValue="" placeholder="搜索" />

                <NoticeBar onPress={() => alert('click')} >公告列表</NoticeBar>

                <ScrollView>
                    <TouchableOpacity onPress={
                        ()=>{this.viewDetail()}
                    } >
                    <View style={styles.cardContainer} >
                    <Card>
                    <Card.Header title="【公告】测试公告一"/>
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


export default BulletinScreen;