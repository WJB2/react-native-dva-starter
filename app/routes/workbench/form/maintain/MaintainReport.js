import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {InputItem,TextareaItem,List,Checkbox,ImagePicker,Button} from '@ant-design/react-native';

const CheckboxItem=Checkbox.CheckboxItem;
import NavBar from './../../../../components/navbar/NavBar';
const ListItem=List.Item;

class MaintainReport extends Component{

    static navigationOptions={
        title:'保养抄表'
    }

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"保养抄表"} navigation={this.props.navigation} />
            <ScrollView>
            <List>
                <InputItem>设备编码:</InputItem>
                <InputItem>故障设备:</InputItem>
                <ListItem>解决情况:</ListItem>
                <CheckboxItem>已解决</CheckboxItem>
                <CheckboxItem>未解决</CheckboxItem>
                <ListItem>是否更新配件:</ListItem>
                <CheckboxItem>是</CheckboxItem>
                <CheckboxItem>否</CheckboxItem>
                <InputItem>维修地点:</InputItem>
                <InputItem>现场:</InputItem>
                <InputItem>带回:</InputItem>
                <ListItem>故障现场:</ListItem>
                <TextareaItem rows={5}/>
                <ListItem>故障处理方法:</ListItem>
                <TextareaItem rows={5}/>
                <ListItem>具体处理方法:</ListItem>
                <InputItem>维修金额:</InputItem>
                <InputItem>积分:</InputItem>
                <InputItem>收款方式:</InputItem>
                <ListItem>照片上传:</ListItem>
                <ImagePicker />
                <Button type="primary" onPress={()=>{
                    this.props.navigation.navigate('Result',{
                        title:'report'
                    });
                }}>提交</Button>
                </List>
                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{

    }
});

export default MaintainReport;