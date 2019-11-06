import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from '../styles';
import {LinearGradient} from 'expo-linear-gradient';


export class IncomingMessages extends Component{
    render(){
        return(
            <View style={Styles.incoming_messages_container}>
                <Image
                source = {require('../../assets/images/incoming-avatar.png')}
                style = {Styles.incoming_message_avatar}
                />
                <LinearGradient
                 colors={['#0F1969', '#544491']}
                 start={[1,1]}
                 end={[0,0]}
                 style={ [Styles.incoming_message]}>
                <Text style={[Styles.incoming_message_text]}> 
                You can’t  </Text>
                </LinearGradient>
                <LinearGradient
                 colors={['#0F1969', '#544491']}
                 start={[1,1]}
                 end={[0,0]}
                 style={ [Styles.incoming_message]}>
                <Text style={[Styles.incoming_message_text]}> 
                You can’t have it at that price.. let’s negotiate the most important part of the deal
                 </Text>
                </LinearGradient>
            </View>
        )
    }
}

export class OutgoingMessages extends Component{
    render(){
        return(
            <View style={[Styles.outgoing_messages_container]}>
                <LinearGradient
                 colors={['#2DC9EB', '#21CDD2']}
                 start={[0,0]}
                 end={[1,1]}
                 style={ [Styles.outgoing_message]}>
                <Text style={[Styles.outgoing_message_text]}> 
                You can’t have it at that price.. let’s negotiate the most important part of the deal
                 </Text>
                </LinearGradient>
                <LinearGradient
                 colors={['#2DC9EB', '#21CDD2']}
                 start={[0,0]}
                 end={[1,1]}
                 style={ [Styles.outgoing_message]}>
                <Text style={[Styles.outgoing_message_text]}> 
                You can’t have it at that price.. let’s negotiate the most important part of the deal
                 </Text>
                </LinearGradient>
            </View>
        )
    }
}

