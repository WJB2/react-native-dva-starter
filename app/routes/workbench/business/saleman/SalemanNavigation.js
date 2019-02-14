import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import SalemanScreen from './SalemanScreen';
import SalemanForm from './SalemanForm';
import SalemanAdd from './SalemanAdd';
import Redeploy from './../../../../components/redeploy/Redeploy';
import Cancel from './../../../../components/cancel/CancelView';

const SalemanNavigation = createStackNavigator({
    SalemanScreen:{
        screen:SalemanScreen,
    },
    SalemanForm: {
        screen: SalemanForm,
    },
    SalemanAdd:{
        screen:SalemanAdd,
    },
    Redeploy:{
        screen:Redeploy,
    },
    Cancel:{
        screen:Cancel
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default SalemanNavigation;