import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import WorkBenchScreen from './WorkBenchScreen';
import AppointNavigation from './form/appoint/AppointNavigation';
import FormManageNavigation from './manage/formManage/ManageNavigation';
import VehicleNavigation from './manage/vehicleManage/VehicleNavigation';
import RentNavigation from '../rent/RentNavigation';
import DeviceNavigation from './manage/deviceManage/DeviceNavigation';
import ProjectNavigation from './manage/projectManage/ProjectNavigation';
import TechnicalScreen from './technical/document/TechnicalScreen';
import MemoNavigation from '../memo/MemoNavigation';
import MaintainNavigation from './form/maintain/MaintainNavigation';
import SalemanNavigation from './business/saleman/SalemanNavigation';
import BusinessNavigation from './business/public/PublicNavigation';
import DataNavigation from './technical/data/DataNavigation';

const WorkBenchNavigation=createStackNavigator({
    WorkBenchScreen:{
        screen:WorkBenchScreen,
        navigationOptions:{
            header:null
        }
    },
    AppointNavigation:{
        screen:AppointNavigation,
        navigationOptions:{
            header:null
        }
    },
    FormManageNavigation:{
        screen:FormManageNavigation,
        navigationOptions:{
            header:null
        }
    },
    VehicleManageNavigation:{
        screen:VehicleNavigation,
        navigationOptions:{
            header:null
        }
    },
    RentNavigation:{
        screen:RentNavigation,
        navigationOptions:{
            header:null
        }
    },
    DeviceNavigation:{
        screen:DeviceNavigation,
        navigationOptions:{
            header:null
        }
    },
    ProjectNavigation:{
        screen:ProjectNavigation,
        navigationOptions:{
            header:null
        }
    },
    TechnicalScreen:{
        screen:TechnicalScreen,
        navigationOptions:{
            header:null
        }
    },
    MemoNavigation:{
        screen:MemoNavigation,
        navigationOptions:{
            header:null
        }
    },
    MaintainNavigation:{
        screen:MaintainNavigation,
        navigationOptions:{
            header:null
        }
    },
    SalemanNavigation:{
        screen:SalemanNavigation,
        navigationOptions:{
            header:null
        }
    },
    BusinessNavigation:{
        screen:BusinessNavigation,
        navigationOptions:{
            header:null
        }
    },
    DataNavigation:{
        screen:DataNavigation,
        navigationOptions:{
            header:null
        }
    }
},{
    navigationOptions:({navigation})=>({
        headerStyle:{
            backgroundColor:'#2483D0',
        }
    })
});

export default WorkBenchNavigation;