import React,{Component} from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { Result, WhiteSpace,Button ,WingBlank} from '@ant-design/react-native';

import getResultText from './../../enum/getResultText';

import NavBar from './../navbar/NavBar';

class ResultView extends React.Component{

    render(){
        return(
            <View style={styles.container}>

                <NavBar navigation={this.props.navigation} title={`${getResultText.getTitleText(this.props.navigation.getParam('title'))}成功！`}/>

                {/* <Result
                    img={<Icon name="check-circle" size={55} style={{ color: '#1F90E6' }} />}
                    title={`${getResultText.getTitleText(this.props.navigation.getParam('title'))}成功！`}
                /> */}

                <WingBlank><Button type="primary" onPress={()=>{this.props.navigation.goBack()}}>返回</Button></WingBlank>

            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    }
});

export default ResultView;