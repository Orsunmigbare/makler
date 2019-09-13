import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, ImageBackground} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles';

class LandingImage extends Component {
    render() {
        return (
           <ImageBackground  style = {Styles.landing_image} source={require('../../assets/images/landing.png')}>  
           <View style={Styles.image_overlay}>
           </View>
           
           </ImageBackground>
        );
    }
}

export default LandingImage;