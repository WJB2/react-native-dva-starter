import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {Card,WingBlank,WhiteSpace,InputItem,ImagePicker,Button,List,Slider} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
class ProjectProgress extends React.Component{
    //
    // static navigationOptions=({navigation})=>{
    //     return{
    //         headerTitle:'项目进度'
    //     }
    // }
    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"项目进度"} navigation={this.props.navigation} />
            <View style={{height:50,backgroundColor:'#fff'}}><Text>进行中</Text></View>
            <View style={{height:100,backgroundColor:'#fff'}}><Text>项目名称:实施项目</Text></View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProjectForm')}>
            <WingBlank>
                <List>
                <Card>
                    <Card.Header title="任务内容:1号任务" extra={<View><Text>进行中</Text></View>}></Card.Header>
                    <Card.Body>
                        <Slider style={{ marginLeft: 10, marginRight: 10 }}/>
                        <WhiteSpace></WhiteSpace>
                        <InputItem>项目说明:</InputItem>
                        <ImagePicker />
                        <ImagePicker />
                    </Card.Body>
                </Card>
                </List>
            </WingBlank>
            </TouchableOpacity>
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

export default ProjectProgress;
