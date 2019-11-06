import { Dimensions, Platform, PixelRatio, } from 'react-native';

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(size))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(size)) 
    }
}

export const colors = {
    primary_color: '#0f1969',
    secondary_color: '#7a7a7a'
}


const hostelStyles = {
    container: {
        backgroundColor: '#F0EFEF',
        padding: 0
    },
    content_container: {
        paddingBottom: normalize(160)
    },
    landing_details:{
        backgroundColor: '#fff',
        width: SCREEN_WIDTH * .9,
        alignSelf: 'center',
        marginTop: normalize(-50)
    },
    landing_details_icon: {
        height: normalize(15),
        width: normalize(15),
        marginRight: normalize(10)
    },
    landing_details_new : {
        backgroundColor: '#3342B4',
        fontFamily: 'muli-bold',
        fontSize: normalize(14),
        paddingHorizontal: normalize(16),
        paddingVertical: normalize(7),
        color: '#fff'
    },
    landing_details_price : {
      fontFamily: 'muli-bold',
      fontSize: normalize(17),
      paddingTop: normalize(4),
      marginLeft: normalize(7)
    },
    landing_details_address :{
        fontFamily: 'muli',
        fontSize: normalize(12),
        marginBottom: normalize(13),
        paddingLeft: normalize(10),
        color: '#716F6F'
    },
    landing_details_description_text: {
        fontFamily: 'muli',
        fontSize: normalize(15),
        color: '#716F6F'
    },
    landing_details_description_cont :{
        paddingLeft : normalize(15),
        marginBottom: normalize(14)
    },
    landing_details_new_price_cont : {
        marginBottom: normalize(14),
       
    },
    landing_details_description: {
        marginRight: normalize(12),
    },
    landing_favorites_icon: {
        height: normalize(29),
        width: normalize(30),
    },
    landing_favorites_cont: {
        padding: normalize(10),
        position: 'absolute',
        right: 20,
        top: -20,
        backgroundColor: '#fff',
        borderRadius: normalize(30)
    },
    section_heading: {
        fontFamily: 'montserrat',
        fontSize : normalize(11),
        paddingVertical: normalize(11),
        paddingLeft : normalize(20)
    }, 
    section: {
        width: '100%',
        backgroundColor : '#fff',
        paddingVertical: normalize(19),
        paddingLeft: normalize(24),
        paddingRight : normalize(37),
    },
    description_text :{
        fontFamily : 'muli',
        fontSize : normalize(11),
        lineHeight : normalize(17)
    },
    description_more : {
        fontFamily : 'muli',
        fontSize : normalize(14),
        color : '#0f1969',
        textAlign : 'center',
        paddingTop: normalize(15),
    },
    details_icon : {
        height: normalize(15),
        width: normalize(15)
    },
    details_text : {
        fontFamily: 'muli',
        fontSize: normalize(16),
        color : '#665D5D',
        marginLeft: normalize(17)
    },
    detail: {
        marginBottom:  normalize(17)
    },
    features_tag: {
        backgroundColor: '#0f1969',
        color: '#fff',
        borderRadius: normalize(20),
        paddingHorizontal: normalize(17),
        paddingVertical: normalize(7),
        letterSpacing: normalize(.2),
        margin: normalize(8)
    },
    agent_name : {
        fontSize: normalize(17),
        fontFamily: 'muli-bold',
        marginBottom: normalize(14)
    },
    agent_detail : {
        marginBottom: normalize(11)
    },
    agent_detail_heading: {
        fontFamily: 'muli-bold',
        fontSize: normalize(15),
        color: '#665D5D'
    },
    agent_detail_text : {
        fontFamily: 'muli',
        fontSize: normalize(15),
        color: '#665D5D'
    },
    similar_ads_container : {
        paddingLeft: normalize(23)
    },
    footer: {
        backgroundColor: '#fff',
        paddingVertical: normalize(17),
        paddingHorizontal: normalize(11),
        paddingBottom: normalize(43),
        position: 'absolute',
        bottom: -250,
        width: '100%'
    },
    footer_image : {
        height: normalize(70),
        width: normalize(70)
    },
    footer_icon :{
        height: normalize(12),
        width: normalize(12),
        marginRight: normalize(3)
    },
    footer_icontext_cont: {
        marginRight: normalize(10)
    },
    footer_text: {
        fontSize: normalize(10),
        color: '#665D5D'
    },
    footer_button : {
        backgroundColor: colors.primary_color,
        borderRadius: normalize(25),
        paddingVertical: normalize(10),
        marginTop: normalize(20),
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'muli-bold'
    },
    map_view : {
        height : normalize(240),
        width: '100%',
        backgroundColor: 'white'
    }
}

export default hostelStyles