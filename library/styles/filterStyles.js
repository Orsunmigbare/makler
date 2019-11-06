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

export default filterStyles = {
    parent_container: {
    paddingBottom: normalize(100)
    },
    filter_item : {
        marginTop: normalize(47)
    },
    item_header:{
        fontFamily: 'montserrat',
        fontSize: normalize(15)
    },
    range_slider_track: {
      backgroundColor: "#C4C4C4",
      height: normalize(2)
    },
    range_slider_selected: {
        backgroundColor: '#0f1969',
        height: normalize(3)
    },
    marker_container: {
      marginTop: normalize(-17)
    },
    slider_container: {
        marginTop: normalize(39)
    },
    filter_tag: {
        backgroundColor: '#0f1969e0',
        fontFamily: 'muli-bold',
        color: '#fff',
        borderRadius: normalize(15),
        paddingHorizontal: normalize(17),
        paddingVertical: normalize(5),
        marginRight: normalize(15),
        letterSpacing: normalize(.2)
    },
    filter_tag_container: {
            marginTop: normalize(15)
    },
    filter_input: {
        marginTop: normalize(14)
    },
    picker: {
        marginTop: normalize(30),
        fontFamily: 'muli',
        letterSpacing: normalize(2)
    }

}