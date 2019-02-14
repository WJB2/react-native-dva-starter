import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import BulletinScreen from './BulletinScreen';
import BulletinDetail from './BulletinDetail';

const BulletionNavigation = createStackNavigator({
    BulletinScreen:{
        screen:BulletinScreen,

    },
    BulletinDetail:{
        screen:BulletinDetail
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default BulletionNavigation;