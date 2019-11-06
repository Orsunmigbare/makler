import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TextInput, ImageBackground} from 'react-native';
import Styles from '../styles';
import {normalize, colors} from '../styles';
import { ScrollView } from 'react-native-gesture-handler';

export default class HostelCarousel extends Component {
    render(){
        return(
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={true} style={[Styles.hostel_carousel]}>
                <ImageBackground  style = {Styles.hostel_carousel_image} source={require('../../assets/images/landing.png')}>  
                    <View style={Styles.image_overlay}>
                    </View>
                </ImageBackground>
                <ImageBackground  style = {Styles.hostel_carousel_image} source={require('../../assets/images/landing.png')}>  
                    <View style={Styles.image_overlay}>
                    </View>
                </ImageBackground>
                <ImageBackground  style = {Styles.hostel_carousel_image} source={require('../../assets/images/landing.png')}>  
                    <View style={Styles.image_overlay}>
                    </View>
                </ImageBackground>
            </ScrollView>
        )
    }
}