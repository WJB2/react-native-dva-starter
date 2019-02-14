import React,{Component} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Slider,TextareaItem,ImagePicker,WingBlank,WhiteSpace,Button } from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
class ProjectForm extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"项目表单"} navigation={this.props.navigation} />
                <View><Text>项目当前进度:</Text></View>
                <Slider style={{ marginLeft: 10, marginRight: 10 }}></Slider>
                <View><Text>项目当前进度说明:</Text></View>
                <TextareaItem /> 
                <View><Text>上传当前进度图片:</Text></View>
                <ImagePicker />
                <WhiteSpace />
                <WingBlank>
                    <Button type="warning">确认</Button>
                </WingBlank>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
});

export default ProjectForm;