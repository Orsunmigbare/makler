import React, { Component } from 'react';
import {Text,View, Image, TouchableWithoutFeedback, ScrollView, Animated, Dimensions, PanResponder} from 'react-native';
import Styles from '../../library/styles';
import LandingImage from '../../library/components/LandingImage';
import homeStyles from '../../library/styles/homeStyles.js';
import NewListingsCard from '../../library/components/NewListingsCard';
import HostelCard from '../../library/components/HostelCard';
import Animations from '../../library/animations'
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');


class Home extends Component {
    static navigationOptions = {
        headerStyle :{
            display: 'none'
        }
    }

    translateY =  new Animated.Value(0)

    panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt,gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt,gestureState) => true,
        onPanResponderGrant: (evt, {gestureState}) =>{
           
        },
        onPanResponderMove: (evt,{dy})=>{
         if (this.state.searchBarAnimatedToTop) return
         dy < -SCREEN_HEIGHT * .20 || dy > 0  ? null : this.translateY.setValue(dy);
        },
        onPanResponderTerminationRequest: (evt, gestureState) => true,
        onPanResponderRelease: (evt, {dx,dy,vy}) =>{
            if(this.state.searchBarAnimatedToTop) return
           if(dy<= -SCREEN_HEIGHT * .07 || vy <-4){
               Animated.spring(
                   this.translateY,
                   {
                       toValue : -SCREEN_HEIGHT * .19,
                       bounciness: 5,
                   }
               ).start(()=>{this.setState({searchBarAnimatedToTop: true})})
           }else {
            Animated.spring(
                this.translateY,
                {
                    toValue : 0,
                    bounciness: 7,
                }
            ).start(()=>{this.setState({searchBarAnimatedToTop: false})})
           }
           console.log(dy,vy, -SCREEN_HEIGHT *   .02)
        }, 
        onPanResponderTerminate: (evt, gestureState) => {
        }, 
        onShouldBlockNativeResponder: (evt, gestureState)=>{
          return true
        }
    })

    state = {
        scrollValue: new Animated.Value(0),
        searchBarAnimatedToTop : false,
        ScrollViewAtTop: false
    }

    render(){
        let {searchBarAnimatedToTop} = this.state;
        console.log(searchBarAnimatedToTop)
        let containerTranslateValue = this.translateY.interpolate({
            inputRange: [-SCREEN_HEIGHT * .20,0],
            outputRange: [  SCREEN_HEIGHT * .12, SCREEN_HEIGHT * .32]
        }),
        searchbarRadius = this.translateY.interpolate({
            inputRange: [-SCREEN_HEIGHT * .20,0],
            outputRange: [ 5, 22]
        }),
        searchbarWidth = this.translateY.interpolate({
            inputRange: [-SCREEN_HEIGHT * .20,0],
            outputRange: [SCREEN_WIDTH * .99 + 2, SCREEN_WIDTH * .95]
        })
        return (
            <> 
            <Animated.View style={[homeStyles.landing_container,{transform: [{translateY: this.translateY}]}]}>
            <LandingImage />
            <Animated.View elevation = {4} style={[homeStyles.search, Styles.justify_content_space_between, Styles.flex_row, Styles.align_items_center,{borderRadius: searchbarRadius, width: searchbarWidth}]}> 
            <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Search')}}>                                                   
                <View style={[Styles.flex_row, Styles.align_items_center]}>
                        <Image style = {[homeStyles.search_icon]} source={require('../../assets/icons/search.png')} />
                       <Text style={homeStyles.search_text}> Search </Text>
                </View>
            </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>{this.props.navigation.navigate('Filter')}}><Image style = {[homeStyles.settings_icon]} source={require('../../assets/icons/settings.png')} /></TouchableWithoutFeedback>
             </Animated.View>
            </Animated.View>
           
            <Animated.ScrollView
            scrollEnabled={searchBarAnimatedToTop}
            contentContainerStyle={[Styles.container, homeStyles.parent_container,]}
            style = {[{transform: [{translateY:  containerTranslateValue}], paddingBottom: 800}]}
            {...this.panResponder.panHandlers}
            onScrollEndDrag = {(({nativeEvent: {contentOffset: {y}}})=>{
               let {ScrollViewAtTop} = this.state;
                if(y === 0 && !ScrollViewAtTop){
                    this.setState({ScrollViewAtTop : true})
                }
                if(y==0 && ScrollViewAtTop){
                    Animated.spring(
                        this.translateY,
                        {
                            toValue : 0,
                            bounciness : 7
                        }
                    ).start(this.setState({searchBarAnimatedToTop: false}))
                }
            })}
            >
                <View style={[homeStyles.section]}>
                    <Text style={[homeStyles.section_heading]}> 20 New Listings</Text>
                    <ScrollView scrollEnabled={searchBarAnimatedToTop} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={[Styles.flex_row, Styles.justify_content_space_evenly,homeStyles.listings_card_content_container]}  style = {[ homeStyles.listings_card_container]}>
                        <NewListingsCard press_handler = {()=>{this.props.navigation.navigate('Hostel')}}/>
                        <NewListingsCard  press_handler = {()=>{this.props.navigation.navigate('Hostel')}}/>
                    </ScrollView>
                </View>

                <View style={[homeStyles.section]}>
                    <Text style={[homeStyles.section_heading]}> All </Text>
                    <HostelCard press_handler = {()=>{this.props.navigation.navigate('Hostel')}}/>
                    <HostelCard press_handler = {()=>{this.props.navigation.navigate('Hostel')}}/>
                   </View>
            </Animated.ScrollView>
            </>
        );
    }
}

export default Home;