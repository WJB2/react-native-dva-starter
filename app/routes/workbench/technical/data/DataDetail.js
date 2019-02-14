import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';

import NavBar from './../../../../components/navbar/NavBar';

class BulletinDetail extends React.Component{

    render(){
        return(
            <View style={styles.container}>

                <NavBar title={"技术资料"} navigation={this.props.navigation }/>

                <Text>【技术资料】测试技术资料一</Text>
                <Text>2018.05.25</Text>
                <Text>
                    我是谁
                </Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    }
})

export default BulletinDetail;