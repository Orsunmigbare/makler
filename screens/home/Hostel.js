import React, { Component } from 'react';
import {Text,View, Image, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Styles from '../../library/styles';
import Header from '../../library/components/Header';
import HostelCarousel from '../../library/components/HostelCarousel';
import hostelStyles from '../../library/styles/hostelStyles';
import Button from '../../library/components/Button';
import NewListingsCard from '../../library/components/NewListingsCard';
import MapView from 'react-native-maps';

export default class Hoatel extends Component{
    render(){
        return(
            <>
            <ScrollView   style={[hostelStyles.container]}  contentContainerStyle={[ hostelStyles.content_container]}>
                <HostelCarousel />
                <LandingDetails />
                <Description />
                <Details />
                <Features/>
                <MapContainer />
                <Agent navigation={this.props.navigation}/>
                <SimilarAds navigation={this.props.navigation}/>
            </ScrollView>
            <FixedBottom />
            
            </>
        )
    }
}

class LandingDetails extends Component {
    render(){
        return(
            <View style={[hostelStyles.landing_details,]} elevation={3}>
                <View style={[hostelStyles.landing_favorites_cont]} elevation={5}>
                <Image
                source = {require('../../assets/icons/favorites-heart.png')}
                style = {[hostelStyles.landing_favorites_icon]}
                />
                </View>
                <View style ={[Styles.flex_row, hostelStyles.landing_details_new_price_cont]}>
                    <Text style={[hostelStyles.landing_details_new]}> NEW </Text>
                    <Text style={[hostelStyles.landing_details_price,Styles.align_self_center]}> $ 150, 000</Text>
                </View>
                <Text style={[hostelStyles.landing_details_address]}> 5 Chi-Bem Street LA, Obadore</Text> 
                <View style={[Styles.flex_row, hostelStyles.landing_details_description_cont]}>
                    <View style={[Styles. flex_row, Styles.align_items_center,  hostelStyles.landing_details_description]}>
                        <Image 
                        source={require('../../assets/icons/icon-bed.png')}
                        style={[hostelStyles.landing_details_icon]}
                        />
                        <Text style={[hostelStyles.landing_details_description_text]}> 4 </Text>
                    </View>
                    <View style={[Styles. flex_row, Styles.align_items_center, hostelStyles.landing_details_description]}>
                        <Image 
                        source={require('../../assets/icons/icon-room.png')}
                        style={[hostelStyles.landing_details_icon]}
                        />
                        <Text style={[hostelStyles.landing_details_description_text]}> 2 </Text>
                    </View>
                    <View style={[Styles. flex_row, Styles.align_items_center, hostelStyles.landing_details_description]}>
                        <Image 
                        source={require('../../assets/icons/icon-toilet.png')}
                        style={[hostelStyles.landing_details_icon]}
                        />
                       <Text style={[hostelStyles.landing_details_description_text]}> 1 </Text>
                    </View>
                </View>
            </View>
        )   
    }
}


Description = ()=>(
    <View >
        <Text style={[hostelStyles.section_heading]}> Description </Text>
        <View style={[hostelStyles.section]}>
            <Text style={[hostelStyles.description_text]} numberOfLines={3}>
                Officia consectetur deserunt ex non ut et sint sunt eu ea ullamco anim cupidatat. Id deserunt sit officia tempor exercitation adipisicing voluptate tempor ipsum ut laborum est aute. Nisi ut occaecat cillum voluptate id. Occaecat proident anim fugiat consequat voluptate in labore excepteur duis duis Lorem elit elit non. Qui nisi officia amet ea. Lorem do cupidatat eiusmod aliquip est. Non laborum aliquip exercitation sunt sunt fugiat ut cillum elit.
            </Text>
            <Text style={[hostelStyles.description_more]}> Read More</Text>
        </View>
    </View>
)

Details = ()=>(
    <View>
        <Text style={[hostelStyles.section_heading]}> Details </Text>
        <View style={[hostelStyles.section]}>
          <Detail title = 'Size' detail={'317m'} icon={require('../../assets/icons/icon-size.png')} />
          <Detail title = 'Rooms' detail={'10'} icon={require('../../assets/icons/icon-room.png')} />
          <Detail title = 'Bedrooms' detail={'2'} icon={require('../../assets/icons/icon-bed.png')} />
          <Detail title = 'Bathrooms' detail={'4'} icon={require('../../assets/icons/icon-bath.png')} />
          <Detail title = 'Carspace' detail={'2'} icon={require('../../assets/icons/icon-car.png')} />
          <Detail title = 'Toilet' detail={'1'} icon={require('../../assets/icons/icon-toilet.png')} />
          </View>
    </View>
)

Detail = ({icon, title, detail})=>(
    <View style={[Styles.flex_row, Styles.justify_content_space_between, Styles.align_items_center, hostelStyles.detail]}>
    <View style={[Styles.flex_row , Styles.align_items_center]}>
        <Image 
        source = {icon}
        style = {[hostelStyles.details_icon]}
        />
        <Text  style = {[hostelStyles.details_text]}> {title} </Text>
    </View>
    <Text  style = {[hostelStyles.details_text]}> {detail} </Text>
    </View>
)

Features = ()=>(
    <View>
         <Text style={[hostelStyles.section_heading]}> Additional Features </Text>
         <View style={[hostelStyles.section, Styles.flex_row, Styles.flex_wrap_true, Styles.align_items_center, Styles.justify_content_center]}>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Bedroom </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Tiled </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  New </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Painted </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Scrunted </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Tiled </Text><Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Tiled </Text>
            <Text style={[hostelStyles.features_tag, Styles.align_self_center]}>  Tiled </Text>
         </View>
    </View>
)

Agent = ({navigation})=>(
    <View>
       <Text style={[hostelStyles.section_heading]}> Realtor (Makler) </Text>
       <View style={[hostelStyles.section]}>
       <Text style={[hostelStyles.agent_name]}> Posh </Text>
           <View style={[hostelStyles.agent_detail]}>
          <Text style={[hostelStyles.agent_detail_heading]}> Address </Text>
          <Text style={[hostelStyles.agent_detail_text]}> 33 Avalon Parade, Avalon Beach NSW 2017 </Text>
           </View>
           <View style={[hostelStyles.agent_detail]}>
          <Text style={[hostelStyles.agent_detail_heading]}> Phone </Text>
          <Text style={[hostelStyles.agent_detail_text]}> (02) 9918 6700 </Text>
           </View>
           <View style={[hostelStyles.agent_detail]}>
          <Text style={[hostelStyles.agent_detail_heading]}> Office Hours </Text>
          <Text style={[hostelStyles.agent_detail_text]}> Monday - Friday  8:30 pm - 5:3- pm </Text>
          <Text style={[hostelStyles.agent_detail_text]}> Saturday 9.00am - 1.00pm </Text>
           </View>
           <Button text={'Message'} press_handler={()=>{navigation.navigate('Chat')}}/>
        </View>
       
    </View>
)

SimilarAds = ({navigation})=>(
    <View>
        <Text style={[hostelStyles.section_heading]}> Similar Ads </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[Styles.flex_row, Styles.justify_content_space_evenly,homeStyles.listings_card_content_container]}  style = {[ homeStyles.listings_card_container], hostelStyles.similar_ads_container}>
            <NewListingsCard press_handler={()=>{navigation.navigate('Hostel')}}/>
            <NewListingsCard press_handler={()=>{navigation.navigate('Hostel')}}/>
        </ScrollView>
    </View>
)


