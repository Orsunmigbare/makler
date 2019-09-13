import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Favorites from './Favorites'

const FavoritesStack = createStackNavigator(
    {
        Favorites: Favorites
    }
)

export default FavoritesNavigator = createAppContainer(FavoritesStack)