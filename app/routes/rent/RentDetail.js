import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {InputItem,TextareaItem,List,Checkbox,ImagePicker,Button} from '@ant-design/react-native';
import NavBar from './../../components/navbar/NavBar';
const CheckboxItem=Checkbox.CheckboxItem;

const ListItem=List.Item;

class RentDetail extends Component{

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"租机报表"} navigation={this.props.navigation}/>
            <ScrollView>
            <List>
                <InputItem>上次抄表时间:</InputItem>
                <InputItem>上期读数:</InputItem>
                <InputItem>本期彩色读数:</InputItem>
                <InputItem>上期读数:</InputItem>
                <InputItem>本期黑色读数:</InputItem>
                <InputItem>上期读数:</InputItem>
                <InputItem>本期黑色A3读数:</InputItem>
                <InputItem>上期读数:</InputItem>
                <InputItem>本期彩色A3读数:</InputItem>
                <InputItem>上期读数:</InputItem>
                <InputItem>本期扫描读数:</InputItem>
                <InputItem>抄表月数:</InputItem>
                <InputItem>本期扫描读数:</InputItem>
                <TextareaItem rows={5}/>
                <ListItem>是否完成保养:</ListItem>
                <CheckboxItem>是</CheckboxItem>
                <CheckboxItem>否</CheckboxItem>
                <ListItem>拍照上传:</ListItem>
                <ImagePicker />
                <ListItem>上次图片:</ListItem>
                <ImagePicker />
                <Button type="primary" onPress={()=>{
                    this.props.navigation.navigate('Result',{
                        title:'rent'
                    });
                }}>添加</Button>
                </List>
                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        paddingBottom:100
    }
});

export default RentDetail;