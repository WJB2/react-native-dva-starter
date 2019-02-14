import React, {Component} from 'react';
import {StyleSheet, View, Text,Image} from 'react-native';
import {NavigationActions} from  'react-navigation';
import {List, WhiteSpace, WingBlank, Card,Button} from '@ant-design/react-native';
const Dimensions=require('Dimensions');

const ListItem = List.Item;
import NavBar from './../../components/navbar/NavBar';
 
const ScreenWidth=Dimensions.get('window').width;

class ProfileScreen extends Component {

    componentDidMount(){
        console.log('页面被挂载');
        console.log(ScreenWidth);
    }

    render(){
        return (
            <View style={styles.container}>
                <NavBar title={"新工单"} navigation={this.props.navigation } pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>
                <View style={styles.header}>
                    <View style={styles.iconWrapper}>
                        {/* <Icon name={'person'} size={60} /> */}
                    </View>
                    <Text style={styles.headerText}>吴家宝</Text>
                </View>

                <View>
                    <Text style={styles.ServiceText}>业务信息</Text>
                </View>

                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'blue', height: 110}}>
                        {/* <View ><Icon name={'assignment'} size={50}/></View> */}
                        <Text>7</Text>
                        <Text>已接工单</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'red', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>805</Text>
                        <Text>累计金额</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'yellow', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>20</Text>
                        <Text>累计积分</Text>
                    </View>
                    <View style={{alignItems:'center',flex:1,backgroundColor:'skyblue', height: 110}}>
                        {/* <View><Icon name={'assignment'} size={50}/></View> */}
                        <Text>0</Text>
                        <Text>累计积分2</Text>
                    </View>
                </View>

                <List>
                    <ListItem disabled extra="" arrow="horizontal" onClick={()=>{
                        this.props.navigation.navigate('ProfileBill');
                    }}>单据查询</ListItem>
                    <View>
                        <Text style={styles.ServiceText}>更多操作</Text>
                    </View>
                    <ListItem disabled arrow="horizontal" onPress={()=>{
                        this.props.navigation.navigate('ProfileMessage');
                    }}>个人信息</ListItem>
                    <ListItem disabled arrow="horizontal" onPress={()=>{
                        this.props.navigation.navigate('ProfilePassword');
                    }}>修改密码</ListItem>
                     <ListItem disabled arrow="horizontal" onPress={()=>{
                        this.props.navigation.navigate('Map');
                    }}>查看地图</ListItem>
                </List>

                <WingBlank>
                <Button type="warning" onPress={()=>{
                    this.props.navigation.navigate('UserLogin')
                }}>退出</Button>
                </WingBlank>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor:'#fff',
      flex:1
    },
    header:{
        height:150,

    },
    iconWrapper:{
        width:60,
        height:60,
        backgroundColor:'#2483D0',
        borderRadius:10,
        marginLeft:(ScreenWidth-60)/2,
        marginTop:20
    },
    headerText:{
        marginLeft:(ScreenWidth-65)/2,
        marginTop:10
    },
    ServiceText:{

        backgroundColor:'#E4E4E4',
        height:40,
        fontSize:25,

    }

});


export default ProfileScreen;
