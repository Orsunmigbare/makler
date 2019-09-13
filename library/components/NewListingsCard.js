import React, { Component } from 'react';
import {Text, TextInput, View, ImageBackground, Image} from 'react-native'
import Styles from '../styles';


class NewListingsCard extends Component {
    render() {
        return (
            <View style={[Styles.new_listings_card]} elevation ={2}>
            <ImageBackground style={[Styles.new_listings_card_image]} source={require('../../assets/images/house_image.png')}>
            <View style={[Styles.image_overlay]}></View>
            </ImageBackground>
            <View style={[Styles.flex_row, Styles.justify_content_space_between, Styles.listings_card_data]}>
            <Text style={Styles.price_tag}> $ 150,000</Text>
            <Image style={Styles.listings_card_data_avatar} source={require('../../assets/images/user1.png')}/>
            </View>
            <Text style={Styles.listings_card_data_text}> Two Bedroom Apartment</Text>
            <Text style={Styles.listings_card_data_text}> 5 Chi-Ben Street, LA New York</Text>
            </View>
        );
    }
}

export default NewListingsCard;