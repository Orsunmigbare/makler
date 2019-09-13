import React, { Component } from 'react';
import {Text, TextInput, View, Image} from 'react-native';
import Styles from '../../library/styles'
import {normalize, colors} from '../../library/styles';
import LandingImage from '../../library/components/LandingImage'
import homeStyles from '../../library/styles/homeStyles.js';
import NewListingsCard from '../../library/components/NewListingsCard';
import { ScrollView } from 'react-native-gesture-handler';
import HostelCard from '../../library/components/HostelCard';

class Home extends Component {
    static navigationOptions = {
        headerStyle :{
            display: 'none'
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={[Styles.container, homeStyles.parent_container]}>
                
                <LandingImage />
                
                <View elevation = {4} style={[homeStyles.search, Styles.justify_content_space_between, Styles.flex_row, Styles.align_items_center]}> 
                    <View style={[Styles.flex_row, Styles.align_items_center]}>
                        <Image style = {[homeStyles.search_icon]} source={require('../../assets/icons/search.png')} />
                         <Text style={homeStyles.search_text}> Search </Text>
                    </View>
                    <Image style = {[homeStyles.settings_icon]} source={require('../../assets/icons/settings.png')} />
                 </View>
              
                
                <View style={[homeStyles.section]}>
                    <Text style={[homeStyles.section_heading]}> 25 New Listings</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[Styles.flex_row, Styles.justify_content_space_evenly,homeStyles.listings_card_content_container]}  style = {[ homeStyles.listings_card_container]}>
                        <NewListingsCard/>
                        <NewListingsCard/>
                    </ScrollView>
                </View>

                <View style={[homeStyles.section]}>
                    <Text style={[homeStyles.section_heading]}> All </Text>
                    <HostelCard/>
                    <HostelCard/>
                    <HostelCard/>
                </View>
           
            </ScrollView>
        );
    }
}

export default Home;