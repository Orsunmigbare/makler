import React, { Component } from 'react';
import {Text, TextInput, View, ImageBackground, ScrollView, Image} from 'react-native'
import Styles from '../styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class HostelCard extends Component {
    render() {
        let {style, hide_mark_favorite, press_handler} = this.props;
        return (
            
            <View style={[Styles.hostel_card, style || null]} elevation={2}>
                <TouchableWithoutFeedback onPress={press_handler}>
                <ImageBackground style={[Styles.hostel_card_image]} source={require('../../assets/images/house_image.png')}>
                   {!hide_mark_favorite
                    &&  
                    <Image 
                    source = {require('../../assets/icons/favorites-heart.png')}
                    style = {Styles.hostel_card_favorite}
                   />
                   }
                    <View style={[Styles.image_overlay]}></View>
                </ImageBackground>
               <View>
                <ScrollView contentContainerStyle={[Styles.flex_row]} style={[ Styles.hostel_card_tag_container]}>
                 <Text style={[Styles.hostel_card_tag]}> New </Text>
                 <Text style={[Styles.hostel_card_tag]}> Borehole </Text>
                 <Text style={[Styles.hostel_card_tag]}> Tiled </Text>
                </ScrollView>
                </View>
                <View style={[Styles.flex_row, Styles.justify_content_space_between, Styles.hostel_card_avatar_container]}>
                <Text style={Styles.price_tag}> $ 150,000</Text>
                 <View style={[Styles.flex_row, Styles.align_items_center]}>
                <Text style={[Styles.hostel_card_avatar_name]}> -Posh </Text>
                <Image style={Styles.hostel_card_avatar} source={require('../../assets/images/user1.png')}/>
                </View>
                </View>
                <Text style={Styles.hostel_card_data_text}> Two Bedroom Apartment</Text>
                <Text style={Styles.hostel_card_data_text}> 5 Chi-Ben Street, LA New York</Text>
                </TouchableWithoutFeedback>
            </View>
           
        );
    }
}

export default HostelCard;