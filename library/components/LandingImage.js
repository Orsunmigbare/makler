import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, ImageBackground, Animated, Dimensions} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles';
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground)
class LandingImage extends Component {
    render() {
        let {animated_height} = this.props;
        return (
           <AnimatedImageBackground  style = {[Styles.landing_image ]} source={require('../../assets/images/landing.png')}>  
           <View style={Styles.image_overlay}>
           </View>
           
           </AnimatedImageBackground>
        );
    }
}

export default LandingImage;