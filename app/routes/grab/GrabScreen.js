import React, {Component} from 'react'; 
import {StyleSheet, View, Text} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button} from '@ant-design/react-native';

const ListItem = List.Item;

import NavBar from './../../components/navbar/NavBar';

class GrabScreen extends Component {

    render(){
        return (
            <View style={styles.container}>

                <NavBar title={"新工单"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <WingBlank>
                    <Card>
                    <Card.Header
                        title="出门请核对物料"
                    />
                    <Card.Body>
                        <View style={styles.workOrder}>
                            <Text>你有新的工单,请注意查收</Text>
                            <WingBlank>
                                <Button type="primary" onPress={
                                    ()=>{this.props.navigation.navigate('GrabForm')}
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


export default GrabScreen;