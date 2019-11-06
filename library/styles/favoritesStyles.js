
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

export default messagesStyles = {
    parent_container: {
    paddingHorizontal: normalize(0)
    },
    hostel_card: {
       marginTop: normalize(29)
    },
    popup_overlay: {
        height: SCREEN_HEIGHT,
        widht: SCREEN_WIDTH,
        zIndex: 10,
        flex: 1,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#00000075'
    },
    popup: {

    }
}

