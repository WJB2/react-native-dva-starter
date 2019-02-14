import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,TextareaItem} from '@ant-design/react-native';

import NavBar from './../navbar/NavBar';

const ListItem = List.Item;

class CancelView extends Component {

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"取消原因"} navigation={this.props.navigation}/>

                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <List>
                        <View style={{height:30,backgroundColor:'#E4E4E4',paddingLeft:10,paddingTop:5}}><Text>说明原因</Text></View>

                        <TextareaItem rows={4} placeholder="固定行数" />
                    </List>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onPress={()=>{
                        this.props.navigation.goBack();
                    }}>提交</Button>
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


export default CancelView;