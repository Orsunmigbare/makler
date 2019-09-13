import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles'

class AuthButton extends Component {
    render() {
        let {icon} = this.props
        return (
            <View style={[Styles.auth_button, Styles.justify_content_center, Styles.align_items_center]} elevation ={2}>
             <Image source={icon} style={Styles.auth_icon}/>
            </View>
        );
    }
}

export default AuthButton;