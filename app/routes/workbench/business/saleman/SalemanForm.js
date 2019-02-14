import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,TouchableOpacity} from 'react-native';
import {InputItem,TextareaItem,List,Checkbox,ImagePicker,Button} from '@ant-design/react-native';

const CheckboxItem=Checkbox.CheckboxItem;

import AddButton from '../../../../components/addbutton/AddButton';

import NavBar from './../../../../components/navbar/NavBar';

const ListItem=List.Item;

class SalemanForm extends Component{

    static navigationOptions=({navigation})=>{
        return {
            headerTitle:'业务员派单',
            headerRight:(
                <TouchableOpacity onPress={()=>{navigation.navigate('SalemanAdd')}}>
                    <AddButton  />
                </TouchableOpacity>
            ),
        };
    };

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"业务员派单"} navigation={this.props.navigation}/>
            <ScrollView>
            <List>
                <InputItem>派单人:</InputItem>
                <InputItem>接单人:</InputItem>
                <InputItem>客户名称:</InputItem>
                <InputItem>客户地址:</InputItem>
                <InputItem>联系电话:</InputItem>
                <InputItem>故障描述:</InputItem>
                <InputItem>发单时间:</InputItem>
                <InputItem>接单时间:</InputItem>
                <ListItem>工单种类:</ListItem>
                <CheckboxItem>安装</CheckboxItem>
                <CheckboxItem>维修</CheckboxItem>
                <CheckboxItem>送货</CheckboxItem>
                <InputItem>工单状态:</InputItem>
                <InputItem>派单方式:</InputItem>
                <InputItem>支付状态:</InputItem>
                <InputItem>完工时间:</InputItem>
                <InputItem>单据状态:</InputItem>
                <InputItem>开单金额:</InputItem>
                <InputItem>工单说明:</InputItem>
                <InputItem>赏金:</InputItem>
                <InputItem>积分:</InputItem>
           
                <Button type="primary" onPress={()=>{
                    this.props.navigation.navigate('Result',{
                        title:'rent'
                    });
                }}>保存</Button>
                </List>
                </ScrollView>
            </View>
        );
    }
}

const styles=StyleSheet.create({

});

export default SalemanForm;