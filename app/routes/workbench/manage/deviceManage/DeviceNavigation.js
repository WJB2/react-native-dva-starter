import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import DeviceScreen from './DeviceScreen';
import DeviceForm from './DeviceForm';
import Result from '../../../../components/result/ResultView';

const DeviceNavigation = createStackNavigator({
    DeviceScreen:{
        screen:DeviceScreen,
    },
    DeviceForm:{
        screen:DeviceForm,
    },
    Result:{
        screen:Result,
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default DeviceNavigation;