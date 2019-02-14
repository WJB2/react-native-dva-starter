import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import DataScreen from './DataScreen';
import DataDetail from './DataDetail';

const DataNavigation = createStackNavigator({
    DataScreen:{
        screen:DataScreen,

    },
    DataDetail:{
        screen:DataDetail
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default DataNavigation;