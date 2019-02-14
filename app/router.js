import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';
import {
    createStore,
    applyMiddleware,
    combineReducers,
} from 'redux';
import {
    reduxifyNavigator,
    createReactNavigationReduxMiddleware,
    createNavigationReducer,
} from 'react-navigation-redux-helpers';
import { Provider, connect } from 'react-redux';

import MainLayout from './routes/main/MainLayout';

export const navigationReducer = createNavigationReducer(MainLayout);

const appReducer = combineReducers({
    router: navigationReducer,
});

export const routerMiddleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.router,
);

const App = reduxifyNavigator(MainLayout, "root");

const StateToProps = (state) => ({
    state: state.router,
  });
const AppWithNavigationState = connect(StateToProps)(App);

function getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null
    }
    const route = navigationState.routes[navigationState.index]
    if (route.routes) {
      return getActiveRouteName(route)
    }
    return route.routeName
  }

@connect(models => ({
    globalModel:models['global'],
}))
class Router extends Component {

      componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.backHandle)
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
      }
    
      backHandle = () => {
        const currentScreen = getActiveRouteName(this.props.router)
        if (currentScreen === 'Login') {
          return true;
        }
        if (currentScreen !== 'Home') {
          this.props.dispatch(NavigationActions.back())
          return true;
        }
        return false;
      }
    
      render() {

        const { app, dispatch, router } = this.props
    
        return <MainLayout dispatch={dispatch} state={router} />
        
      }
}

export default Router;