import React, {Component} from 'react'; 
import {StyleSheet, View, Text,ScrollView,TouchableOpacity,Image} from 'react-native';
import {List, WhiteSpace, WingBlank, Card, Button,SearchBar,NoticeBar,InputItem } from '@ant-design/react-native';
import NavBar from './../../../../components/navbar/NavBar';
const ListItem = List.Item;

class ProjectScreen extends Component {

    static navigationOptions=({navigation})=>{
        return {
            headerTitle:'工程管理',
        }
    };

    viewDetail(){
        console.log('查看细节');
        this.props.navigation.navigate('ProjectProgress');
    }

    render(){
        return (
            <View style={styles.container}>
                <NavBar title={"项目进度"} navigation={this.props.navigation} pressLeft={()=>this.props.navigation.navigate('WorkBenchScreen')}/>

                <SearchBar defaultValue="" placeholder="搜索" />

                <ScrollView>
                    <TouchableOpacity onPress={()=>{this.viewDetail()}}>
                    <View style={styles.cardContainer} >
                    <Card>
                    <Card.Header title={(
                        <InputItem>工程名称</InputItem>
                    )} extra={<Button type="primary" style={{height:30,width:80}}>进度</Button>}/>
                    <Card.Body>
                        <InputItem>项目名称:</InputItem>
                        <InputItem>时间:</InputItem>
                    </Card.Body>
                    </Card>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer:{
        margin:20,
    },
    workOrder:{
        backgroundColor:'skyblue',
        marginLeft:10,
        marginRight:10,
    }
});


export default ProjectScreen;