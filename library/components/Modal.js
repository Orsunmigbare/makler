import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, ImageBackground, Button} from 'react-native';
import Styles from '../styles'
import {normalize, colors} from '../styles';
import Modal from "react-native-modal";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

class PopupModal extends Component {

render(){
    return(
        <Modal  isVisible={false}>
          <View style={[Styles.modal, Styles.justify_content_center, Styles.modal_popup]}>
            <Text style={[Styles.modal_header]}>Sure to Remove From Favorites ? </Text>
            <TouchableWithoutFeedback>
                <Text style={[Styles.modal_action, Styles.modal_approve]}> Remove </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback> 
                <Text style={[Styles.modal_action, Styles.modal_dismiss]}>Cancel</Text> 
            </TouchableWithoutFeedback>
            {/* <Button title="Hide modal" onPress={this.toggleModal} /> */}
          </View>
        </Modal>
    )
}
}


export default PopupModal