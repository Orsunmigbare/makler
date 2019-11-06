import React, { Component } from 'react';
import {Text, TextInput, View, Image, ScrollView, Picker, KeyboardAvoidingView} from 'react-native';
import Styles from '../../library/styles'
import {HeaderInput} from '../../library/components/Header';
import searchStyles from '../../library/styles/searchStyles';



export default class Search extends Component {
    static navigationOptions= {
        headerStyle : {
            display: 'none'
        }
    }
    render(){
        return(
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style = {[{flex: 1}]}>
             <HeaderInput icon_click_handler={()=>{this.props.navigation.goBack()}} icon={require('../../assets/icons/arrow-back.png')} placeholder={'Search'}/>
            <ScrollView contentContainerStyle={[Styles.container, filterStyles.parent_container,{flex: 1} ]}>
          <View style={[searchStyles.section_container]}>
              <View style={[searchStyles.section]}>
                <Text style={[searchStyles.section_heading]}> Recent Searches</Text>
                <RecentSearchItem text={'Franklas Bus Stop'}/>
                <RecentSearchItem text={'Two Bedroom'}/>
                <RecentSearchItem text={'First Gate'}/>
              </View>
              <View style={[searchStyles.section]}>
                <Text style={[searchStyles.section_heading]}> Top Results</Text>
                <SearchResult text={'obadore'}/>
                <SearchResult  text={'Obawole Street'}/>
                <SearchResult text={'Obaakran Road'}/>
              </View>
          </View>
            </ScrollView>

            </KeyboardAvoidingView>
        )
    }
}


class RecentSearchItem extends Component{
    render(){
        let {text} = this.props
        return(
            <View style={[Styles.flex_row, searchStyles.search_item, Styles.align_items_center]}> 
                <Image 
                source = {require('../../assets/icons/search.png')}
                style={[searchStyles.search_item_icon]}
                />
                <Text style={[searchStyles.search_item_text]}> {text}</Text>
            </View>
        )
    }
}

class SearchResult extends Component{
    render(){
        let {text} = this.props
        return(
            <View style={[Styles.flex_row, searchStyles.search_item, Styles.align_items_center]}> 
                <Text style={[searchStyles.search_item_text,searchStyles.search_result_text ]}> {text}</Text>
            </View>
        )
    }
}