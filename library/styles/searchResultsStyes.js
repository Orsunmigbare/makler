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
    paddingBottom: normalize(100)
    },
    container_heading: {
        fontFamily: 'montserrat',
        fontSize: normalize(15),
        marginTop: normalize(8)
    },
    result: {
        marginTop: normalize(29)
    }
}
