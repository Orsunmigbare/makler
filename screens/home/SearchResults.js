import React, { Component } from 'react';
import {Text,View, Image, TouchableWithoutFeedback,ScrollView} from 'react-native';
import Styles from '../../library/styles'
import   { HeaderInput }  from '../../library/components/Header';
import searchResultsStyes from '../../library/styles/searchResultsStyes';
import HostelCard from '../../library/components/HostelCard';


export default class SearchResults extends Component{
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    render(){
        return(
            <ScrollView contentContainerStyle={[Styles.container]}>
               <HeaderInput icon={require('../../assets/icons/arrow-back.png')} value={'Obadore'}  editable={false} clickHanlder={()=>{this.props.navigation.goBack()}}/> 
               <View>
                <Text style={[searchResultsStyes.container_heading]}> All </Text>
                <HostelCard style={[searchResultsStyes.result]} />
                <HostelCard style={[searchResultsStyes.result]}/>
                <HostelCard style={[searchResultsStyes.result]}/>
                <HostelCard style={[searchResultsStyes.result]}/>
               </View>
            </ScrollView>
        )
    }
}