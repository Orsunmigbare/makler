import React, { Component } from 'react';
import { Viev, Text, TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import Styles from '../styles';
import {normalize, colors} from '../styles';


class Input extends Component {
    state = {
        verified : this.props.verified,
        show_passsword: false
    }
    
    toggleShowPassword = ()=>{
        let {show_passsword} = this.state;
        if(show_passsword){
            this.setState({show_passsword: false})
        }else{
            this.setState({show_passsword: true})
        }
    }

    render() {
        let { type, placeholder, label, forgot_password , style, input_style, icon } = this.props, {show_passsword, verified} = this.state;
        let cancel_icon = require('../../assets/icons/cancel-icon.png'),
            check_icon = require('../../assets/icons/check-icon.png'),
            eye_off_icon = require('../../assets/icons/eye-off.png');
            search_icon = require('../../assets/icons/settings.png')

        return (
            <View style={[Styles.flex_column, { width: '100%' , marginBottom: normalize(26)}]}>
                {label ?  <Text style={[Styles.inputLabel]}>
                        {label}
                        </Text>
                        : null}
                <View>
                    { type === 'password' &&
                   <TouchableWithoutFeedback onPress={this.toggleShowPassword}>
                       <View style={[Styles.passwordControl, Styles.align_items_center, Styles.justify_content_center]}> 
                        { show_passsword ? 
                            <Image style={{height: normalize(15), width: normalize(20)}} source={eye_off_icon} /> 
                            :<Text style={[Styles.passwordControlText]}> SHOW </Text> 
                        }
                    </View>
                    </TouchableWithoutFeedback> 
                    }
                    {icon && <Image source={icon} style= {[Styles.inputImage, {position: 'absolute', display: 'flex'}]}/>}
                    {type === 'email' && <Image source={verified ? check_icon: cancel_icon} style= {[Styles.inputImage, {position: 'absolute', display: 'flex'}]}/>}
                    <TextInput style={[Styles.input, type === 'email' && Styles.input_login, type === 'search'  && Styles.search, input_style || null]} placeholder={placeholder} secureTextEntry = {type === 'password' && !show_passsword}/>
                    {type === 'password' && forgot_password ?<View style ={{alignItems: "flex-end", marginTop: normalize(8), fontFamily: 'red-hat-display'}}><Text style={{color: '#867E7E', fontSize: normalize(12)}}>Forgot Password ? </Text></View>: null}           
            </View>   
          </View>
        );
    }
}


export class FilterInput extends Component{
    render(){
        let {placeholder,container_style} = this.props;
        return(
            <View style={[Styles.flex_column, { width: '100%' , marginBottom: normalize(26)}, container_style||null ]}>
                <View>
                   
                   <TouchableWithoutFeedback onPress={this.toggleShowPassword}>
                       <View style={[Styles.passwordControl, Styles.align_items_center, Styles.justify_content_center]}> 
                            <Text style={[Styles.passwordControlText]}> ADD </Text> 
                       </View>
                    </TouchableWithoutFeedback> 
                   <TextInput style={[Styles.input]} placeholder={placeholder}/>
                 </View>   
          </View>
        )
    }
}

export class ChatInput extends Component { 
    render(){
        let {container_style,placeholder} = this.props;
        return(
            <View style={[Styles.flex_column, container_style||null ]}>
                <View>
                   <TextInput style={[Styles.input, Styles.chat_input]} placeholderTextColor={'#00000063'} placeholder={placeholder}/>
                 </View>   
          </View>
        )
    }
}

export default Input;