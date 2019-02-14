import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import ProjectScreen from './ProjectScreen';
import ProjectProgress from './ProjectProgress';
import ProjectForm from './ProjectForm';

const ProjectNavigation = createStackNavigator({
    ProjectScreen:{
        screen:ProjectScreen,
    },
    ProjectProgress:{
        screen:ProjectProgress,
    },
    ProjectForm:{
        screen:ProjectForm
    }
},{
    navigationOptions:({navigation})=>({
        header:null
    })
});

export default ProjectNavigation;