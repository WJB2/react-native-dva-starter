import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import FormManageScreen from './ManageScreen';
 

const ManageNavigation = createStackNavigator({
    FormManageScreen:{
        screen:FormManageScreen,
    },
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default ManageNavigation;