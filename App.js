import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './screens/main/MainNavigator'
import * as Font from 'expo-font'

export default class App extends Component{
  state= {
    resourcesLoaded: false
  }
  async componentDidMount() {
    try{
     await  Font.loadAsync({
        'red-hat-display': require('./assets/fonts/red-hat-display.ttf'),
        'montserrat' : require('./assets/fonts/Montserrat-Medium.ttf'),
        'montserrat-bold' : require('./assets/fonts/Montserrat-Bold.ttf'),
        'muli' : require('./assets/fonts/Muli-Regular.ttf'),
        'muli-bold' : require('./assets/fonts/Muli-Bold.ttf'),
      });
     this.setState({resourcesLoaded: true})
    }
    catch(e){
      console.log(e)
    }
  }
  
  render(){
    return(
      this.state.resourcesLoaded ? 
      <MainNavigator/> : null
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
    justifyContent: 'center',
  },
});
