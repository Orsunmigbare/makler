import React, { Component } from 'react';
import { View, Image, Text, ScrollView, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, TouchableNativeFeedback } from 'react-native'
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { FACEBOOK_APP_ID } from 'react-native-dotenv'
import Styles from '../../library/styles';
import Input from '../../library/components/Input'
import Button from '../../library/components/Button'
import AuthButton from '../../library/components/AuthButton'
import { normalize } from '../../library/styles';

class LoginScreen extends Component {
    state = {
        context: 'login'
    }
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }
    }

    toggleContext = () => {
        let { context } = this.state;
        if (context === 'login') {
            this.setState({ context: 'signup' })
        } else {
            this.setState({ context: 'login' })
        }
    }
    authGoogle = async () => {
        try {
            console.log('----> Button clicked')
            const { type, accessToken, user } = await Google.logInAsync(config);
            if (type === 'success') {
                // Then you can use the Google REST API
                let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                    headers: { Authorization: `Bearer ${accessToken}` },
                });
            }
        } catch (e) {
            console.log(e)
        }

    }

    authFacebook = async () => {
        try {
            console.log(FACEBOOK_APP_ID)
            const {
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
                permissions: ['public_profile', 'email'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?fields=id,first_name,last_name,email,picture&access_token=${token}`);
                const { email, first_name, last_name, picture: { data: {url: profile_picture}} } = (await response.json())
                
            } else {
                // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }
    
    render() {
        let { context } = this.state;
        return (
            <KeyboardAvoidingView behavior='padding' style={[{ flex: 1 }]}>
                <ScrollView contentContainerStyle={[Styles.justify_content_center, Styles.align_items_center]} style={[Styles.flex_column, Styles.margin_top, { flex: 1, paddingTop: normalize(6) }, Styles.container]}>

                    <Image source={require('../../assets/logo.png')} style={[Styles.headingLogo]} />

                    <Text style={[Styles.loginHeading]}> {context === 'signup' ? 'Sign Up!' : 'Welcome!'}</Text>

                    <Text style={[Styles.loginDescription]}> {context === 'login' ? 'Sign In Or Register to Locate Your Favorite Hostel' : 'Create An Account To Get Started'}</Text>


                    <View style={{ flex: 1., width: '100%', paddingVertical: normalize(50) }}>

                        {context === 'signup' && <Input placeholder='Enter a Username' type='email' label='Username' selectionColor='#5oa1ff' />}

                        <Input placeholder='Your Email' type='email' label='Email' selectionColor='#5oa1ff' />

                        <Input placeholder='Your Password' type='password' forgot_password={context === 'login'} label='Password' selectionColor='#5oa1ff' />

                        {context === 'signup' && <Input placeholder='Your Password' forgot_password={context === 'login'} type='password' label='Password Again' selectionColor='#5oa1ff' />}

                        <TouchableNativeFeedback><Button text={context === 'signup' ? 'Sign Up' : 'Login'} /></TouchableNativeFeedback>

                        {context === 'login' && <Text style={[Styles.text_align_center, { marginTop: normalize(28), fontSize: normalize(17) }]}> OR </Text>}

                        {context === 'login' &&
                            <View style={[Styles.justify_content_space_around, Styles.flex_row, { marginTop: normalize(34) }]}>
                                <TouchableOpacity onPress={this.authGoogle} >
                                    <AuthButton icon={require('../../assets/icons/google.png')} />
                                </TouchableOpacity >
                                <TouchableOpacity onPress={this.authFacebook} >
                                    <AuthButton icon={require('../../assets/icons/facebook.png')} />
                                </TouchableOpacity>
                            </View>

                        }

                        <TouchableWithoutFeedback ><Text style={[Styles.text_align_center, { marginTop: normalize(34), color: '#786D6D', fontSize: normalize(13) }]}>{context === 'login' ? 'New User ?' : 'Already Have an Account ?'}  <Text style={{ color: '#0f1969' }}> {context === 'login' ? 'Sign Up' : 'Login'}</Text> </Text></TouchableWithoutFeedback>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default LoginScreen; 