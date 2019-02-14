import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import VehicleManageScreen from './VehicleScreen';
import VehicleManageForm from './VehicleForm';
import Result from '../../../../components/result/ResultView';
 
const ManageNavigation = createStackNavigator({
    VehicleManageScreen:{
        screen:VehicleManageScreen,
    },
    VehicleManageForm:{
        screen:VehicleManageForm
    },
    Result:{
        screen:Result
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default ManageNavigation;