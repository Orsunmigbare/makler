import React, { Component } from 'react';
import { Text, View, Image, TouchableWithoutFeedback, TextInput} from 'react-native';
import Styles from '../styles';
import {normalize, colors} from '../styles';


class Header extends Component {
    render() {
        
        let {icon,title,style,icon_click_handler} = this.props;
        return (
            <View style={[Styles.justify_content_space_between, Styles.flex_row, Styles.header]} elevation={2}>
            <View style={[Styles.flex_row, Styles.align_items_center]}>
           <TouchableWithoutFeedback
           onPress={icon_click_handler || null}
           ><Image 
            source = {icon || require('../../assets/icons/tab-drawer.png')}
            style = {[Styles.tab_drawer, style]}
            />
            </TouchableWithoutFeedback> 
            <Text style={Styles.header_text}> {title} </Text>
            </View>
            </View>
          
        );
    }
}

export class HeaderInput extends Component{
    render() {    
        let {icon,title,style,icon_click_handler, placeholder, value, editable} = this.props;
        return (
            <View elevarion={2} style={[Styles.justify_content_space_between, Styles.flex_row, Styles.header]}>
            <View style={[Styles.flex_row, Styles.align_items_center]}>
           <TouchableWithoutFeedback
           onPress={icon_click_handler || null}
           ><Image 
            source = {icon || require('../../assets/icons/tab-drawer.png')}
            style = {[Styles.tab_drawer, style]}
            />
            </TouchableWithoutFeedback> 
            </View>
             <TextInput editable={editable === undefined ? true : false} value={value || null} style={[Styles.header_input]} selectionColor={'#50A1FF'} placeholder={placeholder} /> 
             <Image 
              source = {require('../../assets/icons/search-cancel.png')}
              style= {[Styles.header_input_image]}
             />
            </View>
          
        );
    }
}

export default Header;