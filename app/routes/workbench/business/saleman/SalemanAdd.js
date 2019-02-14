import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {InputItem,TextareaItem,List,Checkbox,ImagePicker,Button} from '@ant-design/react-native';

import NavBar from './../../../../components/navbar/NavBar';

const CheckboxItem=Checkbox.CheckboxItem;

const ListItem=List.Item;

class SalemanAdd extends Component{


    render(){
        return(
            <View style={styles.container}>

                <NavBar title={"添加指派员"} navigation={this.props.navigaion} />

            <ScrollView>
            <List>
                <InputItem>指定技术员(接单人):</InputItem>
                <ListItem>工单种类:</ListItem>
                <CheckboxItem>安装</CheckboxItem>
                <CheckboxItem>维修</CheckboxItem>
                <CheckboxItem>送货</CheckboxItem>
                <InputItem>一次性派单数量:</InputItem>
                <InputItem>指定客户:</InputItem>
                <InputItem>电话:</InputItem>
                <InputItem>工单说明:</InputItem>
                <InputItem>故障描述:</InputItem>
               
                <Button type="primary">保存</Button>
                </List>
                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({

});

export default SalemanAdd;