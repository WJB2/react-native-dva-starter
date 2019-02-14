import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import {Tabs,SearchBar,WingBlank,Card,InputItem,WhiteSpace,List} from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';

class PublicScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar title={"业务公开"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>
                <Tabs tabs={[{title:'员工动态'},{title:'未完成工单'}]}>
                    <View style={styles.containerDynamic}>
                        <View style={{flex:3,flexDirection:'row'}}>
                            <View style={styles.arrange}>
                                <Text>亚军名字(志超)</Text>
                                <View style={{width:50,height:70,backgroundColor:'red'}}></View>
                            </View>
                            <View style={styles.arrange}>
                                <Text>冠军名字(吴家宝)</Text>
                                <View style={{width:50,height:90,backgroundColor:'red'}}></View>
                            </View>
                            <View style={styles.arrange}>
                                <Text>季军名字(王兴铎)</Text>
                                <View style={{width:50,height:50,backgroundColor:'red'}}></View>
                            </View>
                        </View>
                        <View style={{flex:6,paddingLeft:10,paddingRight:10}}>

                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View >
                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.column}><Text >姓名</Text></View>
                                <View style={styles.column}><Text>未接单</Text></View>
                                <View style={styles.column}><Text>已取消</Text></View>
                                <View style={styles.column}><Text>已接单</Text></View>
                                <View style={styles.column}><Text>处理中</Text></View>
                                <View style={styles.column}><Text>已完成</Text></View>
                                <View style={styles.column}><Text>未解决</Text></View>
                            </View>

                        </View>
                    </View>
                    <View style={styles.containerDynamic}>
                        <ScrollView>
                            <WhiteSpace></WhiteSpace>
                            <WingBlank>
                                <List>
                                <Card>
                                    <Card.Header title={(
                                        <InputItem>设备维修:</InputItem>
                                    )}></Card.Header>
                                    <Card.Body>
                                        <InputItem>工单编号:</InputItem>
                                        <InputItem>客户名称:</InputItem>
                                        <InputItem>设备编码:</InputItem>
                                        <InputItem>分类:</InputItem>
                                        <InputItem>接单人:</InputItem>
                                        <InputItem>工单种类:</InputItem>
                                        <InputItem>工单状态</InputItem>
                                    </Card.Body>
                                </Card>
                                </List>
                            </WingBlank>
                        </ScrollView>
                    </View>
                </Tabs>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E4E4E4"
    },
    containerDynamic:{
        flex:1,
        backgroundColor:"#E4E4E4"
    },
    arrange:{
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    row:{
      flex:1,
      flexDirection:'row',
      height:20,
        borderColor:'#000',
        borderLeftWidth:1,
        borderTopWidth:1
    },
    column:{
        flex:1,
        alignItems:'center',
        borderColor:'#000',
        borderRightWidth:1,
        borderBottomWidth:1
    }
});

export default PublicScreen;