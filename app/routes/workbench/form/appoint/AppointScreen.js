import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
const ListItem = List.Item;

class AppointScreen extends Component {

    render(){
        return (
            <View style={styles.container}>
                <NavBar title={"新工单"} navigation={this.props.navigation} pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>
                <WingBlank>
                    <Card>
                    <Card.Header
                        title="出门请核对物料"
                    />
                    <Card.Body>
                        <View style={styles.workOrder}>
                            <Text>衢州机器猫信息技术公司</Text>
                            <Text>江干区</Text>
                            <WingBlank>
                                <Button type="primary" onPress={
                                    ()=>{this.props.navigation.navigate('AppointForm')}
                                }>点击查看详情</Button>
                            </WingBlank>
                        </View>
                    </Card.Body>
                    </Card>
                </WingBlank>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    workOrder:{
        backgroundColor:'skyblue'
    }
});


export default AppointScreen;