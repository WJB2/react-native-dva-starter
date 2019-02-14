import React,{Component} from 'react';
import {Text,View,Animated} from 'react-native';
// import Camera from 'react-native-camera';
import NavBar from './../navbar/NavBar';
export default class ScannerCodeScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      firstLoad: true,
      top: new Animated.Value(0),
      isSigned: false
    }
    /** object */
    this.resultUrl = null
    /** function */
    this.onBarCodeRead = this.onBarCodeRead.bind(this)
    this.interval = null
  }

  componentDidMount () {
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      this.onFocus()
    }
    if (this.props.isFocused && !nextProps.isFocused) {
      this.onBlur()
    }
  }

  onFocus () {
    this.props.toggleTabBarAction(false)
    /** 获取视频、现场首页信息 */
    if (this.state.firstLoad) {
      this.setState({ firstLoad: false })
    }
    /** 定时器触发动画 */
    const that = this
    this.interval =
      setInterval(function () {
        Animated.timing(that.state.top, {
          toValue: 1,
          duration: 2200
        }).start(() => that.setState({ top: new Animated.Value(0) }))
      }, 2260)
  }

  onBlur () {
    /** 清除定时任务 */
    clearInterval(this.interval)
  }

  getQueryString (url, name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = url.substr(1).match(reg)
    if (r != null) {
      return unescape(r[2])
    }
    return null
  }

  onBarCodeRead (e) {
    /** 避免多次提交 */
    console.log(e)
    if (!this.resultUrl || this.resultUrl !== e.data) {
      if (e.data.indexOf('http://www.baidu.com/') !== 0) {
        this.props.toastAction('请扫描正确的二维码')
      } else {
        this.resultUrl = e.data
        const id = this.getQueryString(e.data, 'id')
        this.props.navigation.navigate('applicationMessage', { receiver: id })
        this.resultUrl = null
      }
    }
  }

  barcodeReceived (e) {
    console.log('Barcode: ' + e.data)
    console.log('Type: ' + e.type)
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
        <NavBar title={"扫描"} navigation={this.props.navigation}/>
        <View>
          {/* <Camera
            ref={(cam) => {
              this.camera = cam
            }}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            style={{ width, height, marginTop: 40 }}
            aspect={Camera.constants.Aspect.fill}
          /> */}
          <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}>
            <View style={{ height: (height - px2dp(600)) / 2, backgroundColor: 'black', opacity: 0.5 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
              <View style={{ height: px2dp(500), width: (width - px2dp(500)) / 2, backgroundColor: 'black', opacity: 0.5 }} />
              <View style={{ height: px2dp(500), width: px2dp(500) }} >
                <View style={{ position: 'absolute', left: 0, top: 0 }}>
                  <View style={{ height: 2, width: px2dp(60), backgroundColor: '#37b44a' }} />
                  <View style={{ height: px2dp(60), width: 2, backgroundColor: '#37b44a' }} />
                </View>
                <View style={{ position: 'absolute', right: 1, top: -1, transform: [{rotate: '90deg'}] }}>
                  <View style={{ height: 2, width: px2dp(60), backgroundColor: '#37b44a' }} />
                  <View style={{ height: px2dp(60), width: 2, backgroundColor: '#37b44a' }} />
                </View>
                <View style={{ position: 'absolute', left: 1, bottom: -1, transform: [{rotateZ: '-90deg'}] }}>
                  <View style={{ height: 2, width: px2dp(60), backgroundColor: '#37b44a' }} />
                  <View style={{ height: px2dp(60), width: 2, backgroundColor: '#37b44a' }} />
                </View>
                <View style={{ position: 'absolute', right: 0, bottom: 0, transform: [{rotateZ: '180deg'}] }}>
                  <View style={{ height: 2, width: px2dp(60), backgroundColor: '#37b44a' }} />
                  <View style={{ height: px2dp(60), width: 2, backgroundColor: '#37b44a' }} />
                </View>
                <Animated.View style={{ width: px2dp(500),
                  height: px2dp(2),
                  backgroundColor: '#37b44a',
                  transform: [{
                    translateY: this.state.top.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, px2dp(500)]
                    })
                  }]}} />
              </View>
              <View style={{ height: px2dp(500), width: (width - px2dp(500)) / 2, backgroundColor: 'black', opacity: 0.5 }} />
            </View>
            <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.5, alignItems: 'center' }} >
              <Text style={{ fontSize: FontSize(28), color: Colors.C5, marginTop: px2dp(40) }}>将二维码放入框内，即可自动扫描</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
