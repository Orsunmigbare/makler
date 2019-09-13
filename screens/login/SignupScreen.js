import React, { Component } from 'react';
import {View, Image} from 'react-native'
import Styles from '../../library/styles';

class SignupScreen extends Component {
    render() {
        return (
            <View style={[Styles.justify_content_space_evenly]}>
                <Image source={require('../../assets/logo.png')} style={[Styles.headingLogos]}/>
            </View>
        );
    }
}

export default SignupScreen;