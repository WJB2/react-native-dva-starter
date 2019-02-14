import React,{Component} from 'react';
import {
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Color from './../../enum/ColorEnum';
import Images from './../../assets/steel.jpg';
import {phoneWidth, unitWidth, titleHeight, statusBarHeight} from "../../utils/AdapterUtils";

class NavBar extends React.Component{

    back(){
        if(this.props.pressLeft){
            this.props.pressLeft()
            return
        }
        this.props.navigation.goBack()
    }

    renderRight() {
        if (!this.props.right && !this.props.rightImage) {
            return <View style={TitleStyle.right}/>
        }
        return (
            <TouchableOpacity activeOpacity={1} style={TitleStyle.right}
                              onPress={() => {
                                  this.props.pressRight()
                              }}>
                {typeof this.props.right == 'object' ? (this.props.right) : (
                    <Text style={TitleStyle.rightText}>{this.props.right}</Text>
                )}
                {this.props.rightImage ? (
                    <Image style={TitleStyle.rightImage} source={this.props.rightImage}/>
                ) : (null)}
            </TouchableOpacity>
        )
    }

    render() {
        const {backgroundColor, titleColor} = this.props
        return (
            <View style={[TitleStyle.titleBar, backgroundColor ? {backgroundColor: backgroundColor} : null]}>
                <StatusBar
                    backgroundColor={this.props.statusBarBgColor || "transparent"}
                    barStyle={this.props.barStyle || 'light-content'}
                    translucent={true}/>
                <View style={TitleStyle.statusBar}/>

                <View style={TitleStyle.titleBarContent}>
                    {this.props.hideLeftArrow ? (
                        <View style={TitleStyle.left}/>
                    ) : (
                        <TouchableOpacity activeOpacity={1} onPress={this.back.bind(this)}
                                          style={TitleStyle.left}>
                            <Text style={{color:"#fff",fontFamily:'iconfont',fontSize:20}}>&#xe766;</Text>
                            <Text style={TitleStyle.leftText}>{this.props.left}</Text>
                        </TouchableOpacity>
                    )}
                    <View style={TitleStyle.middle}>
                        <Text numberOfLines={1}
                              style={[TitleStyle.middleTitle, titleColor ? {color: titleColor} : null]}>{this.props.title}</Text>
                    </View>
                    {this.renderRight()}
                </View>
            </View>
        );
    }

}

const TitleStyle = StyleSheet.create({

    titleBar: {
        width: phoneWidth,
        height: titleHeight,
        backgroundColor: Color.Blue,
    },
    titleBarContent: {
        flexDirection: 'row',
        height: titleHeight,
        alignItems: 'center',
        width: phoneWidth,
        justifyContent: 'space-between',
        height: titleHeight - statusBarHeight,
    },
    titleBarSearchContent: {
        flexDirection: 'row',
        height: titleHeight,
        alignItems: 'center',
        width: phoneWidth,
        height: titleHeight - statusBarHeight,
    },

    searchLeftIcon: {
        width: unitWidth * 30,
        height: unitWidth * 38,
        marginLeft: unitWidth * 24,
        marginRight: unitWidth * 15
    },
    searchLeftText: {
        width:unitWidth*140,
        fontSize: unitWidth * 30,
        color: "#ffffff",
    },

    searchBlock: {
        flexDirection: 'row',
        width: unitWidth * 500,
        height: unitWidth * 60,
        borderRadius: unitWidth * 30,
        backgroundColor: "white",
        alignItems: 'center',
        paddingLeft: unitWidth * 30,
        paddingRight: unitWidth * 30
    },

    searchIcon: {
        width: unitWidth * 40,
        height: unitWidth * 40,
        marginRight: unitWidth * 30
    },

    searchBarInput: {
        width: unitWidth * 350,
        height: unitWidth * 60,
        fontSize: unitWidth * 30,
        backgroundColor: 'transparent',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },


    left: {
        width: unitWidth * 180,
        height: titleHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: unitWidth * 10,
    },
    middle: {
        width: phoneWidth - unitWidth * 360,
        height: titleHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleTitle: {
        fontSize: unitWidth * 40,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },

    right: {
        width: unitWidth * 180,
        height: titleHeight,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: unitWidth * 30,
    },

    leftText: {
        fontSize: unitWidth * 30,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },

    rightText: {
        fontSize: unitWidth * 30,
        color: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightImage: {
        width: unitWidth * 60,
        height: unitWidth * 60,
        marginLeft: unitWidth * 5
    },

    titleLeftImage: {
        marginLeft: unitWidth * 5,

        color:'#fff'
    },

    homeTitleIcon: {
        width: unitWidth * 213,
        height: unitWidth * 52,
    },
    titleRightImage: {
        width: unitWidth * 65,
        height: unitWidth * 65,

    },
    statusBar:{
        width: phoneWidth,
        height: statusBarHeight,
        backgroundColor:'transparent'
    }
});
export default NavBar;
