import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Profile from './Profile'

const ProfileStack = createStackNavigator(
    {
        Profile: Profile
    }
)

export default ProfileNavigator = createAppContainer(ProfileStack)