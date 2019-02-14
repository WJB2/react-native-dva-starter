import React from 'react';
import { StyleSheet, Text, View,AppRegistry } from 'react-native';
import dva, {connect} from './utils/dva';
import global from './models/global';
import Router, {routerMiddleware, navigationReducer} from './router';

const app = dva({
  initialState: {},
  models: [global],
  extraReducers: {
    router: navigationReducer
  },
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onError', e)
  },
});

const Application = app.start(<Router />)

AppRegistry.registerComponent('myfirstproject', () => Application)

export default Application;