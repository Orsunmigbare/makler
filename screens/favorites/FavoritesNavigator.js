import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Favorites from './Favorites'

const FavoritesStack = createStackNavigator(
    {
        Favorites: Favorites
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    }
)

export default FavoritesNavigator = createAppContainer(FavoritesStack)