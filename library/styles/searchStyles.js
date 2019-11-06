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

export default searchStyles = {
    parent_container: {
    paddingBottom: normalize(100)
    },
    section: {
        width: SCREEN_WIDTH,
        marginLeft: normalize(-15),
        marginTop: normalize(21)
    },
    section_heading: {
        fontFamily: 'montserrat',
        fontSize: normalize(15),
        marginLeft: normalize(10),
        marginBottom: normalize(6)
    },
    section_container: {
        backgroundColor: 'white',
        paddingBottom : normalize(124)
    },
    search_item: {
        height: normalize(43),
        borderBottomWidth: normalize(1),
        borderBottomColor: "#bbb6b640",
        paddingHorizontal: normalize(7)
    },
    search_item_icon: {
        height: normalize(30),
        width: normalize(30)
    },
    search_item_text: {
        fontFamily: 'montserrat',
        fontSize: normalize(15),
        marginLeft: normalize(11),
        color: '#5b5555',
        textTransform: 'capitalize'
    },
    search_result_text: {
        marginLeft: normalize(53)
    }

}