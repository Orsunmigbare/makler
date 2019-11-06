import React, { Component } from 'react';
import {Text, TextInput, View, Image, ScrollView, Picker, KeyboardAvoidingView} from 'react-native';
import Styles from '../../library/styles'
import Header from '../../library/components/Header';
import filterStyles from '../../library/styles/filterStyles'
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import SliderMarker from '../../library/components/SliderMarker'
import { FilterInput } from '../../library/components/Input';


class Filter extends Component {
    state = {
        values: [12,25,234,143,1341,1,433]
    }
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }
    multiSliderValuesChange = (values) => {
        console.log(values)
        this.setState({
            values,
        })
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style = {[{flex: 1}]}>
            <Header icon={require('../../assets/icons/arrow-back.png')} title={'Filter'} icon_click_handler = {()=>{this.props.navigation.goBack()}}/>
            <ScrollView contentContainerStyle={[Styles.container, filterStyles.parent_container]}>   
                <View style={[filterStyles.filter_item]}>
                        <Text style={[filterStyles.item_header]}>
                             Price Range
                        </Text>
                        <MultiSlider
                            values={[this.state.values[0], this.state.values[6]]}
                            sliderLength={300}
                            customMarker= {()=>(<SliderMarker/>)}
                            containerStyle = {[filterStyles.slider_container]}
                            trackStyle= {[filterStyles.range_slider_track]}
                            selectedStyle = {[filterStyles.range_slider_selected]}
                            markerContainerStyle = {[filterStyles.marker_container]}
                            onValuesChange={this.multiSliderValuesChange}
                            min={0}
                            max={10}
                            step={1}
                        />
                        
                </View>
                <View style={[filterStyles.filter_item]}>
                        <Text style={[filterStyles.item_header]}>
                             Keywords?
                        </Text>
                        <ScrollView contentContainerStyle={[Styles.flex_row]} style={[ filterStyles.filter_tag_container]}>
                        <Text style={[Styles.hostel_card_tag]}> Borehole </Text>
                        </ScrollView>
                        <FilterInput placeholder={'Eg. Borehole'} container_style={filterStyles.filter_input}/>
                </View>

                <View style={[filterStyles.filter_item]}>
                        <Text style={[filterStyles.item_header]}>
                            Type
                        </Text>
                        <Picker
                        selectedValue={this.state.language}
                        style={filterStyles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="One Bedroom Apartment" value="java" />
                        <Picker.Item label="Two Bedroom Apartment" value="js" />
                        </Picker>
                </View>


                <View style={[filterStyles.filter_item]}>
                        <Text style={[filterStyles.item_header]}>
                             Bus Stop?
                        </Text>
                        <ScrollView contentContainerStyle={[Styles.flex_row]} style={[ filterStyles.filter_tag_container]}>
                        <Text style={[Styles.hostel_card_tag]}> First Gate </Text>
                        </ScrollView>
                        <FilterInput placeholder={'Eg. FirstGate'} container_style={filterStyles.filter_input}/>
                </View>
            </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default Filter;