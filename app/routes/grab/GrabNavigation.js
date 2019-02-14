import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import GrabScreen from './GrabScreen';
import GrabForm from './GrabForm';
import Cancel from './../../components/cancel/CancelView';
import Redeploy from './../../components/redeploy/Redeploy';

const GrabNavigation = createStackNavigator({
    GrabScreen:{
        screen:GrabScreen,
    },
    GrabForm: {
        screen: GrabForm,
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

export default GrabNavigation;