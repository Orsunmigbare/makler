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

export default homeStyles = {
    parent_container: {
    paddingBottom: normalize(250),
    },
    search: {
        backgroundColor: 'white',
        width: '95%',
        alignSelf: 'center',
        marginHorizontal: normalize(15),
        marginTop: normalize(-35),
        height: normalize(50),
        paddingLeft: normalize(23),
        borderRadius: normalize(22),
        fontFamily: 'montserrat',
        color: '#a09a9a'
    },
    landing_container: {
        position: 'absolute',
        width: SCREEN_WIDTH
    },
    search_icon: {
        height: normalize(30),
        width: normalize(30)
    },
    settings_icon: {
        height: normalize(20),
        width: normalize(20),
        marginRight: normalize(25)
    },
    search_text: {
        color: '#a09a9a',
        fontSize: normalize(15),
        fontFamily: 'montserrat'
    },
    section: {
       marginTop: normalize(23)
    },
    section_heading: {
        fontSize: normalize(15),
        fontFamily: 'montserrat'
    },
    listings_card_content_container: {
        marginTop: normalize(16),
        
    },
    listings_card_container: {
        width: SCREEN_WIDTH,
        marginLeft: normalize(-15),
        paddingLeft: normalize(11),
    
    }
}