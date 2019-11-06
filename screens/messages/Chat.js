import React, { Component } from 'react';
import {View,Text, ScrollView ,Image, KeyboardAvoidingView} from 'react-native'
import Header from '../../library/components/Header'
import Styles from '../../library/styles';
import chatStyles from '../../library/styles/chatStyles';
import { IncomingMessages, OutgoingMessages } from '../../library/components/ChatMessage';
import { ChatInput } from '../../library/components/Input';



export default class Chat extends Component{
    static navigationOptions = {
        tabBarVisible : false
    }
    render(){
        return(
            <KeyboardAvoidingView behavior={'padding'} style={{flex: 1}}>
                 <Header icon={require('../../assets/icons/arrow-back.png')} title={'Posh'}  icon_click_handler={()=>{this.props.navigation.goBack()}}/>
            <ScrollView style={[Styles.container, {flex: 1}]}>
                <View style={[chatStyles.chats_container]}>
               <IncomingMessages />
               <OutgoingMessages />
               <IncomingMessages />
               <OutgoingMessages />
                </View>
            </ScrollView>
            <View style={[Styles.flex_row, Styles.justify_content_space_between, chatStyles.send_message_container, Styles.align_items_center]}>
                <Image 
                source={require('../../assets/images/incoming-avatar.png')}
                style = {[chatStyles.sender_avatar]}
                />
                <ChatInput placeholder = {'Type a message'} container_style={chatStyles.chat_input_container} />
                <Image 
                source={require('../../assets/icons/chat-camera.png')}
                style = {[chatStyles.camera_icon]}
                />
            </View>
            </KeyboardAvoidingView>
            )
    }
}