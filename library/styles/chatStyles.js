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

const chatStyles = {
    container: {
        paddingHorizontal: normalize(15),
        backgroundColor: "#FFFAFA",
        marginTop: Platform.OS === 'android' ? 24 : 0
    },
    chats_container: {
        marginTop: normalize(0)
    },
    sender_avatar: {
        height: normalize(33.5),
        width: normalize(33.5)
    },
    camera_icon : {
        height: normalize(17.5),
        width: normalize(21.88)
    },
    send_message_container: {
        paddingVertical: normalize(22),
        paddingHorizontal: normalize(18),
        height: normalize(82)
    },
    chat_input_container: {
        flex: 1,
        marginHorizontal: normalize(27)
    }
}

export default chatStyles