import { Provider } from 'react-redux';
import Login from './src/components/Login';
import store from './src/helpers/store';

import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen'
import SignUpScreen from './src/components/SignUpScreen'
import Bazi from './src/components/bazi'
import ProfileScreen from './src/components/ProfileScreen'
import {Text} from 'react-native'
console.disableYellowBox = true;
export default class App extends Component {
  
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     s: true
  //   }
  // }
  // componentDidMount(){
  //   setInterval(() =>{
  //     this.setState({s:!this.state.s});
  //   },2000)
  // }

  render() {
  // return (<Bazi>{this.state.s ? <Text>How Are You?</Text> : <Text>Hello</Text>}</Bazi>);
  return (
    <Provider store={store}>
      <ProfileScreen/>
    </Provider>
  );
  }
}
