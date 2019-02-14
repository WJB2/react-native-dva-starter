import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import WorkBenchNavigation from '../../workbench/WorkBenchNavigation';
import ProfileNavigation from '../../profile/ProfileNavigation';
import GrabNavigation from '../../grab/GrabNavigation';
import BulletinNavigation from '../../bulletin/BulletinNavigation';

const HomeScreen = createBottomTabNavigator({
    Bulletin:{
        screen:BulletinNavigation,
        navigationOptions:{
            tabBarLabel:'公告栏',
            tabBarIcon:({tintColor})=>{
                return <Text style={{color:tintColor,fontFamily:'iconfont',fontSize:20}}>&#xe629;</Text>
            }
        }
    },
    Grab: {
        screen:GrabNavigation,
        navigationOptions: {
            tabBarLabel: '抢单',
            tabBarIcon:({ tintColor })=>{
                return <Text style={{color:tintColor,fontFamily:'iconfont',fontSize:20}}>&#xe6cb;</Text>
            }
        }
    },
    Workbench: {
        screen:WorkBenchNavigation,
        navigationOptions: {
            tabBarLabel: '工作台',
            tabBarIcon:({ tintColor })=>{
                return <Text style={{color:tintColor,fontFamily:'iconfont',fontSize:20}}>&#xe692;</Text>
            }
        }
    },
    Profile: {
        screen:ProfileNavigation,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon:({ tintColor, style })=>{
              return <Text style={{color:tintColor,fontFamily:'iconfont',fontSize:20}}>&#xe605;</Text>
            }
        }
    }
}, {
    initialRouteName:'Workbench'
},{
    navigationOptions: ({navigation})=>({
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            iconStyle: {
                fontSize: 24,
            },
        }
    })
});

export default HomeScreen;
