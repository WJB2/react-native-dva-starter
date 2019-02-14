import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import MemoScreen from './MemoScreen';
import MemoForm from './MemoForm';
import Result from './../../components/result/ResultView';

const MemoNavigation = createStackNavigator({
    MemoScreen:{
        screen:MemoScreen,
    },
    MemoForm:{
        screen:MemoForm,
    },
    Result:{
        screen:Result,
    }
     
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default MemoNavigation;