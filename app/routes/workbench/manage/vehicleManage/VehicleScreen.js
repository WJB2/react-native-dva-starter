import React,{Component} from 'react';
import {StyleSheet,View,Text,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import {List,DatePicker,WingBlank,WhiteSpace} from '@ant-design/react-native';
import AddButton from '../../../../components/addbutton/AddButton';
import NavBar from './../../../../components/navbar/NavBar';
const ListItem=List.Item;

class VehicleScreen extends React.Component{

    // static navigationOptions=({navigation})=>{
    //     return {
    //         headerTitle:'车辆管理',
    //         headerRight:(
    //             <TouchableOpacity onPress={()=>{navigation.navigate('VehicleManageForm')}}>
    //                 <AddButton  />
    //             </TouchableOpacity>
    //         ),
    //     };
    // };

    render(){
        return(
            <View style={styles.container}>
                <NavBar
                    title={"车辆管理"}
                    navigation={this.props.navigation}
                    pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}
                    right={(<AddButton  />)}
                    pressRight={()=>this.props.navigation.navigate('VehicleManageForm')}
                />
                <List>
                <DatePicker
                    value={new Date()}
                    mode="date"
                    format="YYYY-MM-DD"
                >
                    <ListItem arrow="horizontal">请选择开始时间</ListItem>
                </DatePicker>
                <DatePicker
                    value={new Date()}
                    mode="date"
                    format="YYYY-MM-DD"
                >
                    <ListItem arrow="horizontal">请选择结束时间</ListItem>
                </DatePicker>
                </List>
                
                <View style={styles.message}><Text>使用公里数为:0KM</Text></View>
                <WingBlank>
                <View style={{height:150}}>
                <View style={styles.detailCard}>
                    <View style={styles.tablePrev}><Text>12/17 2018</Text></View>
                    <View style={styles.tableMain}>
                        <View style={{borderBottomWidth:1,borderColor:'#000',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1,borderRightWidth:1,borderColor:'#000',}}><Text style={{textAlign:'center'}}>出工前公里数/时间</Text></View>
                            <View style={{flex:1}}><Text style={{textAlign:'center'}}>出工后公里数/时间</Text></View>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:'#000',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <View style={{flex:1,borderRightWidth:1,borderColor:'#000',}}><Text style={{textAlign:'center'}}>100km 08:00:00</Text></View>
                            <View style={{flex:1}}><Text style={{textAlign:'center'}}>暂无暂无</Text></View>
                        </View>
                        <View style={{flex:1}}><Text>使用公里数 暂无</Text></View>
                    </View>
                </View>
                </View>
                </WingBlank>
            </View>
        )
    }
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#E4E4E4'
    },
    message:{
        height:30,
        backgroundColor:"#E4E4E4"
    },
    detailCard:{
        height:80,
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#000',
    },
    tablePrev:{
        width:50,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        fontSize:50,
    },
    tableMain:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderColor:'#000',
    }
});

export default VehicleScreen;