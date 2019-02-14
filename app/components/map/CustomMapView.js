import React,{Component} from 'react';
import MapView from 'react-native-amap3d';
import {StyleSheet,View,Text} from 'react-native';
import {phoneHeight,phoneWidth} from "../../utils/AdapterUtils";
import NavBar from './../navbar/NavBar';
class CustomMapView extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <NavBar title={"地图"} navigation={this.props.navigation}/>
                <MapView
                  locationEnabled
                  onLocation={({nativeEvent}) =>
                    console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)}
                  style={styles.fillMap}
                  coordinate={{
                    latitude: 39.91095,
                    longitude: 116.37296,
                }}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  fillMap:{
    width:phoneWidth,
    height:phoneHeight
  }
})

export default CustomMapView;
