import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class Button extends Component {
    render() {
        let {style, press_handler} = this.props
        return (
            <TouchableWithoutFeedback onPress={press_handler}>
            <View style={[Styles.submit_button, Styles.align_items_center, Styles.justify_content_center, {Width: '100%'}, style || null]}>
                   <Text style={[ Styles.butttontText]}>{this.props.text}</Text> 
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Button;