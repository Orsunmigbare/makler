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

const Styles = {
    container: {
        paddingHorizontal: normalize(15),
        backgroundColor: "#FFFAFA",
    },
    android_padding: {
        marginTop: Platform.OS === 'android' ? 24 : 0
    },
    container_padding_bottom: {
        paddingBottom: normalize(100)
    },
    headingLogo: {
        height: normalize(120),
        width: normalize(120),
    },
   
    flex_column: {
        flexDirection: 'column'
    },
    flex_row: {
        flexDirection: 'row'
    },
    flex_wrap_true: {
        flexWrap: 'wrap'
    },
    flex_wrap_none: {
        flexWrap: 'no-wrap'
    },
    align_items_center: {
        alignItems: 'center'
    },
    align_self_center: {
        alignSelf: 'center'
    },
    align_items_start: {
        align_items: 'flex-start'
    },
    justify_content_space_around: {
        justifyContent: 'space-around'
    },
    justify_content_space_between: {
        justifyContent: 'space-between'
    },
    justify_content_space_evenly: {
        justifyContent: 'space-evenly'
    },
    justify_content_center: {
        justifyContent: 'center'
    },
    text_align_center: {
        textAlign : 'center'
    },
    loginHeading: {
        fontFamily: 'red-hat-display',
        fontSize:  normalize(25),
        marginTop: normalize(17),
    },
    loginDescription: {
        fontSize: normalize(12),
        fontFamily: 'red-hat-display',
        letterSpacing: 0.5,
        color: colors.secondary_color,
        paddingTop: normalize(10)
    },
    header: {
       height: normalize(50),
       width: SCREEN_WIDTH,
       backgroundColor: 'transparent',
       backgroundColor: '#fff',
       marginTop: normalize(25),
       paddingHorizontal: normalize(15)
    },
    tab_drawer: {
        height: normalize(35),
        width: normalize(35),
        
    },
    header_text:{
        color:  '#000000',
        marginLeft: normalize(33),
        fontFamily: 'montserrat',
        fontSize: normalize(16)
     },
     header_input: {
          marginLeft: normalize(35),
          marginRight: normalize(12),
          fontFamily: 'montserrat',
          fontSize: normalize(16),
          flex: 1
     },
     header_input_image: {
        height: normalize(23),
        width: normalize(23), 
        marginTop: normalize(15),
        zIndex: 10
     },
    // input styles
    landing_search : {
        marginTop: normalize(-25)
    },
    input: {
        fontSize: normalize(15),
        width: '100%',
        backgroundColor: '#222222a6',
        height: normalize(50),
        paddingLeft: normalize(23),
        borderRadius: normalize(22),
        fontFamily: 'montserrat',
        paddingRight:normalize(70),
        color: 'white'
    },
    landing_input:{
        backgroundColor: 'white',
        fontFamily: 'montserrat',
        color: 'black'
    },
    inputLabel: {
        fontSize: normalize(16),
        fontFamily: 'red-hat-display',
        letterSpacing: 0.5,
        marginBottom: 7,
        marginLeft: 7
    },
    inputImage: {
        height: normalize(23),
        width: normalize(23), 
        position : 'absolute',
        right: normalize(15),
        top: normalize(15),
        zIndex: 10
    },
    passwordControl: {
        backgroundColor: "#979797",
        height: normalize(30),
        width: normalize(57),
        position : 'absolute',
        right: normalize(12),
        top: normalize(10),
        zIndex: 10,
        borderRadius: normalize(7),
    },
    passwordControlText: {
        color: 'white',
        fontFamily: 'montserrat-bold',
        fontSize: normalize(10),
        letterSpacing: 0.5,
        textAlign: 'center'
    },
    submit_button: {
        backgroundColor: colors.primary_color,
        borderRadius: normalize(25),
        height: normalize(50),
        marginTop: normalize(20)
    },
    butttontText: {
        fontFamily: 'muli-bold',
        fontSize: normalize(17),
        color: 'white', 
        textAlign: 'center'
    },
    auth_button: {
        width: normalize(130),
        height: normalize(45),
        backgroundColor: 'white',
        borderRadius: normalize(20)
    },
    auth_icon: {
        height: normalize(25),
        width: normalize(25)
    },

    // end input styles
    landing_image: {
        height: SCREEN_HEIGHT * 0.29,
        // height: normalize(60),
        width: SCREEN_WIDTH,
    },
    //styles for new listings card
    new_listings_card:{
        height: normalize(220),
        width: normalize(210),
        borderRadius: normalize(13),
        overflow: 'hidden',
        backgroundColor: '#ffff',
        marginRight: normalize(26),
        marginBottom: normalize(5),
    },
    new_listings_card_image : {
        width: '100%',
        height: normalize(126)
    },
    image_overlay: {
        height: '100%',
        width: '100%',
        backgroundColor: '#0f196959'
    },
    price_tag: {
        fontSize: 17,
        fontFamily: 'muli-bold'
    },
    listings_card_data: {
       marginTop: normalize(8),
       paddingHorizontal: normalize(12)
    },
    listings_card_data_avatar: {
        height: normalize(20),
        width: normalize(20),
    },
    listings_card_data_text: {
        fontSize: normalize(11),
        fontFamily: 'muli',
        color :  '#716F6F',
        marginTop: normalize(8),
        marginLeft: normalize(12)
    },
     //end styles for new listings card

    //  styles for hostel card
    hostel_card: {
            height: normalize(303),
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: normalize(13),
            overflow: 'hidden',
            marginTop: normalize(16)
    },
    hostel_card_image : {
        height: normalize(150),
        width: '100%',
    },
    hostel_card_favorite: {
        position: 'absolute',
        zIndex: 5,
        right: normalize(16),
        top: normalize(18),
        height: normalize(24.55),
        width: normalize(27.73)
    },
    hostel_card_tag: {
        backgroundColor: '#0f1969e0',
        fontFamily: 'muli-bold',
        color: '#fff',
        borderRadius: normalize(15),
        paddingHorizontal: normalize(17),
        paddingVertical: normalize(5),
        marginRight: normalize(15),
        letterSpacing: normalize(.2)
    },
    hostel_card_tag_container: {
        marginTop: normalize(15),
        marginLeft: normalize(12),
        
    },
    hostel_card_avatar_container: {
        paddingTop: normalize(19),
        paddingHorizontal: normalize(16)
    },
    hostel_card_avatar:{
        height: normalize(33),
        width: normalize(33)
    },
    hostel_card_avatar_name:{
        fontSize: normalize(11),
        fontFamily: 'muli',
        color: '#716F6F',
        marginRight: normalize(12)
    },
    hostel_card_data_text: {
        fontSize: normalize(12),
        fontFamily: 'muli',
        color :  '#000',
        marginTop: normalize(5),
        marginLeft: normalize(12)
    },

    //  messages styles
    chat_item: {
        borderBottomWidth: normalize(1),
        borderBottomColor: '#d4d4d4',
        backgroundColor: "#fff",
        paddingVertical: normalize(14),
        paddingHorizontal : normalize(14)
    },
    chat_image_container : {
        height: normalize(50),
        width: normalize(50),
        marginRight: normalize(14)
    }, 
    chat_item_avatar: {
        height: normalize(50),
        width: normalize(50),
        borderRadius: normalize(25)
    },
    chat_item_active: {
        position: 'absolute',
        height: normalize(5),
        width: normalize(5),
        bottom: 0,
        right: 0
    },
    chat_item_name : {
        fontFamily: 'muli',
        fontSize: normalize(15),
        marginBottom: normalize(5)
    },
    chat_item_message: {
        fontFamily: 'muli',
        fontSize: normalize(11),
        color: "#a0a0a0"
    },
    chat_item_time: {
        fontFamily : 'muli',
        fontSize: normalize(11),
        color: "#a0a0a0",
        flex: .2
    },
    chat_item_message_container: {
        marginLeft: normalize(24)
    },
    // message styles
    incoming_message_avatar: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: normalize(33.5),
        width: normalize(33.5)
    },
    incoming_messages_container: {
        paddingLeft: normalize(55),
        marginTop: normalize(28),
        marginRight: normalize(50)
    },
    incoming_message:{
        
        paddingHorizontal: normalize(27),
        paddingVertical: normalize(17),
        marginBottom: normalize(8),
        alignSelf: 'flex-start',
        // borderRadius: normalize(20),
        borderBottomRightRadius: normalize(20),
        borderTopRightRadius: normalize(20),
        borderTopLeftRadius: normalize(20),
        borderBottomLeftRadius: 0,
    },
    incoming_message_text:{
        fontFamily: 'muli',
        fontSize: normalize(11),
        color: '#fff'
    },
    outgoing_messages_container: {
        marginTop: normalize(28),
        marginLeft: normalize(50)
    },
    outgoing_message: {
        paddingHorizontal: normalize(27),
        paddingVertical: normalize(17),
        marginBottom: normalize(8),
        alignSelf: 'flex-end',
        // borderRadius: normalize(20),
        borderBottomRightRadius: 0, 
        borderBottomLeftRadius: normalize(20), 
        borderTopRightRadius: normalize(20),
        borderTopLeftRadius: normalize(20)
       
    },
    outgoing_message_text: {
        fontFamily: 'muli',
        fontSize: normalize(11),
        color: '#030303'
    },
    chat_input: {
        fontSize : normalize(11),
        fontFamily: 'muli',
        paddingVertical: normalize(12),
        height: normalize(38),
        paddingRight: normalize(20)
    },
    modal_popup : {
        backgroundColor: 'white',
        width: normalize(245),
        paddingVertical: normalize(20),
        borderRadius: normalize(10),
        alignSelf: 'center'
    },
    modal_header: {
        fontFamily: 'muli',
        fontSize: normalize(15),
        marginBottom: normalize(43),
        paddingHorizontal: normalize(20),
        textAlign: 'center'
    },
    modal_action:{
        fontSize: normalize(17),
        paddingVertical: normalize(11),
        borderTopWidth: 1,
        borderColor: '#a9a9a9',
        width: '100%',
        textAlign : 'center',
        paddingHorizontal: normalize(20),
    },
    modal_approve:{
        fontFamily: 'muli-bold',
        color: '#0F1969',
          width: '100%',
    },
    modal_dismiss: {
        fontFamily: 'muli',
        color: '#000',
    },
    // hostel carousel 
    hostel_carousel:{

    },
    hostel_carousel_image: {
        height: SCREEN_HEIGHT * 0.35,
        width: SCREEN_WIDTH,
    }

}

export default Styles;