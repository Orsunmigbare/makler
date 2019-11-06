import React, { Component } from 'react';
import {View,Text, ScrollView } from 'react-native'
import Styles from '../../library/styles';
import Header from '../../library/components/Header';
import SingleChat from '../../library/components/SingleChat'
import messagesStyles from '../../library/styles/messagesStyles';

class Messages extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    render() {
        return (
            <>
            <Header title=  {'Messages'} />
            <ScrollView style={[Styles.container, messagesStyles.parent_container, {flex: 1}]}>
                <View style={[messagesStyles.chat_list_container]}>
                <SingleChat handle_click = {()=>{this.props.navigation.navigate('Chat')}} />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                <SingleChat />
                </View>
            </ScrollView>
            </>
        );
    }
}

export default Messages;