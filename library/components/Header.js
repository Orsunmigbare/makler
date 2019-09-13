import React, { Component } from 'react';
import { Text, TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from '../styles';
import {normalize, colors} from '../styles';

class Header extends Component {
    render() {
        let {icon,title,style} = this.props;
        return (
            <View style={[Styles.justify_content_space_between, Styles.flex_row, Styles.header]} elevation =  {2}>
            <View style={[Styles.flex_row, Styles.align_items_center]}>
            <Image 
            source = {icon || require('../../assets/icons/tab-drawer.png')}
            style = {[Styles.tab_drawer, style]}
            />

            <Text style={Styles.header_text}> {title} </Text>
            </View>

            </View>
          
        );
    }
}

export default Header;