import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';


const LoginStack = createStackNavigator(
    {
    Login : LoginScreen,
    Signup: SignupScreen
    },
    {
        initialRouteName: 'Login'
    }
)

export default LoginNavigator = createAppContainer(LoginStack)