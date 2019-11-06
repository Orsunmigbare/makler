import React, { Component } from 'react';
import {Animated ,Dimensions} from 'react-native'

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

class Animations extends Component {
    static HomeScroll = (y,$this)=>{
        let {searchRadius,landingHeight,searchWidth, scrollValue} = $this.state;
         $this.setState({
             searchRadius : scrollValue.interpolate({
                 inputRange: [0 , scrollValue],
                 outputRange: [22, 0]
             }),
            landingHeight: scrollValue.interpolate({
                 inputRange: [0 , scrollValue],
                 outputRange: [ SCREEN_WIDTH * 0.29, 60]
            }),
            searchWidth: scrollValue.interpolate({
                inputRange: [0 , scrollValue],
                outputRange: [ 0 ,  SCREEN_WIDTH]
            })
         })
    }
}

export default Animations;