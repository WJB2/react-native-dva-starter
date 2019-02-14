import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import PublicScreen from './PublicScreen';
import Result from '../../../../components/result/ResultView';

const PublicNavigation = createStackNavigator({
    PublicScreen:{
        screen:PublicScreen,
    },
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default PublicNavigation;