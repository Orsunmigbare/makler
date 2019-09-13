import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Upload from './Upload'

const UploadStack = createStackNavigator(
    {
        Upload: Upload
    }
)

export default UploadNavigator = createAppContainer(UploadStack)