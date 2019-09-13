import React, { Component } from 'react';
import {View, Image, Text, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableNativeFeedback} from 'react-native'
import Styles from '../../library/styles';
import Input from '../../library/components/Input'
import Button from '../../library/components/Button'
import AuthButton from '../../library/components/AuthButton'
import {normalize} from  '../../library/styles';

class LoginScreen extends Component {
    state = {
        context: 'login'
    }
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }

    toggleContext = ()=>{
        let {context} = this.state;
            if(context === 'login'){
                this.setState({context: 'signup'})
            }else{
                this.setState({context: 'login'})
            }
    }
    render() { 
        let {context} = this.state;
        return (
            <KeyboardAvoidingView behavior='padding'  style = {[{flex: 1}]}>
                <ScrollView contentContainerStyle={[Styles.justify_content_center,Styles.align_items_center]} style={[Styles.flex_column, Styles.margin_top, {flex: 1, paddingTop: normalize(6)}, Styles.container]}>
                    
                    <Image source={require('../../assets/logo.png')} style={[Styles.headingLogo]}/>
                    
                    <Text style={[Styles.loginHeading]}> {context === 'signup'? 'Sign Up!' : 'Welcome!'}</Text>
                    
                    <Text style={[Styles.loginDescription]}> {context === 'login'?  'Sign In Or Register to Locate Your Favorite Hostel': 'Create An Account To Get Started'}</Text> 
                    
                    
                    <View style={{flex: 1., width: '100%', paddingVertical: normalize(50)}}>
                        
                        {context === 'signup' && <Input placeholder = 'Enter a Username' type='email'  label='Username' selectionColor='#5oa1ff'/>}
                       
                        <Input placeholder = 'Your Email' type='email' label='Email' selectionColor='#5oa1ff' />
                       
                        <Input placeholder = 'Your Password' type='password' forgot_password = {context === 'login'} label='Password' selectionColor='#5oa1ff'/>
                       
                        {context === 'signup' && <Input placeholder = 'Your Password'  forgot_password = {context === 'login'} type='password' label='Password Again' selectionColor='#5oa1ff'/>}
                       
                        <TouchableNativeFeedback><Button text={context === 'signup' ? 'Sign Up' : 'Login'}/></TouchableNativeFeedback>
                       
                        {context === 'login'  && <Text style={[Styles.text_align_center, {marginTop: normalize(28), fontSize: normalize(17)}]}> OR </Text> }
                        
                        { context === 'login' &&
                         <View style= {[Styles.justify_content_space_around, Styles.flex_row, {marginTop: normalize(34)}]}> 
                            <TouchableNativeFeedback><AuthButton icon = {require('../../assets/icons/google.png')}/></TouchableNativeFeedback> 
                            <AuthButton icon = {require('../../assets/icons/facebook.png')}/>
                        </View>
                       
                       }
                    
                        <TouchableWithoutFeedback onPress={this.toggleContext}><Text style={[Styles.text_align_center, {marginTop: normalize(34), color: '#786D6D', fontSize: normalize(13)}]}>{context === 'login' ? 'New User ?' : 'Already Have an Account ?'}  <Text style={{color: '#0f1969'}}> {context === 'login' ?  'Sign Up': 'Login'}</Text> </Text></TouchableWithoutFeedback>
                    </View>
                    
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default LoginScreen; 