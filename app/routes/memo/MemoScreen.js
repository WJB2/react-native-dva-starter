import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,ScrollView} from 'react-native';
import { List,Toast,Grid, WhiteSpace,Button,Card,WingBlank } from '@ant-design/react-native';

import NavBar from './../../components/navbar/NavBar';
 
class MemoScreen extends React.Component{

    handleGridClick(e){
         
    }

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"备忘录"} navigation={this.props.navigation} pressLeft={()=>{this.props.navigation.navigate('WorkBenchScreen')}}/>

                <Image 
                    source={require('../../assets/steel.jpg')}
                    style={{height:150,width:400}}
                />
                <WhiteSpace></WhiteSpace>
                <WingBlank>
                    <Button type="primary" onPress={()=>{this.props.navigation.navigate('MemoForm')}}>添加备忘录</Button>
                <WhiteSpace></WhiteSpace>
                <Card>
                    <Card.Header title={(<Text>我是备忘录</Text>)} extra={(<Text>2018-11-15</Text>)}></Card.Header>
                    <Card.Body><Text>adweffasfps f大佛寺定父按时到达飞洒地方 发撒法吉萨覅偶的就是发动机【 
                        F KP发af案说法
                        凯撒【fksadfa</Text>
                    </Card.Body>
                </Card>
                </WingBlank>
                <ScrollView>
                <View>
                 
                </View>
                </ScrollView>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    todoList:{
        height:40,
        backgroundColor:'#E4E4E4',
        fontSize:20
    }
})

export default MemoScreen;