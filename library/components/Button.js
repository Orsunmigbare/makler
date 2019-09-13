import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles'

class Button extends Component {
    render() {
        return (
            <View style={[Styles.submit_button, Styles.align_items_center, Styles.justify_content_center, {Width: '100%'}]}>
                   <Text style={[ Styles.butttontText]}>{this.props.text}</Text> 
            </View>
        );
    }
}

export default Button;