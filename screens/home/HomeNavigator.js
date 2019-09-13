import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import  Home from './Home'
import Filter from './Filter';

const HomeStack = createStackNavigator(
    {
        Home: Home,
        Filter: Filter
    },
    {
        initialRouteName: 'Filter'
    }
)

 export default  HoemNavigator = createAppContainer(HomeStack)