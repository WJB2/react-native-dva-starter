import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import { connect } from '../../utils/dva';

import UserLoginScreen from './../security/login/UserLoginScreen';
import EnterpriseLoginScreen from './../security/login/EnterpriseLoginScreen';
import ScanView from './../../components/scan/ScanView';
import HomeScreen from './home/HomeScreen';

const MainLayout = createStackNavigator({
    EnterpriseLogin:{
        screen:EnterpriseLoginScreen,
        navigationOptions:{
            header:null
        }
    },
    UserLogin: {
        screen: UserLoginScreen,
        navigationOptions:{
            header:null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions:{
            header:null
        }
    }
},{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#2483D0'
        }
    })
});

 

const RootStack=createStackNavigator({
    MainLayout:{
      screen:MainLayout,
      navigationOptions:{
        header:null,
      }
    },
    Scan:{
        screen:ScanView,
        navigationOptions:{
            header:null,
        }
    }
},{
    mode: 'modal',
    headerMode: 'none',
});

export default RootStack;
