import {createAppContainer} from 'react-navigation';
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeNavigator from '../home/HomeNavigator';
import FavoritesNavigator from '../favorites/FavoritesNavigator';
import MessagesNavigator from '../messages/MessagesNavigator';
import UploadNavigator from '../upload/UploadNavigator';
import ProfileNavigator from '../profile/ProfileNavigator';
import Icon from '../../library/components/Icon'

const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeNavigator,
        Upload: UploadNavigator,
        Favorites: FavoritesNavigator,
        Messages: MessagesNavigator,
        Profile: ProfileNavigator,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions : ({navigation})=>({
            tabBarIcon: ({focused,horizontal,tintColor})=>{
                const {routeName} = navigation.state;
                let icon 
                switch(routeName){
                    case 'Home':
                    icon = 'home'
                    break;
                    case 'Favorites':
                    icon = 'favorites'
                    break;
                    case "Upload":
                    icon = 'upload'
                    break;
                    case "Messages":
                    icon = 'message'
                    break;
                    case "Profile":
                    icon = 'profile'
                    break;
                }
                return <Icon name={icon} style={{height: 25, width: 25}} color={tintColor}/>
            },
        }),
        navigationOptions : ({navigation})=>{
            return {
                tabBarVisible: false
            }
        },
        tabBarOptions: {
            activeTintColor: '#0F1969',
            inactiveTintColor : "#5e5e5e",
            showLabel: false,
        },
       
    
}
)

export default MainNavigator = createAppContainer(TabNavigator)