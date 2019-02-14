/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Alert
} from 'react-native';
import Barcode from 'react-native-smart-barcode';
import TimerEnhance from 'react-native-smart-timer-enhance';
 
class App extends Component{
    //构造方法
    constructor(props) {
        super(props);
        this.state = {
            viewAppear: false,
        };
    }

    componentWillMount(){
        console.log("componentWillMount");
        console.log(this.state.viewAppear);
    }

    componentDidMount() {
        console.log("componentDidMount");
        console.log(this.state.viewAppear);
        this.setState({
            viewAppear:true,
        })
        // //启动定时器
        // this.timer = setTimeout(
        //     () => this.setState({viewAppear: true}),
        //     250
        // );
    }
    //组件销毁生命周期
    componentWillUnmount() {
        // //清楚定时器
        // this.timer && clearTimeout(this.timer);
    }

    _onBarCodeRead = (e) => {
        // console.log(`e.nativeEvent.data.type = ${e.nativeEvent.data.type}, e.nativeEvent.data.code = ${e.nativeEvent.data.code}`)
        this._stopScan();
        Alert.alert("二维码", e.nativeEvent.data.code, [
            {text: '确认', onPress: () => this._startScan()},
        ])
    };

    _startScan = (e) => {
        this._barCode.startScan()
    };

    _stopScan = (e) => {
        this._barCode.stopScan()
    }
    render() {
        return (
            <View style={{flex: 1}}>
                {this.state.viewAppear ?
                    <Barcode 
                        style={{flex: 1}} 
                        ref={component => this._barCode = component}
                        onBarCodeRead={this._onBarCodeRead}/>
                    : null
                }
            </View>
        )
    }
}
 
export default TimerEnhance(App);