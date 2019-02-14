import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {WingBlank,Card,List,InputItem,Button, WhiteSpace,Alert,Modal} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
class ManageScreen extends React.Component{


    handleRedeploy(){
        Modal.alert('确认移交', '紧急提示！', [
            { text: "否", onPress: () => console.log('cancel'), style: 'cancel' },
            { text: '是', onPress: () => console.log('ok') },
        ]);
    }

    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"单据管理"} navigation={this.props.navigaion} pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>
            <WhiteSpace></WhiteSpace>
            <WingBlank size="lg">
            <List>
                <Card>
                    <Card.Header
                        title={(
                            <InputItem>客户名称:</InputItem>
                        )}>
                    </Card.Header>
                    <Card.Body>
                        <InputItem style={{width:100}}>工单种类:</InputItem>
                        <InputItem>开单金额:</InputItem>
                        <InputItem>时间:</InputItem>
                        <InputItem>状态:</InputItem>
                    </Card.Body>
                    <Card.Footer
                        extra={
                            <Button type="primary" style={{height:30,width:80,marginLeft:30}} onPress={
                                ()=>this.handleRedeploy()
                            }>移交</Button>
                        }>
                    </Card.Footer>
                </Card>
            </List>
            </WingBlank>
            </View>
        )
    }
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E4E4E4"
    }
});

export default ManageScreen;