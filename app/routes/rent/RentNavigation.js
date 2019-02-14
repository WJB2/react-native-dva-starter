import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import RentScreen from './RentScreen';
import RentDetail from './RentDetail';
import Result from '../../components/result/ResultView';

const RentNavigation = createStackNavigator({
    RentScreen:{
        screen:RentScreen,
    },
    RentDetail:{
        screen:RentDetail,
    },
    Result:{
        screen:Result
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default RentNavigation;