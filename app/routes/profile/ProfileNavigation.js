import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import ProfileScreen from './ProfileScreen';
import ProfileBill from './ProfileBill';
import ProfileMessage from './ProfileMessage';
import ProfilePassword from './ProfilePassword';
import ProfileMap from './../../components/map/CustomMapView';

const ProfileNavigation = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
    },
    ProfileBill:{
        screen:ProfileBill
    },
    ProfileMessage:{
        screen:ProfileMessage
    },
    ProfilePassword:{
        screen:ProfilePassword
    },
    Map:{
        screen:ProfileMap
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default ProfileNavigation;
