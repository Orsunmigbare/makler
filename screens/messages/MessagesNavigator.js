import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Messages from './Messages';
import Chat from './Chat'

const MessagesStack = createStackNavigator(
    {
        Messages: Messages,
        Chat: Chat
    }
    ,{
        initialRouteName: 'Messages',
        defaultNavigationOptions: {
            headerStyle: {
                display: 'none'
            }
        }
    }
)


const  MessagesNavigator = createAppContainer(MessagesStack)

MessagesNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };


export default MessagesNavigator 