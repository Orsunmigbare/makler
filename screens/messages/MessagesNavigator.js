import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Messages from './Messages'

const MessagesStack = createStackNavigator(
    {
        Messages: Messages
    }
)

export default MessagesNavigator = createAppContainer(MessagesStack)