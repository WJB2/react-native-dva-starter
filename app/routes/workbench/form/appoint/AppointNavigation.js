import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import AppointScreen from './AppointScreen';
import AppointForm from './AppointForm';
import Cancel from './../../../../components/cancel/CancelView';
import Redeploy from './../../../../components/redeploy/Redeploy';

const AppointNavigation=createStackNavigator({
    AppointScreen:{
        screen:AppointScreen,
    },
    AppointForm: {
        screen: AppointForm,
    },
    Cancel:{
        screen:Cancel,
    },
    Redeploy:{
        screen:Redeploy,
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default AppointNavigation;