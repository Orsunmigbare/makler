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
    chat_list_container: {
        width: SCREEN_WIDTH,
        paddingBottom: normalize(100),
    }
}

