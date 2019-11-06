import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import  Home from './Home'
import Filter from './Filter';
import Search from './Search';
import Hostel from './Hostel';
import SearchResults from './SearchResults'

const HomeStack = createStackNavigator(
    {
        Home: Home,
        Filter: Filter,
        Search: Search,
        SearchResults: SearchResults,
        Hostel: Hostel
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    }
)

 export default  HoemNavigator = createAppContainer(HomeStack)