FixedBottom = ()=>(
    <View style={[Styles.flex_row, hostelStyles.footer, Styles.align_items_center, Styles.justify_content_space_between]}>
        <Image 
        source = {require('../../assets/images/chat-avatar.png')}
        style= {[hostelStyles.footer_image]}
        />
        <View>
            <Text style={[hostelStyles.agent_name]}> Posh </Text>
            <View style={[Styles.flex_row, Styles.flex_wrap_true]}>
                <View style={[Styles.flex_row, Styles.align_items_center, hostelStyles.footer_icontext_cont]}>
                    <Image
                    source = {require('../../assets/icons/icon-phone.png')}
                    style= {[hostelStyles.footer_icon]}
                    />
                    <Text style={[hostelStyles.footer_text]}> (02) 9918 6700</Text>
                </View>
                <View style={[Styles.flex_row, Styles.align_items_center, hostelStyles.footer_icontext_cont]}>
                <Image
                    source = {require('../../assets/icons/icon-mail.png')}
                    style= {[hostelStyles.footer_icon]}
                    />
                    <Text style={[hostelStyles.footer_text]}> adnan.manturi@magan.com </Text>
                </View>
            </View>
            <Text  style={hostelStyles.footer_button} > Message </Text>
        </View>
    </View>
)

MapContainer = ()=>(
    <View>
         <Text style={[hostelStyles.section_heading]}> Location </Text>
         <View style={[hostelStyles.map_view]}>
        <MapView
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
         </View>
    </View>
)