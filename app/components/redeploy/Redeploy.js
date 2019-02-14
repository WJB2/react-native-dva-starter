import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,TextareaItem,InputItem} from '@ant-design/react-native';

const ListItem = List.Item;

import NavBar from './../navbar/NavBar';

class GrabRedeploy extends Component {

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"转派"} navigation={this.props.navigation}/>

                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <InputItem>请选择技术员</InputItem>
                    <Button type="primary" onPress={()=>{this.props.navigation.goBack()}}>提交</Button>
                </WingBlank>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});


export default GrabRedeploy;