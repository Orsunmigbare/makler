import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from '../styles'

export default class SingleChat extends Component {
    render(){
        let {handle_click} = this.props;
        return(
            <TouchableWithoutFeedback onPress = {handle_click}>
            <View style={[Styles.flex_row,Styles.align_items_center, Styles.chat_item]}>
             <View style = {[Styles.chat_image_container]}>
                <Image 
                 source = {require('../../assets/images/chat-avatar.png')}
                 style = {[Styles.chat_item_avatar]}
                />
                <Image 
                source = {require('../../assets/icons/chat-active.png')}
                style = {[Styles.chat_item_active]}
                />
             </View>
             <View style={Styles.justify_content_center ,Styles.chat_item_text_contanier,{flex: 1}}>
                <View style={[Styles.justify_content_space_between, Styles.flex_row]}>
                <Text style={[Styles.chat_item_name]}> Posh </Text>
                 <Text style={[Styles.chat_item_time]}> Just Now </Text>
                </View>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={[Styles.chat_item_message]}> You can't have it at that fsfdsfdb   s gf gfvsz price </Text>
             </View>
             </View>
            </TouchableWithoutFeedback>

        )
    }
}

