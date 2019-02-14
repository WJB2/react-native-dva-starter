import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import MaintainScreen from './MaintainScreen';
import MaintainForm from './MaintainForm';
import Cancel from './../../../../components/cancel/CancelView';
import Redeploy from './../../../../components/redeploy/Redeploy';
import MaintainReport from './MaintainReport';
import MaintainSupply from './MaintainSupply';

const MaintainNavigation = createStackNavigator({
    MaintainScreen:{
        screen:MaintainScreen,
    },
    MaintainForm: {
        screen: MaintainForm,
    },
    Cancel:{
        screen:Cancel,
    },
    Redeploy:{
        screen:Redeploy,
    },
    MaintainReport:{
        screen:MaintainReport,
    },
    MaintainSupply:{
        screen:MaintainSupply,
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default MaintainNavigation;