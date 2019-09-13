import React, { Component } from 'react';
import {Text, TextInput, View, Image, ScrollView} from 'react-native';
import Styles from '../../library/styles'
import Header from '../../library/components/Header';


class Filter extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={[Styles.container, {flex: 1}]}>
                <Header icon={require('../../assets/icons/arrow-back.png')} title={'Filter'}/>
            </ScrollView>
        );
    }
}

export default Filter;